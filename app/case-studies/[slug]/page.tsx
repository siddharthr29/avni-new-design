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
## Challenge

The Azim Premji Foundation faced significant challenges in tracking nutritional outcomes for children across rural Odisha. Traditional paper-based systems led to:
- Delayed data collection and reporting
- Inconsistent tracking across field workers
- Difficulty in identifying at-risk children quickly
- Limited visibility into program effectiveness

## Solution

APF implemented Avni to digitize their entire nutrition tracking workflow:

### Key Features Implemented
1. **Custom Forms**: Designed specifically for nutritional assessments
2. **Offline Capability**: Field workers could collect data without internet
3. **Real-time Dashboards**: Program managers could monitor progress instantly
4. **Automated Alerts**: System flagged at-risk children automatically

## Implementation

The rollout was completed in 3 phases over 2 months:
- **Phase 1**: Pilot with 10 field workers
- **Phase 2**: Training and expansion to 50 workers
- **Phase 3**: Full deployment across all 200+ field workers

## Results

After 6 months of using Avni:
- ✅ **30% improvement** in malnutrition tracking accuracy
- ✅ **50% faster** identification of at-risk children
- ✅ **100% digital** data collection
- ✅ **Real-time insights** for program managers

## Testimonial

> "Avni has transformed how we track and respond to malnutrition. The offline capability is crucial for our remote areas, and the dashboards give us insights we never had before."
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

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-700 prose-p:leading-relaxed prose-li:text-neutral-700 prose-strong:text-neutral-900"
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
