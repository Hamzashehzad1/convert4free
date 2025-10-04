import { Converter } from '@/components/converter';
import { Faq } from '@/components/faq';
import { Features } from '@/components/features';
import { HowTo } from '@/components/how-to';
import { Footer } from '@/components/footer';
import { Waves } from 'lucide-react';
import { BulkCta } from '@/components/bulk-cta';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <Waves className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold tracking-tighter">
            Convert4Free
          </h1>
        </div>
      </header>
      <main className="flex-1">
        <Converter />
        <BulkCta />
        <HowTo />
        <Features />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
