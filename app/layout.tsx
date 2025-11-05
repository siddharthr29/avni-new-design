import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LaunchpadBanner from "@/components/LaunchpadBanner";
import WhatsAppChat from "@/components/WhatsAppChat";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import PageTransition from "@/components/PageTransition";
import { SEO_CONFIG } from "@/lib/analytics-config";
import { generateOrganizationSchema, generateSoftwareSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

// Force static export for all pages
export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.organizationName }],
  openGraph: {
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    locale: "en_US",
    type: SEO_CONFIG.ogType as any,
    images: [
      {
        url: SEO_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    site: SEO_CONFIG.twitterHandle,
    images: [SEO_CONFIG.ogImage],
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
  verification: {
    google: 'your-google-verification-code', // Add your verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const softwareSchema = generateSoftwareSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <AnalyticsProvider />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Software Application JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className={inter.className}>
        <PageTransition />
        <LaunchpadBanner />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
