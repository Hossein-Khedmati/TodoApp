import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SplashScreen from '@/components/SpalshScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'A simple ToDo application with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-purple-200'>
        {children}
      </body>
    </html>
  );
}