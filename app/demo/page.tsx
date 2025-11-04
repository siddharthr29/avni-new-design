'use client';

import Link from 'next/link';
import { Smartphone, Globe, BarChart3, ExternalLink, Download } from 'lucide-react';

const demoAccounts = [
  {
    title: 'Water Body Excavation',
    description: 'Track the progress of silt excavation from water bodies',
    fieldUser: 'demo@wbd',
    reportLink: null,
  },
  {
    title: 'Social Security Facilitation',
    description: 'Manage social security program beneficiaries',
    fieldUser: 'demo@ssdemo',
    reportLink: null,
  },
  {
    title: 'Teacher Development Program',
    description: 'Track teacher training and development',
    fieldUser: 'demo@teachdemo',
    reportLink: null,
  },
  {
    title: 'Community Program - Phulwari',
    description: 'Early childhood care and education program',
    fieldUser: 'phulwari-user@cpdemo',
    reportLink: null,
  },
  {
    title: 'NCD Control Program',
    description: 'Non-communicable disease prevention and management',
    fieldUser: 'ncd-user@cpdemo',
    reportLink: null,
  },
  {
    title: 'Pregnancy & Child Nutrition',
    description: 'Maternal and child health tracking',
    fieldUser: 'preg-child@cpdemo',
    reportLink: null,
  },
  {
    title: 'Waste Management Program',
    description: 'Track waste collection and management',
    fieldUser: 'demo@wmdemo',
    reportLink: 'https://reporting.avniproject.org/public/dashboard/14c0f214-d55c-4b3b-8dfa-550d3d969796',
  },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Experience Avni in Action
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Try our interactive demos to see how Avni can transform your field operations
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Getting Started in 3 Easy Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full text-2xl font-bold mb-4">
                  1
                </div>
                <Smartphone className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Install the App</h3>
                <p className="text-neutral-600 mb-4">
                  Download Avni from Google Play Store on your Android device
                </p>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.openchsclient"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <Download className="h-4 w-4" />
                  Download App
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full text-2xl font-bold mb-4">
                  2
                </div>
                <Globe className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Choose a Demo</h3>
                <p className="text-neutral-600 mb-4">
                  Select a demo account from the table below that matches your use case
                </p>
                <button 
                  onClick={() => document.getElementById('demo-table')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  View Demos
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-primary-50 rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full text-2xl font-bold mb-4">
                  3
                </div>
                <BarChart3 className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Explore Features</h3>
                <p className="text-neutral-600 mb-4">
                  Test data collection, offline sync, and reporting capabilities
                </p>
                <Link 
                  href="https://avni.readme.io"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                  target="_blank"
                >
                  View Docs
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin App Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">System Administration App</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-neutral-700 mb-6">
                For the administration app in your browser, go to{' '}
                <a 
                  href="https://app.avniproject.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  app.avniproject.org
                </a>{' '}
                and use the login details for any demo given below.
              </p>
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Default Password</h3>
                <p className="text-neutral-700">All demo accounts use the password: <code className="bg-white px-2 py-1 rounded text-primary-600 font-mono">password</code></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Accounts Table */}
      <section id="demo-table" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">Demo Accounts</h2>
            <p className="text-lg text-neutral-600 text-center mb-12">
              These demos are inspired from real implementations of Avni, created to demonstrate flexibility and features
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary-500 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Demo Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Use Case</th>
                    <th className="px-6 py-4 text-left font-semibold">Field App Login</th>
                    <th className="px-6 py-4 text-left font-semibold">Reports</th>
                  </tr>
                </thead>
                <tbody>
                  {demoAccounts.map((demo, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-neutral-200 hover:bg-primary-50 transition-colors ${
                        index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-neutral-900">{demo.title}</td>
                      <td className="px-6 py-4 text-neutral-600">{demo.description}</td>
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm">
                          <div className="text-primary-600 font-semibold">{demo.fieldUser}</div>
                          <div className="text-neutral-500">password</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {demo.reportLink ? (
                          <a 
                            href={demo.reportLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                          >
                            View Dashboard
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <span className="text-neutral-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {demoAccounts.map((demo, index) => (
                <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{demo.title}</h3>
                  <p className="text-neutral-600 mb-4">{demo.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-semibold text-neutral-700 mb-1">Field App Login:</div>
                      <div className="font-mono text-sm bg-neutral-50 p-2 rounded">
                        <div className="text-primary-600 font-semibold">{demo.fieldUser}</div>
                        <div className="text-neutral-500">password</div>
                      </div>
                    </div>
                    
                    {demo.reportLink && (
                      <div>
                        <a 
                          href={demo.reportLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
                        >
                          View Dashboard
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Reporting & Analytics</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-neutral-700 mb-6">
                Avni uses Metabase for reporting, analytics, and dashboards. You can learn more about Metabase{' '}
                <a 
                  href="https://www.metabase.com/docs/latest/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  here
                </a>{' '}
                or checkout{' '}
                <Link 
                  href="/usage-statistics"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Avni's own dashboard
                </Link>{' '}
                which has been created using Metabase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Own Solution?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Start your free trial or schedule a personalized demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors">
                Start Free Trial
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
