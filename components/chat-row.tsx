'use client';

import { MouseEvent, useEffect, useState } from 'react';
import { useMutation } from 'convex/react';
import { MessageSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { AppRoute } from '@/constants';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';

interface ChatRowProps {
  chatId: Id<'chats'>;
}

export const ChatRow = ({ chatId }: ChatRowProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeChat, setActiveChat] = useState<boolean>(false);
  const deleteChat = useMutation(api.chats.deleteChat);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    setActiveChat(pathname.includes(chatId));
  }, [chatId, pathname]);

  const handleRemoveChat = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();

    deleteChat({ id: chatId }).then(() => router.push(AppRoute.ROOT));
  };

  return (
    <Link
      className={cn(
        'rounded-lg px-5 py-3 text-sm flex w-full items-center justify-center space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out',
        activeChat && 'bg-gray-700/50'
      )}
      href={`${AppRoute.CHAT}/${chatId}`}
    >
      <MessageSquare className="h-5 w-5" />
      <span className="flex-1 hidden md:inline-block truncate">New Chat</span>
      <Trash2
        className="h-5 w-5 text-gray-700 hover:text-red-700"
        role="button"
        onClick={handleRemoveChat}
      />
    </Link>
  );
};
