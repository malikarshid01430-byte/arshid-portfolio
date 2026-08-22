"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Zap, Radio } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import DownloadResumeButton from "./DownloadResumeButton";

/* ── Signal node visual (abstract technical element) ─────────────────── */
function SignalNetwork() {
  const reduced = useReducedMotion();
  const nodes = [
    { x: 50, y: 50, label: "ESP32",    color: "#22d3ee" },
    { x: 78, y: 22, label: "FPGA",     color: "#818cf8" },
    { x: 22, y: 22, label: "STM32",    color: "#22d3ee" },
    { x: 78, y: 78, label: "Edge AI",  color: "#34d399" },
    { x: 22, y: 78, label: "IoT",      color: "#818cf8" },
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4],
  ];

  return (
    <div className="relative w-full h-full select-none pointer-events-none" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {edges.map(([a, b], i) => {
          const na = nodes[a], nb = nodes[b];
          return (
            <motion.line
              key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="rgba(34,211,238,0.14)"
              strokeWidth="0.4"
              initial={{ opacity: 0 }}
              animate={reduced ? { opacity: 1 } : { opacity: [0, 0.7, 0.3] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, repeatType: "reverse" }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x} cy={node.y} r="1.2"
              fill={node.color}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
            />
            {!reduced && (
              <motion.circle
                cx={node.x} cy={node.y} r="2.5"
                fill="none" stroke={node.color} strokeWidth="0.3"
                initial={{ opacity: 0.4, scale: 0.8 }}
                animate={{ opacity: 0, scale: 1.8 }}
                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
              />
            )}
            <text
              x={node.x} y={node.y - 3.2}
              textAnchor="middle"
              fontSize="3.5"
              fill="rgba(148,163,184,0.7)"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Status panel ─────────────────────────────────────────────────────── */
function StatusPanel({ inView }: { inView: boolean }) {
  const rows = [
    { label: "STATUS",     value: "AVAILABLE FOR OPPORTUNITIES", accent: true },
    { label: "DISCIPLINE", value: "ECE / Embedded Systems" },
    { label: "FOCUS",      value: "Embedded · EV · AI · IoT" },
    { label: "LOCATION",   value: portfolioData.personalInfo.location.split(",").slice(0, 2).join(", ") },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.75, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl border overflow-hidden"
      style={{ borderColor: "var(--border-dim)", backgroundColor: "var(--bg-surface)" }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-inset)" }}
      >
        <div className="flex items-center gap-2">
          <Radio className="h-3.5 w-3.5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
          <span className="text-label" style={{ color: "var(--cyan)" }}>SYSTEM STATUS</span>
        </div>
        <span className="flex items-center gap-1.5">
          <span className="status-dot status-dot-pulse" />
          <span className="text-label" style={{ color: "var(--emerald)" }}>ONLINE</span>
        </span>
      </div>
      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85 + i * 0.08 }}
          className="flex items-start gap-3 px-4 py-2.5 border-b last:border-b-0"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <span
            className="text-label shrink-0 mt-0.5 w-24"
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
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Main Hero component ──────────────────────────────────────────────── */
export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasMoused, setHasMoused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();

  const { scrollY } = useScroll();
  const y       = useTransform(scrollY, [0, 500], [0, reduced ? 0 : 60]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHasMoused(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, reduced]);

  /* Staggered entrance delays */
  const ease = [0.22, 1, 0.36, 1] as const;
  const entry = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.6, ease },
  });

  const techTags = ["ESP32", "STM32", "IoT", "VLSI", "FPGA", "Edge AI", "React", "Kotlin"];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate min-h-screen w-full flex items-center overflow-hidden"
      style={{
        paddingTop: "7rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid var(--border-subtle)",
      }}
      aria-label="Hero — Arshid Ahmad Malik"
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "var(--bg-base)" }} />

      {/* Ambient radial glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", left: "15%",
          width: "55vw", height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.055) 0%, transparent 70%)",
          filter: "blur(1px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", right: "5%",
          width: "40vw", height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Mouse-follow ambient light */}
      {!reduced && (
        <div
          className="pointer-events-none absolute"
          style={{
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
            transform: `translate(${mousePos.x - 180}px, ${mousePos.y - 180}px)`,
            opacity: hasMoused ? 1 : 0,
            transition: "opacity 400ms ease",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
      )}

      {/* ── Content ── */}
      <motion.div
        style={reduced ? {} : { y, opacity }}
        className="relative z-10 w-full max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── LEFT: Main content ── */}
          <div className="flex flex-col gap-7 max-w-2xl">

            {/* Identity label */}
            <motion.div {...entry(0.1)} className="flex items-center gap-3">
              <span
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-label"
                style={{
                  borderColor: "var(--border-dim)",
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--text-tertiary)",
                }}
              >
                <Zap className="h-3 w-3" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                ELECTRONICS &amp; COMMUNICATION ENGINEER
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...entry(0.18)}>
              <h1
                className="text-hero-name"
                style={{ color: "var(--text-primary)" }}
              >
                {portfolioData.personalInfo.name.split(" ").map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
            </motion.div>

            {/* Short bio */}
            <motion.p
              {...entry(0.28)}
              className="text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {portfolioData.personalInfo.bioShort}
            </motion.p>

            {/* Tech tags */}
            <motion.div {...entry(0.36)} className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...entry(0.44)} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn btn-primary focus-visible:ring-2"
                style={{ "--tw-ring-color": "var(--cyan)" } as React.CSSProperties}
              >
                Explore My Work
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <DownloadResumeButton variant="secondary" label="Download Resume" />
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="GitHub profile"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              {...entry(0.52)}
              className="grid grid-cols-3 gap-0 pt-7"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              {[
                { value: `${portfolioData.projects.length}`,      label: "Projects" },
                { value: `${portfolioData.experience.length}`,    label: "Internships" },
                { value: `${portfolioData.certifications.length}`, label: "Certifications" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 pr-6"
                  style={{
                    borderRight: i < 2 ? "1px solid var(--border-subtle)" : "none",
                    marginRight: i < 2 ? "1.5rem" : "0",
                  }}
                >
                  <span
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-label" style={{ color: "var(--text-dim)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Visual column ── */}
          <div className="flex flex-col gap-6 items-center lg:items-end">

            {/* Profile image + signal overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="relative w-full max-w-xs sm:max-w-sm"
            >
              {/* Signal network behind image */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none opacity-60"
                aria-hidden="true"
              >
                <SignalNetwork />
              </div>

              {/* Image frame */}
              <div
                className="relative aspect-square w-full rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid var(--border-dim)",
                  backgroundColor: "var(--bg-surface)",
                  boxShadow: "0 24px 80px -24px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src={portfolioData.personalInfo.profileImage || "/images/profile.jpg"}
                  alt={`${portfolioData.personalInfo.name} — Electronics & Communication Engineer`}
                  width={480}
                  height={480}
                  priority
                  className="w-full h-full object-cover"
                />

                {/* Availability badge */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl"
                  style={{
                    backgroundColor: "rgba(9,9,11,0.88)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid var(--border-dim)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="status-dot status-dot-pulse" />
                    <span className="text-label" style={{ color: "var(--emerald)" }}>
                      OPEN TO WORK
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    <span className="text-label">BENGALURU</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Status panel */}
            <div className="w-full max-w-xs sm:max-w-sm">
              <StatusPanel inView={isInView} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-label" style={{ color: "var(--text-dim)" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, var(--cyan), transparent)" }}
          />
        </motion.div>
      )}
    </section>
  );
}
