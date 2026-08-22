import { notFound } from "next/navigation";
import { portfolioData } from "../../data/portfolio";
import { Metadata } from "next";
import LocalizedLink from "../../components/LocalizedLink";
import {
  Calendar, Cpu, Code2, CheckCircle, ArrowLeft,
  ArrowRight, ExternalLink, ChevronRight
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const SITE_URL = "https://arshid-portfolio.vercel.app";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  const url = `${SITE_URL}/projects/${id}`;
  return {
    title: `${project.title} | Arshid Ahmad Malik`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.description,
      url,
      siteName: "Arshid Ahmad Malik Portfolio",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) notFound();

  const allIds     = portfolioData.projects.map((p) => p.id);
  const currentIdx = allIds.indexOf(id);
  const prevId     = currentIdx > 0 ? allIds[currentIdx - 1] : null;
  const nextId     = currentIdx < allIds.length - 1 ? allIds[currentIdx + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    author: { "@type": "Person", name: portfolioData.personalInfo.name, url: SITE_URL },
    codeRepository: project.github,
    programmingLanguage: project.technologies,
    url: `${SITE_URL}/projects/${id}`,
  };

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "clamp(6rem, 12vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
        minHeight: "100vh",
      }}
      aria-labelledby="project-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", right: "0%",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-tight">

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-label mb-8"
          style={{ color: "var(--text-dim)" }}
          aria-label="Breadcrumb"
        >
          <LocalizedLink href="/" className="transition-colors hover:text-cyan-400">Home</LocalizedLink>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <LocalizedLink href="/#projects" className="transition-colors hover:text-cyan-400">Projects</LocalizedLink>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span style={{ color: "var(--text-tertiary)" }} aria-current="page">{project.title}</span>
        </nav>

        {/* Back */}
        <LocalizedLink
          href="/#projects"
          className="inline-flex items-center gap-2 text-label mb-10 transition-colors hover:text-cyan-400"
          style={{ color: "var(--text-tertiary)" }}
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All Projects
        </LocalizedLink>

        {/* Project header */}
        <header className="mb-12">
          <span className="text-label block mb-3" style={{ color: "var(--cyan)" }}>
            {project.category}
          </span>
          <h1
            id="project-title"
            className="section-title mb-4"
          >
            {project.title}
          </h1>
          <p
            className="text-base font-mono leading-relaxed mb-6 max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.subtitle}
          </p>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge badge-cyan">{tech}</span>
            ))}
          </div>
          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !text-xs"
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-cyan !text-xs"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.timeline && (
              <div
                className="flex items-center gap-2 px-4 h-11 rounded-lg text-xs"
                style={{
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-raised)",
                  color: "var(--text-tertiary)",
                  fontFamily: "monospace",
                }}
              >
                <Calendar className="h-3.5 w-3.5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                Timeline: {project.timeline}
              </div>
            )}
          </div>
        </header>

        {/* Two-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left — narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {project.problem && (
              <section aria-labelledby="problem-heading">
                <h2 id="problem-heading" className="text-label mb-3" style={{ color: "var(--rose)" }}>
                  ▹ PROBLEM STATEMENT
                </h2>
                <div
                  className="rounded-xl p-5 text-sm leading-relaxed"
                  style={{
                    backgroundColor: "rgba(251,113,133,0.05)",
                    border: "1px solid rgba(251,113,133,0.18)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {project.problem}
                </div>
              </section>
            )}

            {project.solution && (
              <section aria-labelledby="solution-heading">
                <h2 id="solution-heading" className="text-label mb-3" style={{ color: "var(--emerald)" }}>
                  ▹ SOLUTION APPROACH
                </h2>
                <div
                  className="rounded-xl p-5 text-sm leading-relaxed"
                  style={{
                    backgroundColor: "rgba(52,211,153,0.05)",
                    border: "1px solid rgba(52,211,153,0.18)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {project.solution}
                </div>
              </section>
            )}

            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                ▹ OVERVIEW
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.longDescription}
              </p>
            </section>

            {project.results && project.results.length > 0 && (
              <section aria-labelledby="results-heading">
                <h2 id="results-heading" className="text-label mb-3" style={{ color: "var(--amber)" }}>
                  ▹ RESULTS &amp; IMPACT
                </h2>
                <ul className="space-y-3">
                  {project.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <CheckCircle
                        className="h-4 w-4 mt-0.5 shrink-0"
                        style={{ color: "var(--amber)" }}
                        aria-hidden="true"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="text-label mb-3" style={{ color: "var(--cyan)" }}>
                ▹ KEY HIGHLIGHTS
              </h2>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5 shrink-0"
                      style={{ color: "var(--cyan)" }}
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {project.technicalChallenges.length > 0 && (
              <section aria-labelledby="challenges-heading">
                <h2 id="challenges-heading" className="text-label mb-3" style={{ color: "#fb923c" }}>
                  ▹ TECHNICAL CHALLENGES
                </h2>
                <ul className="space-y-2.5">
                  {project.technicalChallenges.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span className="mt-1 shrink-0 font-mono text-xs" style={{ color: "#fb923c" }} aria-hidden="true">*</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right — technical specs */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Tech stack */}
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-dim)",
              }}
            >
              <h2 className="text-label mb-4" style={{ color: "var(--text-dim)" }}>
                COMPLETE TECH STACK
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
            </div>

            {/* Architecture */}
            {project.architecture && (
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <h2 className="text-label mb-4" style={{ color: "#818cf8" }}>
                  SYSTEM ARCHITECTURE
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.architecture.nodes.map((n) => (
                    <span
                      key={n.id}
                      className="badge"
                      style={{ color: "var(--cyan)", borderColor: "var(--cyan-border)", backgroundColor: "var(--cyan-dim)" }}
                    >
                      {n.label}
                    </span>
                  ))}
                </div>
                <div
                  className="pt-4 space-y-2"
                  style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                  <p className="text-label mb-2" style={{ color: "var(--text-dim)" }}>SIGNAL PATH</p>
                  {project.architecture.edges.map((edge, i) => {
                    const from = project.architecture!.nodes.find((n) => n.id === edge.from)?.label ?? edge.from;
                    const to   = project.architecture!.nodes.find((n) => n.id === edge.to)?.label ?? edge.to;
                    return (
                      <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                        <span className="font-mono">{from}</span>
                        <ArrowRight className="h-3 w-3 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                        <span className="font-mono" style={{ color: "var(--cyan)" }}>{to}</span>
                        <span style={{ color: "var(--text-dim)" }}>({edge.label})</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Hardware vs software */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <h2 className="text-label mb-3 flex items-center gap-2" style={{ color: "var(--emerald)" }}>
                  <Cpu className="h-3.5 w-3.5" aria-hidden="true" /> HARDWARE
                </h2>
                <ul className="space-y-1.5">
                  {project.technologies
                    .filter((t) =>
                      ["ESP32", "Arduino", "STM32", "Sensor", "RFID", "Servo", "Relay", "LCD", "PCB", "MQ", "DHT"].some((hw) =>
                        t.toLowerCase().includes(hw.toLowerCase()),
                      ),
                    )
                    .map((tech, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                        <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--emerald)" }} aria-hidden="true" />
                        {tech}
                      </li>
                    ))}
                </ul>
              </div>
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <h2 className="text-label mb-3 flex items-center gap-2" style={{ color: "#818cf8" }}>
                  <Code2 className="h-3.5 w-3.5" aria-hidden="true" /> SOFTWARE
                </h2>
                <ul className="space-y-1.5">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: "#818cf8" }} aria-hidden="true" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features */}
            {project.features.length > 0 && (
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <h2 className="text-label mb-4" style={{ color: "var(--text-dim)" }}>KEY FEATURES</h2>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--cyan)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future improvements */}
            {project.futureImprovements.length > 0 && (
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "rgba(129,140,248,0.05)",
                  border: "1px solid rgba(129,140,248,0.18)",
                }}
              >
                <h2 className="text-label mb-4" style={{ color: "#818cf8" }}>FUTURE SCOPE</h2>
                <ul className="space-y-2">
                  {project.futureImprovements.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <ArrowRight className="h-3 w-3 mt-0.5 shrink-0" style={{ color: "#818cf8" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next navigation */}
        {(prevId || nextId) && (
          <nav
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4"
            aria-label="Project navigation"
          >
            {prevId ? (
              <LocalizedLink
                href={`/projects/${prevId}`}
                className="group flex flex-col gap-2 rounded-xl p-5 card-lift"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <span className="text-label flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" /> Previous project
                </span>
                <span
                  className="text-sm font-semibold leading-snug transition-colors group-hover:text-cyan-400"
                  style={{ color: "var(--text-primary)" }}
                >
                  {portfolioData.projects.find((p) => p.id === prevId)?.title}
                </span>
              </LocalizedLink>
            ) : <div />}

            {nextId ? (
              <LocalizedLink
                href={`/projects/${nextId}`}
                className="group flex flex-col gap-2 rounded-xl p-5 card-lift sm:text-right"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <span className="text-label flex items-center gap-1.5 sm:justify-end" style={{ color: "var(--text-dim)" }}>
                  Next project <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </span>
                <span
                  className="text-sm font-semibold leading-snug transition-colors group-hover:text-cyan-400"
                  style={{ color: "var(--text-primary)" }}
                >
                  {portfolioData.projects.find((p) => p.id === nextId)?.title}
                </span>
              </LocalizedLink>
            ) : <div />}
          </nav>
        )}
      </div>
    </main>
  );
}
