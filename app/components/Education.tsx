"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck, ExternalLink, Calendar, Star } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay, duration: 0.5, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden scroll-mt-20 section-pad"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
      aria-labelledby="education-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%", left: "5%",
          width: "40vw", height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">

        {/* Section header */}
        <Reveal className="mb-16">
          <p className="section-eyebrow mb-4">Education</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 id="education-heading" className="section-title">
              Education &amp; Credentials
            </h2>
            <p className="text-sm max-w-xs sm:text-right" style={{ color: "var(--text-tertiary)" }}>
              Academic foundation · continuous professional learning
            </p>
          </div>
        </Reveal>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Academic record ── */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="h-4 w-4" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              <span className="text-label" style={{ color: "var(--text-dim)" }}>01 / ACADEMIC RECORD</span>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div
                  className="rounded-xl p-5 card-lift"
                  style={{
                    backgroundColor: "var(--bg-raised)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="font-semibold text-sm leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="font-mono text-xs font-medium mb-2" style={{ color: "var(--cyan)" }}>
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-label mb-4" style={{ color: "var(--text-dim)" }}>
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {edu.period} · {edu.location}
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {edu.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-1 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: "var(--text-dim)" }} aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div
                      className="pt-3 mt-3"
                      style={{ borderTop: "1px solid var(--border-subtle)" }}
                    >
                      <h4 className="text-label mb-2" style={{ color: "var(--cyan)" }}>RELEVANT COURSEWORK</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((c, i) => (
                          <span key={i} className="badge">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.laboratories && edu.laboratories.length > 0 && (
                    <div
                      className="pt-3 mt-3"
                      style={{ borderTop: "1px solid var(--border-subtle)" }}
                    >
                      <h4 className="text-label mb-2" style={{ color: "var(--cyan)" }}>LABORATORIES</h4>
                      <ul className="space-y-1">
                        {edu.laboratories.map((lab, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                            <span style={{ color: "var(--cyan)" }} aria-hidden="true">▹</span>
                            {lab}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.technicalSkillsLearned && edu.technicalSkillsLearned.length > 0 && (
                    <div
                      className="pt-3 mt-3"
                      style={{ borderTop: "1px solid var(--border-subtle)" }}
                    >
                      <h4 className="text-label mb-2" style={{ color: "#818cf8" }}>TECHNICAL SKILLS ACQUIRED</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.technicalSkillsLearned.map((s, i) => (
                          <span key={i} className="badge">{s}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div
                      className="pt-3 mt-3"
                      style={{ borderTop: "1px solid var(--border-subtle)" }}
                    >
                      <h4 className="text-label mb-2" style={{ color: "var(--amber)" }}>ACHIEVEMENTS</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                            <Star className="h-3 w-3 mt-0.5 shrink-0" style={{ color: "var(--amber)" }} aria-hidden="true" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}

            {/* Research interests */}
            <Reveal delay={0.12}>
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "rgba(129,140,248,0.06)",
                  border: "1px solid rgba(129,140,248,0.18)",
                }}
              >
                <h4 className="text-label mb-3" style={{ color: "#818cf8" }}>{"// RESEARCH INTERESTS"}</h4>
                <ul className="space-y-1.5">
                  {portfolioData.researchInterests.map((interest, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="font-mono mt-0.5" style={{ color: "#818cf8" }} aria-hidden="true">›</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ── Certifications ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-2 mb-1">
              <BadgeCheck className="h-4 w-4" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              <span className="text-label" style={{ color: "var(--text-dim)" }}>02 / CERTIFICATIONS</span>
            </div>

            <div className="flex flex-col gap-3">
              {portfolioData.certifications.map((cert, idx) => (
                <Reveal key={idx} delay={idx * 0.04}>
                  <div
                    className="flex items-start justify-between gap-3 rounded-xl p-4 card-lift"
                    style={{
                      backgroundColor: "var(--bg-raised)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                        {cert.name}
                      </h4>
                      <p className="text-label mt-1" style={{ color: "var(--text-dim)" }}>
                        {cert.issuer}
                      </p>
                      <p className="text-label mt-0.5" style={{ color: "var(--text-dim)" }}>
                        Issued {cert.date}
                      </p>
                    </div>
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded p-1.5 transition-colors"
                        style={{ color: "var(--text-dim)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
                        aria-label={`Verify ${cert.name}`}
                      >
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <BadgeCheck
                        className="h-3.5 w-3.5 mt-0.5 shrink-0"
                        style={{ color: "var(--emerald)" }}
                        aria-label="Credential verified"
                      />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Achievements ── */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="flex items-center gap-2 mb-1">
              <Award className="h-4 w-4" style={{ color: "var(--cyan)" }} aria-hidden="true" />
              <span className="text-label" style={{ color: "var(--text-dim)" }}>03 / ACHIEVEMENTS</span>
            </div>

            <div className="flex flex-col gap-3">
              {portfolioData.achievements.map((ach, idx) => (
                <Reveal key={idx} delay={idx * 0.06}>
                  <div
                    className="rounded-xl p-4 card-lift"
                    style={{
                      backgroundColor: "var(--bg-raised)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Star
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--amber)" }}
                        aria-hidden="true"
                      />
                      <span className="text-label" style={{ color: "var(--text-dim)" }}>{ach.date}</span>
                    </div>
                    <h4 className="text-xs font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                      {ach.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                      {ach.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
