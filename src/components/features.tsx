import { CheckCircle2, CloudLightning, Smartphone } from 'lucide-react';

export function Features() {
  return (
    <section className="bg-card/30 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Ultimate Toolkit for YouTube Audio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover why our converter is the preferred choice for downloading music and audio from YouTube.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Unmatched Audio Quality</h3>
                <p className="mt-2 text-muted-foreground">Don't settle for less. We provide audio in crystal-clear 320kbps quality, ensuring your music sounds exactly as the artist intended.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <CloudLightning className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Blazing-Fast Conversions</h3>
                <p className="mt-2 text-muted-foreground">Our powerful servers work at lightning speed to convert your videos to MP3 in just a few moments, so you don't have to wait.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Works on All Devices</h3>
                <p className="mt-2 text-muted-foreground">Whether you're on a desktop, tablet, or smartphone, our converter is fully optimized for a seamless experience on any device.</p>
            </div>
        </div>
        
        <div className="mt-16 text-center text-lg font-semibold text-muted-foreground">
          <p>Trusted by thousands of users for a simple and reliable conversion experience.</p>
        </div>
      </div>
    </section>
  );
}
