"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const reduced    = useReducedMotion();

  /* Animate the timeline line height as user scrolls through section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative isolate overflow-hidden scroll-mt-20 section-pad"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
      }}
      aria-labelledby="experience-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%", right: "-5%",
          width: "45vw", height: "45vw",
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
          className="mb-16"
        >
          <p className="section-eyebrow mb-4">Experience</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 id="experience-heading" className="section-title">
              Professional Experience
            </h2>
            <p className="text-sm max-w-xs sm:text-right" style={{ color: "var(--text-tertiary)" }}>
              {portfolioData.experience.length} internships · hands-on engineering
            </p>
          </div>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative max-w-3xl mx-auto">

          {/* Animated timeline line */}
          <div
            ref={lineRef}
            className="absolute left-4 sm:left-5 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border-dim)" }}
            aria-hidden="true"
          >
            {!reduced && (
              <motion.div
                className="absolute top-0 left-0 w-full"
                style={{
                  height: lineHeight,
                  background: "linear-gradient(to bottom, var(--cyan) 0%, rgba(34,211,238,0.3) 100%)",
                }}
              />
            )}
          </div>

          {/* Experience entries */}
          <div className="space-y-10 pl-12 sm:pl-14">
            {portfolioData.experience.map((exp, idx) => (
              <ExperienceEntry key={`${exp.company}-${exp.role}`} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({ exp, idx }: { exp: (typeof portfolioData.experience)[0]; idx: number }) {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, amount: 0.2 });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? undefined : { opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Timeline node */}
      <div
        className="absolute -left-[2.55rem] sm:-left-[2.9rem] top-5 flex h-4 w-4 items-center justify-center rounded-full border-2"
        style={{
          borderColor: "var(--cyan)",
          backgroundColor: "var(--bg-base)",
          boxShadow: inView ? "0 0 0 4px rgba(34,211,238,0.10)" : "none",
          transition: "box-shadow 500ms ease",
        }}
        aria-hidden="true"
      >
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--cyan)" }}
        />
      </div>

      {/* Card */}
      <div
        className="rounded-xl p-5 sm:p-6 card-lift"
        style={{
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-dim)",
        }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <span className="text-label" style={{ color: "var(--cyan)" }}>
              INTERNSHIP {String(idx + 1).padStart(2, "0")}
            </span>
            <h3
              className="font-semibold text-base mt-1.5 leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              {exp.role}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Briefcase className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              <span className="font-mono text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
                {exp.company}
              </span>
            </div>
          </div>
          <div
            className="flex flex-col items-end gap-1 text-right shrink-0"
            style={{ color: "var(--text-dim)" }}
          >
            <div className="flex items-center gap-1.5 text-label">
              <Calendar className="h-3 w-3" aria-hidden="true" />
              {exp.period}
            </div>
            <div className="flex items-center gap-1.5 text-label">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        {exp.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-label mb-2" style={{ color: "var(--text-dim)" }}>RESPONSIBILITIES</h4>
            <ul className="space-y-1.5">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-1 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: "var(--text-dim)" }} aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Description */}
        {exp.description.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {exp.description.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                <span className="mt-1 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: "var(--text-dim)" }} aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        )}

        {/* Achievements */}
        {exp.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-label mb-2" style={{ color: "var(--amber)" }}>KEY ACHIEVEMENTS</h4>
            <ul className="space-y-1.5">
              {exp.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--amber)" }} aria-hidden="true">›</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Impact */}
        {exp.impact && (
          <div
            className="rounded-lg p-3 mb-4"
            style={{
              backgroundColor: "rgba(52,211,153,0.06)",
              border: "1px solid rgba(52,211,153,0.18)",
            }}
          >
            <h4 className="text-label mb-1" style={{ color: "var(--emerald)" }}>IMPACT</h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{exp.impact}</p>
          </div>
        )}

        {/* Tech tags */}
        <div
          className="flex flex-wrap gap-1.5 pt-4"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          {exp.technologies.map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
