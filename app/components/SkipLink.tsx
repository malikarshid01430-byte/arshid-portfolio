"use client";

/**
 * Accessible skip link — appears on first Tab keypress so keyboard users
 * can bypass the navigation and jump straight to main content.
 * The Escape-key handler has been removed: Escape is reserved for closing
 * modals/dialogs; forcing focus to main on Escape is non-standard and
 * breaks users' expectations when modals are open.
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:outline-none"
      style={{
        backgroundColor: "var(--cyan)",
        color: "#030712",
      }}
    >
      Skip to main content
    </a>
  );
}
