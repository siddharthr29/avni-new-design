import { Metadata } from 'next';
import { CheckCircle, Circle, Clock, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roadmap | Avni Project Development Plans',
  description: 'See what we\'re building next for Avni. Our product roadmap and upcoming features.',
};

const roadmapItems = [
  {
    quarter: 'Q4 2024',
    status: 'completed',
    items: [
      {
        title: 'AI-Powered Insights',
        description: 'Launched AI capabilities for automated data analysis and insights generation',
        category: 'Feature',
      },
      {
        title: 'Enhanced Reporting',
        description: 'New dashboard widgets and custom report builder',
        category: 'Feature',
      },
      {
        title: 'Performance Improvements',
        description: 'Faster sync, reduced app size, better offline performance',
        category: 'Enhancement',
      },
    ],
  },
  {
    quarter: 'Q1 2025',
    status: 'in-progress',
    items: [
      {
        title: 'Avni Launchpad Program',
        description: 'Cohort-based program to help NGOs pilot Avni with guided support',
        category: 'Program',
      },
      {
        title: 'Multi-language Support Enhancement',
        description: 'Adding support for 10+ Indian regional languages',
        category: 'Feature',
      },
      {
        title: 'Advanced Form Builder',
        description: 'Drag-and-drop form builder with more question types',
        category: 'Feature',
      },
      {
        title: 'Mobile App Redesign',
        description: 'Refreshed UI/UX for better usability and modern design',
        category: 'Enhancement',
      },
    ],
  },
  {
    quarter: 'Q2 2025',
    status: 'planned',
    items: [
      {
        title: 'WhatsApp Integration',
        description: 'Send notifications and collect data via WhatsApp',
        category: 'Feature',
      },
      {
        title: 'Automated Workflows',
        description: 'Create automated workflows and triggers based on data',
        category: 'Feature',
      },
      {
        title: 'Video Calling Integration',
        description: 'Built-in video calling for remote consultations',
        category: 'Feature',
      },
      {
        title: 'Advanced Analytics Dashboard',
        description: 'ML-powered predictive analytics and trend analysis',
        category: 'Feature',
      },
    ],
  },
  {
    quarter: 'Q3 2025',
    status: 'planned',
    items: [
      {
        title: 'iOS App',
        description: 'Native iOS app for iPhone and iPad users',
        category: 'Platform',
      },
      {
        title: 'API Marketplace',
        description: 'Connect Avni with third-party tools and services',
        category: 'Integration',
      },
      {
        title: 'Offline Maps',
        description: 'Download maps for offline use in field operations',
        category: 'Feature',
      },
      {
        title: 'Voice-based Data Entry',
        description: 'Collect data using voice commands in local languages',
        category: 'Feature',
      },
    ],
  },
  {
    quarter: 'Q4 2025',
    status: 'planned',
    items: [
      {
        title: 'Blockchain Integration',
        description: 'Immutable audit trails for sensitive data',
        category: 'Feature',
      },
      {
        title: 'Advanced Security Features',
        description: 'Biometric authentication, data masking, field-level encryption',
        category: 'Security',
      },
      {
        title: 'Collaborative Features',
        description: 'Real-time collaboration, comments, and team coordination',
        category: 'Feature',
      },
    ],
  },
];

const statusConfig = {
  completed: {
    label: 'Completed',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  'in-progress': {
    label: 'In Progress',
    icon: Clock,
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
  },
  planned: {
    label: 'Planned',
    icon: Circle,
    color: 'text-neutral-400',
    bgColor: 'bg-neutral-50',
  },
};

const categoryColors: Record<string, string> = {
  Feature: 'bg-blue-100 text-blue-700',
  Enhancement: 'bg-green-100 text-green-700',
  Platform: 'bg-purple-100 text-purple-700',
  Integration: 'bg-orange-100 text-orange-700',
  Security: 'bg-red-100 text-red-700',
  Program: 'bg-primary-100 text-primary-700',
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-6">
              <Rocket className="h-5 w-5" />
              Product Roadmap
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              What We're Building Next
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Our vision for making Avni even better for NGOs and social sector organizations
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {roadmapItems.map((quarter, index) => {
                const config = statusConfig[quarter.status as keyof typeof statusConfig];
                const Icon = config.icon;

                return (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index < roadmapItems.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-neutral-200 -mb-12" />
                    )}

                    {/* Quarter Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${config.bgColor} flex items-center justify-center relative z-10`}>
                        <Icon className={`h-6 w-6 ${config.color}`} />
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-neutral-900">{quarter.quarter}</h2>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${config.bgColor} ${config.color}`}>
                            {config.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="ml-18 grid md:grid-cols-2 gap-4">
                      {quarter.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-bold text-neutral-900 flex-1">
                              {item.title}
                            </h3>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${categoryColors[item.category] || 'bg-neutral-100 text-neutral-700'}`}>
                              {item.category}
                            </span>
                          </div>
                          <p className="text-neutral-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Community Input */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4 text-center">
                Help Shape Our Roadmap
              </h2>
              <p className="text-lg text-neutral-600 mb-8 text-center">
                We build Avni with and for the community. Your feedback drives our priorities.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Share Ideas</h3>
                  <p className="text-neutral-600 text-sm">
                    Suggest features you'd like to see in Avni
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-4">
                    <span className="text-2xl">🗳️</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Vote on Features</h3>
                  <p className="text-neutral-600 text-sm">
                    Help us prioritize what matters most
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Join Beta</h3>
                  <p className="text-neutral-600 text-sm">
                    Test new features before they launch
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://github.com/orgs/avniproject/projects/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Don't wait for future features - Avni is powerful today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="btn-primary text-lg">
                Try Demo
              </a>
              <a href="/contact" className="btn-secondary text-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
