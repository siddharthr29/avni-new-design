import { Metadata } from 'next';
import Link from 'next/link';
import { Github, Twitter, MessageCircle, Mail, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Avni | Open Source Field Service Platform',
  description: 'Learn about Avni Project - an open-source platform for field data collection built by Samanvay Foundation',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              About Avni Project
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Open-source platform transforming field operations for non-profits across India
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg mb-12">
              <p className="text-lg text-neutral-800 leading-relaxed mb-0">
                <strong>Avni Project</strong>, previously called "OpenCHS (Open Community Health System)", started in mid-2016 as an open-source community health worker platform designed to aid programs operating below primary health center level — i.e. sub-center, village and slum level. It has since matured into a platform that can support most field work use cases, not just health.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Avni is now implemented for water management, social welfare services, educational outcome assessment, and health programs. The name <strong>Avni</strong> (अवनि, અવની, ਅਵਨੀ, அவ்னி, అవనీ, ಅವ್ನಿ) means "earth" in Hindi, reflecting our commitment to ground-level impact.
              </p>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Team & Partners</h2>
              <div className="bg-neutral-50 rounded-xl p-8">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Avni is developed by a team experienced in applying technology in the public health sector from{' '}
                  <a href="https://samanvayfoundation.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">
                    Samanvay Foundation
                  </a>.
                </p>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Funded By</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <a href="https://www.socialalpha.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Social Alpha
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <a href="https://chintugudiya.org/tech4dev/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Project Tech4Dev (Chintu Gudiya Foundation)
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-neutral-900 mb-4">Development Partners</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <a href="http://www.soft-corner.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Soft Corner
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <a href="https://www.persistent.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      Persistent Systems
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Software Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Avni Software</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://github.com/avniproject" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <Github className="h-6 w-6 text-neutral-600 group-hover:text-primary-600" />
                  <div>
                    <div className="font-semibold text-neutral-900">Source Code</div>
                    <div className="text-sm text-neutral-600">github.com/avniproject</div>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto text-neutral-400" />
                </a>

                <a href="https://discord.gg/4pcgcQW8pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <MessageCircle className="h-6 w-6 text-neutral-600 group-hover:text-primary-600" />
                  <div>
                    <div className="font-semibold text-neutral-900">Community</div>
                    <div className="text-sm text-neutral-600">Join our Discord</div>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto text-neutral-400" />
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.openchsclient" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <div className="h-6 w-6 text-neutral-600 group-hover:text-primary-600 text-2xl">📱</div>
                  <div>
                    <div className="font-semibold text-neutral-900">Android App</div>
                    <div className="text-sm text-neutral-600">Download from Play Store</div>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto text-neutral-400" />
                </a>

                <a href="https://twitter.com/avniproject" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <Twitter className="h-6 w-6 text-neutral-600 group-hover:text-primary-600" />
                  <div>
                    <div className="font-semibold text-neutral-900">Twitter</div>
                    <div className="text-sm text-neutral-600">@avniproject</div>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto text-neutral-400" />
                </a>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">License & Copyright</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>License: <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">AGPL 3.0</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Copyright: <a href="https://samanvayfoundation.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">Samanvay Research and Development Foundation</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span><a href="https://avni.readme.io/v2.0/docs/avni-code-of-conduct" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">Code of Conduct</a></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Contact Avni</h3>
                    <a href="mailto:avnipartnerships@samanvayfoundation.org" className="text-primary-100 hover:text-white text-lg">
                      avnipartnerships@samanvayfoundation.org
                    </a>
                  </div>
                </div>
                <div className="border-t border-primary-400 pt-6">
                  <p className="text-primary-100 mb-4">Join our community:</p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://groups.google.com/forum/#!forum/avni-project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                      Google Group
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a href="https://discord.gg/4pcgcQW8pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                      Discord
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Credits */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Credits</h2>
              <p className="text-neutral-700">
                Special thanks to{' '}
                <a href="https://lokalise.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Lokalise
                </a>{' '}
                for providing translation services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Join the growing community of NGOs using Avni
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary text-lg">
                Try Demo
              </Link>
              <Link href="/contact" className="btn-secondary text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
