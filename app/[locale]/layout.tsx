import React from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { locales } from "../i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale)) return notFound();

  // Seed the React-cache locale store so next-intl server APIs don't
  // try to read the X-NEXT-INTL-LOCALE header (which is only set by
  // next-intl middleware — not present here since we use a pass-through proxy).
  setRequestLocale(locale);

  // Load locale messages directly
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
