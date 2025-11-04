'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { MapPin, Users, TrendingUp } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const IndiaMap = dynamic(() => import('@/components/IndiaMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-primary-50 rounded-2xl">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-neutral-600">Loading map...</p>
      </div>
    </div>
  ),
});

const statesData = [
  {
    name: 'Maharashtra',
    ngos: 12,
    beneficiaries: '2.5L+',
    programs: ['Health', 'Education', 'Water'],
    coordinates: [19.7515, 75.7139] as [number, number],
  },
  {
    name: 'Odisha',
    ngos: 8,
    beneficiaries: '1.8L+',
    programs: ['Nutrition', 'Child Welfare'],
    coordinates: [20.9517, 85.0985] as [number, number],
  },
  {
    name: 'Karnataka',
    ngos: 10,
    beneficiaries: '2L+',
    programs: ['Water', 'Livelihood', 'Urban'],
    coordinates: [15.3173, 75.7139] as [number, number],
  },
  {
    name: 'Rajasthan',
    ngos: 6,
    beneficiaries: '1.2L+',
    programs: ['Education', 'Rural Development'],
    coordinates: [27.0238, 74.2179] as [number, number],
  },
  {
    name: 'Gujarat',
    ngos: 5,
    beneficiaries: '80K+',
    programs: ['Agriculture', 'Women Empowerment'],
    coordinates: [22.2587, 71.1924] as [number, number],
  },
  {
    name: 'Tamil Nadu',
    ngos: 7,
    beneficiaries: '1.5L+',
    programs: ['Health', 'Education', 'Fisheries'],
    coordinates: [11.1271, 78.6569] as [number, number],
  },
];

export default function IndiaMapPage() {
  const [selectedState, setSelectedState] = useState<typeof statesData[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              🗺️ Avni Across India
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Empowering NGOs across states to create social impact
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">6+</div>
              <div className="text-neutral-600">States</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">48+</div>
              <div className="text-neutral-600">NGOs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">9L+</div>
              <div className="text-neutral-600">Beneficiaries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Map Visualization */}
              <div className="relative h-[600px] z-0">
                <IndiaMap
                  statesData={statesData}
                  onStateClick={setSelectedState}
                  selectedState={selectedState}
                />
                <p className="text-center text-sm text-neutral-500 mt-4">
                  Click on markers to see details
                </p>
              </div>

              {/* State Details */}
              <div>
                {selectedState ? (
                  <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
                    <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                      {selectedState.name}
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary-100 p-3 rounded-lg">
                          <Users className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-600 mb-1">NGO Partners</div>
                          <div className="text-2xl font-bold text-neutral-900">
                            {selectedState.ngos}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-secondary-100 p-3 rounded-lg">
                          <TrendingUp className="h-6 w-6 text-secondary-600" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-600 mb-1">Beneficiaries Reached</div>
                          <div className="text-2xl font-bold text-neutral-900">
                            {selectedState.beneficiaries}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary-100 p-3 rounded-lg">
                          <MapPin className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm text-neutral-600 mb-2">Focus Areas</div>
                          <div className="flex flex-wrap gap-2">
                            {selectedState.programs.map((program) => (
                              <span
                                key={program}
                                className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                              >
                                {program}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-200">
                      <p className="text-neutral-600 mb-4">
                        NGOs in {selectedState.name} are using Avni to transform their field operations
                        and create lasting social impact.
                      </p>
                      <a href="/case-studies" className="text-primary-600 hover:text-primary-700 font-semibold">
                        View Case Studies →
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-neutral-50 rounded-2xl p-12 text-center">
                    <MapPin className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
                    <p className="text-xl text-neutral-600">
                      Select a state on the map to see details
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States List */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              All States Using Avni
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statesData.map((state) => (
                <button
                  key={state.name}
                  onClick={() => setSelectedState(state)}
                  className={`text-left bg-white rounded-xl p-6 hover:shadow-lg transition-all ${
                    selectedState?.name === state.name ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{state.name}</h3>
                  <div className="text-sm text-neutral-600 space-y-1">
                    <div>{state.ngos} NGOs</div>
                    <div>{state.beneficiaries} beneficiaries</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Bring Avni to Your State
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join NGOs across India using Avni to transform field operations
            </p>
            <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-neutral-100">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
