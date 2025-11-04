'use client';

import { Award, TrendingUp, Github, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const recognitions = [
  {
    icon: Award,
    title: 'Digital Public Good',
    description: 'UN-recognized open-source software that advances Sustainable Development Goals',
    link: 'https://digitalpublicgoods.net/',
    linkText: 'Learn about DPG',
  },
  {
    icon: TrendingUp,
    title: 'Economic Survey of India 2023',
    description: 'Featured in the Economic Survey of India for digital transformation impact',
    link: '#',
    linkText: 'Read More',
  },
  {
    icon: Github,
    title: 'Open Source',
    description: '500+ GitHub stars, 50+ contributors, fully transparent development',
    link: 'https://github.com/avniproject',
    linkText: 'View on GitHub',
  },
  {
    icon: Users,
    title: 'Active Community',
    description: 'Growing community of developers, NGOs, and social impact enthusiasts',
    link: '/community',
    linkText: 'Join Community',
  },
];

export default function Recognition() {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Recognized & Trusted</h2>
          <p className="section-subheading">
            Certified and recognized by leading organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {recognitions.map((recognition, index) => {
            const Icon = recognition.icon;
            return (
              <div
                key={recognition.title}
                className="bg-white border-2 border-primary-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {recognition.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">{recognition.description}</p>
                    <Link
                      href={recognition.link}
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold gap-2"
                      target={recognition.link.startsWith('http') ? '_blank' : undefined}
                      rel={recognition.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {recognition.linkText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
