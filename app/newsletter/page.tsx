'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Dummy newsletter data
const newsletters = [
  {
    id: 1,
    title: 'Avni November 2024 Newsletter',
    description: 'Exciting updates on AI features, new partnerships, and community highlights from November.',
    date: '2024-11-01',
    author: 'Avni Team',
    image: '/images/newsletter-nov-2024.png',
    slug: 'november-2024',
  },
  {
    id: 2,
    title: 'Avni October 2024 Newsletter',
    description: 'October brought major improvements to offline sync, new case studies, and expanded reach.',
    date: '2024-10-01',
    author: 'Avni Team',
    image: '/images/newsletter-oct-2024.png',
    slug: 'october-2024',
  },
  {
    id: 3,
    title: 'Avni September 2024 Newsletter',
    description: 'September highlights: Launchpad program launch, 5 new NGO partners, and feature updates.',
    date: '2024-09-01',
    author: 'Avni Team',
    image: '/images/newsletter-sep-2024.png',
    slug: 'september-2024',
  },
  {
    id: 4,
    title: 'Avni August 2024 Newsletter',
    description: 'August updates: Enhanced analytics dashboard, mobile app improvements, and success stories.',
    date: '2024-08-01',
    author: 'Avni Team',
    image: '/images/newsletter-aug-2024.png',
    slug: 'august-2024',
  },
  {
    id: 5,
    title: 'Avni July 2024 Newsletter',
    description: 'July roundup: New integrations, community events, and platform performance improvements.',
    date: '2024-07-01',
    author: 'Avni Team',
    image: '/images/newsletter-jul-2024.png',
    slug: 'july-2024',
  },
  {
    id: 6,
    title: 'Avni June 2024 Newsletter',
    description: 'June updates: Expanded language support, new training resources, and partner spotlights.',
    date: '2024-06-01',
    author: 'Avni Team',
    image: '/images/newsletter-jun-2024.png',
    slug: 'june-2024',
  },
  {
    id: 7,
    title: 'Avni May 2024 Newsletter',
    description: 'May highlights: Platform security enhancements, new features, and community growth.',
    date: '2024-05-01',
    author: 'Avni Team',
    image: '/images/newsletter-may-2024.png',
    slug: 'may-2024',
  },
  {
    id: 8,
    title: 'Avni April 2024 Newsletter',
    description: 'April updates: Spring feature releases, NGO success stories, and upcoming events.',
    date: '2024-04-01',
    author: 'Avni Team',
    image: '/images/newsletter-apr-2024.png',
    slug: 'april-2024',
  },
  {
    id: 9,
    title: 'Avni March 2024 Newsletter',
    description: 'March roundup: Q1 achievements, new partnerships, and product roadmap updates.',
    date: '2024-03-01',
    author: 'Avni Team',
    image: '/images/newsletter-mar-2024.png',
    slug: 'march-2024',
  },
  {
    id: 10,
    title: 'Avni February 2024 Newsletter',
    description: 'February updates: Valentine for NGOs - special features and community love stories.',
    date: '2024-02-01',
    author: 'Avni Team',
    image: '/images/newsletter-feb-2024.png',
    slug: 'february-2024',
  },
  {
    id: 11,
    title: 'Avni January 2024 Newsletter',
    description: 'New Year, New Features: Starting 2024 strong with major platform updates.',
    date: '2024-01-01',
    author: 'Avni Team',
    image: '/images/newsletter-jan-2024.png',
    slug: 'january-2024',
  },
  {
    id: 12,
    title: 'Avni December 2023 Newsletter',
    description: 'Year-end review: 2023 achievements, impact stories, and looking ahead to 2024.',
    date: '2023-12-01',
    author: 'Avni Team',
    image: '/images/newsletter-dec-2023.png',
    slug: 'december-2023',
  },
];

const ITEMS_PER_PAGE = 10;

export default function NewsletterPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsletters.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNewsletters = newsletters.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              📧 Newsletter Archive
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Stay updated with monthly insights, feature releases, and community stories
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {currentNewsletters.map((newsletter) => (
                <Link
                  key={newsletter.id}
                  href={`/newsletter/${newsletter.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Banner Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 opacity-10"></div>
                    <div className="relative z-10 text-center p-8">
                      <div className="text-6xl mb-4">📧</div>
                      <div className="text-2xl font-bold text-neutral-800">
                        {new Date(newsletter.date).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {newsletter.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {newsletter.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(newsletter.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="text-neutral-600 font-medium">
                        By {newsletter.author}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Read Newsletter
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      currentPage === page
                        ? 'bg-primary-600 text-white'
                        : 'border border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Subscribe CTA */}
            <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Get monthly updates on features, success stories, and community highlights delivered to your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
