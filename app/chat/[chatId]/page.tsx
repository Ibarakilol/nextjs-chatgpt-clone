import { Chat } from './_components/chat';
import { ChatInput } from './_components/chat-input';

import { Id } from '@/convex/_generated/dataModel';

interface ChatIdPageProps {
  params: {
    chatId: Id<'chats'>;
  };
}

const ChatIdPage = ({ params: { chatId } }: ChatIdPageProps) => {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <Chat chatId={chatId} />
      <ChatInput chatId={chatId} />
    </div>
  );
};

export default ChatIdPage;
