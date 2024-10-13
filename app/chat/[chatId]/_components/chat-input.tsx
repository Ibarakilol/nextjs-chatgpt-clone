'use client';

import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useUser } from '@clerk/clerk-react';
import { Send } from 'lucide-react';

import { useChats } from '@/hooks/use-chats';
import { getChatResponse } from '@/lib/chatgpt';
import { getUniqueId } from '@/utils';

interface ChatInputProps {
  chatId: string;
}

export const ChatInput = ({ chatId }: ChatInputProps) => {
  const { user } = useUser();
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const createMessage = useChats((state) => state.createMessage);

  const generateChatResponse = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const promptText = prompt.trim();
      setPrompt('');

      if (!promptText) {
        return;
      }

      setIsLoading(true);
      toast.loading('Thinking...');

      const message = {
        id: getUniqueId(),
        avatar: user?.imageUrl,
        text: promptText,
        userName: user?.firstName || 'Guest',
      };

      createMessage(chatId, message);

      const chatResponse = await getChatResponse(promptText);

      const chatMessage = {
        id: getUniqueId(),
        text: chatResponse,
        userName: 'ChatGPT',
      };

      createMessage(chatId, chatMessage);

      toast.dismiss();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error('Error getting response!');
    }
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 border-t border-gray-500 text-sm">
      <form className="p-5 space-x-5 flex" onSubmit={generateChatResponse}>
        <input
          className="bg-transparent focus:outline-none flex-1 text-white disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={isLoading}
          placeholder="Type your message here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="bg-[#11A37F] enabled:hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!prompt || isLoading}
          type="submit"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};
