import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';
import LaunchpadCTA from '@/components/LaunchpadCTA';
import ShareButtons from '@/components/ShareButtons';
import type { Metadata } from 'next';
import { buildArticleMetadata, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  if (!slug) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return buildArticleMetadata({
    title: post.title,
    description: post.description || post.content.substring(0, 160),
    slug: post.slug,
    author: post.author,
    publishedTime: post.date,
    tags: post.tags,
    image: post.featuredimage || undefined,
  });
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }
  
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description || post.content.substring(0, 160),
    slug: post.slug,
    author: post.author,
    publishedTime: post.date,
    tags: post.tags,
    image: post.featuredimage || undefined,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {post.featuredpost && (
              <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full font-semibold mb-4">
                🚀 Featured Post
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredimage && (
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {slug.includes('launchpad') ? (
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSduE4C-ZidCEZKlAsGB70wfsLjMhRwHU5-7i4-WYOmrln23DA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <img
                    src={post.featuredimage}
                    alt={post.title}
                    className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                  />
                </a>
              ) : (
                <img
                  src={post.featuredimage}
                  alt={post.title}
                  className="w-full rounded-xl shadow-lg"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <MarkdownRenderer content={post.content} />
            
            {/* Show Launchpad CTA if it's the launchpad post */}
            {slug.includes('launchpad') && <LaunchpadCTA />}
            
            {/* Share Buttons */}
            <ShareButtons 
              title={post.title}
              url={`/blog/${slug}`}
              description={post.description}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Interested in Avni?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Discover how Avni can transform your field operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary text-lg">
                Try Demo
              </Link>
              <Link href="/contact" className="btn-secondary text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
