import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import Path from '@/components/Path';
import Status from '@/components/Status';
import Summary from '@/components/Summary';
import ChatBot from '@/components/Bot';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Co:Helm',
  description: 'Co:Helm demo app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mx-16 mb-4">
            {' '}
            <Path />
            {children}
            <Analytics />
            <ChatBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
