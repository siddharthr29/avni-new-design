'use client';

import Link from 'next/link';
import { ArrowRight, Play, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section bg-gradient-to-br from-primary-500 to-primary-600 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your Field Operations?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-50">
            Start your journey with Avni today. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 group"
            >
              Try for Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              <Play className="h-5 w-5" />
              Book a Demo
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              Contact Sales
            </Link>
          </div>

          <div className="text-primary-100">
            <p className="text-sm">
              Questions? Email us at{' '}
              <a href="mailto:hello@avniproject.org" className="underline hover:text-white transition-colors">
                hello@avniproject.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
