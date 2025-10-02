import { CheckCircle2 } from 'lucide-react';

export function Features() {
  return (
    <section className="bg-card/30 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Our Free Converter YouTube MP3? High-Quality Audio & Long Video Support
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a superior experience for downloading music from YouTube. Here&apos;s what makes our <b className="text-foreground">youtube downloader mp3</b> stand out.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-2">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Guaranteed 320kbps HD Audio Quality</h3>
                <p className="text-muted-foreground">Don&apos;t settle for low-quality rips. Our <b className="text-foreground">youtube to mp3 320kbps converter</b> ensures that every download is crisp, clear, and rich in detail. Experience your favorite music the way it was meant to be heard.</p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Rich, detailed audio perception.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Perfect for any device and sound system.</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Full Support for YouTube to MP3 Long Video Converter</h3>
                <p className="text-muted-foreground">Need to convert a DJ set, podcast, or a full album? No problem. Unlike other services, our <b className="text-foreground">youtube to mp3 long video converter</b> technology handles large files with ease and stability, ensuring your conversion never fails, no matter the length.</p>
                 <ul className="space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> Stable conversion for videos over 2 hours.</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" /> No hidden size or length limitations.</li>
                </ul>
            </div>
        </div>
        
        <div className="mt-16 text-center text-lg font-semibold text-muted-foreground">
          <p>Over 1 Million Downloads Processed Safely & Securely</p>
        </div>
      </div>
    </section>
  );
}
