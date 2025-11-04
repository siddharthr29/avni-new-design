'use client';

import Link from 'next/link';
import { FileText, Users, Stethoscope, Truck, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: FileText,
    title: 'Surveys & Data Collection',
    description: 'Collect data offline, sync when connected. All question types supported.',
    href: '/solutions/surveys',
  },
  {
    icon: Users,
    title: 'Case Management',
    description: 'Track beneficiaries through their journey. Automated follow-ups and scheduling.',
    href: '/solutions/case-management',
  },
  {
    icon: Stethoscope,
    title: 'Medical Camps & Vans',
    description: 'Manage mobile health clinics, track patients, and monitor health outcomes.',
    href: '/solutions/medical-camps',
  },
  {
    icon: Truck,
    title: 'Field Service Management',
    description: 'Coordinate field teams, assign tasks, and track progress in real-time.',
    href: '/solutions/field-service',
  },
];

export default function Solutions() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Solutions by Use Case</h2>
          <p className="section-subheading">
            Flexible platform that adapts to your specific needs
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="group bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">{solution.title}</h3>
                    <p className="text-lg text-neutral-600">{solution.description}</p>
                  </div>
                  <Link
                    href={solution.href}
                    className="flex-shrink-0 text-primary-500 hover:text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
