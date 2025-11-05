import { Metadata } from 'next';
import { getAllBlogPosts, getFeaturedPost } from '@/lib/blog';
import BlogClient from './BlogClient';
import { buildPageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

// Generate metadata
export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: 'Blog - NGO Field Data Collection Insights & Updates | Avni',
    description: 'Latest updates, insights, and stories from the Avni community. Learn about field data collection, NGO technology, social impact, and digital transformation for nonprofits.',
    path: '/blog',
    keywords: [
      'NGO blog',
      'field data collection insights',
      'nonprofit technology blog',
      'social impact stories',
      'digital transformation NGO',
      'Avni updates',
    ],
  });
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featuredPost = getFeaturedPost();
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
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
              Avni Blog
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
              Updates, insights, and stories from the field
            </p>
          </div>
        </div>
      </section>

      {/* Client Component with Search and Filters */}
      <BlogClient allPosts={allPosts} featuredPost={featuredPost} />
    </div>
  );
}
