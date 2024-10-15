'use client';

import Link from 'next/link';

import { AppRoute } from '@/constants';

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <Link href={AppRoute.CHAT}>
        <div className="bg-[#74AA9C] w-[240px] py-2 rounded-lg text-lg cursor-pointer hover:brightness-105 text-white text-center">
          Go back
        </div>
      </Link>
    </div>
  );
};

export default Error;
