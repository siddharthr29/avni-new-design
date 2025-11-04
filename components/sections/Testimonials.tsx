'use client';

import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maitri',
    role: 'Program Manager',
    organization: 'Health NGO',
    image: '/images/testimonials/maitri.webp',
    quote: 'Avni has transformed how we collect and manage field data. The offline-first approach is a game-changer for our remote health workers.',
    impact: '5000+ beneficiaries tracked',
  },
  {
    name: 'Noah',
    role: 'Field Coordinator',
    organization: 'Education Initiative',
    image: '/images/testimonials/noah.webp',
    quote: 'The ease of use and customization options in Avni allowed us to digitize our entire education program in just 2 weeks.',
    impact: '200+ schools digitized',
  },
  {
    name: 'Shobhaben',
    role: 'Community Health Worker',
    organization: 'Rural Health Program',
    image: '/images/testimonials/shobhaben.webp',
    quote: 'Even without internet, I can collect data from villages and sync later. Avni makes my work so much easier!',
    impact: '1000+ home visits tracked',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Avni Testimonials
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Hear from organizations making real impact with Avni
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-neutral-600 font-medium">NGO Partners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100K+</div>
              <div className="text-neutral-600 font-medium">Data Points</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-neutral-600 font-medium">Partners Continue</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary-400" />
                </div>

                {/* Quote Text */}
                <p className="text-neutral-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Impact */}
                <div className="mb-6 pb-6 border-b border-neutral-200">
                  <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.impact}
                  </div>
                </div>

                {/* Person Info */}
                <div className="flex items-center gap-4">
                  {/* Photo */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <div className="font-bold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                    <div className="text-sm text-primary-600 font-medium">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Quote Card */}
          <div className="mt-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/images/JSSCP_Ravi_Quote.png"
                  alt="Ravi from JSSCP"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <Quote className="h-12 w-12 text-white/30 mb-4" />
                <p className="text-xl md:text-2xl font-medium mb-4 leading-relaxed">
                  "Avni has revolutionized our field operations. The ability to work offline and the intuitive interface has made data collection seamless for our team."
                </p>
                <div>
                  <div className="font-bold text-lg">Ravi Kumar</div>
                  <div className="text-white/90">Program Director, JSSCP</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-6 text-lg">
              Join 50+ organizations transforming their field operations
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
