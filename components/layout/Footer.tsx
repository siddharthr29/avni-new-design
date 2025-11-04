'use client';

import Link from 'next/link';
import { Github, Linkedin, Youtube, Facebook, Mail, MapPin } from 'lucide-react';
import { SOCIAL_LINKS, SOCIAL_LINKS_WITH_EMOJI } from '@/lib/constants/social-links';

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Demo', href: '/demo' },
    { name: 'Roadmap', href: '/roadmap' },
  ],
  resources: [
    { name: 'Documentation', href: 'https://avni.readme.io' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Events', href: '/events' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Roadmap', href: '/roadmap' },
  ],
};

const socialLinks = [
  { name: SOCIAL_LINKS_WITH_EMOJI.linkedin.label, href: SOCIAL_LINKS.linkedin, icon: Linkedin, emoji: SOCIAL_LINKS_WITH_EMOJI.linkedin.emoji },
  { name: SOCIAL_LINKS_WITH_EMOJI.twitter.label, href: SOCIAL_LINKS.twitter, icon: Facebook, emoji: SOCIAL_LINKS_WITH_EMOJI.twitter.emoji },
  { name: SOCIAL_LINKS_WITH_EMOJI.youtube.label, href: SOCIAL_LINKS.youtube, icon: Youtube, emoji: SOCIAL_LINKS_WITH_EMOJI.youtube.emoji },
  { name: SOCIAL_LINKS_WITH_EMOJI.facebook.label, href: SOCIAL_LINKS.facebook, icon: Facebook, emoji: SOCIAL_LINKS_WITH_EMOJI.facebook.emoji },
  { name: SOCIAL_LINKS_WITH_EMOJI.github.label, href: SOCIAL_LINKS.github, icon: Github, emoji: SOCIAL_LINKS_WITH_EMOJI.github.emoji },
  { name: SOCIAL_LINKS_WITH_EMOJI.discord.label, href: SOCIAL_LINKS.discord, icon: Github, emoji: SOCIAL_LINKS_WITH_EMOJI.discord.emoji },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Newsletter Section */}
      <div className="border-b border-neutral-800">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Avni Newsletter
            </h3>
            <p className="text-neutral-400 mb-6">
              📧 Monthly updates, case studies, and product news
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <Link
              href="/newsletter"
              className="inline-block mt-4 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              View Newsletter Archive →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">PRODUCT</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">CONNECT</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors group"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.emoji}</span>
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white">{social.name}</span>
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="mailto:avnipartnerships@samanvayfoundation.org" className="hover:text-white transition-colors">
                  avnipartnerships@samanvayfoundation.org
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  147, 1st Floor, 10th Cross Rd, Binnamangala,<br />
                  Hoysala Nagar, Indiranagar,<br />
                  Bengaluru, Karnataka 560038
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-500 text-center md:text-left">
              © {new Date().getFullYear()} Avni Project · Run by{' '}
              <a
                href="https://samanvayfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Samanvay Foundation
              </a>
              <br className="md:hidden" />
              <span className="hidden md:inline"> · </span>
              Built with ❤️ in India · Open Source · DPG Certified
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors text-sm"
              >
                Hosted on Netlify
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
