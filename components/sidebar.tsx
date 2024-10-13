'use client';

import { SignOutButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';

import { useChats } from '@/hooks/use-chats';

import { ChatRow } from './chat-row';
import { NewChat } from './new-chat';

export const Sidebar = () => {
  const chats = useChats((state) => state.chats);

  return (
    <div className="bg-[#202123] max-w-xs md:min-w-[20rem]">
      <div className="p-2 pb-5 flex flex-col h-full">
        <div className="flex flex-col gap-2 flex-1">
          <NewChat />
          <div className="w-full bg-gray-700 h-[1px] my-2" />
          <div className="flex flex-col gap-2 overflow-y-auto pb-2">
            {chats.map((chat) => (
              <ChatRow key={chat.id} chat={chat} />
            ))}
          </div>
        </div>
        <SignOutButton>
          <div
            className="rounded-lg px-5 py-3 text-sm flex space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out items-center justify-center bg-gray-700/50"
            role="button"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </div>
        </SignOutButton>
      </div>
    </div>
  );
};
