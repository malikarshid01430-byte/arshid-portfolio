import React from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "../i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Intentionally do not statically generate all locale routes here to avoid
// requiring a separate next-intl config at build time. Routes will be
// server-rendered on demand which preserves current behavior.

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale)) return notFound();

  // Load locale messages directly to avoid next-intl build-time config lookup
  // messages shape is nested; allow any to satisfy various translation structures
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let messages: Record<string, any>;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../messages/en.json`)).default;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
