import { Metadata } from 'next';
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import ValuePropositions from "@/components/sections/ValuePropositions";
import Features from "@/components/sections/Features";
import Solutions from "@/components/sections/Solutions";
import Sectors from "@/components/sections/Sectors";
import SocialProof from "@/components/sections/SocialProof";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import Recognition from "@/components/sections/Recognition";
import Partnership from "@/components/sections/Partnership";
import PricingTeaser from "@/components/sections/PricingTeaser";
import LatestContent from "@/components/sections/LatestContent";
import FinalCTA from "@/components/sections/FinalCTA";
import { getAllBlogPosts } from "@/lib/blog";
import { buildPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { SEO_CONFIG } from "@/lib/analytics-config";

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

// Generate metadata for homepage
export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    path: '/',
    keywords: SEO_CONFIG.keywords,
  });
}

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);
  // Fetch blog posts on the server
  const allPosts = getAllBlogPosts();
  
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero />
      <Testimonials />
      <ValuePropositions />
      <Features />
      <Solutions />
      <Sectors />
      <SocialProof />
      <PartnersMarquee />
      <Recognition />
      <Partnership />
      <PricingTeaser />
      <LatestContent posts={allPosts} />
      <FinalCTA />
    </>
  );
}
