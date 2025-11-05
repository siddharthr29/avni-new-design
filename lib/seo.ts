import { Metadata } from 'next';
import { SEO_CONFIG } from './analytics-config';

/**
 * SEO Utility Library
 * Reusable metadata builders and JSON-LD schema generators
 */

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

interface ArticleMetadataParams {
  title: string;
  description: string;
  slug: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  tags?: string[];
  image?: string;
}

interface EventMetadataParams {
  title: string;
  description: string;
  slug: string;
  startDate: string;
  endDate?: string;
  location?: string;
  image?: string;
}

interface VideoMetadataParams {
  title: string;
  description: string;
  slug: string;
  uploadDate: string;
  duration?: string;
  thumbnailUrl: string;
}

/**
 * Build standard page metadata
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image,
  keywords,
  noIndex = false,
}: PageMetadataParams): Metadata {
  const url = `${SEO_CONFIG.siteUrl}${path}`;
  const ogImage = image || SEO_CONFIG.ogImage;

  return {
    title,
    description,
    keywords: keywords || SEO_CONFIG.keywords,
    authors: [{ name: SEO_CONFIG.organizationName }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SEO_CONFIG.twitterHandle,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

/**
 * Build blog article metadata
 */
export function buildArticleMetadata({
  title,
  description,
  slug,
  author,
  publishedTime,
  modifiedTime,
  tags,
  image,
}: ArticleMetadataParams): Metadata {
  const url = `${SEO_CONFIG.siteUrl}/blog/${slug}`;
  const ogImage = image || SEO_CONFIG.ogImage;

  return {
    title: `${title} | ${SEO_CONFIG.siteName}`,
    description,
    keywords: tags || SEO_CONFIG.keywords,
    authors: [{ name: author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: [author],
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SEO_CONFIG.twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Build case study metadata
 */
export function buildCaseStudyMetadata(params: ArticleMetadataParams): Metadata {
  const url = `${SEO_CONFIG.siteUrl}/case-studies/${params.slug}`;
  const metadata = buildArticleMetadata(params);

  return {
    ...metadata,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...metadata.openGraph,
      url,
      type: 'article',
    },
  };
}

/**
 * Build event metadata
 */
export function buildEventMetadata({
  title,
  description,
  slug,
  startDate,
  endDate,
  location,
  image,
}: EventMetadataParams): Metadata {
  const url = `${SEO_CONFIG.siteUrl}/events/${slug}`;
  const ogImage = image || SEO_CONFIG.ogImage;

  return {
    title: `${title} | ${SEO_CONFIG.siteName}`,
    description,
    keywords: [...SEO_CONFIG.keywords, 'NGO events', 'nonprofit events'],
    authors: [{ name: SEO_CONFIG.organizationName }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SEO_CONFIG.twitterHandle,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Build video metadata
 */
export function buildVideoMetadata({
  title,
  description,
  slug,
  uploadDate,
  duration,
  thumbnailUrl,
}: VideoMetadataParams): Metadata {
  const url = `${SEO_CONFIG.siteUrl}/videos/${slug}`;

  return {
    title: `${title} | ${SEO_CONFIG.siteName}`,
    description,
    keywords: [...SEO_CONFIG.keywords, 'NGO videos', 'nonprofit videos'],
    authors: [{ name: SEO_CONFIG.organizationName }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: thumbnailUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'video.other',
    },
    twitter: {
      card: 'player',
      title,
      description,
      site: SEO_CONFIG.twitterHandle,
      images: [thumbnailUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ============================================
// JSON-LD Structured Data Generators
// ============================================

/**
 * Generate Organization JSON-LD
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.organizationName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.organizationLogo}`,
    description: SEO_CONFIG.defaultDescription,
    sameAs: [
      'https://twitter.com/avniproject',
      'https://github.com/avniproject',
      'https://www.linkedin.com/company/avni-project',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'avnipartnerships@samanvayfoundation.org',
    },
  };
}

/**
 * Generate Article JSON-LD for blog posts
 */
export function generateArticleSchema({
  title,
  description,
  slug,
  author,
  publishedTime,
  modifiedTime,
  image,
}: ArticleMetadataParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}`,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.organizationName,
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.organizationLogo}`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SEO_CONFIG.siteUrl}/blog/${slug}`,
    },
  };
}

/**
 * Generate CreativeWork JSON-LD for case studies
 */
export function generateCaseStudySchema({
  title,
  description,
  slug,
  author,
  publishedTime,
  image,
}: ArticleMetadataParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    image: image || `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}`,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.organizationName,
    },
    datePublished: publishedTime,
    url: `${SEO_CONFIG.siteUrl}/case-studies/${slug}`,
  };
}

/**
 * Generate Event JSON-LD
 */
export function generateEventSchema({
  title,
  description,
  startDate,
  endDate,
  location,
  image,
}: EventMetadataParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: title,
    description,
    startDate,
    endDate: endDate || startDate,
    location: location
      ? {
          '@type': 'Place',
          name: location,
        }
      : undefined,
    image: image || `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}`,
    organizer: {
      '@type': 'Organization',
      name: SEO_CONFIG.organizationName,
      url: SEO_CONFIG.siteUrl,
    },
  };
}

/**
 * Generate VideoObject JSON-LD
 */
export function generateVideoSchema({
  title,
  description,
  uploadDate,
  duration,
  thumbnailUrl,
}: VideoMetadataParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.organizationName,
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.organizationLogo}`,
      },
    },
  };
}

/**
 * Generate Person JSON-LD for team members
 */
export function generatePersonSchema({
  name,
  role,
  image,
  bio,
}: {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: role,
    image,
    description: bio,
    worksFor: {
      '@type': 'Organization',
      name: SEO_CONFIG.organizationName,
    },
  };
}

/**
 * Generate SoftwareApplication JSON-LD
 */
export function generateSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Avni',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50',
    },
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    screenshot: `${SEO_CONFIG.siteUrl}/images/cover.webp`,
  };
}

/**
 * Generate BreadcrumbList JSON-LD
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };
}
