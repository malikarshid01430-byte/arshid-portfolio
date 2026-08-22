"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, CircuitBoard, Smartphone, Layers, Activity, MapPin, Mail } from "lucide-react";
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
      initial={reduced ? undefined : { opacity: 0, y: 22 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.55, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const disciplines = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    label: "HARDWARE",
    desc: "Arduino, ESP32, ESP8266, STM32 — firmware and real-world IoT deployments.",
    color: "var(--cyan)",
    dimColor: "rgba(34,211,238,0.08)",
  },
  {
    icon: CircuitBoard,
    title: "Electronics & VLSI",
    label: "SILICON",
    desc: "Digital electronics, Verilog HDL, RTL design, FPGA, PCB layout.",
    color: "#818cf8",
    dimColor: "rgba(129,140,248,0.08)",
  },
  {
    icon: Smartphone,
    title: "Android Development",
    label: "MOBILE",
    desc: "Kotlin, Jetpack Compose, Material Design, Google Gemini AI integration.",
    color: "var(--violet)",
    dimColor: "rgba(167,139,250,0.08)",
  },
  {
    icon: Layers,
    title: "Full Stack",
    label: "WEB",
    desc: "React, Next.js, Node.js, REST APIs, Tailwind CSS — end-to-end product delivery.",
    color: "#f472b6",
    dimColor: "rgba(244,114,182,0.08)",
  },
];

const specRows = [
  { label: "DISCIPLINE", value: "Electronics & Communication Engineering" },
  { label: "FOCUS",      value: "Embedded Systems · IoT · Edge AI · VLSI" },
  { label: "STATUS",     value: "Open to full-time opportunities", accent: true },
  { label: "LOCATION",   value: portfolioData.personalInfo.location },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden scroll-mt-20 section-pad"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
      }}
      aria-labelledby="about-heading"
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

        {/* ── Section header ── */}
        <Reveal className="mb-16">
          <p className="section-eyebrow mb-4">About</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 id="about-heading" className="section-title max-w-lg">
              Building at the<br />
              <span style={{ color: "var(--cyan)" }}>hardware–software</span> boundary
            </h2>
            <p
              className="text-sm leading-relaxed max-w-sm sm:text-right"
              style={{ color: "var(--text-tertiary)" }}
            >
              ECE engineer turning sensor data into<br className="hidden sm:block" />
              products — from PCB traces to production APIs.
            </p>
          </div>
        </Reveal>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: bio + spec ── */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-4 w-4" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                <span className="text-label" style={{ color: "var(--text-dim)" }}>PROFILE OVERVIEW</span>
              </div>
              <p className="text-[0.9375rem] leading-[1.75] text-balance" style={{ color: "var(--text-secondary)" }}>
                {portfolioData.personalInfo.bioLong}
              </p>
            </Reveal>

            {/* Technical spec sheet */}
            <Reveal delay={0.08}>
              <div className="tech-panel overflow-hidden" role="complementary" aria-label="Engineer specification">
                {/* Header row */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5 border-b"
                  style={{
                    borderColor: "var(--border-subtle)",
                    backgroundColor: "var(--bg-raised)",
                  }}
                >
                  <span className="text-label" style={{ color: "var(--cyan)" }}>
                    {"// ENGINEER_SPEC"}
                  </span>
                </div>

                {/* Spec rows */}
                {specRows.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 px-4 py-2.5 border-b last:border-b-0"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <span
                      className="text-label shrink-0 w-24 mt-0.5"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-mono-xs leading-relaxed"
                      style={{ color: row.accent ? "var(--emerald)" : "var(--text-secondary)" }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}

                {/* Contact rows */}
                <div
                  className="flex items-center gap-4 px-4 py-2.5 border-b"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <span className="text-label shrink-0 w-24" style={{ color: "var(--text-dim)" }}>EMAIL</span>
                  <a
                    href={`mailto:${portfolioData.personalInfo.email}`}
                    className="text-mono-xs transition-colors hover:underline"
                    style={{ color: "var(--cyan)" }}
                  >
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
                <div
                  className="flex items-start gap-4 px-4 py-2.5"
                >
                  <span className="text-label shrink-0 w-24 mt-0.5" style={{ color: "var(--text-dim)" }}>PHONE</span>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${portfolioData.personalInfo.phone}`}
                      className="text-mono-xs transition-colors hover:underline"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {portfolioData.personalInfo.phone}
                    </a>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 shrink-0" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                      <span className="text-mono-xs" style={{ color: "var(--text-tertiary)" }}>
                        {portfolioData.personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact quick actions */}
            <Reveal delay={0.12}>
              <div className="flex gap-3">
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="btn btn-ghost flex-1 justify-center text-xs"
                  aria-label="Send email"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  Email
                </a>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost flex-1 justify-center text-xs"
                  aria-label="GitHub profile"
                >
                  GitHub
                </a>
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost flex-1 justify-center text-xs"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Right: discipline cards ── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {disciplines.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal key={idx} delay={0.06 + idx * 0.08}>
                  <motion.div
                    className="group flex flex-col gap-4 p-5 rounded-xl h-full card-lift"
                    style={{
                      backgroundColor: "var(--bg-raised)",
                      border: "1px solid var(--border-subtle)",
                    }}
                    whileHover={{ y: -2 }}
                  >
                    {/* Icon + label */}
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: card.dimColor,
                          border: `1px solid ${card.color}33`,
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: card.color }} aria-hidden="true" />
                      </div>
                      <span
                        className="text-label px-2 py-1 rounded"
                        style={{
                          color: card.color,
                          backgroundColor: card.dimColor,
                          border: `1px solid ${card.color}22`,
                        }}
                      >
                        {card.label}
                      </span>
                    </div>

                    {/* Title + desc */}
                    <div>
                      <h3
                        className="font-mono text-sm font-semibold tracking-wide mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom accent line on hover */}
                    <div
                      className="mt-auto h-px w-0 group-hover:w-full transition-all duration-300 rounded-full"
                      style={{ backgroundColor: card.color, opacity: 0.4 }}
                      aria-hidden="true"
                    />
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
