import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export function BulkCta() {
  return (
    <section className="container mx-auto px-4 pb-12 pt-8 sm:pb-20 sm:pt-16">
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:justify-between md:p-12 md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Need to Convert Multiple Videos?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Don't have time to convert videos one by one? We offer a premium bulk conversion service for playlists or large batches of videos. Let us handle the work for you.
            </p>
          </div>
          <a href="mailto:hamza@webbrewery.co">
            <Button
              size="lg"
              className="flex-shrink-0 bg-gradient-to-r from-accent to-green-400 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 active:scale-100"
            >
              <Mail className="mr-2 h-5 w-5" />
              Inquire Now
            </Button>
          </a>
        </div>
      </Card>
    </section>
  );
}
