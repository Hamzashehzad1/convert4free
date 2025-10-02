import { Link, Sparkles, Download } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const steps = [
  {
    icon: <Link className="h-8 w-8 text-primary" />,
    title: '1. Paste Your Link',
    description: 'Find your desired YouTube video and copy its URL. Paste it into our input box to begin.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: '2. Start Converting',
    description: 'Click the "Convert to MP3" button. Our service will process the video at lightning speed.',
  },
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    title: '3. Download Your MP3',
    description: 'Once finished, a download button will appear. Click it to save your high-quality 320kbps MP3 file.',
  },
];

export function HowTo() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How to Convert YouTube Video to MP3 in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our <b className="text-foreground">free converter youtube mp3</b> makes it incredibly easy to download audio. Just follow these steps.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="bg-card/50 text-center">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4">
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
