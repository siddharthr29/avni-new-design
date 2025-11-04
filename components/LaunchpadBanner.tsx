'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Rocket } from 'lucide-react';

export default function LaunchpadBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-3 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Rocket className="h-5 w-5 flex-shrink-0 animate-bounce" />
            <p className="text-sm md:text-base font-semibold">
              🚀 <span className="hidden sm:inline">Launching Soon!</span> Avni Launchpad - Accelerate your NGO's digital transformation journey
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/blog/avni-launchpad"
              className="bg-white text-secondary-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-secondary-50 transition-colors whitespace-nowrap"
            >
              Learn More
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-secondary-100 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
