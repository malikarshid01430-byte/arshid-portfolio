import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "hi", "ur", "kn", "ta", "te", "ml", "mr", "gu", "pa", "bn", "or", "as", "ks", "ja", "zh", "ko", "de", "fr", "es", "ar", "ru", "it", "pt"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};