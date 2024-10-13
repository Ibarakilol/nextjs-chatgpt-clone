'use client';

import { MouseEvent, useEffect, useState } from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useChats } from '@/hooks/use-chats';
import { AppRoute } from '@/constants';
import { cn } from '@/lib/utils';
import { IChat } from '@/interfaces';

interface ChatRowProps {
  chat: IChat;
}

export const ChatRow = ({ chat }: ChatRowProps) => {
  const { id: chatId, messages } = chat;
  const router = useRouter();
  const pathname = usePathname();
  const [activeChat, setActiveChat] = useState<boolean>(false);
  const removeChat = useChats((state) => state.removeChat);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    setActiveChat(pathname.includes(chatId));
  }, [chatId, pathname]);

  const handleRemoveChat = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();

    removeChat(chatId);
    router.push(AppRoute.ROOT);
  };

  return (
    <Link
      className={cn(
        'rounded-lg px-5 py-3 text-sm flex items-center justify-center space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out',
        activeChat && 'bg-gray-700/50'
      )}
      href={`${AppRoute.CHAT}/${chatId}`}
    >
      <MessageSquare className="h-5 w-5" />
      <span className="flex-1 hidden md:inline-block truncate">
        {messages[messages.length - 1]?.text || 'New Chat'}
      </span>
      <Trash2
        className="h-5 w-5 text-gray-700 hover:text-red-700"
        role="button"
        onClick={handleRemoveChat}
      />
    </Link>
  );
};
