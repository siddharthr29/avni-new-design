import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, MapPin, TrendingUp } from 'lucide-react';
import { buildPageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

// Generate metadata
export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: 'Case Studies - Real NGO Success Stories with Avni | Field Data Impact',
    description: 'See how 50+ NGOs across India use Avni to transform field operations. Real impact stories: health, education, agriculture, WASH programs. Proven results.',
    path: '/case-studies',
    keywords: [
      'NGO case studies',
      'field data success stories',
      'nonprofit impact stories',
      'Avni success stories',
      'digital transformation case studies',
      'social impact technology',
    ],
  });
}

const caseStudies = [
  {
    title: 'Bridging the Nutrition Gap - APF Odisha',
    organization: 'Azim Premji Foundation',
    sector: 'Health & Nutrition',
    location: 'Odisha, India',
    beneficiaries: '50,000+',
    impact: '30% improvement in malnutrition tracking',
    description: 'How APF uses Avni to track and improve nutritional outcomes for children in rural Odisha.',
    image: '/images/case-studies/apf-nutrition.jpg',
    slug: '2025-05-28-bridging-the-nutrition-gap-apf-odisha',
    tags: ['Health', 'Nutrition', 'Child Welfare'],
  },
  {
    title: 'How Goonj Uses Avni for Community Development',
    organization: 'Goonj',
    sector: 'Community Development',
    location: 'Pan India',
    beneficiaries: '1,00,000+',
    impact: '50% faster distribution tracking',
    description: 'Goonj leverages Avni to manage material distribution and community engagement across India.',
    image: '/images/case-studies/goonj.jpg',
    slug: '2025-09-03-how-goonj-uses-avni',
    tags: ['Community Development', 'Distribution', 'Rural'],
  },
  {
    title: 'Restoring Waterbodies with Avni - ATECF',
    organization: 'ATECF',
    sector: 'Water Management',
    location: 'Karnataka, India',
    beneficiaries: '500+ water bodies',
    impact: 'Adopted by NITI Aayog',
    description: 'Using Avni to track rejuvenation of water bodies, now adopted as a government model.',
    image: '/images/case-studies/atecf-water.jpg',
    slug: '2025-04-30-restoring-waterbodies-avni-atecf',
    tags: ['Water', 'Environment', 'Government'],
  },
  {
    title: 'Scaling Rural Education - CInI & Tata Trusts',
    organization: 'CInI - Tata Trusts',
    sector: 'Education',
    location: 'Rajasthan, India',
    beneficiaries: '25,000+ students',
    impact: '40% improvement in learning outcomes tracking',
    description: 'Transforming education monitoring in rural Rajasthan with data-driven insights.',
    image: '/images/case-studies/cini-education.jpg',
    slug: '2024-09-19-Scaling-Rural-Education',
    tags: ['Education', 'Rural', 'Learning Outcomes'],
  },
  {
    title: 'Empowering Waste Pickers - Hasiru Dala',
    organization: 'Hasiru Dala',
    sector: 'Social Security',
    location: 'Bangalore, India',
    beneficiaries: '10,000+ waste pickers',
    impact: '100% digitization of benefits',
    description: 'Digitizing social security benefits for waste pickers and ensuring no one is left behind.',
    image: '/images/case-studies/hasiru-dala.jpg',
    slug: '2025-08-01-empowering-waste-pickers',
    tags: ['Social Security', 'Urban', 'Livelihood'],
  },
  {
    title: 'Malnutrition Screening - JNPCT',
    organization: 'JNPCT',
    sector: 'Health',
    location: 'Maharashtra, India',
    beneficiaries: '15,000+ children',
    impact: '60% faster screening process',
    description: 'Using Avni for systematic malnutrition screening and treatment tracking.',
    image: '/images/case-studies/jnpct.jpg',
    slug: 'use-of-avni-in-jnpct-malnutrition-project-case-study',
    tags: ['Health', 'Malnutrition', 'Children'],
  },
  {
    title: 'Scoring for Equality - Maitrayana Sports',
    organization: 'Maitrayana',
    sector: 'Sports & Development',
    location: 'Karnataka, India',
    beneficiaries: '5,000+ youth',
    impact: 'Complete digitization of sports programs',
    description: 'Using sports as a tool for social development, tracked and managed through Avni.',
    image: '/images/case-studies/maitrayana.jpg',
    slug: '2025-07-31-scoring-for-equality',
    tags: ['Sports', 'Youth', 'Development'],
  },
  {
    title: 'Sickle Cell Disease Screening - JSS',
    organization: 'Jan Swasthya Sahyog',
    sector: 'Health',
    location: 'Chhattisgarh, India',
    beneficiaries: '20,000+ screened',
    impact: 'Early detection and treatment',
    description: 'Systematic screening and treatment tracking for sickle cell disease in tribal areas.',
    image: '/images/case-studies/jss-sickle-cell.jpg',
    slug: 'avni-for-sickle-cell-disease-screening-and-treatment',
    tags: ['Health', 'Tribal', 'Disease Management'],
  },
];

const sectors = ['All', 'Health', 'Education', 'Water', 'Community Development', 'Social Security', 'Sports'];

export default function CaseStudiesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Real Impact Stories
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              See how NGOs across India are using Avni to transform their field operations
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-neutral-200">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-sm text-neutral-600">NGOs Using Avni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">11L+</div>
              <div className="text-sm text-neutral-600">Beneficiaries Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">27L+</div>
              <div className="text-sm text-neutral-600">Service Instances</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">8K+</div>
              <div className="text-sm text-neutral-600">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Link
                  key={index}
                  href={`/case-studies/${study.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Banner Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 opacity-20"></div>
                    <div className="relative z-10 text-center p-6">
                      <div className="text-6xl mb-3">
                        {study.sector.includes('Health') ? '🏥' :
                         study.sector.includes('Education') ? '📚' :
                         study.sector.includes('Water') ? '💧' :
                         study.sector.includes('Community') ? '🤝' :
                         study.sector.includes('Social') ? '👥' : '🏢'}
                      </div>
                      <div className="text-sm font-semibold text-primary-700 bg-white/90 px-4 py-2 rounded-full">
                        {study.sector}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {study.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-sm font-semibold text-neutral-700 mb-3">
                      {study.organization}
                    </p>

                    {/* Description */}
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {study.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <MapPin className="h-4 w-4 text-primary-500" />
                        {study.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Users className="h-4 w-4 text-primary-500" />
                        {study.beneficiaries} beneficiaries
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <TrendingUp className="h-4 w-4 text-primary-500" />
                        {study.impact}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Read Case Study
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join 50+ NGOs transforming their field operations with Avni
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors">
                Try Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
