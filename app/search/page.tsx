"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Briefcase, Award, GraduationCap, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import LocalizedLink from "../components/LocalizedLink";

interface SearchResult {
  id: string;
  type: "project" | "skill" | "experience" | "certification" | "education";
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const typeLabels: Record<string, string> = {
  project:       "Project",
  skill:         "Skill",
  experience:    "Experience",
  certification: "Certification",
  education:     "Education",
};

const typeColors: Record<string, { bg: string; border: string; text: string }> = {
  project:       { bg: "rgba(34,211,238,0.07)",  border: "rgba(34,211,238,0.22)",  text: "var(--cyan)"    },
  skill:         { bg: "rgba(52,211,153,0.07)",  border: "rgba(52,211,153,0.22)",  text: "var(--emerald)" },
  experience:    { bg: "rgba(129,140,248,0.07)", border: "rgba(129,140,248,0.22)", text: "#818cf8"        },
  certification: { bg: "rgba(251,191,36,0.07)",  border: "rgba(251,191,36,0.22)",  text: "var(--amber)"   },
  education:     { bg: "rgba(244,114,182,0.07)", border: "rgba(244,114,182,0.22)", text: "#f472b6"        },
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function SearchPage() {
  const [query,  setQuery]  = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /* ── Build search index ── */
  const searchResults = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const results: SearchResult[] = [];

    portfolioData.projects.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.technologies.some((t) => t.toLowerCase().includes(q))) {
        results.push({ id: `project-${p.id}`, type: "project", title: p.title, description: p.subtitle, href: `/projects/${p.id}`, Icon: Briefcase });
      }
    });

    portfolioData.skillCategories.forEach((cat) => {
      cat.skills.forEach((s) => {
        if (s.name.toLowerCase().includes(q)) {
          results.push({ id: `skill-${s.name}`, type: "skill", title: s.name, description: cat.title, href: "/#skills", Icon: GraduationCap });
        }
      });
    });

    portfolioData.experience.forEach((exp, i) => {
      if (exp.role.toLowerCase().includes(q) || exp.company.toLowerCase().includes(q)) {
        results.push({ id: `exp-${i}`, type: "experience", title: `${exp.role} — ${exp.company}`, description: exp.period, href: "/#experience", Icon: Briefcase });
      }
    });

    portfolioData.certifications.forEach((cert, i) => {
      if (cert.name.toLowerCase().includes(q) || cert.issuer.toLowerCase().includes(q)) {
        results.push({ id: `cert-${i}`, type: "certification", title: cert.name, description: cert.issuer, href: "/certifications", Icon: Award });
      }
    });

    portfolioData.education.forEach((edu, i) => {
      if (edu.degree.toLowerCase().includes(q) || edu.institution.toLowerCase().includes(q)) {
        results.push({ id: `edu-${i}`, type: "education", title: edu.degree, description: `${edu.institution} · ${edu.period}`, href: "/#education", Icon: GraduationCap });
      }
    });

    return results.slice(0, 20);
  }, [query]);

  /* ── Keyboard shortcut ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 60);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => { setIsOpen(true); setTimeout(() => inputRef.current?.focus(), 60); }}
        className="fixed bottom-8 left-8 z-40 flex h-12 items-center gap-3 rounded-full font-mono text-xs transition-all focus-visible:outline-none focus-visible:ring-2"
        style={{
          border: "1px solid var(--border-dim)",
          backgroundColor: "var(--bg-surface)",
          color: "var(--text-tertiary)",
          paddingInline: "1rem",
        }}
        aria-label="Open search (Ctrl+K)"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Search portfolio</span>
        <kbd
          className="hidden sm:inline-flex items-center gap-0.5 px-1.5 rounded text-[10px] font-mono"
          style={{
            border: "1px solid var(--border-dim)",
            backgroundColor: "var(--bg-raised)",
            color: "var(--text-dim)",
          }}
          aria-label="Keyboard shortcut: Control K"
        >
          Ctrl K
        </kbd>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
            style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Search portfolio"
          >
            <motion.div
              key="search-panel"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.22, ease }}
              className="w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-dim)",
                boxShadow: "0 32px 80px -16px rgba(0,0,0,0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Input row */}
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <Search className="h-4 w-4 shrink-0" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, skills, experience, certifications..."
                  className="flex-1 bg-transparent font-mono text-sm outline-none"
                  style={{ color: "var(--text-primary)" }}
                  aria-label="Search portfolio content"
                  autoComplete="off"
                  spellCheck={false}
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 rounded transition-colors focus-visible:outline-none"
                    style={{ color: "var(--text-dim)" }}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2"
                  style={{ border: "1px solid var(--border-dim)", color: "var(--text-tertiary)" }}
                  aria-label="Close search"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* Results */}
              <div
                className="overflow-y-auto no-scrollbar"
                style={{ maxHeight: "min(420px, 60vh)" }}
                role="listbox"
                aria-label="Search results"
              >
                {query.trim() === "" ? (
                  <div className="flex flex-col items-center justify-center py-14 gap-3">
                    <Search className="h-10 w-10" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                    <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                      Start typing to search the portfolio
                    </p>
                    <p className="text-label" style={{ color: "var(--text-dim)" }}>
                      Projects · Skills · Experience · Certifications
                    </p>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-14 gap-3">
                    <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                      No results for &ldquo;{query}&rdquo;
                    </p>
                    <p className="text-label" style={{ color: "var(--text-dim)" }}>
                      Try a different keyword
                    </p>
                  </div>
                ) : (
                  <div className="p-3 space-y-1.5" aria-live="polite" aria-label={`${searchResults.length} results`}>
                    {searchResults.map((result) => {
                      const colors = typeColors[result.type] ?? typeColors.project;
                      const { Icon } = result;
                      return (
                        <LocalizedLink
                          key={result.id}
                          href={result.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all focus-visible:outline-none focus-visible:ring-2"
                          style={{
                            backgroundColor: "var(--bg-raised)",
                            border: "1px solid var(--border-subtle)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = colors.border;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                          }}
                          role="option"
                          aria-selected="false"
                        >
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm font-medium truncate transition-colors group-hover:text-cyan-400"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {result.title}
                            </p>
                            <p className="text-label truncate mt-0.5" style={{ color: "var(--text-dim)" }}>
                              {typeLabels[result.type]} · {result.description}
                            </p>
                          </div>
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: "var(--cyan)" }}
                            aria-hidden="true"
                          />
                        </LocalizedLink>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderTop: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-raised)" }}
              >
                <span className="text-label" style={{ color: "var(--text-dim)" }}>
                  {searchResults.length > 0 ? `${searchResults.length} results` : "No results"}
                </span>
                <span className="text-label" style={{ color: "var(--text-dim)" }}>
                  <kbd
                    className="px-1.5 py-0.5 rounded text-[9px] font-mono mr-1"
                    style={{ border: "1px solid var(--border-dim)", backgroundColor: "var(--bg-inset)" }}
                  >
                    ESC
                  </kbd>
                  to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
