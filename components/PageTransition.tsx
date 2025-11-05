'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-sm flex items-center justify-center animate-fade-out">
      <div className="animate-bounce-slow">
        <img 
          src="/images/avni-logo-color.png" 
          alt="Loading..." 
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
}
