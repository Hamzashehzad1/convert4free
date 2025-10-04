import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const title = 'Free YouTube to MP3 Converter - Convert4Free | Fast & High-Quality';
const description = 'Easily convert your favorite YouTube videos into high-quality MP3 audio files. Our free and fast converter makes it simple to download YouTube audio for offline listening.';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    'youtube to mp3', 'youtube converter', 'free youtube to mp3', 'mp3 converter', 'download youtube mp3', 'youtube audio downloader', 'convert youtube video'
  ],
  robots: 'index, follow',
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: 'https://yourdomain.com/', // placeholder
    images: [
      {
        url: 'https://yourdomain.com/og-image.png', // placeholder
        width: 1200,
        height: 630,
        alt: 'Convert4Free - Free YouTube to MP3 Converter',
      },
    ],
  },
  other: {
    'canonical': 'https://yourdomain.com/', // placeholder for canonical URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="PFQCdDqaY2pQAVgPIm7w3kVSDjcGb0qogsjari_J41U" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎵</text></svg>" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
