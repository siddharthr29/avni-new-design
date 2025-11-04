'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Star } from 'lucide-react';
import AvniLogoSVG from '@/components/AvniLogoSVG';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content: string;
  featuredimage?: string | null;
  featured?: boolean;
}

interface LatestContentProps {
  posts: BlogPost[];
}

export default function LatestContent({ posts }: LatestContentProps) {
  const latestPosts = posts.slice(0, 3);
  return (
    <>
      <style jsx global>{`
        @keyframes border-pulse {
          0%, 100% {
            background: linear-gradient(white, white) padding-box, 
                        linear-gradient(45deg, #14B8A6, #F59E0B, #14B8A6) border-box;
          }
          50% {
            background: linear-gradient(white, white) padding-box, 
                        linear-gradient(225deg, #F59E0B, #14B8A6, #F59E0B) border-box;
          }
        }
        .animate-border-pulse {
          animation: border-pulse 3s ease-in-out infinite;
        }
      `}</style>
      <section className="section bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Latest from Avni</h2>
          <p className="section-subheading">
            Insights, updates, and success stories from the field
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                post.slug.includes('launchpad') ? 'relative animate-border-pulse' : ''
              }`}
              style={post.slug.includes('launchpad') ? {
                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #14B8A6, #F59E0B, #14B8A6) border-box',
                border: '3px solid transparent',
              } : undefined}
            >
              {/* Featured Image or Logo */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                {post.featuredimage ? (
                  <img
                    src={post.featuredimage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <AvniLogoSVG size={120} className="opacity-40" />
                )}
                {post.featured && (
                  <div className="absolute top-3 right-3 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    FEATURED
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary-500 uppercase tracking-wide">
                    BLOG
                  </span>
                  <span className="text-neutral-400">•</span>
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-neutral-600 mb-4 line-clamp-3">
                  {post.description || post.content.substring(0, 150) + '...'}
                </p>

                <div className="flex items-center text-primary-500 font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold text-lg group"
          >
            View All Posts
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
