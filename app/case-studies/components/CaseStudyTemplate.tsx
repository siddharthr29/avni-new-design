import React from 'react';
import { CheckCircle, TrendingUp, Users, Calendar, MapPin } from 'lucide-react';

interface CaseStudyData {
  title: string;
  organization: string;
  sector: string;
  location: string;
  beneficiaries: string;
  impact: string;
  date: string;
  challenge: {
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  implementation: {
    description: string;
    phases: Array<{
      title: string;
      description: string;
    }>;
  };
  results: {
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <div className="space-y-16">
      {/* Challenge Section */}
      <section>
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Challenge</h2>
        <p className="text-lg text-neutral-700 leading-relaxed mb-6">
          {data.challenge.description}
        </p>
        <ul className="space-y-3">
          {data.challenge.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-700">
              <span className="text-red-500 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Solution Section */}
      <section>
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Solution</h2>
        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
          {data.solution.description}
        </p>
        
        <h3 className="text-xl font-semibold text-primary-600 mb-6">Key Features Implemented</h3>
        <div className="grid gap-6">
          {data.solution.features.map((feature, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">{feature.title}</h4>
                  <p className="text-neutral-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Section */}
      <section>
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Implementation</h2>
        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
          {data.implementation.description}
        </p>
        
        <div className="space-y-4">
          {data.implementation.phases.map((phase, index) => (
            <div key={index} className="flex items-start gap-4 bg-neutral-50 rounded-lg p-6 border-l-4 border-primary-500">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">{phase.title}</h4>
                <p className="text-neutral-700">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section>
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Results</h2>
        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
          {data.results.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.results.metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-2xl font-bold text-neutral-900 mb-1">{metric.value}</div>
                  <div className="text-neutral-700">{metric.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <h2 className="text-3xl font-bold text-neutral-900 mb-6">Testimonial</h2>
        <div className="bg-gradient-to-r from-primary-50 to-transparent border-l-4 border-primary-500 rounded-r-xl p-8 shadow-md">
          <blockquote className="text-xl italic text-neutral-800 leading-relaxed mb-6">
            "{data.testimonial.quote}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
              {data.testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-neutral-900">{data.testimonial.author}</div>
              <div className="text-neutral-600">{data.testimonial.role}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
