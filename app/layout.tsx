import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/app/ui/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luke Phillips',
  description: 'Portfolio of Luke Phillips',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex justify-center'>
          <div className='relative pb-32 max-w-screen-2xl w-full min-h-screen flex flex-col justify-between'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
