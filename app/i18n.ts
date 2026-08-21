export const locales = [
  "en",
  "hi",
  "ur",
  "kn",
  "ta",
  "te",
  "ml",
  "mr",
  "gu",
  "pa",
  "bn",
  "or",
  "as",
  "ks",
  "ja",
  "zh",
  "ko",
  "de",
  "fr",
  "es",
  "ar",
  "ru",
  "it",
  "pt",
];

export type Locale = (typeof locales)[number];
// `locales` is a simple shared list used by the app. Avoid importing
// next-intl/server here to prevent runtime dev-mode checks for a
// separate `next-intl` config file. Message loading is handled in
// `app/[locale]/layout.tsx` which imports JSON directly.

export default locales as readonly Locale[];
