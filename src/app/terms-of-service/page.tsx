
import { Footer } from '@/components/footer';
import { Waves } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
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
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Convert4Free website (the "Service") operated by Convert4Free ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2 className="mt-8 text-2xl font-bold">1. Use of Service</h2>
            <p>
              Convert4Free provides a free online service that allows you to convert public-facing YouTube videos to the MP3 format. You agree to use the Service only for its intended purpose.
            </p>
            <p>
              You are solely responsible for the URLs you submit to the Service. You must ensure that you have the legal right to convert the content of the YouTube videos you provide. This Service should only be used for content that is in the public domain, that you own the copyright to, or for which you have obtained permission from the copyright holder.
            </p>

            <h2 className="mt-8 text-2xl font-bold">2. Prohibited Conduct</h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Convert any content that infringes upon any third-party's copyright, trademark, patent, trade secret, or other proprietary rights.</li>
              <li>Convert content that is defamatory, libelous, obscene, pornographic, or otherwise offensive.</li>
              <li>Introduce any viruses, trojan horses, worms, or other material which is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
              <li>Engage in any automated use of the system, such as using scripts to send requests, that is abusive or disruptive to the Service.</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold">3. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Convert4Free and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Convert4Free. We do not claim any rights to the content you convert.
            </p>

            <h2 className="mt-8 text-2xl font-bold">4. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Convert4Free makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content, or materials included therein. You expressly agree that your use of these services is at your sole risk.
            </p>
            <p>
              We do not warrant that the service will be uninterrupted, timely, secure, or error-free, or that the results that may be obtained from the use of the service will be accurate or reliable.
            </p>
            
            <h2 className="mt-8 text-2xl font-bold">5. Limitation of Liability</h2>
            <p>
              In no event shall Convert4Free, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>

            <h2 className="mt-8 text-2xl font-bold">6. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2 className="mt-8 text-2xl font-bold">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is based, without regard to its conflict of law provisions.
            </p>

            <h2 className="mt-8 text-2xl font-bold">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
