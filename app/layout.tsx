import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { ConvexClientProvider } from '@/providers/convex-client-provider';
import { cn } from '@/lib/utils';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ChatGPT Clone',
  description: 'Generated by create next app',
  icons: {
    icon: [{ url: '/favicon.ico', href: '/favicon.ico' }],
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
