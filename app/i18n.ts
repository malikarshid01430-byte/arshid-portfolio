import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "hi", "ur", "kn", "ta", "te", "ml", "mr", "gu", "pa", "bn", "or", "as", "ks", "ja", "zh", "ko", "de", "fr", "es", "ar", "ru", "it", "pt"];

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
