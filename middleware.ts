import { NextResponse } from "next/server";

// Minimal pass-through middleware: locale routing is handled by the
// `app/[locale]` layout and catch-all pages. This avoids runtime errors
// from the next-intl middleware when a separate config file is not present.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};