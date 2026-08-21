import React from "react";
import { notFound } from "next/navigation";

type Props = {
  params: { slug?: string[] };
};

export default async function LocalizedCatchAll({ params }: Props) {
  const slug = params.slug || [];
  // map slug to existing app pages where possible
  const singlePageMap = new Set([
    "contact",
    "certifications",
    "skills",
    "search",
    "testimonials",
    "timeline",
  ]);

  let Page: React.ComponentType<Record<string, unknown>> | null = null;
  let pageProps: Record<string, unknown> = {};

  try {
    if (slug.length === 0) {
      const mod = await import("../../page");
      Page = mod.default;
    } else {
      const [first, second] = slug;

      if (slug.length === 1 && singlePageMap.has(first)) {
        const mod = await import(`../../${first}/page`);
        Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
      } else if (first === "projects" && second) {
        const mod = await import(`../../projects/[id]/page`);
        Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
        pageProps = { params: { id: second } };
      } else if (first === "blog" && second) {
        const mod = await import(`../../blog/[slug]/page`);
        Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
        pageProps = { params: { slug: second } };
      } else {
        const mod = await import(`../../${slug.join("/")}/page`);
        Page = mod.default as unknown as React.ComponentType<Record<string, unknown>>;
      }
    }
  } catch {
    return notFound();
  }

  if (!Page) return notFound();

  return <Page {...pageProps} />;
}
