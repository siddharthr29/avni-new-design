'use client';

import { Quote } from 'lucide-react';

const stats = [
  { value: '50+', label: 'NGO Partners' },
  { value: '100K+', label: 'Data Points' },
  { value: '95%', label: 'Partners Continue' },
];

const testimonials = [
  {
    quote: "Avni transformed our field operations. The offline capability is a game-changer for our remote work.",
    author: "Dr. Rajesh Kumar",
    organization: "Rural Health Initiative",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=14B8A6&color=fff&size=128",
  },
  {
    quote: "Setup was incredibly simple. Our field workers adapted to it within days. Best decision we made.",
    author: "Priya Sharma",
    organization: "Education for All",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=8B5CF6&color=fff&size=128",
  },
  {
    quote: "The support team understands our challenges. They're always available and genuinely care about our success.",
    author: "Mohammed Ali",
    organization: "Community Development Trust",
    image: "https://ui-avatars.com/api/?name=Mohammed+Ali&background=F59E0B&color=fff&size=128",
  },
];

export default function SocialProof() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Our Partners Say</h2>
          <p className="section-subheading">
            Real feedback from organizations transforming their field operations
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-xl p-8 relative"
            >
              <Quote className="h-10 w-10 text-primary-200 mb-4" />
              <p className="text-lg text-neutral-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                  <div className="text-sm text-neutral-600">{testimonial.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
