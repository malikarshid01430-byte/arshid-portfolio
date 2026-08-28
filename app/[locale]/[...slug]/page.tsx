import React from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string; slug?: string[] }>;
};

const singlePageMap = new Set([
  "contact",
  "certifications",
  "skills",
  "search",
  "testimonials",
  "timeline",
  "blog",
]);

export default async function LocalizedCatchAll({ params }: Props) {
  const { locale, slug = [] } = await params;

  // Seed locale context for next-intl server APIs
  setRequestLocale(locale);

  let Page: React.ComponentType<Record<string, unknown>> | null = null;
  let pageProps: Record<string, unknown> = {};

  try {
    const [first, second] = slug;

    if (slug.length === 0) {
      // /[locale] — handled by [locale]/page.tsx, shouldn't reach here
      return notFound();
    } else if (slug.length === 1 && singlePageMap.has(first)) {
      // e.g. /en/contact, /en/certifications, /en/blog
      const mod = await import(`../../${first}/page`);
      Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
    } else if (first === "projects" && second) {
      // e.g. /en/projects/solar-powered-air-purifier
      const mod = await import(`../../projects/[id]/page`);
      Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
      pageProps = { params: Promise.resolve({ id: second }) };
    } else if (first === "blog" && second) {
      // e.g. /en/blog/esp32-development-guide
      const mod = await import(`../../blog/[slug]/page`);
      Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
      pageProps = { params: Promise.resolve({ slug: second }) };
    } else {
      // Fallback: try to load a matching page
      const mod = await import(`../../${slug.join("/")}/page`);
      Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
    }
  } catch {
    return notFound();
  }

  if (!Page) return notFound();

  return <Page {...pageProps} />;
}
