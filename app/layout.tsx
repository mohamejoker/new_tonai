import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Town Media AI - AI-Powered Digital Marketing Agency',
  description: 'Automate your digital marketing with AI. Optimize paid ads and grow followers organically across Facebook, Instagram, Google, TikTok, YouTube, and Snapchat.',
  keywords: 'AI marketing, digital marketing, paid ads, social media growth, Facebook ads, Instagram marketing, Google ads, TikTok marketing',
  authors: [{ name: 'Town Media AI' }],
  openGraph: {
    title: 'Town Media AI - AI-Powered Digital Marketing Agency',
    description: 'Automate your digital marketing with AI. Optimize paid ads and grow followers organically across all major platforms.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}