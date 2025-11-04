'use client';

import Link from 'next/link';
import { ArrowRight, Play, Users, TrendingUp, Smartphone, Sparkles, WifiOff, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-primary-50 overflow-hidden">
      <div className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Transform Field Operations for Your NGO
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                Offline-first, AI-powered data collection platform built by non-profits, for non-profits
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/scoping-tool" className="btn-primary">
                Is Avni Right for You?
              </Link>
              <Link href="/demo" className="btn-secondary">
                Try Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-3 bg-primary-50 px-4 py-2 rounded-lg">
                  <Users className="h-6 w-6 text-primary-600" />
                  <div>
                    <div className="text-2xl font-bold text-primary-600">50+</div>
                    <div className="text-xs text-neutral-600">NGOs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-secondary-50 px-4 py-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-secondary-600" />
                  <div>
                    <div className="text-2xl font-bold text-secondary-600">11L+</div>
                    <div className="text-xs text-neutral-600">Beneficiaries</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-green-50 px-4 py-2 rounded-lg">
                  <Smartphone className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-green-600">8K+</div>
                    <div className="text-xs text-neutral-600">Users</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Sparkles className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold">100% Free to Start</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <WifiOff className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold">Offline-First</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <Zap className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image with Video */}
          <div className="relative animate-slide-up">
            <div className="aspect-video bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden relative">
              <img
                src="/images/cover.webp"
                alt="Avni Platform"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                <a
                  href="https://www.youtube.com/watch?v=Xt9EUNXKfWI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/90 hover:bg-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Play className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-neutral-900">Watch Demo</span>
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-neutral-600">
              See how Avni transforms field operations for NGOs
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-scale-in hidden md:block">
              <div className="text-3xl font-bold text-primary-500">100K+</div>
              <div className="text-sm text-neutral-600">Data Points</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-scale-in hidden md:block">
              <div className="text-3xl font-bold text-primary-500">95%</div>
              <div className="text-sm text-neutral-600">Retention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 -z-10"></div>
    </section>
  );
}
