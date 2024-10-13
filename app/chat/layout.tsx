import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { Sidebar } from '@/components/sidebar';

const ChatLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-full bg-[#343541]">
      <Sidebar />
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ChatLayout;
