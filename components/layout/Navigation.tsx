'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Features', href: '/features' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { 
    name: 'Company', 
    href: '#',
    submenu: [
      { name: 'Avni Presence', href: '/india-map' },
      { name: 'Team', href: '/team' },
      { name: 'Events', href: '/events' },
      { name: 'Demo', href: '/demo' },
    ]
  },
  { 
    name: 'Resources', 
    href: '#', 
    submenu: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: 'https://avni.readme.io', external: true },
      { name: 'FAQs', href: '/faqs' },
    ]
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  };

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
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 text-neutral-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 animate-fade-in"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )
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
