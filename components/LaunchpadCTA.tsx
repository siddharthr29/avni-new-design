import Link from 'next/link';

export default function LaunchpadCTA() {
  return (
    <div className="my-12 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          🚀 Join Avni Launchpad Today!
        </h3>
        <p className="text-xl text-white/95 mb-8">
          Limited spots available - Transform your NGO in just 30 days
        </p>
        
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSduE4C-ZidCEZKlAsGB70wfsLjMhRwHU5-7i4-WYOmrln23DA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary-600 px-12 py-5 rounded-xl text-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-200 hover:bg-primary-50"
        >
          ✨ APPLY NOW - IT'S FREE! ✨
        </a>
        
        <p className="text-white/90 text-lg mt-6 font-semibold">
          ⏰ Only 10 spots left in this cohort!
        </p>
        
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap justify-center gap-6 text-white/95">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="font-semibold">95% Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💯</span>
            <span className="font-semibold">100% Free</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">30-Day Timeline</span>
          </div>
        </div>
      </div>
    </div>
  );
}
