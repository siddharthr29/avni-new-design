'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { ChevronDown, Search } from 'lucide-react';

const faqCategories = [
  {
    category: 'Getting Started',
    faqs: [
      {
        question: 'What is Avni?',
        answer: 'Avni is an open-source, offline-first data collection and case management platform designed specifically for NGOs and social sector organizations. It helps field teams collect data, track beneficiaries, and generate insights even without internet connectivity.',
      },
      {
        question: 'How do I get started with Avni?',
        answer: 'You can start by requesting a demo, trying our free trial, or exploring our demo environments. We offer three plans: Self-Service (free), Assisted Self-Service, and Managed Service. Our team can help you choose the right option based on your needs.',
      },
      {
        question: 'Do I need technical expertise to use Avni?',
        answer: 'No! Avni is designed to be user-friendly and requires no coding. Our no-code platform allows you to configure forms, workflows, and reports through an intuitive interface. We also provide training and support to help you get started.',
      },
      {
        question: 'Can I try Avni before committing?',
        answer: 'Yes! We offer free demo environments where you can explore different use cases. You can also sign up for our Self-Service plan which is free to start. Additionally, our Launchpad program helps NGOs pilot Avni with guided support.',
      },
    ],
  },
  {
    category: 'Features & Capabilities',
    faqs: [
      {
        question: 'Does Avni work offline?',
        answer: 'Yes! Avni is built with an offline-first architecture. Field workers can collect data, register beneficiaries, and complete forms without internet. Data automatically syncs when connectivity is available.',
      },
      {
        question: 'What types of data can I collect?',
        answer: 'Avni supports all types of data including text, numbers, dates, locations (GPS), photos, videos, audio recordings, signatures, and more. You can create custom forms with skip logic, validations, and calculated fields.',
      },
      {
        question: 'Can I track beneficiaries over time?',
        answer: 'Absolutely! Avni excels at case management. You can register beneficiaries, schedule follow-up visits, track their journey, maintain case history, and monitor outcomes over time. Automated reminders help ensure no one is missed.',
      },
      {
        question: 'What kind of reports can I generate?',
        answer: 'Avni provides real-time dashboards, custom reports, data exports (CSV/Excel), and analytics. We integrate with Metabase for advanced analytics. You can create reports for monitoring, evaluation, and decision-making.',
      },
      {
        question: 'Is Avni mobile-friendly?',
        answer: 'Yes! Avni has dedicated Android apps optimized for field work. The apps work on low-end devices, consume minimal data, and are designed for ease of use even by users with limited smartphone experience.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    faqs: [
      {
        question: 'How much does Avni cost?',
        answer: 'Avni offers three plans: (1) Self-Service - Free to start, pay only for cloud hosting (~₹2,000-5,000/month), (2) Assisted Self-Service - ₹50,000-2,00,000 for setup + hosting, (3) Managed Service - Custom pricing. We\'re a non-profit, so our prices are significantly lower than commercial alternatives.',
      },
      {
        question: 'Why is Avni more affordable than other solutions?',
        answer: 'As a non-profit organization with an India-based team, we can offer services at a fraction of the cost of commercial solutions. We\'re focused on social impact, not profit maximization. Our mission is to make quality technology accessible to all NGOs.',
      },
      {
        question: 'What is included in the Self-Service plan?',
        answer: 'The Self-Service plan includes full access to the Avni platform, mobile apps, web dashboard, community support via Discord, documentation, and video tutorials. You configure and manage the system yourself. You only pay for cloud hosting costs.',
      },
      {
        question: 'Do you offer discounts for small NGOs?',
        answer: 'Yes! We understand budget constraints. Our Self-Service plan is free to start, and we offer flexible pricing for our other plans. Our Launchpad program provides subsidized pilots. Contact us to discuss your specific situation.',
      },
    ],
  },
  {
    category: 'Technical & Security',
    faqs: [
      {
        question: 'Is my data secure?',
        answer: 'Yes! We implement enterprise-grade security including data encryption (in transit and at rest), role-based access control, regular backups, security audits, and compliance with data protection standards. Your data is stored securely in the cloud.',
      },
      {
        question: 'Where is my data stored?',
        answer: 'Data is stored in secure cloud servers. For the Self-Service plan, you can choose your hosting provider. For Assisted and Managed plans, we host on reliable cloud infrastructure in India. You always retain ownership of your data.',
      },
      {
        question: 'Can I export my data?',
        answer: 'Yes! You can export all your data at any time in CSV/Excel format. There\'s no vendor lock-in. You own your data and can take it with you if you decide to stop using Avni.',
      },
      {
        question: 'Is Avni open source?',
        answer: 'Yes! Avni is 100% open source under the AGPL license. Our code is publicly available on GitHub. This means transparency, community contributions, no vendor lock-in, and the ability to self-host if desired.',
      },
      {
        question: 'What devices and platforms are supported?',
        answer: 'Avni supports Android 5.0+ for mobile apps (works on low-end devices too), and all modern web browsers (Chrome, Firefox, Safari, Edge) for the web dashboard. No iOS app currently, but web dashboard works on all devices.',
      },
    ],
  },
  {
    category: 'Support & Training',
    faqs: [
      {
        question: 'What kind of support do you provide?',
        answer: 'Support varies by plan: Self-Service gets community support via Discord and documentation. Assisted Self-Service includes email support and training. Managed Service includes priority support, dedicated account manager, and ongoing assistance.',
      },
      {
        question: 'Do you provide training?',
        answer: 'Yes! We provide comprehensive training including video tutorials, documentation, webinars, and hands-on workshops. Assisted and Managed plans include personalized training for your team.',
      },
      {
        question: 'How long does implementation take?',
        answer: 'It depends on complexity: Simple use cases can be set up in a few days. Our Launchpad program helps you pilot in 6-8 weeks. Full implementation with training typically takes 1-3 months. We work at your pace.',
      },
      {
        question: 'Can you help us migrate from our current system?',
        answer: 'Yes! We can help you migrate data from spreadsheets, KoboToolbox, ODK, or other systems. This is included in our Assisted and Managed plans. We ensure a smooth transition with minimal disruption.',
      },
    ],
  },
  {
    category: 'Use Cases & Sectors',
    faqs: [
      {
        question: 'What sectors does Avni work for?',
        answer: 'Avni is used across multiple sectors including Health & Nutrition, Education, Agriculture, Livelihood & Skills, Social Welfare, Water & Sanitation, Legal Aid, and more. If you have field-based programs, Avni can help!',
      },
      {
        question: 'Can Avni handle multiple programs?',
        answer: 'Yes! You can run multiple programs in a single Avni instance. Each program can have its own forms, workflows, users, and reports. This makes it cost-effective for organizations with diverse programs.',
      },
      {
        question: 'Is Avni suitable for government partnerships?',
        answer: 'Absolutely! Many of our partners work with government programs. Avni is recognized in India\'s Economic Survey and is a Digital Public Good (DPG). We support government reporting requirements and integration needs.',
      },
      {
        question: 'Who is already using Avni?',
        answer: 'Over 50 NGOs use Avni including Azim Premji Foundation, Goonj, Save the Children, Jan Swasthya Sahyog, SEWA Rural, and many more. We serve 8,000+ users managing 11+ lakh beneficiaries across India.',
      },
    ],
  },
];

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8">
              Find answers to common questions about Avni
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-neutral-600">No FAQs found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const id = `${categoryIndex}-${faqIndex}`;
                        const isOpen = openItems[id];

                        return (
                          <div
                            key={id}
                            className="border border-neutral-200 rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() => toggleItem(id)}
                              className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                            >
                              <span className="text-lg font-semibold text-neutral-900 pr-4">
                                {faq.question}
                              </span>
                              <ChevronDown
                                className={`h-5 w-5 text-neutral-500 flex-shrink-0 transition-transform ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              We're here to help! Reach out to our team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg">
                Contact Us
              </a>
              <a href="/demo" className="btn-secondary text-lg">
                Try Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
