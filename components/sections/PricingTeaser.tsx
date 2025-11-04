'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const highlights = [
  'Non-profit pricing for non-profits',
  'Transparent, predictable costs',
  'No hidden fees',
  'Free trial available',
];

export default function PricingTeaser() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Affordable Pricing
            </h2>
            <p className="text-xl text-neutral-700 mb-8">
              Up to 70% cheaper than alternatives
            </p>

            <div className="bg-white rounded-xl p-6 mb-8 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-neutral-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="text-5xl font-bold text-primary-500 mb-2">
                Starting at ₹7,000<span className="text-2xl text-neutral-600">/month</span>
              </div>
              <p className="text-neutral-600">For managed implementations</p>
            </div>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 btn-primary text-lg group"
            >
              View Pricing Details
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
