import { Link, Sparkles, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <Link className="h-8 w-8 text-primary" />,
    title: '1. Paste the Video URL',
    description: 'Navigate to YouTube, copy the URL of the video you want, and paste it into the input field on our site.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: '2. Click "Convert"',
    description: 'Hit the convert button and our tool will immediately begin processing your video to extract the audio stream.',
  },
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    title: '3. Download Your MP3',
    description: 'Once the conversion is complete, your download will be ready. Click the button to save the MP3 file to your device.',
  },
];

export function HowTo() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Your Audio in Three Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our process is designed to be as simple and intuitive as possible. Follow these steps to get your MP3 file in under a minute.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="bg-card/50 text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
