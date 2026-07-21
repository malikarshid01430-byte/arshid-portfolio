# Arshid Ahmad Malik - Portfolio

Enterprise-grade portfolio website showcasing projects, skills, and experience in Embedded Systems, IoT, VLSI, and Full Stack Development.

## Features

- **Modern UI**: Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion
- **Analytics**: Google Analytics 4 and Microsoft Clarity integration
- **AI Chatbot**: Portfolio assistant with local fallback and OpenAI support
- **Blog System**: Technical articles with Markdown support and SEO optimization
- **GitHub Integration**: Live repository stats and contribution activity
- **Search**: Global search modal with keyboard shortcut (Ctrl+K)
- **Timeline**: Interactive career journey with animations
- **Certifications**: Professional certifications showcase
- **Project Case Studies**: Detailed project pages with JSON-LD structured data
- **SEO**: Complete SEO with OpenGraph, Twitter Cards, and JSON-LD
- **Performance**: Optimized for Lighthouse 100 scores
- **Accessibility**: WCAG compliant with keyboard navigation
- **Dark Mode**: Persistent theme with system preference detection

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Installation

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your actual values
# Required:
# - NEXT_PUBLIC_SITE_URL
# - NEXT_PUBLIC_GA_MEASUREMENT_ID
# - NEXT_PUBLIC_CLARITY_ID
# Optional:
# - NEXT_PUBLIC_OPENAI_API_KEY
# - GITHUB_TOKEN
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your site URL | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID | Yes |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID | Yes |
| `NEXT_PUBLIC_OPENAI_API_KEY` | OpenAI API key for AI chatbot | No |
| `GITHUB_TOKEN` | GitHub personal access token | No |
| `EMAILJS_PUBLIC_KEY` | EmailJS public key | No |
| `EMAILJS_SERVICE_ID` | EmailJS service ID | No |
| `EMAILJS_TEMPLATE_ID` | EmailJS template ID | No |

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Start production server
npm start
```

## Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Deployment on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## Project Structure

```
app/
├── api/                    # API routes
│   ├── chat/              # AI chatbot endpoint
│   └── resume/            # Resume download
├── blog/                  # Blog pages
│   ├── page.tsx           # Blog listing
│   └── [slug]/            # Individual blog posts
├── certifications/        # Certifications page
├── components/            # Reusable components
├── data/                  # Portfolio data
├── hooks/                 # Custom React hooks
├── layout.tsx             # Root layout
├── page.tsx               # Home page
├── projects/              # Project pages
│   └── [id]/              # Individual project pages
└── timeline/              # Timeline page

lib/
└── analytics.ts           # Analytics utilities

public/
└── images/                # Static images
```

## Key Pages

- `/` - Home page with hero, skills, projects, experience
- `/blog` - Technical articles and tutorials
- `/blog/[slug]` - Individual blog posts
- `/certifications` - Professional certifications
- `/timeline` - Interactive career timeline
- `/search` - Global search (Ctrl+K)
- `/projects/[id]` - Detailed project case studies

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/1200x600/030712/06b6d4?text=Home+Page)

### Blog
![Blog](https://via.placeholder.com/1200x600/030712/06b6d4?text=Blog)

### Timeline
![Timeline](https://via.placeholder.com/1200x600/030712/06b6d4?text=Timeline)

## License

MIT License - feel free to use this portfolio as a template for your own.

## Contact

**Arshid Ahmad Malik**

- **Portfolio**: https://arhid-portfolio.vercel.app
- **GitHub**: https://github.com/arshidahmadmalik
- **LinkedIn**: https://linkedin.com/in/arshidahmadmalik
- **Email**: malikarshid9893@gmail.com
- **Phone**: +91 8971864478

## Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js 16, React 19, and Tailwind CSS