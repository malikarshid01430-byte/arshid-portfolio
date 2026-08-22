"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, ArrowUpRight } from "lucide-react";
import LocalizedLink from "../components/LocalizedLink";

const ease = [0.22, 1, 0.36, 1] as const;

const blogPosts = [
  {
    slug: "building-embedded-iot-projects",
    title: "Building Embedded IoT Projects: A Complete Guide",
    excerpt: "Learn how to design, build, and deploy embedded IoT systems from scratch using ESP32, sensors, and cloud platforms.",
    date: "2026-07-15",
    readTime: "12 min",
    tags: ["IoT", "Embedded", "ESP32", "Tutorial"],
    category: "Embedded Systems",
    featured: true,
  },
  {
    slug: "esp32-development-guide",
    title: "ESP32 Development Guide: From Beginner to Advanced",
    excerpt: "Master ESP32 development with this comprehensive guide covering Wi-Fi, Bluetooth, sensors, and power optimization.",
    date: "2026-07-10",
    readTime: "15 min",
    tags: ["ESP32", "IoT", "WiFi", "Bluetooth"],
    category: "Embedded Systems",
  },
  {
    slug: "pcb-design-workflow",
    title: "PCB Design Workflow: From Schematic to Production",
    excerpt: "Complete PCB design workflow using EasyEDA and KiCad, from schematic capture to Gerber file generation.",
    date: "2026-07-05",
    readTime: "10 min",
    tags: ["PCB", "KiCad", "EasyEDA", "Hardware"],
    category: "Hardware Design",
  },
  {
    slug: "learning-verilog",
    title: "Learning Verilog: Digital Design for Beginners",
    excerpt: "Start your journey into digital hardware design with Verilog HDL. Learn RTL design, simulation, and FPGA implementation.",
    date: "2026-06-28",
    readTime: "14 min",
    tags: ["Verilog", "VLSI", "FPGA", "RTL"],
    category: "VLSI Design",
  },
  {
    slug: "fpga-roadmap",
    title: "FPGA Roadmap: Learning Path for 2026",
    excerpt: "Structured learning path for FPGA development, from basic digital logic to advanced FPGA implementations.",
    date: "2026-06-20",
    readTime: "8 min",
    tags: ["FPGA", "VLSI", "Digital Design"],
    category: "VLSI Design",
  },
  {
    slug: "nextjs-portfolio-development",
    title: "Building a Portfolio with Next.js 16 and React 19",
    excerpt: "Learn how to build a modern, performant portfolio using Next.js 16, React 19, TypeScript, and Tailwind CSS.",
    date: "2026-06-15",
    readTime: "18 min",
    tags: ["Next.js", "React", "TypeScript", "Portfolio"],
    category: "Web Development",
  },
  {
    slug: "android-jetpack-compose",
    title: "Android Development with Jetpack Compose",
    excerpt: "Build modern Android apps using Jetpack Compose, Kotlin, and Material 3 design principles.",
    date: "2026-06-10",
    readTime: "13 min",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Mobile"],
    category: "Mobile Development",
  },
  {
    slug: "google-gemini-api-guide",
    title: "Integrating Google Gemini API in Your Applications",
    excerpt: "Learn how to integrate Google's Gemini AI API into your applications for intelligent features and insights.",
    date: "2026-06-05",
    readTime: "11 min",
    tags: ["AI", "Gemini", "API", "Tutorial"],
    category: "Artificial Intelligence",
  },
];

const featured  = blogPosts.filter((p) => p.featured);
const secondary = blogPosts.filter((p) => !p.featured);

const categoryAccents: Record<string, string> = {
  "Embedded Systems":    "var(--cyan)",
  "Hardware Design":     "#fb923c",
  "VLSI Design":         "#818cf8",
  "Web Development":     "#f472b6",
  "Mobile Development":  "var(--violet)",
  "Artificial Intelligence": "var(--emerald)",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });
}

export default function BlogClient() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative isolate overflow-hidden section-pad"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
        minHeight: "100vh",
        paddingTop: "clamp(6rem, 12vw, 9rem)",
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", right: "5%",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">

        {/* ── Page header ── */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-4">Blog</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h1 className="section-title">Technical Articles</h1>
            <div className="flex items-center gap-2" style={{ color: "var(--text-tertiary)" }}>
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span className="font-mono text-xs">{blogPosts.length} articles published</span>
            </div>
          </div>
          <p
            className="mt-4 text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Sharing knowledge on Embedded Systems, IoT, VLSI, and Full Stack Development.
          </p>
        </motion.div>

        {/* ── Featured article ── */}
        {featured.map((post) => {
          const accent = categoryAccents[post.category] ?? "var(--cyan)";
          return (
            <motion.div
              key={post.slug}
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55, ease }}
              className="mb-10"
            >
              <LocalizedLink
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden card-lift"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
                aria-label={`Featured: ${post.title}`}
              >
                {/* Accent bar */}
                <div className="h-[2px]" style={{ background: accent, opacity: 0.7 }} aria-hidden="true" />

                <div className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="badge badge-cyan">FEATURED</span>
                    <span className="text-label" style={{ color: accent }}>
                      {post.category}
                    </span>
                    <span className="text-label" style={{ color: "var(--text-dim)" }}>
                      <Clock className="inline h-3 w-3 mr-1" aria-hidden="true" />{post.readTime}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="max-w-2xl">
                      <h2
                        className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug mb-3 transition-colors group-hover:text-cyan-400"
                        style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                      >
                        {post.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 sm:mt-1">
                      <span
                        className="font-mono text-xs transition-colors"
                        style={{ color: accent }}
                      >
                        Read article
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: accent }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-1.5 mt-5 pt-5"
                    style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--text-dim)" }}
                  >
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    <span className="text-label">{formatDate(post.date)}</span>
                  </div>
                </div>
              </LocalizedLink>
            </motion.div>
          );
        })}

        {/* ── Secondary grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondary.map((post, idx) => {
            const accent = categoryAccents[post.category] ?? "var(--cyan)";
            return (
              <motion.div
                key={post.slug}
                initial={reduced ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.06, duration: 0.5, ease }}
              >
                <LocalizedLink
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-xl overflow-hidden card-lift"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-dim)",
                  }}
                  aria-label={post.title}
                >
                  {/* Accent bar */}
                  <div className="h-[2px]" style={{ background: accent, opacity: 0.5 }} aria-hidden="true" />

                  <div className="flex flex-col flex-1 p-5">
                    {/* Category + readtime */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-label" style={{ color: accent }}>
                        {post.category}
                      </span>
                      <span className="text-label flex items-center gap-1" style={{ color: "var(--text-dim)" }}>
                        <Clock className="h-3 w-3" aria-hidden="true" />{post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-sm font-semibold leading-snug mb-3 transition-colors group-hover:text-cyan-400"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs leading-relaxed flex-1 line-clamp-3 mb-4" style={{ color: "var(--text-tertiary)" }}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="badge">{tag}</span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div
                      className="flex items-center justify-between pt-3"
                      style={{ borderTop: "1px solid var(--border-subtle)" }}
                    >
                      <div className="flex items-center gap-1.5 text-label" style={{ color: "var(--text-dim)" }}>
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        {formatDate(post.date)}
                      </div>
                      <span
                        className="flex items-center gap-1 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: accent }}
                      >
                        Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </LocalizedLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
