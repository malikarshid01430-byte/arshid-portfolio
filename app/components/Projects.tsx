"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X, ArrowRight, ShieldCheck, CircuitBoard,
  ExternalLink, ChevronRight, ArrowUpRight, Layers
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData, Project } from "../data/portfolio";
import LocalizedLink from "./LocalizedLink";

const ease = [0.22, 1, 0.36, 1] as const;

const categories = ["All", "Embedded & IoT", "Electronics & VLSI", "AI & Edge Computer Vision", "Full Stack Web"];

const categoryAccents: Record<string, string> = {
  "Embedded & IoT":           "var(--cyan)",
  "Electronics & VLSI":       "#818cf8",
  "AI & Edge Computer Vision":"var(--emerald)",
  "Full Stack Web":           "#f472b6",
};

const nodeColors: Record<string, string> = {
  sensor:   "rgba(52,211,153,0.12)",
  mcu:      "rgba(34,211,238,0.12)",
  "edge-ai":"rgba(244,114,182,0.12)",
  hardware: "rgba(251,191,36,0.12)",
  cloud:    "rgba(56,189,248,0.12)",
  ui:       "rgba(167,139,250,0.12)",
};
const nodeBorders: Record<string, string> = {
  sensor:   "#34d399",
  mcu:      "#22d3ee",
  "edge-ai":"#f472b6",
  hardware: "#fbbf24",
  cloud:    "#38bdf8",
  ui:       "#a78bfa",
};
const nodeText: Record<string, string> = {
  sensor:   "#34d399",
  mcu:      "#22d3ee",
  "edge-ai":"#f472b6",
  hardware: "#fbbf24",
  cloud:    "#38bdf8",
  ui:       "#a78bfa",
};

