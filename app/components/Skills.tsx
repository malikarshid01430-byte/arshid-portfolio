"use client";

import { useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Cpu, CircuitBoard, Code2, Wrench, Smartphone, Brain } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const categoryMeta: Record<string, { icon: typeof Code2; accent: string; label: string }> = {
  "Programming Languages":  { icon: Code2,        accent: "var(--cyan)",    label: "PROG" },
  "Embedded Systems":       { icon: Cpu,           accent: "var(--cyan)",    label: "MCU"  },
  "IoT & Connectivity":     { icon: Cpu,           accent: "#22d3ee",        label: "IOT"  },
  "Android Development":    { icon: Smartphone,    accent: "var(--violet)",  label: "MOB"  },
  "AI & Machine Learning":  { icon: Brain,         accent: "#34d399",        label: "AI"   },
  "VLSI & Digital Design":  { icon: CircuitBoard,  accent: "#818cf8",        label: "VLSI" },
  "PCB Design":             { icon: CircuitBoard,  accent: "#fb923c",        label: "PCB"  },
  "Tools & Software":       { icon: Wrench,        accent: "#94a3b8",        label: "TOOLS"},
  "Full Stack Development": { icon: Code2,         accent: "#f472b6",        label: "WEB"  },
};

/* Animated skill bar */
function SkillBar({
  name,
  level,
  accent,
  inView,
  delay,
}: {
  name: string;
  level: number;
  accent: string;
  inView: boolean;
  delay: number;
}) {
  const reduced = useReducedMotion();
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[11px] font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          {name}
        </span>
        <span
          className="font-mono text-[10px] tabular-nums"
          style={{ color: accent }}
        >
          {level}%
        </span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <motion.div
          className="skill-fill"
          style={{ background: `linear-gradient(90deg, ${accent} 0%, ${accent}99 100%)` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: reduced ? 1 : level / 100 } : { scaleX: 0 }}
          transition={{ delay, duration: 0.65, ease }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const inView   = useInView(panelRef, { once: true, amount: 0.2 });
  const reduced  = useReducedMotion();

  const category = portfolioData.skillCategories[activeIdx];
  const meta     = categoryMeta[category.title] ?? { icon: Cpu, accent: "var(--cyan)", label: "CAT" };
  const Icon     = meta.icon;

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden scroll-mt-20 section-pad"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
      }}
      aria-labelledby="skills-heading"
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", left: "10%",
          width: "40vw", height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", right: "5%",
          width: "35vw", height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 65%)",
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
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">Technical Skills</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 id="skills-heading" className="section-title">
              Capability Matrix
            </h2>
            <p className="text-sm max-w-sm sm:text-right" style={{ color: "var(--text-tertiary)" }}>
              Proficiency across {portfolioData.skillCategories.length} engineering domains.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ── Category sidebar ── */}
          <div
            className="lg:col-span-4 flex flex-col gap-1.5"
            role="tablist"
            aria-label="Skill category selector"
          >
            <span className="text-label mb-2 pl-3" style={{ color: "var(--text-dim)" }}>
              SELECT DOMAIN
            </span>
            {portfolioData.skillCategories.map((cat, i) => {
              const catMeta = categoryMeta[cat.title] ?? { icon: Cpu, accent: "var(--cyan)", label: "CAT" };
              const CatIcon = catMeta.icon;
              const active  = i === activeIdx;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveIdx(i)}
                  role="tab"
                  aria-selected={active}
                  aria-controls="skills-panel"
                  id={`skills-tab-${i}`}
                  tabIndex={active ? 0 : -1}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-180 focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    backgroundColor: active ? "var(--bg-surface)" : "transparent",
                    border: active
                      ? `1px solid ${catMeta.accent}44`
                      : "1px solid transparent",
                    color: active ? catMeta.accent : "var(--text-tertiary)",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((prev) => Math.min(prev + 1, portfolioData.skillCategories.length - 1)); }
                    if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIdx((prev) => Math.max(prev - 1, 0)); }
                  }}
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: active ? `${catMeta.accent}18` : "var(--bg-raised)",
                      border: `1px solid ${active ? catMeta.accent + "33" : "var(--border-subtle)"}`,
                    }}
                  >
                    <CatIcon className="h-3.5 w-3.5" style={{ color: active ? catMeta.accent : "var(--text-dim)" }} aria-hidden="true" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] font-medium truncate">{cat.title}</span>
                    <span className="text-label mt-0.5" style={{ color: active ? catMeta.accent + "cc" : "var(--text-dim)" }}>
                      {cat.skills.length} skills
                    </span>
                  </div>
                  {active && (
                    <span
                      className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: catMeta.accent }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Skill panel ── */}
          <div
            className="lg:col-span-8"
            ref={panelRef}
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeIdx}`}
          >
            <motion.div
              key={category.title}
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease }}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-dim)",
                boxShadow: "0 8px 32px -12px rgba(0,0,0,0.35)",
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-raised)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${meta.accent}18`,
                      border: `1px solid ${meta.accent}33`,
                    }}
                  >
                    <Icon className="h-4 w-4" style={{ color: meta.accent }} aria-hidden="true" />
                  </div>
                  <h3
                    className="font-mono text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="badge badge-cyan">{meta.label}</span>
                  <span className="text-label" style={{ color: "var(--text-dim)" }}>
                    {category.skills.length} signals
                  </span>
                </div>
              </div>

              {/* Skills grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      accent={meta.accent}
                      inView={inView}
                      delay={i * 0.06}
                    />
                  ))}
                </div>
              </div>

              {/* Panel footer */}
              <div
                className="flex items-center justify-between px-6 py-3"
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-raised)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="status-dot" style={{ backgroundColor: "var(--emerald)" }} aria-hidden="true" />
                  <span className="text-label" style={{ color: "var(--text-dim)" }}>SYSTEMS VALIDATED</span>
                </div>
                <span className="text-label" style={{ color: "var(--text-dim)" }}>
                  CAT {String(activeIdx + 1).padStart(2, "0")} / {String(portfolioData.skillCategories.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>

            {/* Aggregate tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {portfolioData.skillCategories
                .filter((_, i) => i !== activeIdx)
                .flatMap((c) => c.skills.slice(0, 2))
                .slice(0, 12)
                .map((skill) => (
                  <span key={skill.name} className="badge">{skill.name}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
