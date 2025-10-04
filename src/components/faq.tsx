import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    q: 'Is it safe to use this YouTube to MP3 converter?',
    a: 'Absolutely. We prioritize your security. Our website is secured with an SSL certificate, which encrypts the data between you and our servers. We never ask for personal information, and we don’t store any data about the videos you convert.',
  },
  {
    q: 'What is the audio quality of the converted MP3 files?',
    a: 'Our converter extracts the audio in the highest possible quality from the YouTube video. We always aim for a 320kbps bitrate, which is considered high-definition audio, ensuring you get a rich and clear listening experience.',
  },
  {
    q: 'Does this converter work on mobile devices?',
    a: 'Yes! Our website is fully responsive and designed to work seamlessly on any device, including smartphones and tablets. You can convert and download YouTube videos to MP3 directly from your mobile browser without needing to install any app.',
  },
  {
    q: 'Are there any limits on the number of conversions?',
    a: 'There are absolutely no limits. You can convert as many YouTube videos as you like, completely free of charge. We believe in providing an accessible service for everyone.',
  },
  {
    q: 'Can I convert long videos, like podcasts or DJ sets?',
    a: 'Yes, our service is capable of handling long videos without any issues. Whether it’s a one-hour podcast or a multi-hour live set, our converter can process it efficiently. Please be aware that longer videos will naturally take more time to convert.',
  },
  {
    q: 'Do I need to create an account or install any software?',
    a: 'No, registration or software installation is required. Our tool is entirely web-based. All you need is your web browser and a link to the YouTube video you want to convert. It’s that simple.',
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
              <AccordionContent className="text-base text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: item.a }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
