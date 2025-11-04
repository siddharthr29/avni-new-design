import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Avni Project',
  description: 'Privacy policy for Avni Project - How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Introduction</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Avni Project ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">Information You Provide</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="text-neutral-700"><strong className="text-neutral-900">Account Information:</strong> Name, email address, organization details</li>
                    <li className="text-neutral-700"><strong className="text-neutral-900">Profile Data:</strong> User preferences, settings, and configurations</li>
                    <li className="text-neutral-700"><strong className="text-neutral-900">Field Data:</strong> Data collected through the Avni platform for your programs</li>
                    <li className="text-neutral-700"><strong className="text-neutral-900">Communication:</strong> Messages, feedback, and support requests</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">Automatically Collected Information</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="text-neutral-700"><strong className="text-neutral-900">Usage Data:</strong> How you interact with our platform</li>
                    <li className="text-neutral-700"><strong className="text-neutral-900">Device Information:</strong> Device type, operating system, browser type</li>
                    <li className="text-neutral-700"><strong className="text-neutral-900">Log Data:</strong> IP address, access times, pages viewed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">How We Use Your Information</h2>
              <p className="text-lg text-neutral-700 mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700">• Provide, maintain, and improve our services</li>
                <li className="text-neutral-700">• Process your transactions and manage your account</li>
                <li className="text-neutral-700">• Send you technical notices and support messages</li>
                <li className="text-neutral-700">• Respond to your comments and questions</li>
                <li className="text-neutral-700">• Monitor and analyze usage patterns and trends</li>
                <li className="text-neutral-700">• Detect, prevent, and address technical issues</li>
                <li className="text-neutral-700">• Comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Storage and Security */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Data Storage and Security</h2>
              <p className="text-lg text-neutral-700 mb-4">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700"><strong className="text-neutral-900">Encryption:</strong> Data is encrypted in transit and at rest</li>
                <li className="text-neutral-700"><strong className="text-neutral-900">Access Controls:</strong> Role-based access to ensure data privacy</li>
                <li className="text-neutral-700"><strong className="text-neutral-900">Regular Backups:</strong> Automated backups to prevent data loss</li>
                <li className="text-neutral-700"><strong className="text-neutral-900">Security Audits:</strong> Regular security assessments and updates</li>
              </ul>
            </div>

            {/* Your Data Rights */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Your Data Rights</h2>
              <p className="text-lg text-neutral-700 mb-4">You have the right to:</p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700"><strong className="text-neutral-900">Access:</strong> Request a copy of your personal data</li>
                <li className="text-neutral-700"><strong className="text-neutral-900">Correction:</strong> Update or correct inaccurate information</li>
                <li className="text-neutral-700"><strong className="text-neutral-900">Deletion:</strong> Request deletion of your personal data</li>
                <li className="text-neutral-700"><strong className="text-neutral-900">Export:</strong> Download your data in a portable format</li>
                <li className="text-neutral-700"><strong className="text-neutral-900">Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Contact Us</h2>
              <p className="text-lg text-neutral-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-neutral-700">
                  <strong className="text-neutral-900">Email:</strong>{' '}
                  <a href="mailto:avnipartnerships@samanvayfoundation.org" className="text-primary-600 hover:text-primary-700 underline">
                    avnipartnerships@samanvayfoundation.org
                  </a>
                </li>
                <li className="text-neutral-700">
                  <strong className="text-neutral-900">Website:</strong>{' '}
                  <a href="https://avniproject.org" className="text-primary-600 hover:text-primary-700 underline">
                    avniproject.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Open Source Commitment */}
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Open Source Commitment</h3>
              <p className="text-lg text-neutral-700">
                As an open-source project, we believe in transparency. Our code is publicly available on{' '}
                <a href="https://github.com/avniproject" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                  GitHub
                </a>, 
                and we welcome community review of our security and privacy practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              We're here to help. Contact us with any privacy concerns.
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
