"use client";

import { Suspense, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cpu, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@teispace/next-themes";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";
import LanguageSelector from "./LanguageSelector";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education",  href: "#education" },
  { name: "Contact",    href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen]               = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled]       = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef   = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const mounted  = useMounted();
  const reduced  = useReducedMotion();
  const { theme, setTheme } = useTheme();

  /* ── Scroll & section tracking ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((s): s is Element => Boolean(s));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -65%", threshold: 0 },
    );

    onScroll();
    sections.forEach((s) => observer.observe(s));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ── Active indicator position ── */
  useEffect(() => {
    const idx = navItems.findIndex((item) => item.href.slice(1) === activeSection);
    const el  = linkRefs.current[idx];
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect  = el.getBoundingClientRect();
    setIndicatorStyle({
      left:  elRect.left - navRect.left,
      width: elRect.width,
    });
  }, [activeSection]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <motion.header
        initial={{ y: reduced ? 0 : -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease }}
        className="fixed left-0 right-0 top-0 z-40 transition-all duration-300"
        style={{
          borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          backgroundColor: isScrolled
            ? "rgba(9,9,11,0.92)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(160%)" : "none",
          height: isScrolled ? "56px" : "72px",
        }}
      >
        <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-10 xl:px-14 h-full">
          <div className="flex h-full items-center justify-between">

            {/* ── Logo ── */}
            <a
              href="#"
              className="flex items-center gap-3 group focus-visible:outline-none"
              aria-label={`${portfolioData.personalInfo.name} — back to top`}
            >
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200"
                style={{
                  border: "1px solid var(--border-dim)",
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--cyan)",
                }}
              >
                <Cpu className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span
                  className="font-mono text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: "var(--text-primary)" }}
                >
                  {portfolioData.personalInfo.name.split(" ").slice(0, 2).join(" ")}
                </span>
                <span
                  className="text-label mt-0.5"
                  style={{ color: "var(--text-dim)" }}
                >
                  ECE ENGINEER
                </span>
              </div>
            </a>

            {/* ── Desktop nav ── */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center relative"
              aria-label="Main navigation"
            >
              <div
                className="flex items-center gap-0.5 rounded-full px-3 py-2"
                style={{
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "rgba(15,17,23,0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Sliding indicator pill */}
                {!reduced && (
                  <motion.span
                    className="absolute bottom-1.5 h-[3px] rounded-full pointer-events-none"
                    style={{
                      background: "var(--cyan)",
                      left: indicatorStyle.left + 12,   /* px-3 offset */
                    }}
                    animate={{ width: indicatorStyle.width }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    aria-hidden="true"
                  />
                )}

                {navItems.map((item, idx) => {
                  const active = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      ref={(el) => { linkRefs.current[idx] = el; }}
                      className="relative px-4 py-1.5 font-mono text-[11px] tracking-wide rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2"
                      style={{
                        color: active ? "var(--cyan)" : "var(--text-tertiary)",
                        fontWeight: active ? 600 : 400,
                      }}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* ── Right controls ── */}
            <div className="hidden lg:flex items-center gap-2">
              <Suspense
                fallback={
                  <div
                    className="h-9 w-12 rounded-lg"
                    style={{ border: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-surface)" }}
                    aria-hidden="true"
                  />
                }
              >
                <LanguageSelector />
              </Suspense>

              {/* Theme toggle */}
              {mounted ? (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    border: "1px solid var(--border-dim)",
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-tertiary)",
                  }}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark"
                    ? <Sun  className="h-3.5 w-3.5" aria-hidden="true" />
                    : <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                  }
                </button>
              ) : (
                <div
                  className="h-9 w-9 rounded-lg"
                  style={{ border: "1px solid var(--border-dim)", backgroundColor: "var(--bg-surface)" }}
                  aria-hidden="true"
                />
              )}

              {/* Resume CTA */}
              <DownloadResumeButton
                variant="primary"
                label="Resume"
                className="btn btn-outline-cyan !h-9 !text-[11px] !px-4"
              />
            </div>

            {/* ── Mobile controls ── */}
            <div className="flex lg:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline-none"
                  style={{
                    border: "1px solid var(--border-dim)",
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-tertiary)",
                  }}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                  {theme === "dark"
                    ? <Sun  className="h-3.5 w-3.5" aria-hidden="true" />
                    : <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                  }
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  border: "1px solid var(--border-dim)",
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--cyan)",
                }}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen
                  ? <X    className="h-4 w-4" aria-hidden="true" />
                  : <Menu className="h-4 w-4" aria-hidden="true" />
                }
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.28, ease }}
              className="fixed inset-y-0 right-0 z-50 w-72 max-w-[90vw] flex flex-col lg:hidden"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderLeft: "1px solid var(--border-dim)",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                  <span className="text-label" style={{ color: "var(--cyan)" }}>NAVIGATION</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors focus-visible:outline-none"
                  style={{
                    border: "1px solid var(--border-dim)",
                    color: "var(--text-tertiary)",
                  }}
                  aria-label="Close navigation menu"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* Language selector */}
              <div className="px-6 py-3" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <Suspense fallback={<div className="h-9 w-20 rounded-lg" style={{ backgroundColor: "var(--bg-raised)" }} />}>
                  <LanguageSelector />
                </Suspense>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-3 py-3 gap-0.5 flex-1" aria-label="Mobile navigation">
                {navItems.map((item, idx) => {
                  const active = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ x: 16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.22, ease }}
                      className="flex items-center justify-between px-4 py-3 rounded-lg font-mono text-sm tracking-wide transition-colors focus-visible:outline-none"
                      style={{
                        backgroundColor: active ? "var(--cyan-dim)" : "transparent",
                        color: active ? "var(--cyan)" : "var(--text-secondary)",
                        borderLeft: active ? "2px solid var(--cyan)" : "2px solid transparent",
                      }}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.name}
                      {active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "var(--cyan)" }}
                          aria-hidden="true"
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile resume CTA */}
              <div className="p-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <DownloadResumeButton
                  variant="primary"
                  label="DOWNLOAD RESUME"
                  className="w-full btn btn-primary justify-center"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
