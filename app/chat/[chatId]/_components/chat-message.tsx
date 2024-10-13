import Image from 'next/image';

import { cn } from '@/lib/utils';
import { IMessage } from '@/interfaces';

interface ChatMessageProps {
  message: IMessage;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isChatGPT = message.userName === 'ChatGPT';

  return (
    <div className={cn('py-5 text-white', isChatGPT && 'bg-[#434654]')}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto items-start">
        <Image
          alt={message.userName}
          className="rounded-md"
          height="32"
          src={message?.avatar || '/chat-gpt.png'}
          width="32"
        />
        <span className="text-sm">{message.text}</span>
      </div>
    </div>
  );
};
