import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Minimal pass-through proxy.
 * Locale routing is handled by the app/[locale] layout and catch-all pages.
 * This file replaces the deprecated middleware.ts convention in Next.js 16.
 */
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
