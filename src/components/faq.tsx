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
  {
    q: 'Is it legal to convert YouTube videos to MP3?',
    a: 'Our service is intended for converting non-copyrighted content or videos for which you have explicit permission from the copyright holder. Downloading copyrighted material without permission may violate YouTube’s terms of service and copyright laws in your country. We encourage you to respect copyright and use our tool responsibly.',
  },
  {
    q: 'Which web browsers are supported?',
    a: 'Our converter is built with modern web technologies and is compatible with all major browsers, including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. For the best experience, we recommend using the latest version of your browser.',
  },
  {
    q: 'How long does a typical conversion take?',
    a: 'Conversion time depends on the length and size of the YouTube video. For a standard 5-minute music video, the process usually takes less than a minute. Longer videos, like podcasts, may take several minutes to process.',
  },
  {
    q: 'Can I convert an entire YouTube playlist?',
    a: 'Currently, our tool is designed to convert videos one at a time. You will need to paste the link for each video in a playlist that you wish to convert. We are exploring the possibility of adding playlist conversion in the future.',
  },
  {
    q: 'What should I do if a conversion fails or gets stuck?',
    a: 'If a conversion fails, first check that the YouTube link is correct and the video is publicly accessible (not private or region-locked). Sometimes, a simple refresh of the page and trying again will solve the issue. If the problem persists, the video may be protected or unavailable for conversion.',
  },
  {
    q: 'Why do some videos fail to convert?',
    a: 'Conversion can fail for several reasons. The most common are that the video is private, has been removed, is age-restricted, or is protected by advanced digital rights management (DRM). We are continuously working to improve our conversion success rate.',
  },
  {
    q: 'Can I convert YouTube Shorts?',
    a: 'Yes, our converter works perfectly with YouTube Shorts. Simply copy the URL of the Short and paste it into the input field, just as you would with a regular video. The audio will be extracted and converted to MP3.',
  },
  {
    q: 'Do you store my downloaded files or the videos I convert?',
    a: 'No. Your privacy is paramount. We do not store any of the videos you convert or the MP3 files you download. The entire process is anonymous. Once the conversion is complete and the download link is provided, our system removes all associated files from our servers.',
  },
  {
    q: 'Are there any hidden fees or charges?',
    a: 'Our service is 100% free. There are no hidden costs, subscription fees, or charges for any of our features. You can convert as many videos as you want without any financial commitment.',
  },
  {
    q: 'Does converting videos affect their original quality on YouTube?',
    a: 'Not at all. Our tool only reads the data from the YouTube video to create a new MP3 file. The original video on YouTube remains completely untouched and unchanged.',
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
