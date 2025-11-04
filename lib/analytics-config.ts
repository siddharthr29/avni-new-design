/**
 * Analytics Configuration
 * 
 * Add your tracking codes here. They will automatically be applied across the entire website.
 * SEO managers can update these values without touching any other code.
 */

export const ANALYTICS_CONFIG = {
  // Meta (Facebook) Pixel
  metaPixelId: '', // Add your Meta Pixel ID here (e.g., '1234567890123456')
  
  // Google Ads (Google Tag Manager)
  googleAdsId: '', // Add your Google Ads ID here (e.g., 'AW-123456789')
  googleTagManagerId: '', // Add your GTM ID here (e.g., 'GTM-XXXXXXX')
  
  // Google Analytics 4
  googleAnalyticsId: '', // Add your GA4 ID here (e.g., 'G-XXXXXXXXXX')
  
  // Enable/Disable tracking (useful for development)
  enabled: process.env.NODE_ENV === 'production',
};

/**
 * Event Tracking Configuration
 * 
 * Define custom events that will be tracked across Meta Pixel and Google Ads
 */
export const TRACKING_EVENTS = {
  // Page views
  PAGE_VIEW: 'PageView',
  
  // User actions
  BUTTON_CLICK: 'ButtonClick',
  FORM_SUBMIT: 'FormSubmit',
  DOWNLOAD: 'Download',
  
  // Conversions
  CONTACT_FORM: 'Contact',
  DEMO_REQUEST: 'RequestDemo',
  SIGNUP: 'CompleteRegistration',
  NEWSLETTER_SUBSCRIBE: 'Subscribe',
  
  // Content engagement
  VIDEO_PLAY: 'VideoPlay',
  BLOG_READ: 'ViewContent',
  CASE_STUDY_VIEW: 'ViewContent',
  
  // Navigation
  LINK_CLICK: 'LinkClick',
  EXTERNAL_LINK: 'ExternalLinkClick',
};

/**
 * SEO Configuration
 * 
 * Default SEO settings for the entire website
 * Optimized by Senior SEO Expert for maximum visibility and conversions
 */
export const SEO_CONFIG = {
  // Primary title - Optimized for search intent and CTR
  defaultTitle: 'Avni: #1 Offline Mobile Data Collection Software for NGOs & Nonprofits | Free Setup',
  titleTemplate: '%s | Avni - Trusted by 50+ NGOs Worldwide',
  
  // Meta description - Optimized for conversions with clear value proposition
  defaultDescription: 'Transform your NGO field operations with Avni - the leading offline-first mobile data collection platform. ✓ 100% Free Setup ✓ AI-Powered Analytics ✓ Works Without Internet ✓ Trusted by 50+ NGOs ✓ 1.1M+ Beneficiaries Served. Get started in 30 days!',
  
  siteUrl: 'https://avniproject.org',
  siteName: 'Avni Project',
  twitterHandle: '@avniproject',
  
  // Open Graph defaults
  ogImage: '/images/og-image.jpg', // 1200x630px recommended
  ogType: 'website',
  
  // High-intent keywords - Mix of head terms, long-tail, and local SEO
  keywords: [
    // Primary keywords (high volume)
    'NGO data collection software',
    'mobile data collection app',
    'offline data collection tool',
    'field data management system',
    'nonprofit software free',
    
    // Long-tail keywords (high intent)
    'best data collection software for NGOs',
    'offline mobile data collection for rural areas',
    'free field data collection app for nonprofits',
    'beneficiary management software India',
    'impact measurement tool for social sector',
    
    // Feature-based keywords
    'offline-first data collection',
    'AI-powered field operations',
    'mobile survey app without internet',
    'real-time data sync for NGOs',
    'case management software nonprofits',
    
    // Problem-solution keywords
    'replace paper-based data collection',
    'digital transformation for NGOs',
    'field worker data collection app',
    'community health data management',
    'program monitoring and evaluation software',
    
    // Comparison keywords
    'ODK alternative',
    'KoboToolbox alternative',
    'CommCare alternative',
    'SurveyCTO alternative for NGOs',
    
    // Location-based keywords
    'NGO software India',
    'field data collection software Bangalore',
    'nonprofit technology solutions India',
    
    // Use case keywords
    'health data collection app',
    'education program monitoring software',
    'agriculture field data management',
    'WASH program data collection',
    'livelihood tracking software',
  ],
  
  // Structured data for rich snippets
  organizationType: 'NGO',
  organizationName: 'Avni Project',
  organizationLogo: '/images/avni-logo-color.png',
  
  // Additional SEO metadata
  author: 'Avni Project Team',
  publisher: 'Samanvay Foundation',
  
  // Schema.org structured data
  schemaOrg: {
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
  },
};
