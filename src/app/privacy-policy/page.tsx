
import { Footer } from '@/components/footer';
import { Waves } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
       <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Waves className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold tracking-tighter">
            Convert4Free
          </h1>
        </Link>
      </header>
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p>
              Your privacy is important to us. It is Convert4Free's policy to respect your privacy regarding any information we may collect from you across our website,{' '}
              <Link href="/">Convert4Free</Link>, and other sites we own and operate.
            </p>

            <h2 className="mt-8 text-2xl font-bold">1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            <p>
              <strong>Log Data:</strong> When you visit our website, our servers may automatically log the standard data provided by your web browser. This data is considered "non-identifying information," as it does not personally identify you on its own. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
            </p>
            <p>
              <strong>Submitted URLs:</strong> We process the YouTube video URLs you submit to perform the conversion. We do not store these URLs or associate them with your IP address or any other personal information after the conversion process is complete. The processing is temporary and solely for the purpose of providing the conversion service.
            </p>

            <h2 className="mt-8 text-2xl font-bold">2. How We Use Information</h2>
            <p>
              We use the information we collect to operate, maintain, and provide the features and functionality of our service. This includes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Providing our core service of converting YouTube videos to MP3 files.</li>
              <li>Understanding and analyzing how you use our service to improve and optimize it.</li>
              <li>Monitoring our service for technical issues and to prevent abuse, such as excessive requests that could disrupt the service for others.</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">3. Data Security</h2>
            <p>
              We take the security of your data seriously. We protect the limited information we collect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification. We use SSL encryption to secure the transmission of data between your browser and our servers.
            </p>
            <p>
              However, we advise that no method of transmission over the Internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>

            <h2 className="mt-8 text-2xl font-bold">4. Cookies</h2>
            <p>
              We use "cookies" to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified. We may use third-party services like Google Analytics, which may also use cookies to track usage data.
            </p>

            <h2 className="mt-8 text-2xl font-bold">5. Third-Party Services</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.
            </p>
            
            <h2 className="mt-8 text-2xl font-bold">6. Children’s Privacy</h2>
            <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
            </p>

            <h2 className="mt-8 text-2xl font-bold">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="mt-8 text-2xl font-bold">8. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
