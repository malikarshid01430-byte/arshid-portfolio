"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolio";

interface TimelineEvent {
  id: string;
  type: "education" | "project" | "internship" | "certification" | "achievement";
  title: string;
  organization?: string;
  date: string;
  description?: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
  accentDim: string;
}

const typeLabels: Record<string, string> = {
  education:     "Education",
  internship:    "Internship",
  certification: "Certification",
  achievement:   "Achievement",
  project:       "Project",
};

export default function TimelinePage() {
  const events: TimelineEvent[] = [];

  portfolioData.education.forEach((edu, i) =>
    events.push({
      id: `edu-${i}`, type: "education",
      title: edu.degree, organization: edu.institution, date: edu.period,
      description: edu.details.join(", "),
      Icon: GraduationCap, accent: "var(--cyan)", accentDim: "rgba(34,211,238,0.08)",
    }),
  );

  portfolioData.experience.forEach((exp, i) =>
    events.push({
      id: `exp-${i}`, type: "internship",
      title: exp.role, organization: exp.company, date: exp.period,
      description: exp.achievements[0],
      Icon: Briefcase, accent: "var(--emerald)", accentDim: "rgba(52,211,153,0.08)",
    }),
  );

  portfolioData.certifications.slice(0, 10).forEach((cert, i) =>
    events.push({
      id: `cert-${i}`, type: "certification",
      title: cert.name, organization: cert.issuer, date: cert.date,
      Icon: Award, accent: "#818cf8", accentDim: "rgba(129,140,248,0.08)",
    }),
  );

  portfolioData.achievements.forEach((ach, i) =>
    events.push({
      id: `ach-${i}`, type: "achievement",
      title: ach.title, date: ach.date, description: ach.description,
      Icon: Award, accent: "var(--amber)", accentDim: "rgba(251,191,36,0.08)",
    }),
  );

  portfolioData.projects.slice(0, 5).forEach((p, i) =>
    events.push({
      id: `proj-${i}`, type: "project",
      title: p.title, date: p.timeline ?? "2026", description: p.category,
      Icon: Code2, accent: "#f472b6", accentDim: "rgba(244,114,182,0.08)",
    }),
  );

  events.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative overflow-hidden section-pad"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "clamp(6rem, 12vw, 9rem)",
        minHeight: "100vh",
      }}
      aria-labelledby="timeline-heading"
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: "5%", right: "5%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">
        <div className="mb-14">
          <p className="section-eyebrow mb-4">Timeline</p>
          <h1 id="timeline-heading" className="section-title">Career Journey</h1>
          <p className="mt-4 text-sm max-w-lg" style={{ color: "var(--text-secondary)" }}>
            Education, experience, certifications, and achievements in chronological order.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-14">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--cyan) 0%, rgba(34,211,238,0.1) 100%)" }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {events.map((ev, i) => {
              const { Icon } = ev;
              return (
                <motion.article
                  key={ev.id}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: Math.min(i * 0.04, 0.5), duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Node */}
                  <div
                    className="absolute -left-9 top-4 flex h-9 w-9 items-center justify-center rounded-full border-2"
                    style={{ borderColor: ev.accent, backgroundColor: ev.accentDim }}
                    aria-hidden="true"
                  >
                    <span style={{ color: ev.accent }}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-xl p-5 card-lift"
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: `1px solid ${ev.accentDim.replace("0.08", "0.22")}`,
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h2 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                        {ev.title}
                      </h2>
                      <div className="flex items-center gap-1.5 text-label shrink-0" style={{ color: "var(--text-dim)" }}>
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {ev.date}
                      </div>
                    </div>
                    {ev.organization && (
                      <p className="text-xs mb-1.5" style={{ color: ev.accent }}>{ev.organization}</p>
                    )}
                    {ev.description && (
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                        {ev.description}
                      </p>
                    )}
                    <span className="text-label mt-3 block" style={{ color: ev.accent }}>
                      {typeLabels[ev.type]}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
