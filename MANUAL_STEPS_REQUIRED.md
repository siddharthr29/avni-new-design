# Manual Steps Required

## 1. Add Digital Public Goods Image

**Action Required:** Save the Digital Public Goods Alliance logo to:
```
/public/images/digital-public-goods.png
```

**Image Details:**
- The image has been provided by the user
- It shows the Digital Public Goods Alliance logo (blue geometric shape with text)
- Should be saved as PNG format
- Recommended size: Keep original dimensions (will be displayed at h-16 / 64px height)

**Where it's used:**
- Footer component (`components/layout/Footer.tsx`)
- Links to: https://digitalpublicgoods.net/registry/avni.html

## 2. Verify FAQs Search

The FAQs search functionality is implemented and should work correctly. It filters by:
- Question text (case-insensitive)
- Answer text (case-insensitive)

**Test it:**
1. Go to `/faqs`
2. Type in the search box
3. Results should filter in real-time

If there are issues, check browser console for errors.

## 3. Test Footer Enhancements

**New features to test:**
- ✅ Play Store download button (links to Avni app)
- ✅ Digital Public Goods badge (once image is added)
- ✅ System Status link (green indicator with pulse animation)
- ✅ All links work correctly

## 4. Test Navigation Enhancements

**New hover effects:**
- Nav items scale slightly on hover
- Dropdown chevron rotates 180° when open
- Dropdown items slide right on hover
- Smooth transitions throughout

## 5. Case Studies

Case studies are working with:
- ✅ CreativeWork JSON-LD schema
- ✅ generateStaticParams for static generation
- ✅ Proper metadata
- ✅ Breadcrumb navigation

Currently only one case study exists in the data. To add more:
1. Edit `/app/case-studies/[slug]/page.tsx`
2. Add new entries to `caseStudiesData` object
3. Follow the same structure as the existing APF Odisha case study

## Summary

**Completed:**
- ✅ Footer with Play Store button, Status page, and DPG badge section
- ✅ Enhanced navigation hover effects
- ✅ FAQs search functionality (already working)
- ✅ Case studies with proper SEO

**Requires Manual Action:**
- ⚠️ Add Digital Public Goods image to `/public/images/digital-public-goods.png`

