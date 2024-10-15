'use client';

import { useQuery } from 'convex/react';

import { Spinner } from '@/components/spinner';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

import { ChatMessage } from './chat-message';

interface ChatProps {
  chatId: Id<'chats'>;
}

export const Chat = ({ chatId }: ChatProps) => {
  const messages = useQuery(api.messages.getMessages, { chatId });

  if (!messages) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages.map((message) => (
        <ChatMessage key={message._id} message={message} />
      ))}
    </div>
  );
};
