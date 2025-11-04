'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { ANALYTICS_CONFIG, TRACKING_EVENTS } from '@/lib/analytics-config';

/**
 * Analytics Provider Component
 * 
 * Automatically loads and configures:
 * - Meta (Facebook) Pixel
 * - Google Ads
 * - Google Analytics 4
 * - Google Tag Manager
 * 
 * Tracks page views and custom events across all platforms
 */
export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (!ANALYTICS_CONFIG.enabled) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Meta Pixel PageView
    if (ANALYTICS_CONFIG.metaPixelId && typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', TRACKING_EVENTS.PAGE_VIEW);
    }

    // Google Analytics PageView
    if (ANALYTICS_CONFIG.googleAnalyticsId && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', ANALYTICS_CONFIG.googleAnalyticsId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  if (!ANALYTICS_CONFIG.enabled) {
    return null;
  }

  return (
    <>
      {/* Meta (Facebook) Pixel */}
      {ANALYTICS_CONFIG.metaPixelId && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${ANALYTICS_CONFIG.metaPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${ANALYTICS_CONFIG.metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Google Tag Manager */}
      {ANALYTICS_CONFIG.googleTagManagerId && (
        <>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${ANALYTICS_CONFIG.googleTagManagerId}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS_CONFIG.googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics 4 */}
      {ANALYTICS_CONFIG.googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ANALYTICS_CONFIG.googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* Google Ads Conversion Tracking */}
      {ANALYTICS_CONFIG.googleAdsId && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAdsId}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

/**
 * Track Custom Events
 * 
 * Usage:
 * import { trackEvent } from '@/components/AnalyticsProvider';
 * trackEvent('DEMO_REQUEST', { source: 'hero_button' });
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (!ANALYTICS_CONFIG.enabled) return;

  // Meta Pixel
  if (ANALYTICS_CONFIG.metaPixelId && typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData);
  }

  // Google Analytics
  if (ANALYTICS_CONFIG.googleAnalyticsId && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData);
  }

  // Google Ads
  if (ANALYTICS_CONFIG.googleAdsId && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: ANALYTICS_CONFIG.googleAdsId,
      ...eventData,
    });
  }

  console.log('📊 Event tracked:', eventName, eventData);
}
