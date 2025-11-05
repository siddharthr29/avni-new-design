import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Users, TrendingUp, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import ShareButtons from '@/components/ShareButtons';
import { buildCaseStudyMetadata, generateCaseStudySchema, generateBreadcrumbSchema } from '@/lib/seo';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { getCaseStudy, getAllCaseStudySlugs } from '../data/case-studies-data';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return buildCaseStudyMetadata({
    title: study.title,
    description: `${study.impact}. See how ${study.organization} uses Avni for ${study.sector.toLowerCase()} in ${study.location}.`,
    slug,
    author: study.organization,
    publishedTime: study.date,
    image: undefined,
  });
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }
  
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const caseStudySchema = generateCaseStudySchema({
    title: study.title,
    description: study.impact,
    slug,
    author: study.organization,
    publishedTime: study.date,
    image: undefined,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: study.title, url: `/case-studies/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* CreativeWork JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
            
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {study.sector}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {study.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {study.location}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {study.beneficiaries} beneficiaries
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {new Date(study.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="bg-primary-50 py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <TrendingUp className="h-8 w-8 text-primary-600 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-primary-600 uppercase">Impact</div>
              <div className="text-2xl font-bold text-neutral-900">{study.impact}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-12 border-b border-neutral-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                    {study.organization.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{study.organization}</h3>
                  <p className="text-neutral-600 mb-4">
                    A leading organization working in {study.sector.toLowerCase()} across {study.location}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="text-sm text-neutral-500">Sector</div>
                      <div className="font-semibold text-neutral-900">{study.sector}</div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="text-sm text-neutral-500">Beneficiaries</div>
                      <div className="font-semibold text-neutral-900">{study.beneficiaries}</div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="text-sm text-neutral-500">Location</div>
                      <div className="font-semibold text-neutral-900">{study.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CaseStudyTemplate data={study} />

            {/* Share Buttons */}
            <ShareButtons 
              title={study.title}
              url={`/case-studies/${slug}`}
              description={`${study.organization} - ${study.impact}`}
            />

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Join {study.organization} and 50+ other organizations using Avni
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn-primary">
                  Try Demo
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
