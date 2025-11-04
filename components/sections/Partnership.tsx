'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const benefits = [
  'Partnership approach, not vendor relationship',
  '95% of partners continue year-on-year',
  'Continuous improvement based on your feedback',
  'Growing deeper and wider with you',
];

export default function Partnership() {
  return (
    <section className="section bg-primary-500 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built by Non-Profits, for Non-Profits
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-50 italic">
            "We don't just provide software, we walk alongside you in your digital transformation journey"
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-primary-500" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 group"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
