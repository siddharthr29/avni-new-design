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

export default function Home() {
  // Fetch blog posts on the server
  const allPosts = getAllBlogPosts();
  
  return (
    <>
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
