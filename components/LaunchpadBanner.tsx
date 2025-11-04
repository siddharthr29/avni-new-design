'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Rocket, Clock, Zap, Users } from 'lucide-react';

export default function LaunchpadBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-21T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-4 px-4 relative overflow-hidden animate-gradient-x">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)] animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Message with FOMO */}
          <div className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full animate-pulse">
              <Zap className="h-4 w-4 text-yellow-300 fill-yellow-300" />
              <span className="text-xs font-bold uppercase tracking-wide">Limited Spots</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 flex-shrink-0 animate-bounce" />
                <p className="text-sm md:text-base font-bold">
                  🔥 <span className="hidden sm:inline">Last Chance!</span> Avni Launchpad Cohort 1
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <Users className="h-4 w-4" />
                <span className="font-semibold bg-white/20 px-2 py-0.5 rounded">Only 10 Spots Left!</span>
              </div>
            </div>
          </div>

          {/* Center: Countdown Timer */}
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg border-2 border-white/30">
            <Clock className="h-4 w-4 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="flex items-center gap-2 font-mono font-bold">
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl leading-none">{timeLeft.days}</span>
                <span className="text-[10px] uppercase opacity-80">Days</span>
              </div>
              <span className="text-xl animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase opacity-80">Hrs</span>
              </div>
              <span className="text-xl animate-pulse">:</span>
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase opacity-80">Min</span>
              </div>
              <span className="text-xl animate-pulse hidden sm:inline">:</span>
              <div className="flex-col items-center hidden sm:flex">
                <span className="text-xl md:text-2xl leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[10px] uppercase opacity-80">Sec</span>
              </div>
            </div>
          </div>

          {/* Right: CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/blog/2025-10-30-avni-launchpad-announcement"
              className="bg-white text-red-600 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-300 hover:text-red-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse whitespace-nowrap"
            >
              📖 Learn More
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
