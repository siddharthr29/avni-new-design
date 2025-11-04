'use client';

export default function PartnersMarquee() {
  const partners = [
    { name: 'SEWA Rural', logo: '/images/authority/sewa-rural.jpeg' },
    { name: 'Social Alpha', logo: '/images/SocialAlphaLogo.png' },
    { name: 'IHMP', logo: '/images/ihmp-logo.png' },
    { name: 'Tata Trusts', logo: '/images/tata_trusts-logo.png' },
    { name: 'Government of Maharashtra', logo: '/images/gov-mah-logo.png' },
    { name: 'UNICEF', logo: '/images/unicef-logo.png' },
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-200 overflow-hidden">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Trusted by Leading NGOs
          </h2>
          <p className="text-neutral-600">
            Join organizations making real impact with Avni
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-neutral-600">NGO Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100K+</div>
            <div className="text-neutral-600">Data Points</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-neutral-600">Partners Continue</div>
          </div>
        </div>

        {/* Animated Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
