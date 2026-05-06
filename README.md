# Portfolio Website Customization Guide

## Quick Start

1. Clone this repository
2. Install dependencies:
```bash
npm install
``
3. Start the development server:
```bash
npm run dev
```

## How to Customize Your Portfolio:

### Personal Information
Edit the following files to update your personal information:

#### 1. Hero Section (`src/components/HeroSection.tsx`)
- Name
- Title/Role
- Short bio
- Social media links

#### 2. About Section (`src/components/AboutSection.tsx`)
- Professional summary
- Skills list
- Experience highlights

#### 3. Resume Section (`src/components/ResumeSection.tsx`)
- Work experience
- Education
- Certifications
- Technical skills

#### 4. Contact Section (`src/components/ContactSection.tsx`)
- Contact information
- Email address
- Social media links
- Location

### Styling Customization
The main styling files are located in `src/styles/`:
- `base.css`: Core styles
- `animations.css`: Animation effects
- `components.css`: Component-specific styles
- `utilities.css`: Utility classes

### Important Notes
- Don't modify the core structure of components
- Keep the existing class names and styling structure
- Test your changes locally before deploying

## Development
- Port: The site runs on port 3000 by default
- Node version: 14.x or higher recommended
- Package manager: npm

## Need Help?
If you encounter any issues:
1. Make sure all dependencies are installed
2. Clear your npm cache: `npm cache clean --force`
3. Delete node_modules and reinstall: 
```bash
rm -rf node_modules
npm install
```

