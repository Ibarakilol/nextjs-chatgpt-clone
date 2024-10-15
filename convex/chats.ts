import { v } from 'convex/values';

import { Id } from './_generated/dataModel';
import { mutation, query } from './_generated/server';

export const createChat = mutation(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) {
    throw new Error('Not authenticated');
  }

  const userId = identity.subject;

  const chat = await ctx.db.insert('chats', {
    userId,
  });

  return chat;
});

export const deleteChat = mutation({
  args: { id: v.id('chats') },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error('Not authenticated');
    }

    const userId = identity.subject;

    const existingChat = await ctx.db.get(args.id);

    if (!existingChat) {
      throw new Error('Not found');
    }

    if (existingChat.userId !== userId) {
      throw new Error('Unauthorized');
    }

    const deleteChatMessages = async (chatId: Id<'chats'>) => {
      const messages = await ctx.db
        .query('messages')
        .withIndex('by_chat', (q) => q.eq('chatId', chatId))
        .collect();

      for (const message of messages) {
        await ctx.db.delete(message._id);
      }
    };

    await ctx.db.delete(args.id);
    await deleteChatMessages(args.id);
  },
});

export const getChats = query(async (ctx) => {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) {
    throw new Error('Not authenticated');
  }

  const userId = identity.subject;

  const chats = await ctx.db
    .query('chats')
    .withIndex('by_user', (q) => q.eq('userId', userId))
    .collect();

  return chats;
});
