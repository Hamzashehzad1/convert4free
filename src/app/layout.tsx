import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const title = 'Convert4Free | Free YouTube to MP3 Converter Online | Fast, High-Quality 320kbps Audio Download';
const description = 'Download music from YouTube to MP3 instantly. Our free converter youtube mp3 tool supports long videos and provides guaranteed 320kbps HD quality. Simple, fast, and secure. Convert any YouTube video to MP3 now!';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    'youtube a mp3', 'youtube to mp3 converter online', 'youtube video converter converter mp3', 'free converter youtube mp3', 'youtube to mp3 conconventer online', 'youtube to mp3 320kbps converter', 'youtube videos to mp3', 'youtube downloader mp3 download', 'converter video youtube a mp3', 'download to mp3 youtube', 'youtube a mp3 320kbps', 'youtube to mp3 long video converter', 'youtube to mp3 online comconver', 'convert from youtube to mp3 free', 'mp3 downloader from youtube', 'youtube to mp3 converter yt1', 'youtube to mp3 hd', 'youtube to mp3 youtube to mp3 youtube to mp3', 'youtube y to mp3', 'download music from youtube to mp3'
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎵</text></svg>" />
        <script src="https://cdn.jsdelivr.net/npm/yt-mp3-converter@1.0.0/dist/index.min.js"></script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
