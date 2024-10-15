'use client';

import { useMutation } from 'convex/react';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { AppRoute } from '@/constants';
import { api } from '@/convex/_generated/api';

export const NewChat = () => {
  const router = useRouter();
  const createChat = useMutation(api.chats.createChat);

  const handleCreateChat = () => {
    createChat().then((chatId) => router.push(`${AppRoute.CHAT}/${chatId}`));
  };

  return (
    <div
      className="border-gray-700 border rounded-lg px-5 py-3 text-sm flex items-center justify-center space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out"
      role="button"
      onClick={handleCreateChat}
    >
      <Plus className="h-4 w-4" />
      <span>New Chat</span>
    </div>
  );
};
