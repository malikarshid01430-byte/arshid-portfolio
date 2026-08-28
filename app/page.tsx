import { redirect } from "next/navigation";

/**
 * Root route `/` — redirect to the default locale.
 * This ensures the canonical URL is /en (the only content locale available)
 * and prevents a 404 at the bare domain root.
 */
export default function Home() {
  redirect("/en");
}