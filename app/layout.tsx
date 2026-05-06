import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Serif_4, DotGothic16 } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  display: 'swap',
  weight: ['400', '700'],
});

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  variable: '--font-dot-gothic-16',
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Pooja R. Sonar - Software Developer Portfolio',
  description: 'Full-stack Software Developer with expertise in real-time systems, scalable web applications, and AI-driven platforms.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif4.variable} ${dotGothic16.variable}`}>
      <body className="font-inter text-text bg-background overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}