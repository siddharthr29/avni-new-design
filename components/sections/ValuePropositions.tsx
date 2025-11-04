'use client';

import { DollarSign, Heart, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: DollarSign,
    title: 'Affordable',
    stat: '70% cheaper',
    description: 'Non-profit pricing for non-profits. Way more affordable than alternatives.',
  },
  {
    icon: Heart,
    title: 'Sustainable',
    stat: '95% partners',
    description: 'Partners continue year-on-year. We walk alongside you in your journey.',
  },
  {
    icon: Zap,
    title: 'User-Friendly',
    stat: 'Setup in minutes',
    description: 'No coding required. Intuitive interface designed with field workers.',
  },
  {
    icon: Users,
    title: 'Local Support',
    stat: 'India-based',
    description: 'Same timezone, same context. Easily accessible team that understands ground realities.',
  },
];

export default function ValuePropositions() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Choose Avni?</h2>
          <p className="section-subheading">
            Built by non-profits for non-profits, with your success in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="card text-center group hover:-translate-y-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{value.title}</h3>
                <div className="text-2xl font-bold text-primary-500 mb-2">{value.stat}</div>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
