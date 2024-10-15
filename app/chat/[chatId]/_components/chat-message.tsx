import Image from 'next/image';

import { Doc } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Doc<'messages'>;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const altName = message.isChatGPT ? 'ChatGPT' : 'User';

  return (
    <div className={cn('py-5 text-white', message.isChatGPT && 'bg-[#434654]')}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto items-center">
        <Image
          alt={altName}
          className="rounded-[25%] self-start"
          height="32"
          src={message?.avatar || '/chatgpt-logo.svg'}
          width="32"
        />
        <span className="text-sm">{message.text}</span>
      </div>
    </div>
  );
};
