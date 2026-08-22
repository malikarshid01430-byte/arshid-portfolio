"use client";

import { ArrowUp, Terminal, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

const atsTags = [
  "Embedded Systems", "IoT", "VLSI", "FPGA", "ESP32", "STM32",
  "Arduino", "Android", "React", "Next.js", "Verilog", "Edge AI",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "var(--bg-inset)",
        borderTop: "1px solid var(--border-subtle)",
      }}
      aria-label="Site footer"
    >
      {/* ── Main footer grid ── */}
      <div className="container-tight py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Identity */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div>
              <p
                className="font-mono text-sm font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {portfolioData.personalInfo.name}
              </p>
              <p className="text-label" style={{ color: "var(--text-dim)" }}>
                Electronics &amp; Communication Engineer
              </p>
            </div>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: "var(--text-tertiary)" }}>
              Building at the hardware–software boundary. Embedded systems, IoT, VLSI, and full-stack engineering.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2 mt-1">
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-raised)",
                  color: "var(--text-dim)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan-border)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
                aria-label="GitHub profile"
              >
                <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-raised)",
                  color: "var(--text-dim)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan-border)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 ml-1"
                style={{
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-raised)",
                  color: "var(--text-dim)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan-border)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <p className="text-label mb-1" style={{ color: "var(--text-dim)" }}>CONTACT</p>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="flex items-center gap-2.5 text-xs transition-colors"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
            >
              <Mail className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              {portfolioData.personalInfo.email}
            </a>
            <a
              href={`tel:${portfolioData.personalInfo.phone}`}
              className="flex items-center gap-2.5 text-xs transition-colors"
              style={{ color: "var(--text-tertiary)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
            >
              <Phone className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              {portfolioData.personalInfo.phone}
            </a>
            <div className="flex items-start gap-2.5 text-xs" style={{ color: "var(--text-tertiary)" }}>
              <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              {portfolioData.personalInfo.location}
            </div>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-4 flex flex-col gap-2" aria-label="Footer navigation">
            <p className="text-label mb-1" style={{ color: "var(--text-dim)" }}>NAVIGATION</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-mono transition-colors"
                  style={{ color: "var(--text-tertiary)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="container-tight pb-6"
        style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.25rem" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-label" style={{ color: "var(--text-dim)" }}>
            &copy; {year} {portfolioData.personalInfo.name}. All Rights Reserved.
          </p>

          {/* System line */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-label" style={{ color: "var(--text-dim)" }}>
              <Terminal className="h-3 w-3" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              <span>SYSTEM ONLINE</span>
              <span className="mx-2 opacity-30">·</span>
              <span>PORTFOLIO v2</span>
            </div>
          </div>

          {/* Stack + ATS tags */}
          <p className="text-label" style={{ color: "var(--text-dim)" }}>
            Next.js 16 · React 19 · Tailwind v4
          </p>
        </div>

        {/* ATS parsing tags (visually subdued, SEO-relevant) */}
        <div className="mt-3 flex flex-wrap gap-3" aria-label="Technology keywords">
          {atsTags.map((tag) => (
            <span key={tag} className="text-label" style={{ color: "var(--text-dim)", opacity: 0.6 }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
