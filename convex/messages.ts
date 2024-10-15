import { v } from 'convex/values';

import { mutation, query } from './_generated/server';

export const createMessage = mutation({
  args: {
    avatar: v.optional(v.string()),
    chatId: v.id('chats'),
    isChatGPT: v.boolean(),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const identity = await ctx.auth.getUserIdentity();

      if (!identity) {
        throw new Error('Not authenticated');
      }

      const message = await ctx.db.insert('messages', {
        avatar: args.avatar,
        chatId: args.chatId,
        isChatGPT: args.isChatGPT,
        text: args.text,
      });

      return message;
    } catch (err) {
      console.log(err);
    }
  },
});

export const getMessages = query({
  args: { chatId: v.id('chats') },
  handler: async (ctx, args) => {
    try {
      const identity = await ctx.auth.getUserIdentity();

      if (!identity) {
        throw new Error('Not authenticated');
      }

      const messages = await ctx.db
        .query('messages')
        .withIndex('by_chat', (q) => q.eq('chatId', args.chatId))
        .collect();

      return messages;
    } catch (err) {
      console.log(err);
    }
  },
});
