'use client';

import { Heart, GraduationCap, Sprout, Shield, Briefcase, Scale } from 'lucide-react';

const sectors = [
  { icon: Heart, name: 'Health & Wellbeing' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Sprout, name: 'Agriculture' },
  { icon: Shield, name: 'Welfare & Social Security' },
  { icon: Briefcase, name: 'Livelihood & Skills' },
  { icon: Scale, name: 'Legal Aid' },
];

export default function Sectors() {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Sectors We Serve</h2>
          <p className="section-subheading">
            Trusted across diverse sectors for social impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-3">
                  <Icon className="h-7 w-7 text-primary-500" />
                </div>
                <div className="text-sm font-semibold text-neutral-900">{sector.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
