import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

const schema = defineSchema({
  chats: defineTable({
    userId: v.string(),
  }).index('by_user', ['userId']),
  messages: defineTable({
    avatar: v.optional(v.string()),
    chatId: v.id('chats'),
    isChatGPT: v.boolean(),
    text: v.string(),
  }).index('by_chat', ['chatId']),
});

export default schema;
