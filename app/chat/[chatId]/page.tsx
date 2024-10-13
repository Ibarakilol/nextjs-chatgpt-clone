import { Chat } from './_components/chat';
import { ChatInput } from './_components/chat-input';

interface ChatIdPageProps {
  params: {
    chatId: string;
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
