import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Construction, Calendar, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coming Soon | Avni Project',
  description: 'This page is under construction. Check back soon!',
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50 flex items-center justify-center py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Avni Logo SVG */}
          <div className="mb-8 flex justify-center">
            <svg width="120" height="120" viewBox="0 0 100 100" className="animate-pulse">
              <rect x="10" y="10" width="35" height="35" rx="17.5" fill="#14B8A6" opacity="0.8"/>
              <rect x="55" y="10" width="35" height="35" rx="17.5" fill="#14B8A6" opacity="0.6"/>
              <rect x="10" y="55" width="35" height="35" rx="17.5" fill="#14B8A6" opacity="0.6"/>
              <rect x="55" y="55" width="35" height="35" rx="17.5" fill="#14B8A6" opacity="0.8"/>
            </svg>
          </div>

          {/* Construction Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full">
              <Construction className="h-12 w-12 text-primary-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Coming Soon
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
            We're working hard to bring you something amazing. This page is currently under construction.
          </p>

          {/* Features Coming */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-bold text-neutral-900 mb-2">New Features</h3>
              <p className="text-sm text-neutral-600">Exciting updates on the way</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Bell className="h-8 w-8 text-secondary-600 mx-auto mb-3" />
              <h3 className="font-bold text-neutral-900 mb-2">Stay Notified</h3>
              <p className="text-sm text-neutral-600">We'll let you know when it's ready</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Construction className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-neutral-900 mb-2">In Progress</h3>
              <p className="text-sm text-neutral-600">Building something great</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-md mx-auto">
            <div className="bg-neutral-200 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full rounded-full animate-pulse" style={{ width: '65%' }}></div>
            </div>
            <p className="text-sm text-neutral-500 mt-3">Work in Progress...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
