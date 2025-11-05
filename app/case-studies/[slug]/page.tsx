import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Users, TrendingUp, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import ShareButtons from '@/components/ShareButtons';
import { buildCaseStudyMetadata, generateCaseStudySchema, generateBreadcrumbSchema } from '@/lib/seo';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

// This would typically come from a database or CMS
const caseStudiesData: Record<string, any> = {
  '2025-05-28-bridging-the-nutrition-gap-apf-odisha': {
    title: 'Bridging the Nutrition Gap - APF Odisha',
    organization: 'Azim Premji Foundation',
    sector: 'Health & Nutrition',
    location: 'Odisha, India',
    beneficiaries: '50,000+',
    impact: '30% improvement in malnutrition tracking',
    date: '2025-05-28',
    content: `
## The Challenge

The Azim Premji Foundation faced significant challenges in tracking nutritional outcomes for children across rural Odisha. Traditional paper-based systems created multiple barriers:

- Delayed data collection and reporting cycles
- Inconsistent tracking across field workers
- Difficulty in identifying at-risk children quickly
- Limited visibility into program effectiveness

## The Solution

APF implemented Avni to digitize their entire nutrition tracking workflow, transforming their operations from paper to digital.

### Key Features Implemented

1. **Custom Forms** - Designed specifically for nutritional assessments with skip logic and validations
2. **Offline Capability** - Field workers could collect data without internet connectivity
3. **Real-time Dashboards** - Program managers could monitor progress instantly
4. **Automated Alerts** - System flagged at-risk children automatically for immediate action

## Implementation Journey

The rollout was completed in 3 phases over 2 months:

- **Phase 1** - Pilot with 10 field workers to test and refine the system
- **Phase 2** - Training and expansion to 50 workers across multiple locations
- **Phase 3** - Full deployment across all 200+ field workers

## Measurable Results

After 6 months of using Avni, APF achieved remarkable outcomes:

- **30% improvement** in malnutrition tracking accuracy
- **50% faster** identification of at-risk children
- **100% digital** data collection across all field operations
- **Real-time insights** for program managers enabling data-driven decisions

## What They Say

> "Avni has transformed how we track and respond to malnutrition. The offline capability is crucial for our remote areas, and the dashboards give us insights we never had before. It's been a game-changer for our nutrition program."
> 
> **Dr. Priya Sharma**, Program Lead, APF Odisha
    `,
  },
  // Add more case studies as needed
};

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData[slug];
  
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
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudiesData[slug];

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
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:font-bold prose-headings:text-neutral-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-8 prose-h2:text-center prose-h2:relative
                prose-h2:after:content-[''] prose-h2:after:block prose-h2:after:w-20 prose-h2:after:h-1 prose-h2:after:bg-gradient-to-r prose-h2:after:from-primary-500 prose-h2:after:to-secondary-500 prose-h2:after:mx-auto prose-h2:after:mt-4 prose-h2:after:rounded-full
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary-600 prose-h3:font-semibold prose-h3:flex prose-h3:items-center prose-h3:gap-2
                prose-h3:before:content-['▸'] prose-h3:before:text-secondary-500
                prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-ul:my-6 prose-ul:space-y-3 prose-ul:bg-neutral-50 prose-ul:p-6 prose-ul:rounded-xl prose-ul:border prose-ul:border-neutral-200
                prose-li:text-neutral-700 prose-li:pl-2 prose-li:relative
                prose-li:before:content-['✓'] prose-li:before:absolute prose-li:before:-left-6 prose-li:before:text-green-500 prose-li:before:font-bold
                prose-strong:text-neutral-900 prose-strong:font-bold prose-strong:bg-yellow-100 prose-strong:px-1 prose-strong:rounded
                prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary-50 prose-blockquote:to-transparent prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:my-12 prose-blockquote:shadow-md
                prose-blockquote:not-italic prose-blockquote:text-neutral-800 prose-blockquote:text-xl prose-blockquote:font-medium
                [&_ol]:my-6 [&_ol]:space-y-4 [&_ol]:counter-reset-[item] [&_ol]:list-none
                [&_ol>li]:relative [&_ol>li]:pl-12 [&_ol>li]:bg-white [&_ol>li]:p-4 [&_ol>li]:rounded-lg [&_ol>li]:shadow-sm [&_ol>li]:border [&_ol>li]:border-neutral-200
                [&_ol>li:before]:absolute [&_ol>li:before]:left-4 [&_ol>li:before]:top-4 [&_ol>li:before]:flex [&_ol>li:before]:items-center [&_ol>li:before]:justify-center
                [&_ol>li:before]:w-8 [&_ol>li:before]:h-8 [&_ol>li:before]:rounded-full [&_ol>li:before]:bg-gradient-to-br [&_ol>li:before]:from-primary-500 [&_ol>li:before]:to-secondary-500
                [&_ol>li:before]:text-white [&_ol>li:before]:font-bold [&_ol>li:before]:text-sm
                [&_ol>li:before]:content-[counter(item)] [&_ol>li:before]:counter-increment-[item]"
              dangerouslySetInnerHTML={{ __html: marked(study.content) }} 
            />

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
