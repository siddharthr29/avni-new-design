'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Features', href: '/features' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Avni Presence', href: '/india-map' },
  { name: 'Team', href: '/team' },
  { name: 'Events', href: '/events' },
  { name: 'Resources', href: '/blog', submenu: [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: 'https://avni.readme.io' },
    { name: 'FAQs', href: '/faqs' },
  ]},
  { name: 'Demo', href: '/demo' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/avni-logo-color.png" 
              alt="Avni" 
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/signup" className="btn-primary">
              Try for Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-neutral-700" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-500 transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/signup"
                className="btn-primary mx-4"
                onClick={() => setIsOpen(false)}
              >
                Try for Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
