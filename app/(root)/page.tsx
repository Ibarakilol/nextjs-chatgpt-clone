import { SignInButton } from '@clerk/nextjs';
import Image from 'next/image';

const RootPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8">
      <Image
        alt="ChatGPT Clone"
        className="rounded-[25%]"
        height="120"
        priority
        src="/chatgpt-logo.svg"
        width="120"
      />
      <h1 className="text-7xl font-bold">ChatGPT Clone</h1>
      <SignInButton mode="modal">
        <div className="bg-[#74AA9C] w-[240px] py-2 rounded-lg text-lg cursor-pointer hover:brightness-105 text-white text-center">
          Sign In
        </div>
      </SignInButton>
    </div>
  );
};

export default RootPage;
