import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Users, Stethoscope, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import AvniLogoSVG from '@/components/AvniLogoSVG';

export const metadata: Metadata = {
  title: 'Solutions | Avni Platform Use Cases',
  description: 'Discover how Avni can transform your field operations across surveys, case management, medical camps, and field service management.',
};

const solutions = [
  {
    icon: FileText,
    title: 'Surveys & Data Collection',
    description: 'Collect data offline, sync when connected. Support for all question types, skip logic, and validations.',
    features: [
      'Offline data collection',
      'All question types supported',
      'Skip logic and validations',
      'Multi-media capture',
      'Real-time sync',
      'Data quality checks',
    ],
    useCases: ['Baseline surveys', 'Impact assessments', 'Monitoring visits', 'Feedback collection'],
    image: '/images/survey-solution.png',
  },
  {
    icon: Users,
    title: 'Case Management',
    description: 'Track beneficiaries through their entire journey. Automated follow-ups, visit scheduling, and progress monitoring.',
    features: [
      'Beneficiary registration',
      'Visit scheduling',
      'Follow-up management',
      'Progress tracking',
      'Automated reminders',
      'Case history',
    ],
    useCases: ['Health programs', 'Social welfare', 'Education tracking', 'Livelihood programs'],
    image: '/images/case-management-solution.png',
  },
  {
    icon: Stethoscope,
    title: 'Medical Camps & Vans',
    description: 'Manage mobile health clinics, track patients, monitor health outcomes, and coordinate medical teams.',
    features: [
      'Patient registration',
      'Medical history tracking',
      'Treatment records',
      'Medicine inventory',
      'Camp scheduling',
      'Health analytics',
    ],
    useCases: ['Mobile health clinics', 'Vaccination drives', 'Health screenings', 'Medical outreach'],
    image: '/images/medical-camps-solution.png',
  },
  {
    icon: Truck,
    title: 'Field Service Management',
    description: 'Coordinate field teams, assign tasks, track progress in real-time, and optimize field operations.',
    features: [
      'Task assignment',
      'Team coordination',
      'Real-time tracking',
      'Route optimization',
      'Performance metrics',
      'Resource management',
    ],
    useCases: ['Field surveys', 'Distribution programs', 'Maintenance services', 'Community outreach'],
    image: '/images/field-service-solution.png',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Solutions for Every Use Case
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Flexible platform that adapts to your specific field operation needs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={solution.title}
            className={`py-16 ${isEven ? 'bg-white' : 'bg-neutral-50'}`}
          >
            <div className="container">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    {solution.title}
                  </h2>

                  <p className="text-lg text-neutral-600 mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">Common Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 btn-primary text-lg"
                  >
                    Try This Solution
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl shadow-lg flex items-center justify-center p-8">
                    <AvniLogoSVG size={200} className="opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss which solution fits your needs best
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
