"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Radar,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";
import LocalizedLink from "./LocalizedLink";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Animated counter ────────────────────────────────────────────── */
function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      // Use rAF to avoid synchronous setState-in-effect lint error
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }
    let start: number | null = null;
    const duration = 900;
    let rafId: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) { rafId = requestAnimationFrame(step); }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, reduced]);

  return <>{value}</>;
}

/* ── Reveal wrapper ──────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
  id,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      id={id}
      style={style}
      initial={reduced ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay, duration: 0.5, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section sub-label ───────────────────────────────────────────── */
function SubLabel({ eyebrow, title, detail }: { eyebrow: string; title: string; detail?: string }) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-label mb-1" style={{ color: "var(--cyan)" }}>{eyebrow}</p>
        <h3 className="font-semibold text-base tracking-tight" style={{ color: "var(--text-primary)" }}>
          {title}
        </h3>
      </div>
      {detail && (
        <p className="text-xs max-w-xs sm:text-right" style={{ color: "var(--text-tertiary)" }}>{detail}</p>
      )}
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function RecruiterDashboard() {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, amount: 0.1 });

  const skills       = portfolioData.skillCategories.flatMap((c) => c.skills);
  const technologies = new Set(portfolioData.projects.flatMap((p) => p.technologies)).size;
  const topProjects  = portfolioData.projects.slice(0, 3);

  const metrics = [
    {
      label: "Projects",
      value: portfolioData.projects.length,
      note: `${technologies} technologies`,
      icon: BriefcaseBusiness,
      color: "var(--cyan)",
    },
    {
      label: "Skills",
      value: skills.length,
      note: "Engineering disciplines",
      icon: Code2,
      color: "#818cf8",
    },
    {
      label: "Certifications",
      value: portfolioData.certifications.length,
      note: "Verified credentials",
      icon: Award,
      color: "var(--amber)",
    },
    {
      label: "Internships",
      value: portfolioData.experience.length,
      note: "Applied field work",
      icon: Sparkles,
      color: "var(--emerald)",
    },
  ];

  const skillGroups = [
    { title: "Programming",       keys: ["Programming Languages"] },
    { title: "Embedded & IoT",    keys: ["Embedded Systems", "IoT & Connectivity"] },
    { title: "Product & Mobile",  keys: ["Full Stack Development", "Android Development"] },
    { title: "VLSI & Tools",      keys: ["VLSI & Digital Design", "PCB Design", "Tools & Software"] },
  ];

  return (
    <section
      id="recruiter-dashboard"
      aria-labelledby="recruiter-dashboard-heading"
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
        paddingBlock: "clamp(3.5rem, 8vw, 6rem)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-5%", right: "-8%",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10" ref={ref}>
        <Reveal>
          {/* ── Main card wrapper ── */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              border: "1px solid var(--border-dim)",
              backgroundColor: "var(--bg-surface)",
              boxShadow: "0 32px 80px -24px rgba(0,0,0,0.45)",
            }}
          >

            {/* ── Dashboard header ── */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-raised)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--bg-inset)", border: "1px solid var(--border-dim)" }}
                >
                  <Radar className="h-5 w-5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-label" style={{ color: "var(--cyan)" }}>ENGINEERING INTELLIGENCE / 01</p>
                  <h2
                    id="recruiter-dashboard-heading"
                    className="font-semibold text-base mt-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Recruiter Workspace
                  </h2>
                </div>
              </div>
              <nav
                aria-label="Dashboard sections"
                className="flex gap-1 overflow-x-auto no-scrollbar"
              >
                {["Overview", "Projects", "Skills", "Journey", "Credentials"].map((item) => (
                  <a
                    key={item}
                    href={`#dashboard-${item.toLowerCase()}`}
                    className="shrink-0 rounded-lg px-3 py-1.5 text-label transition-colors focus-visible:outline-none focus-visible:ring-2"
                    style={{ color: "var(--text-tertiary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--cyan)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "var(--cyan-dim)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── KPI metrics strip ── */}
            <div
              id="dashboard-overview"
              className="grid grid-cols-2 lg:grid-cols-4"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              {metrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="flex items-start justify-between gap-4 p-5"
                    style={{
                      borderRight: i < 3 ? "1px solid var(--border-subtle)" : "none",
                      borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none",
                    }}
                  >
                    <div>
                      <p className="text-label mb-2" style={{ color: "var(--text-dim)" }}>
                        {metric.label}
                      </p>
                      <p
                        className="text-4xl font-bold tracking-tight"
                        style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
                      >
                        <AnimatedCounter target={metric.value} inView={inView} />
                      </p>
                      <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>
                        {metric.note}
                      </p>
                    </div>
                    <Icon className="h-4 w-4 mt-1 shrink-0" style={{ color: metric.color }} aria-hidden="true" />
                  </div>
                );
              })}
            </div>

            {/* ── Candidate profile + signal map ── */}
            <div
              className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)]"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              {/* Profile card */}
              <Reveal
                delay={0.06}
                className="rounded-xl p-5 flex flex-col gap-5"
                style={{
                  backgroundColor: "var(--bg-raised)",
                  border: "1px solid var(--border-subtle)",
                } as React.CSSProperties}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-label mb-2" style={{ color: "var(--emerald)" }}>CANDIDATE PROFILE</p>
                    <h3 className="font-semibold text-lg leading-snug" style={{ color: "var(--text-primary)" }}>
                      {portfolioData.personalInfo.name}
                    </h3>
                    <p className="text-mono-xs mt-1" style={{ color: "var(--cyan)" }}>
                      Embedded Systems · IoT Developer
                    </p>
                  </div>
                  <span className="status-dot status-dot-pulse mt-1 shrink-0" />
                </div>

                <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                  {portfolioData.personalInfo.bioShort}
                </p>

                <div
                  className="space-y-2.5 pt-4"
                  style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                  {[
                    { Icon: MapPin, value: portfolioData.personalInfo.location },
                    { Icon: GraduationCap, value: portfolioData.personalInfo.subtitle },
                    { Icon: CheckCircle2, value: "Actively seeking full-time roles", accent: true },
                  ].map(({ Icon, value, accent }, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <Icon
                        className="h-3.5 w-3.5 mt-0.5 shrink-0"
                        style={{ color: accent ? "var(--emerald)" : "var(--cyan)" }}
                        aria-hidden="true"
                      />
                      <span style={{ color: accent ? "var(--emerald)" : "var(--text-secondary)" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <DownloadResumeButton
                    variant="primary"
                    label="Resume"
                    format="2page"
                    className="btn btn-primary w-full justify-center !text-[10px]"
                  />
                  <a
                    href="#dashboard-contact"
                    className="btn btn-ghost w-full justify-center !text-[10px]"
                  >
                    <Mail className="h-3 w-3" aria-hidden="true" /> Contact
                  </a>
                </div>

                <div
                  className="flex items-center gap-4 text-mono-xs"
                  style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem" }}
                >
                  <a
                    href={portfolioData.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors"
                    style={{ color: "var(--text-tertiary)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
                    aria-label="GitHub profile"
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                  <a
                    href={portfolioData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 transition-colors"
                    style={{ color: "var(--text-tertiary)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)")}
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin aria-hidden="true" /> LinkedIn
                  </a>
                </div>
              </Reveal>

              {/* Signal map */}
              <Reveal
                delay={0.1}
                className="rounded-xl p-5 sm:p-6"
                style={{
                  backgroundColor: "var(--bg-raised)",
                  border: "1px solid var(--border-subtle)",
                } as React.CSSProperties}
              >
                <SubLabel
                  eyebrow="SIGNAL MAP"
                  title="A practical engineering profile"
                  detail="Disciplines, systems and delivery patterns represented in this portfolio."
                />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { Icon: Cpu,          title: "Hardware to cloud",        text: "Sensor integration, microcontrollers, connectivity, and dashboards." },
                    { Icon: CheckCircle2, title: "Applied problem solving",   text: "Projects framed around real constraints, reliability, and usable outcomes." },
                    { Icon: Code2,        title: "Modern product stack",      text: "Android, React, Next.js, APIs, and data-backed interfaces." },
                    { Icon: GraduationCap,title: "Continuous learning",       text: "VLSI, AI, embedded systems, and professional certifications." },
                  ].map(({ Icon, title, text }) => (
                    <div
                      key={title}
                      className="rounded-lg p-4"
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <Icon className="h-4 w-4 mb-3" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                      <h4 className="text-xs font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                        {title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 flex flex-wrap gap-2 pt-5"
                  style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                  {["Embedded Systems", "IoT", "Edge AI", "VLSI", "Full Stack", "Android"].map((tag) => (
                    <span key={tag} className="badge badge-cyan">{tag}</span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── Top projects ── */}
            <div className="px-5 pb-0 pt-5 sm:px-6 sm:pt-6">
              <Reveal>
                <div id="dashboard-projects">
                  <SubLabel
                    eyebrow="DELIVERY RECORD"
                    title="Featured projects"
                    detail={`${portfolioData.projects.length} documented projects across embedded, AI, electronics, and product development.`}
                  />
                </div>
                <div className="mt-5 grid gap-3 lg:grid-cols-3 pb-5 sm:pb-6" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  {topProjects.map((project, index) => (
                    <article
                      key={project.id}
                      className="group flex flex-col min-h-[260px] rounded-lg p-4 card-lift"
                      style={{
                        backgroundColor: "var(--bg-raised)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-label" style={{ color: "var(--cyan)" }}>
                          CASE {String(index + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ color: "var(--text-dim)" }}
                          aria-hidden="true"
                        />
                      </div>
                      <h4 className="text-sm font-semibold leading-snug mb-2" style={{ color: "var(--text-primary)" }}>
                        {project.title}
                      </h4>
                      <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-tertiary)" }}>
                        {project.description}
                      </p>
                      {project.results?.[0] && (
                        <p
                          className="mt-3 text-xs leading-relaxed pl-3 border-l-2"
                          style={{
                            borderColor: "var(--amber)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {project.results[0]}
                        </p>
                      )}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span key={t} className="badge">{t}</span>
                        ))}
                      </div>
                      <div
                        className="mt-3 flex items-center justify-between pt-3 text-xs"
                        style={{ borderTop: "1px solid var(--border-subtle)" }}
                      >
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 transition-colors"
                            style={{ color: "var(--text-dim)" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
                            aria-label={`View source for ${project.title}`}
                          >
                            <FaGithub aria-hidden="true" /> Source
                          </a>
                        ) : <span />}
                        <LocalizedLink
                          href={`/projects/${project.id}`}
                          className="flex items-center gap-1 font-mono text-[10px] transition-colors"
                          style={{ color: "var(--cyan)" }}
                        >
                          Details <ChevronRight className="h-3 w-3" aria-hidden="true" />
                        </LocalizedLink>
                      </div>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── Skills intelligence ── */}
            <div className="px-5 py-5 sm:px-6 sm:py-6" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              <Reveal>
                <div id="dashboard-skills">
                  <SubLabel
                    eyebrow="CAPABILITY MATRIX"
                    title="Skills intelligence"
                    detail="Proficiency signals grouped for technical review."
                  />
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {skillGroups.map((group) => {
                    const groupSkills = portfolioData.skillCategories
                      .filter((c) => group.keys.includes(c.title))
                      .flatMap((c) => c.skills);
                    return (
                      <div key={group.title}>
                        <div
                          className="flex items-center justify-between mb-3 pb-2"
                          style={{ borderBottom: "1px solid var(--border-subtle)" }}
                        >
                          <h4 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                            {group.title}
                          </h4>
                          <span className="text-label" style={{ color: "var(--text-dim)" }}>
                            {groupSkills.length} signals
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {groupSkills.map((skill) => (
                            <span key={skill.name} className="badge">
                              {skill.name}
                              <span style={{ color: "var(--cyan)", marginLeft: "0.2em" }}>
                                {skill.level}%
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* ── Journey + Credentials ── */}
            <div
              id="dashboard-journey"
              className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[1.3fr_0.7fr]"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              {/* Timeline */}
              <Reveal
                className="rounded-xl p-5 sm:p-6"
                style={{
                  backgroundColor: "var(--bg-raised)",
                  border: "1px solid var(--border-subtle)",
                } as React.CSSProperties}
              >
                <SubLabel eyebrow="CAREER JOURNEY" title="Experience & education" />
                <div
                  className="relative mt-6 space-y-6 pl-6"
                  style={{ borderLeft: "1px solid var(--border-dim)" }}
                >
                  {portfolioData.experience.map((item) => (
                    <div key={`${item.company}-${item.role}`} className="relative">
                      <span
                        className="absolute -left-[calc(0.375rem+1px)] top-1.5 w-3 h-3 rounded-full border-2 flex-shrink-0"
                        style={{
                          borderColor: "var(--cyan)",
                          backgroundColor: "var(--bg-surface)",
                        }}
                        aria-hidden="true"
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                          {item.role}
                        </h4>
                        <span className="text-label" style={{ color: "var(--text-dim)" }}>{item.period}</span>
                      </div>
                      <p className="text-mono-xs mt-0.5" style={{ color: "var(--cyan)" }}>
                        {item.company} · {item.location}
                      </p>
                      <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                        {item.impact}
                      </p>
                    </div>
                  ))}
                  {portfolioData.education.map((item) => (
                    <div key={item.institution} className="relative">
                      <span
                        className="absolute -left-[calc(0.375rem+1px)] top-1.5 w-3 h-3 rounded-full border-2 flex-shrink-0"
                        style={{
                          borderColor: "#818cf8",
                          backgroundColor: "var(--bg-surface)",
                        }}
                        aria-hidden="true"
                      />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                          {item.degree}
                        </h4>
                        <span className="text-label" style={{ color: "var(--text-dim)" }}>{item.period}</span>
                      </div>
                      <p className="text-mono-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>
                        {item.institution} · {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Credentials */}
              <Reveal
                delay={0.06}
                className="rounded-xl p-5 sm:p-6"
                style={{
                  backgroundColor: "var(--bg-raised)",
                  border: "1px solid var(--border-subtle)",
                } as React.CSSProperties}
              >
                <div id="dashboard-credentials">
                  <SubLabel eyebrow="VERIFIED LEARNING" title="Credentials" />
                </div>
                <div className="mt-4 space-y-2 max-h-[420px] overflow-y-auto no-scrollbar">
                  {portfolioData.certifications.map((cert, i) => (
                    <div
                      key={`${cert.name}-${i}`}
                      className="flex items-start justify-between gap-3 rounded-lg p-3"
                      style={{
                        backgroundColor: "var(--bg-inset)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <div className="min-w-0">
                        <h4 className="text-[10px] font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                          {cert.name}
                        </h4>
                        <p className="text-label mt-1" style={{ color: "var(--text-dim)" }}>
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 rounded p-1 transition-colors"
                          style={{ color: "var(--text-dim)" }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")}
                          aria-label={`Verify ${cert.name}`}
                        >
                          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                      ) : (
                        <CheckCircle2 className="h-3 w-3 mt-0.5 shrink-0" style={{ color: "var(--emerald)" }} aria-label="Credential listed" />
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── Contact CTA ── */}
            <Reveal
              id="dashboard-contact"
              className="relative overflow-hidden m-5 sm:m-6 rounded-xl p-6 sm:p-8"
              style={{
                backgroundColor: "var(--bg-inset)",
                border: "1px solid var(--border-dim)",
              } as React.CSSProperties}
            >
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
                style={{
                  background: "radial-gradient(circle at 80% 20%, rgba(34,211,238,0.10), transparent 60%)",
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-label mb-3" style={{ color: "var(--cyan)" }}>NEXT CONVERSATION</p>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
                    Let&apos;s build something meaningful.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    For opportunities, technical discussions, or collaboration.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="btn btn-primary"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" /> Email
                  </a>
                  <a
                    href={`tel:${portfolioData.personalInfo.phone}`}
                    className="btn btn-ghost"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call
                  </a>
                  <LocalizedLink href="/contact" className="btn btn-ghost">
                    <FileText className="h-4 w-4" aria-hidden="true" /> Contact page
                  </LocalizedLink>
                </div>
              </div>
            </Reveal>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
