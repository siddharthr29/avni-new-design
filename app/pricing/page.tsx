import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Affordable Plans for Non-Profits',
  description: 'Transparent, affordable pricing for NGOs. Up to 70% cheaper than alternatives. Free trial available.',
};

const plans = [
  {
    name: 'Self-Service',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      'Develop your app and reports yourself',
      'Use online community support channel',
      'One month of free hosting',
      'Access to documentation',
    ],
    hosting: [
      'Up to 20 users, 5k forms/month, 500GB: ₹10,000/month',
      'Up to 100 users, 10k forms/month, 1TB: ₹15,000/month',
      'More than 100 users: Custom quote',
    ],
    cta: 'Try for Free',
    ctaLink: '/signup?source=trial',
    popular: false,
  },
  {
    name: 'Assisted Self-Service',
    price: '₹40,000',
    description: 'Get expert guidance',
    features: [
      '12 hours of live training on Avni platform',
      '8 hours of consulting support over 1 month',
      'One month of free hosting after training',
      'Priority support',
    ],
    hosting: [
      'Up to 20 users, 5k forms/month, 200GB: ₹10,000/month',
      'Up to 100 users, 10k forms/month, 1TB: ₹15,000/month',
      'More than 100 users: Custom quote',
    ],
    cta: 'Sign Up',
    ctaLink: '/signup?source=training',
    popular: true,
  },
  {
    name: 'Avni Managed',
    price: 'Custom',
    description: 'Full-service implementation',
    features: [
      'We help you build Avni to your needs',
      'Support for migration from existing systems',
      'Integration with other systems',
      'Train your master trainers',
    ],
    hosting: [
      'Up to 20 users, 5k forms/month, 200GB: ₹7,000/month',
      'Up to 100 users, 10k forms/month, 1TB: ₹10,000/month',
      'More than 100 users: Custom quote',
    ],
    cta: 'Post Enquiry',
    ctaLink: '/signup?source=custom',
    popular: false,
  },
];

const faqs = [
  {
    question: 'What is included in Avni Cloud Hosting?',
    answer: 'Hosting includes: application hosting, regular upgrades, data backups, PlayStore maintenance, priority support, and pre-installed Metabase or Superset (your choice).',
  },
  {
    question: 'Can I host Avni myself?',
    answer: 'Yes! Avni is fully open source. You can download and host it yourself for free. Our hosting plans are for those who prefer managed hosting.',
  },
  {
    question: 'What happens after the free trial?',
    answer: 'After your free trial, you can choose to continue with a paid hosting plan or host Avni yourself. There\'s no obligation to continue.',
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer: 'All our pricing is already designed for non-profits and is 70% cheaper than commercial alternatives. We are a non-profit ourselves!',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Transparent, Affordable Pricing
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8">
              Up to 70% cheaper than alternatives. Built by non-profits, for non-profits.
            </p>
            <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-800 px-6 py-3 rounded-full font-semibold">
              <Check className="h-5 w-5" />
              Free trial available
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-neutral-900 mb-2">{plan.price}</div>
                    {plan.price !== 'Free' && plan.price !== 'Custom' && (
                      <div className="text-sm text-neutral-600">One-time payment</div>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="font-semibold text-neutral-900 mb-3">What's Included:</div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 p-4 bg-neutral-50 rounded-lg">
                    <div className="font-semibold text-neutral-900 mb-2 text-sm">
                      Avni Cloud Hosting (After first month):
                    </div>
                    <ul className="space-y-1 text-sm text-neutral-600">
                      {plan.hosting.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={plan.ctaLink}
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-neutral-600 mt-8 italic">
            *All prices are exclusive of taxes
          </p>
        </div>
      </section>

      {/* App Development Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">App Development</h2>
            <p className="text-lg text-neutral-700 mb-8">
              When you want to use Avni for your organization, you first need to configure it to suit your needs. You also need to define reports on the built-in analytics platform. We call this "App Development". There are a few ways you could go about it:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Self-Service</h3>
                <p className="text-neutral-700">
                  Simple projects are usually amenable to self-service. A typical simple project would have less than 5 forms that have relatively straightforward rules. For example, if you want to replicate something from Google Forms, you would be able to do it on your own.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Assisted Self-Service</h3>
                <p className="text-neutral-700">
                  If your project is simple, you might still want to go through an Avni training to get a good grasp of how to use it to your advantage. We've noticed new users of Avni have trouble using it directly without some hand-holding. Training is included in the Assisted self-service option.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Fully Serviced Implementation</h3>
                <p className="text-neutral-700">
                  If your project is complex, or if you don't have someone who is either free or capable of building Avni, then it is best to go with a Fully Serviced Implementation (Avni Managed plan).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Hosting Details */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Avni Cloud Hosting</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Once you develop your application, it can be hosted on the Avni cloud. See the plans above to get a better understanding of your options.
            </p>

            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {[
                  'Hosting of your application on the Avni cloud',
                  'Regular upgrades of Avni and other components',
                  'Data backups',
                  'Maintenance of the Avni application on the PlayStore',
                  'Priority support on end-user applications',
                  'Pre-installed community version of Metabase or Superset (choose one)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{faq.question}</h3>
                      <p className="text-neutral-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Choose the plan that works best for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors">
                Start Free Trial
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
