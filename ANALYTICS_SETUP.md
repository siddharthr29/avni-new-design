# Analytics & SEO Setup Guide

## 📊 For SEO Managers: Quick Setup

All analytics tracking codes and SEO settings are managed in **ONE SINGLE FILE**:

```
/lib/analytics-config.ts
```

### Step 1: Add Your Tracking Codes

Open `/lib/analytics-config.ts` and add your tracking IDs:

```typescript
export const ANALYTICS_CONFIG = {
  // Meta (Facebook) Pixel
  metaPixelId: '1234567890123456', // ← Add your Meta Pixel ID here
  
  // Google Ads
  googleAdsId: 'AW-123456789', // ← Add your Google Ads ID here
  googleTagManagerId: 'GTM-XXXXXXX', // ← Add your GTM ID here
  
  // Google Analytics 4
  googleAnalyticsId: 'G-XXXXXXXXXX', // ← Add your GA4 ID here
  
  enabled: process.env.NODE_ENV === 'production', // Auto-enabled in production
};
```

### Step 2: Update SEO Settings (Optional)

In the same file, update SEO configuration:

```typescript
export const SEO_CONFIG = {
  defaultTitle: 'Your Custom Title',
  defaultDescription: 'Your custom description...',
  siteUrl: 'https://yoursite.com',
  twitterHandle: '@yourhandle',
  keywords: ['keyword1', 'keyword2', ...],
  // ... more settings
};
```

### Step 3: Deploy

That's it! Push your changes and deploy. All tracking will automatically work across:
- ✅ All pages
- ✅ All blog posts
- ✅ All case studies
- ✅ All forms
- ✅ All buttons

---

## 🎯 Automatic Event Tracking

The following events are automatically tracked:

### Page Events
- **PageView** - Every page visit
- **ViewContent** - Blog posts and case studies

### User Actions
- **ButtonClick** - All button clicks
- **FormSubmit** - Contact forms, newsletter signups
- **VideoPlay** - Demo video plays
- **LinkClick** - Internal navigation
- **ExternalLinkClick** - External links

### Conversions
- **Contact** - Contact form submissions
- **RequestDemo** - Demo requests
- **CompleteRegistration** - Signups
- **Subscribe** - Newsletter subscriptions

---

## 🔧 Custom Event Tracking (For Developers)

To track custom events in your code:

```typescript
import { trackEvent } from '@/components/AnalyticsProvider';

// Track a button click
trackEvent('DEMO_REQUEST', { 
  source: 'hero_button',
  page: 'homepage' 
});

// Track form submission
trackEvent('CONTACT_FORM', {
  form_name: 'contact',
  user_type: 'ngo'
});
```

---

## 📈 What Gets Tracked

### Meta Pixel Tracks:
- Page views
- Button clicks
- Form submissions
- Video plays
- Custom conversions

### Google Ads Tracks:
- Conversions
- Click-through rates
- Form submissions
- Demo requests

### Google Analytics Tracks:
- Page views
- User behavior
- Traffic sources
- Bounce rates
- Session duration

---

## ✅ Verification

### Check if tracking is working:

1. **Meta Pixel Helper** (Chrome Extension)
   - Install: https://chrome.google.com/webstore
   - Visit your site
   - Check if pixel fires

2. **Google Tag Assistant** (Chrome Extension)
   - Install: https://tagassistant.google.com
   - Verify GA4 and Google Ads tags

3. **Browser Console**
   - Open DevTools (F12)
   - Look for: `📊 Event tracked:` messages

---

## 🚨 Troubleshooting

### Tracking not working?

1. **Check if enabled**
   - Tracking only works in production
   - Set `enabled: true` in `analytics-config.ts` for testing

2. **Verify IDs are correct**
   - Meta Pixel: 15-16 digits
   - Google Ads: Starts with `AW-`
   - GTM: Starts with `GTM-`
   - GA4: Starts with `G-`

3. **Clear cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

4. **Check browser console**
   - Look for errors in DevTools

---

## 📝 SEO Best Practices

### Title Tags
- Keep under 60 characters
- Include primary keyword
- Make it compelling

### Meta Descriptions
- 150-160 characters
- Include call-to-action
- Unique for each page

### Keywords
- Focus on long-tail keywords
- Include location if relevant
- Match user intent

### Open Graph Images
- Size: 1200x630px
- Format: JPG or PNG
- Include branding

---

## 🎓 Need Help?

- **Meta Pixel Setup**: https://www.facebook.com/business/help/952192354843755
- **Google Ads Setup**: https://support.google.com/google-ads/answer/6331314
- **Google Analytics Setup**: https://support.google.com/analytics/answer/9304153
- **GTM Setup**: https://support.google.com/tagmanager/answer/6103696

---

## 📧 Contact

For technical support, contact the development team.
