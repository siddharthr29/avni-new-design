import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LaunchpadBanner from "@/components/LaunchpadBanner";
import WhatsAppChat from "@/components/WhatsAppChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avni - Open Source Data Collection & Insights Platform",
  description: "Open-source AI-powered Offline-capable Data collection and Reporting platform for Non-profits. Built by non-profits, for non-profits.",
  keywords: [
    "field data collection", 
    "NGO software", 
    "offline data collection", 
    "open source", 
    "non-profit technology",
    "offline-first",
    "AI powered",
    "human centered design",
    "setup in minutes",
    "built on ground realities"
  ],
  authors: [{ name: "Avni Project" }],
  openGraph: {
    title: "Avni - Field Service and Data Collection Platform",
    description: "Open-source AI-powered platform for NGOs and non-profits",
    url: "https://avniproject.org",
    siteName: "Avni Project",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avni - Field Service Platform",
    description: "Open-source data collection platform for non-profits",
    site: "@avniproject",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
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
