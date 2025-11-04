'use client';

import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              We're here to help you transform your field operations
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="trial">Start Free Trial</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a
                      href="mailto:avnipartnerships@samanvayfoundation.org"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      avnipartnerships@samanvayfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                    <p className="text-neutral-600">
                      Bangalore, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Community</h3>
                    <a
                      href="https://discord.gg/4pcgcQW8pk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Join our Discord
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/demo" className="text-primary-600 hover:text-primary-700 font-semibold">
                      → Try Demo
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="text-primary-600 hover:text-primary-700 font-semibold">
                      → View Pricing
                    </a>
                  </li>
                  <li>
                    <a href="https://avni.readme.io" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">
                      → Documentation
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/avniproject" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">
                      → GitHub
                    </a>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-neutral-50 rounded-lg border-l-4 border-primary-500">
                <p className="text-sm text-neutral-700">
                  <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">How do I get started?</h3>
                <p className="text-neutral-600">
                  You can start with our free trial or request a demo. We'll guide you through the setup process.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Do you offer training?</h3>
                <p className="text-neutral-600">
                  Yes! We offer comprehensive training as part of our Assisted Self-Service and Managed plans.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Is support available?</h3>
                <p className="text-neutral-600">
                  We provide community support for all users and priority support for paid plans.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-2">Can I customize Avni?</h3>
                <p className="text-neutral-600">
                  Absolutely! Avni is highly customizable and open source. You can configure it to your exact needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
