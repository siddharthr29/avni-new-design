import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, ExternalLink, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events | Avni Community Gatherings',
  description: 'Join us at upcoming Avni events, webinars, and community meetups. Connect with other NGOs using Avni.',
};

const upcomingEvents = [
  {
    title: 'Avni User Conference 2025',
    date: 'March 15, 2025',
    time: '10:00 AM - 5:00 PM IST',
    location: 'Bangalore, India',
    type: 'In-Person',
    description: 'Annual gathering of Avni users to share experiences, learn best practices, and network with other NGOs.',
    attendees: '100+ expected',
    registrationLink: '#',
    featured: true,
  },
  {
    title: 'Webinar: Getting Started with Avni',
    date: 'February 20, 2025',
    time: '3:00 PM - 4:30 PM IST',
    location: 'Online',
    type: 'Webinar',
    description: 'Learn the basics of Avni platform, from setup to deployment. Perfect for new users.',
    attendees: 'Unlimited',
    registrationLink: '#',
    featured: false,
  },
  {
    title: 'Workshop: Advanced Reporting in Avni',
    date: 'February 28, 2025',
    time: '2:00 PM - 5:00 PM IST',
    location: 'Online',
    type: 'Workshop',
    description: 'Deep dive into Avni\'s reporting capabilities, custom dashboards, and data visualization.',
    attendees: '50 seats',
    registrationLink: '#',
    featured: false,
  },
];

const pastEvents = [
  {
    title: 'Avni Community Meetup - Delhi',
    date: 'January 10, 2025',
    location: 'Delhi, India',
    attendees: '45 attendees',
  },
  {
    title: 'Webinar: Offline Data Collection Best Practices',
    date: 'December 15, 2024',
    location: 'Online',
    attendees: '120 attendees',
  },
  {
    title: 'Avni User Conference 2024',
    date: 'November 20, 2024',
    location: 'Bangalore, India',
    attendees: '85 attendees',
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Avni Events
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Join our community at upcoming events, webinars, and workshops
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12">
              Upcoming Events
            </h2>

            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                    event.featured ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  {event.featured && (
                    <div className="bg-primary-500 text-white px-6 py-2 text-sm font-semibold">
                      ⭐ Featured Event
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                          {event.type}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                          {event.title}
                        </h3>
                        
                        <p className="text-lg text-neutral-600 mb-6">
                          {event.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-start gap-3">
                            <Calendar className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-neutral-900">{event.date}</div>
                              <div className="text-sm text-neutral-600">{event.time}</div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-neutral-900">{event.location}</div>
                              <div className="text-sm text-neutral-600">{event.attendees}</div>
                            </div>
                          </div>
                        </div>

                        <a
                          href={event.registrationLink}
                          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                          Register Now
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>

                      {/* Event Image Placeholder */}
                      <div className="lg:w-64 h-48 lg:h-auto bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                        <Calendar className="h-20 w-20 text-primary-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12">
              Past Events
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Calendar className="h-5 w-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-900">{event.title}</div>
                      <div className="text-sm text-neutral-600 mt-1">{event.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Users className="h-4 w-4" />
                    {event.attendees}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter to get notified about new events and webinars
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Host Event CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Want to Host an Avni Event?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              We support community-led events and meetups. Get in touch to organize one in your city!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
