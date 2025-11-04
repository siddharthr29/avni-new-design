'use client';

import { Brain, WifiOff, Clock, Heart, MapPin, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Get intelligent insights from your data with built-in AI capabilities.',
  },
  {
    icon: WifiOff,
    title: 'Offline-First',
    description: 'Works seamlessly without internet. Sync when connected.',
  },
  {
    icon: Clock,
    title: 'Setup in Minutes',
    description: 'No coding required. Configure your forms and workflows quickly.',
  },
  {
    icon: Heart,
    title: 'Human-Centered',
    description: 'Designed with field workers in mind. Intuitive and easy to use.',
  },
  {
    icon: MapPin,
    title: 'Ground Reality',
    description: 'Built from real-world NGO experiences and requirements.',
  },
  {
    icon: Globe,
    title: 'Made in India',
    description: 'For the world. Open source and globally accessible.',
  },
];

export default function Features() {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Built for Ground Realities</h2>
          <p className="section-subheading">
            Features that actually work in the field, not just in theory
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
