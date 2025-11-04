'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogClientProps {
  allPosts: BlogPost[];
  featuredPost: BlogPost | null;
}

const POSTS_PER_PAGE = 9;

export default function BlogClient({ allPosts, featuredPost }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag: string) => tags.add(tag));
      }
    });
    return ['All', ...Array.from(tags).sort()];
  }, [allPosts]);

  // Get all unique months
  const allMonths = useMemo(() => {
    const months = new Set<string>();
    allPosts.forEach(post => {
      const date = new Date(post.date);
      const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      months.add(monthYear);
    });
    return ['All', ...Array.from(months).sort((a, b) => {
      if (a === 'All') return -1;
      if (b === 'All') return 1;
      return new Date(b).getTime() - new Date(a).getTime();
    })];
  }, [allPosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    const filtered = allPosts.filter(post => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      // Tag filter
      const matchesTag = selectedTag === 'All' || 
        (post.tags && post.tags.includes(selectedTag));

      // Month filter
      const matchesMonth = selectedMonth === 'All' || 
        new Date(post.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) === selectedMonth;

      return matchesSearch && matchesTag && matchesMonth;
    }).filter(post => post.slug !== featuredPost?.slug);
    
    // Reset to page 1 when filters change
    setCurrentPage(1);
    return filtered;
  }, [allPosts, searchQuery, selectedTag, selectedMonth, featuredPost]);

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <>
      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Tag Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Filter by Tag</label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>

              {/* Month Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Filter by Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {allMonths.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center text-sm text-neutral-600">
              Showing {startIndex + 1}-{Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} posts
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Featured Post */}
            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="block mb-16 group"
              >
                <div className="grid md:grid-cols-2 gap-8 bg-neutral-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                    {featuredPost.featuredimage ? (
                      <img src={featuredPost.featuredimage} alt={featuredPost.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-neutral-500 font-medium">[Featured Image]</span>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-600 mb-3">
                      <span className="bg-secondary-100 px-3 py-1 rounded-full">🚀 Launchpad Featured</span>
                    </div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-neutral-600 mb-4">
                      {featuredPost.description || 'Read more about this exciting announcement...'}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                    </div>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-neutral-600">No blog posts found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedTag('All');
                      setSelectedMonth('All');
                      setCurrentPage(1);
                    }}
                    className="mt-4 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                paginatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative overflow-hidden">
                    {post.featuredimage ? (
                      <img
                        src={post.featuredimage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 opacity-20"></div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {!post.featuredimage && (
                        <span className="text-neutral-500 font-medium text-lg">📝</span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.tags && post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.description || post.content.substring(0, 150) + '...'}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      currentPage === page
                        ? 'bg-primary-600 text-white'
                        : 'border border-neutral-300 hover:bg-neutral-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Subscribe to our newsletter for monthly updates and insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
