'use client';

import { useChats } from '@/hooks/use-chats';

import { ChatMessage } from './chat-message';

interface ChatProps {
  chatId: string;
}

export const Chat = ({ chatId }: ChatProps) => {
  const chat = useChats((state) => state.getChat(chatId));

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {chat?.messages.map((message) => <ChatMessage key={message.id} message={message} />)}
    </div>
  );
};