/* ── Project card ──────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const reduced = useReducedMotion();
  const accent  = categoryAccents[project.category] ?? "var(--cyan)";

  return (
    <motion.article
      layout
      key={project.id}
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.28, delay: index * 0.05, ease }}
      className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer card-lift"
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-dim)",
        minHeight: 280,
      }}
      onClick={() => onOpen(project)}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(project)}
      aria-label={`View case study: ${project.title}`}
    >
      {/* Decorative top accent bar */}
      <div className="h-[2px] w-full" style={{ background: accent, opacity: 0.6 }} aria-hidden="true" />

      <div className="flex flex-col gap-4 p-5 sm:p-6 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-label" style={{ color: accent }}>
              {project.category}
            </span>
            <h3
              className="font-semibold text-base leading-snug mt-1 transition-colors duration-150 group-hover:text-cyan-400"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h3>
          </div>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: "var(--text-dim)" }}
            aria-hidden="true"
          />
        </div>

        {/* Subtitle */}
        <p className="font-mono text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs leading-relaxed line-clamp-3 flex-1" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>

        {/* Result callout */}
        {project.results?.[0] && (
          <p
            className="text-xs leading-relaxed pl-3 border-l-2 py-1"
            style={{ borderColor: "var(--amber)", color: "var(--text-secondary)" }}
          >
            {project.results[0]}
          </p>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="badge badge-cyan">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: "var(--text-dim)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
              aria-label={`GitHub source for ${project.title}`}
            >
              <FaGithub className="h-3.5 w-3.5" aria-hidden="true" /> Source
            </a>
          ) : <span />}
          <span
            className="flex items-center gap-1 font-mono text-[10px]"
            style={{ color: accent }}
          >
            View Case Study <ChevronRight className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Modal ─────────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const reduced = useReducedMotion();

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  /* Prevent body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const accent = categoryAccents[project.category] ?? "var(--cyan)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={reduced ? undefined : { opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.25, ease }}
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden mb-8"
        style={{
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-dim)",
          boxShadow: "0 32px 80px -12px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Accent top bar */}
        <div className="h-[2px]" style={{ background: accent }} aria-hidden="true" />

        {/* Modal header */}
        <div
          className="flex items-start justify-between gap-4 px-6 py-5"
          style={{ borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-raised)" }}
        >
          <div>
            <span className="text-label" style={{ color: accent }}>
              {project.category} · {project.timeline && `${project.timeline}`}
            </span>
            <h2
              id="modal-title"
              className="mt-1.5 text-xl font-bold tracking-tight"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h2>
            <p className="font-mono text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 mt-1"
            style={{ border: "1px solid var(--border-dim)", color: "var(--text-tertiary)" }}
            aria-label="Close project details"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Modal body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-h-[72vh] overflow-y-auto">
          {/* Left col */}
          <div
            className="flex flex-col gap-6 p-6"
            style={{ borderRight: "1px solid var(--border-subtle)" }}
          >
            {project.problem && (
              <div>
                <h4 className="text-label mb-2" style={{ color: "var(--rose)" }}>▹ PROBLEM STATEMENT</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h4 className="text-label mb-2" style={{ color: "var(--emerald)" }}>▹ SOLUTION APPROACH</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.solution}</p>
              </div>
            )}
            <div>
              <h4 className="text-label mb-2" style={{ color: "var(--cyan)" }}>▹ OVERVIEW</h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.longDescription}</p>
            </div>
            {project.results && project.results.length > 0 && (
              <div>
                <h4 className="text-label mb-3" style={{ color: "var(--amber)" }}>▹ RESULTS & IMPACT</h4>
                <ul className="space-y-2">
                  {project.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <ShieldCheck className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: "var(--amber)" }} aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4 className="text-label mb-3" style={{ color: "var(--cyan)" }}>▹ KEY HIGHLIGHTS</h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <ShieldCheck className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            {project.technicalChallenges.length > 0 && (
              <div>
                <h4 className="text-label mb-3" style={{ color: "#fb923c" }}>▹ TECHNICAL CHALLENGES</h4>
                <ul className="space-y-2">
                  {project.technicalChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "#fb923c" }} aria-hidden="true">*</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4 className="text-label mb-3" style={{ color: "var(--text-dim)" }}>▹ TECH STACK</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !h-9 !text-xs">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> View Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !h-9 !text-xs">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live Demo
                </a>
              )}
              <LocalizedLink href={`/projects/${project.id}`} className="btn btn-outline-cyan !h-9 !text-xs">
                Full Case Study <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </LocalizedLink>
            </div>
          </div>

          {/* Right col */}
          <div className="flex flex-col gap-6 p-6">
            <div>
              <h4 className="text-label mb-4 flex items-center gap-2" style={{ color: "#818cf8" }}>
                <CircuitBoard className="h-3.5 w-3.5" aria-hidden="true" />
                SYSTEM ARCHITECTURE
              </h4>
              {project.architecture ? (
                <div
                  className="rounded-xl p-4 font-mono text-xs"
                  style={{ backgroundColor: "var(--bg-inset)", border: "1px solid var(--border-dim)" }}
                >
                  <div className="flex flex-wrap gap-2 justify-center mb-5">
                    {project.architecture.nodes.map((n) => (
                      <div
                        key={n.id}
                        className="flex flex-col items-center text-center px-3 py-2 rounded-lg border max-w-[120px]"
                        style={{
                          backgroundColor: nodeColors[n.type] ?? "rgba(100,116,139,0.1)",
                          borderColor: nodeBorders[n.type] ?? "#64748b",
                          color: nodeText[n.type] ?? "#94a3b8",
                        }}
                      >
                        <span className="text-[8px] uppercase tracking-wider opacity-70 font-bold">{n.type}</span>
                        <span className="text-[10px] font-semibold mt-0.5">{n.label}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}>
                    <span className="text-label block mb-3" style={{ color: "var(--text-dim)" }}>
                      {"// SIGNAL PATH"}
                    </span>
                    <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar">
                      {project.architecture.edges.map((edge, i) => {
                        const from = project.architecture?.nodes.find((n) => n.id === edge.from)?.label ?? edge.from;
                        const to   = project.architecture?.nodes.find((n) => n.id === edge.to)?.label ?? edge.to;
                        return (
                          <div
                            key={i}
                            className="flex items-center justify-between gap-2 rounded p-2"
                            style={{ backgroundColor: "var(--bg-raised)", border: "1px solid var(--border-subtle)" }}
                          >
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{from}</span>
                              <ArrowRight className="h-3 w-3" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                              <span style={{ color: "var(--cyan)" }}>{to}</span>
                            </div>
                            <span
                              className="badge badge-cyan shrink-0"
                              style={{ fontSize: "0.55rem" }}
                            >
                              {edge.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="flex items-center justify-center rounded-xl p-8"
                  style={{
                    border: "1px dashed var(--border-dim)",
                    color: "var(--text-dim)",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  <Layers className="h-4 w-4 mr-2" aria-hidden="true" /> No diagram available
                </div>
              )}
            </div>

            {project.features.length > 0 && (
              <div>
                <h4 className="text-label mb-3" style={{ color: "#818cf8" }}>▹ FEATURES</h4>
                <ul className="space-y-1.5">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <ArrowRight className="h-3 w-3 mt-0.5 shrink-0" style={{ color: "#818cf8" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.futureImprovements.length > 0 && (
              <div>
                <h4 className="text-label mb-3" style={{ color: "var(--emerald)" }}>▹ FUTURE IMPROVEMENTS</h4>
                <ul className="space-y-1.5">
                  {project.futureImprovements.map((fi, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--emerald)" }} aria-hidden="true">›</span>
                      {fi}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main section ─────────────────────────────────────────────────── */
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject,    setActiveProject]    = useState<Project | null>(null);
  const reduced = useReducedMotion();

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? portfolioData.projects
        : portfolioData.projects.filter((p) => p.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden scroll-mt-20 section-pad"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
      aria-labelledby="projects-heading"
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%", right: "5%",
          width: "40vw", height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">

        {/* Section header */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="mb-12"
        >
          <p className="section-eyebrow mb-4">Projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 id="projects-heading" className="section-title">
              Engineering Case Studies
            </h2>
            <p className="text-sm max-w-xs sm:text-right" style={{ color: "var(--text-tertiary)" }}>
              {portfolioData.projects.length} projects · measurable outcomes
            </p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Project category filter"
        >
          {categories.map((cat) => {
            const active  = selectedCategory === cat;
            const accent  = categoryAccents[cat] ?? "var(--cyan)";
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={active}
                className="px-4 py-2 rounded-full font-mono text-[10px] tracking-wide transition-all duration-180 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  backgroundColor: active ? `${accent}18` : "var(--bg-raised)",
                  border: active ? `1px solid ${accent}44` : "1px solid var(--border-subtle)",
                  color: active ? accent : "var(--text-tertiary)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setActiveProject}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
