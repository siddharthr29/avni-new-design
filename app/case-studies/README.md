# Case Studies Template System

This directory contains a professional, structured system for managing case studies using HTML/React components.

## 📁 Structure

```
case-studies/
├── components/
│   └── CaseStudyTemplate.tsx    # Reusable template component
├── data/
│   └── case-studies-data.ts     # All case study content
├── [slug]/
│   └── page.tsx                  # Dynamic route handler
└── README.md                     # This file
```

## 🎨 Features

- **Professional Design**: Clean, modern layout with proper visual hierarchy
- **Structured Data**: Type-safe data structure for consistency
- **SEO Optimized**: Automatic metadata and JSON-LD generation
- **Reusable Template**: Single component for all case studies
- **Easy to Maintain**: Add new case studies by editing one file

## 📝 Adding a New Case Study

### Step 1: Add Data

Edit `data/case-studies-data.ts` and add a new entry:

```typescript
export const caseStudiesData: Record<string, CaseStudyData> = {
  // ... existing case studies
  
  'your-case-study-slug': {
    slug: 'your-case-study-slug',
    title: 'Your Case Study Title',
    organization: 'Organization Name',
    sector: 'Sector (e.g., Health & Nutrition)',
    location: 'Location (e.g., Karnataka, India)',
    beneficiaries: '10,000+',
    impact: 'Key impact metric',
    date: '2025-06-01',
    
    challenge: {
      description: 'Brief description of the challenge...',
      points: [
        'Challenge point 1',
        'Challenge point 2',
        'Challenge point 3',
      ],
    },
    
    solution: {
      description: 'How Avni solved the problem...',
      features: [
        {
          title: 'Feature 1',
          description: 'Description of feature 1',
        },
        {
          title: 'Feature 2',
          description: 'Description of feature 2',
        },
      ],
    },
    
    implementation: {
      description: 'How the implementation was done...',
      phases: [
        {
          title: 'Phase 1',
          description: 'What happened in phase 1',
        },
        {
          title: 'Phase 2',
          description: 'What happened in phase 2',
        },
      ],
    },
    
    results: {
      description: 'Overview of results achieved...',
      metrics: [
        {
          value: '50% improvement',
          label: 'in data accuracy',
        },
        {
          value: '100% digital',
          label: 'data collection',
        },
      ],
    },
    
    testimonial: {
      quote: 'What the client said about Avni...',
      author: 'Person Name',
      role: 'Title, Organization',
    },
  },
};
```

### Step 2: That's It!

The case study will automatically:
- ✅ Be available at `/case-studies/your-case-study-slug`
- ✅ Have proper SEO metadata
- ✅ Include JSON-LD structured data
- ✅ Use the professional template
- ✅ Be statically generated at build time

## 🎯 Template Sections

The template includes these sections in order:

1. **Challenge** - Problem statement with bullet points
2. **Solution** - How Avni addressed the challenge with feature cards
3. **Implementation** - Phased rollout with numbered steps
4. **Results** - Metrics in a grid layout with icons
5. **Testimonial** - Quote with author details

## 🎨 Design Elements

- **Feature Cards**: White cards with numbered badges
- **Phase Steps**: Gradient circular badges with descriptions
- **Result Metrics**: Grid layout with checkmark icons
- **Testimonial**: Gradient background with author avatar
- **Consistent Spacing**: Professional typography and spacing throughout

## 📊 SEO Features

Each case study automatically includes:
- Optimized meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD CreativeWork schema
- Breadcrumb navigation schema
- Canonical URLs

## 🚀 Best Practices

1. **Keep it concise**: Aim for 3-5 points per section
2. **Use metrics**: Include specific numbers in results
3. **Tell a story**: Follow the Challenge → Solution → Results flow
4. **Be specific**: Use real names, locations, and data
5. **Get quotes**: Include authentic testimonials from clients

## 📱 Responsive Design

The template is fully responsive:
- Mobile: Single column layout
- Tablet: 2-column grid for results
- Desktop: Full-width with optimal reading length

## 🔧 Customization

To customize the template:
1. Edit `components/CaseStudyTemplate.tsx` for layout changes
2. Modify Tailwind classes for styling
3. Update `data/case-studies-data.ts` interface for new fields

## 📚 Example

See the existing APF Odisha case study for a complete example of how to structure your content.

---

**Need help?** Check the existing case study data for reference or contact the development team.
