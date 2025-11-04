import { Metadata } from 'next';
import Link from 'next/link';
import { 
  WifiOff, Brain, Smartphone, BarChart3, Users, Shield, 
  Clock, Zap, Globe, Database, FileText, Settings,
  CheckCircle, CheckCircle2, ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features | Avni Platform Capabilities',
  description: 'Explore Avni\'s powerful features: offline-first, AI-powered insights, customizable forms, automated workflows, and comprehensive reporting.',
};

const features = [
  {
    icon: WifiOff,
    title: 'Offline-First Architecture',
    description: 'Work seamlessly without internet connectivity. All features available offline, sync automatically when connected.',
    benefits: ['No internet dependency', 'Automatic sync', 'Data integrity', 'Works in remote areas'],
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get intelligent insights from your data with built-in AI capabilities and predictive analytics.',
    benefits: ['Smart recommendations', 'Pattern detection', 'Predictive analytics', 'Automated insights'],
  },
  {
    icon: FileText,
    title: 'Powerful Forms',
    description: 'Create complex forms with all data types, skip logic, validations, and calculated fields.',
    benefits: ['All question types', 'Skip logic', 'Validations', 'Calculated fields', 'Multi-media support'],
  },
  {
    icon: Users,
    title: 'Case Management',
    description: 'Track beneficiaries through their entire journey with comprehensive case management.',
    benefits: ['Beneficiary tracking', 'Visit scheduling', 'Follow-up management', 'Progress monitoring'],
  },
  {
    icon: Clock,
    title: 'Work Schedule Management',
    description: 'Automated visit scheduling with manual control. Dashboard to manage all your work.',
    benefits: ['Auto scheduling', 'Manual override', 'Task management', 'Calendar view'],
  },
  {
    icon: BarChart3,
    title: 'Advanced Reporting',
    description: 'Monitor, analyze, and generate reports. Download data extracts. Built-in Metabase integration.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Data exports', 'Analytics'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Intuitive mobile app designed for field workers. Easy to use, even with minimal training.',
    benefits: ['User-friendly', 'Touch optimized', 'Low bandwidth', 'Works on basic phones'],
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with role-based access control and data encryption.',
    benefits: ['Data encryption', 'Role-based access', 'Audit logs', 'GDPR compliant'],
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'No coding required. Configure your forms and workflows in minutes, not months.',
    benefits: ['No-code platform', 'Quick deployment', 'Easy configuration', 'Template library'],
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Support for multiple languages. Easy translation management for your team.',
    benefits: ['20+ languages', 'Easy translation', 'RTL support', 'Unicode support'],
  },
  {
    icon: Database,
    title: 'Centralized Database',
    description: 'All your data in one place. Secure cloud storage with automatic backups.',
    benefits: ['Cloud storage', 'Auto backups', 'Data security', 'Easy access'],
  },
  {
    icon: Settings,
    title: 'Highly Customizable',
    description: 'Customize everything - forms, workflows, reports, and user interface.',
    benefits: ['Custom fields', 'Custom workflows', 'Custom reports', 'Branding options'],
  },
];

const useCases = [
  {
    title: 'Health Programs',
    description: 'Maternal health, child nutrition, disease surveillance, and community health worker management.',
    icon: '🏥',
  },
  {
    title: 'Education',
    description: 'Student tracking, teacher training, school assessments, and learning outcome monitoring.',
    icon: '📚',
  },
  {
    title: 'Agriculture',
    description: 'Farmer registration, crop monitoring, input distribution, and market linkages.',
    icon: '🌾',
  },
  {
    title: 'Social Welfare',
    description: 'Beneficiary management, scheme enrollment, service delivery, and impact tracking.',
    icon: '🤝',
  },
  {
    title: 'Water Management',
    description: 'Water body tracking, quality monitoring, maintenance schedules, and community engagement.',
    icon: '💧',
  },
  {
    title: 'Livelihood',
    description: 'Skills training, job placement, entrepreneurship support, and income tracking.',
    icon: '💼',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Powerful Features for Field Operations
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Everything you need to collect, manage, and analyze field data effectively
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-4">
                    <Icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Built for Diverse Use Cases
              </h2>
              <p className="text-xl text-neutral-600">
                Flexible platform that adapts to your sector and needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{useCase.title}</h3>
                  <p className="text-neutral-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Technical Specifications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mobile App */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Mobile App</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Android 5.0+</strong> - Works on older devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Low-end friendly</strong> - Minimal storage needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>2G/3G optimized</strong> - Works on slow networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Play Store</strong> - Easy to download</span>
                  </li>
                </ul>
              </div>

              {/* Web Application */}
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary-600 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Web Application</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Modern browsers</strong> - Chrome, Firefox, Safari</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Responsive</strong> - Works on any screen size</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Admin dashboard</strong> - Full control panel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Report builder</strong> - Custom analytics</span>
                  </li>
                </ul>
              </div>

              {/* Data & Security */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Data & Security</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Encrypted</strong> - End-to-end protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Access control</strong> - Role-based permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Audit logs</strong> - Track all changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>GDPR compliant</strong> - Privacy first</span>
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">Integration</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>REST API</strong> - Easy integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Webhooks</strong> - Real-time notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>CSV import/export</strong> - Data portability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700"><strong>Custom extensions</strong> - Flexible platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Try Avni today and see how it can transform your field operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors">
                Try Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
