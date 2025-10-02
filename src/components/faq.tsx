import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    q: 'Is it safe to use this YouTube to MP3 converter?',
    a: 'Absolutely. We prioritize your security. Our website is secured with SSL/TLS encryption, and we do not store any of your data or download history. The entire process is anonymous and safe.',
  },
  {
    q: 'Does your converter work for long videos?',
    a: 'Yes, it does. Our <b>youtube to mp3 long video converter</b> is specifically designed to handle long videos like podcasts, DJ sets, and full albums without any issues or time limits. We ensure a stable and reliable conversion every time.',
  },
  {
    q: 'What is the maximum audio quality I can get?',
    a: 'We always provide the highest quality available from the source video, up to <b>320kbps</b>. Our <b>youtube to mp3 converter 320kbps</b> ensures you get a rich, high-definition audio file for the best listening experience.',
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-left text-lg">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: item.a }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
