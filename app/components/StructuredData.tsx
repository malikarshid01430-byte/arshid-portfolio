"use client";

import { portfolioData } from "@/app/data/portfolio";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.personalInfo.name,
    "jobTitle": portfolioData.personalInfo.title,
    "description": portfolioData.personalInfo.bioShort,
    "email": portfolioData.personalInfo.email,
    "telephone": portfolioData.personalInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": portfolioData.personalInfo.location,
      "addressCountry": "IN"
    },
    "url": "https://arshid-portfolio.vercel.app",
    "sameAs": [
      portfolioData.personalInfo.github,
      portfolioData.personalInfo.linkedin
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": portfolioData.education[0]?.institution,
        "degree": portfolioData.education[0]?.degree
      }
    ],
    "knowsAbout": portfolioData.skillCategories.flatMap(cat => 
      cat.skills.map(skill => skill.name)
    )
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}