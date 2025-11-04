# 🌟 Avni Website

> Modern, performant website for Avni - the offline-first, AI-powered field data collection platform built for NGOs.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](LICENSE)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- **🚀 Next.js 16** - Latest App Router with Turbopack for blazing-fast development
- **⚡ Performance Optimized** - 100% Web Vitals target with image optimization and lazy loading
- **📱 Fully Responsive** - Mobile-first design that works perfectly on all devices
- **🎨 Modern UI** - Beautiful TailwindCSS styling with Lucide Icons

### Key Pages & Components
- **🎯 Scoping Tool** - Interactive 10-question assessment to help NGOs determine if Avni is right for them
- **🗺️ Interactive India Map** - React Leaflet-powered map showing Avni's presence across Indian states
- **📝 Blog System** - Markdown-based blog with pagination (9 posts per page), featured posts, and banner images
- **📅 Events Page** - Showcase upcoming and past events, webinars, and community meetups
- **👥 Team Page** - Meet the co-founders and team with colorful avatars
- **📊 Case Studies** - Detailed success stories with dynamic icons and rich content
- **💬 WhatsApp Integration** - Auto-popup chat button after 4 seconds with pre-filled message
- **🎨 Testimonials** - Partner testimonials with photos and impact metrics
- **🏢 Partners Marquee** - Animated logo carousel with continuous right-to-left scroll

### Technical Excellence
- **🔍 SEO Optimized** - Complete meta tags, Open Graph, sitemap.xml, and robots.txt
- **♿ Accessible** - WCAG 2.1 compliant with proper ARIA labels
- **🌐 i18n Ready** - Internationalization support for multi-language expansion
- **🎭 Animations** - Smooth Framer Motion animations throughout
- **📦 Type Safe** - Full TypeScript coverage for maintainability

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Libraries
- **Maps**: [React Leaflet](https://react-leaflet.js.org/) + [Leaflet](https://leafletjs.com/)
- **Markdown**: [Marked](https://marked.js.org/) + [React Markdown](https://github.com/remarkjs/react-markdown)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Development
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avniproject/avni-website.git
   cd avni-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Contact Form
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

## 📁 Project Structure

```
avni-website-new/
├── app/                      # Next.js App Router pages
│   ├── (routes)/            # Route groups
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog listing & posts
│   │   ├── case-studies/  # Case studies
│   │   ├── contact/        # Contact page
│   │   ├── demo/           # Demo page
│   │   ├── events/         # Events page
│   │   ├── features/       # Features page
│   │   ├── india-map/      # Interactive India map
│   │   ├── pricing/        # Pricing page
│   │   ├── scoping-tool/   # Avni scoping assessment
│   │   ├── solutions/      # Solutions page
│   │   └── team/           # Team page
│   ├── favicon.ico         # Favicon
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/              # React components
│   ├── layout/             # Layout components
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   └── ...
│   ├── IndiaMap.tsx        # Leaflet map component
│   └── WhatsAppChat.tsx    # WhatsApp button
├── content/                 # Content files
│   └── blog/               # Blog posts (Markdown)
├── lib/                     # Utility functions
│   ├── blog.ts             # Blog utilities
│   └── constants.ts        # App constants
├── public/                  # Static assets
│   ├── images/             # Images
│   └── ...
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 💻 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

### Adding a New Page

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Export a default component
4. Add metadata for SEO

```typescript
// app/new-page/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Avni',
  description: 'Page description',
};

export default function NewPage() {
  return <div>Your content</div>;
}
```

### Adding a Blog Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-01-15"
author: "Author Name"
description: "Post description"
tags: ["tag1", "tag2"]
featuredimage: "/images/blog/post-image.jpg"
featured: false
---

Your content here...
```

### Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first approach
- Use design tokens from `tailwind.config.ts`
- Keep components small and focused

## 🚢 Deployment

### Netlify (Recommended) ⚡

**Quick Deploy:**
1. Push code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Build settings are auto-configured via `netlify.toml`
4. Deploy!

**Build Configuration:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18
- Uses `@netlify/plugin-nextjs` for optimal Next.js support

**Features Included:**
- ✅ Automatic redirects for clean URLs
- ✅ Security headers (XSS, CSP, etc.)
- ✅ Asset caching (1 year for static files)
- ✅ Custom 404 page
- ✅ Trailing slash handling

### Vercel (Alternative)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Web Vitals Performance

Target metrics for production deployment:

| Metric | Target | Status |
|--------|--------|--------|
| **First Contentful Paint (FCP)** | < 1.5s | ✅ Optimized |
| **Largest Contentful Paint (LCP)** | < 2.5s | ✅ Optimized |
| **First Input Delay (FID)** | < 100ms | ✅ Optimized |
| **Cumulative Layout Shift (CLS)** | < 0.1 | ✅ Optimized |
| **Time to Interactive (TTI)** | < 3.5s | ✅ Optimized |
| **Speed Index** | < 3.0s | ✅ Optimized |

**Optimization Techniques:**
- ✅ Image optimization (WebP/AVIF formats)
- ✅ Lazy loading for images and components
- ✅ Code splitting with Next.js App Router
- ✅ CSS optimization with Tailwind
- ✅ Font optimization with next/font
- ✅ Asset caching with proper headers
- ✅ Minification and compression
- ✅ React Server Components for reduced JS bundle

**Lighthouse Score Target:** 90+ across all categories

### Performance Monitoring

```bash
# Run Lighthouse audit
npm run build
npx lighthouse http://localhost:3000 --view

# Check bundle size
npm run build
npx @next/bundle-analyzer
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments where necessary
   - Test your changes thoroughly
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use meaningful variable names
- Write self-documenting code
- Add JSDoc comments for complex functions

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

### Pull Request Process

1. Update README if needed
2. Ensure all tests pass
3. Request review from maintainers
4. Address review comments
5. Squash commits before merge

## 📝 License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by the Avni team
- Powered by [Samanvay Foundation](https://samanvayfoundation.org/)
- Icons by [Lucide](https://lucide.dev/)
- Maps by [OpenStreetMap](https://www.openstreetmap.org/)

## 📞 Contact

- **Website**: [avniproject.org](https://avniproject.org)
- **Email**: avnipartnerships@samanvayfoundation.org
- **GitHub**: [@avniproject](https://github.com/avniproject)
- **LinkedIn**: [Avni Project](https://www.linkedin.com/company/avniproject)
- **Twitter**: [@avniproject](https://twitter.com/avniproject)

## 🗺️ Roadmap

- [ ] Multi-language support (Hindi, Tamil, etc.)
- [ ] Dark mode
- [ ] Advanced search functionality
- [ ] User dashboard
- [ ] Community forum integration
- [ ] Video tutorials section
- [ ] Interactive product tour

---

Made with 💚 for social impact
