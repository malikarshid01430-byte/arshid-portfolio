// Server component — no "use client" — ensures JSON-LD is rendered in
// the initial HTML response and is visible to search engine crawlers.
import { portfolioData } from "@/app/data/portfolio";

const PORTFOLIO_URL = "https://arshid-portfolio.vercel.app";

export default function StructuredData() {
  const { personalInfo, skillCategories, education } = portfolioData;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PORTFOLIO_URL}/#person`,
    name: personalInfo.name,
    jobTitle: "Electronics and Communication Engineer",
    description: personalInfo.bioShort,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    url: PORTFOLIO_URL,
    image: `${PORTFOLIO_URL}/images/profile.jpg`,
    sameAs: [personalInfo.github, personalInfo.linkedin],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: education[0]?.institution ?? "MVJ College of Engineering",
        url: "https://mvjce.edu.in",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Bachelor of Engineering — Electronics and Communication Engineering",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Visvesvaraya Technological University (VTU)",
        },
      },
    ],
    knowsAbout: skillCategories.flatMap((cat) => cat.skills.map((s) => s.name)),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PORTFOLIO_URL}/#website`,
    name: `${personalInfo.name} — Portfolio`,
    url: PORTFOLIO_URL,
    author: { "@id": `${PORTFOLIO_URL}/#person` },
    description:
      "Engineering portfolio of Arshid Ahmad Malik, Electronics and Communication Engineer specialising in Embedded Systems, IoT, VLSI, Edge AI, and Full Stack Development.",
    inLanguage: ["en"],
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${PORTFOLIO_URL}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: PORTFOLIO_URL },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${PORTFOLIO_URL}/#projects` },
      { "@type": "ListItem", position: 3, name: "Blog", item: `${PORTFOLIO_URL}/blog` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${PORTFOLIO_URL}/contact` },
    ],
  };

  const combined = [personSchema, websiteSchema, breadcrumbSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combined) }}
    />
  );
}
