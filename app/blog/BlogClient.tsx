"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    slug: "building-embedded-iot-projects",
    title: "Building Embedded IoT Projects: A Complete Guide",
    excerpt: "Learn how to design, build, and deploy embedded IoT systems from scratch using ESP32, sensors, and cloud platforms.",
    date: "2026-07-15",
    readTime: "12 min",
    tags: ["IoT", "Embedded", "ESP32", "Tutorial"],
    category: "Embedded Systems",
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

export default function BlogClient() {
  return (
    <div className="relative isolate py-28 lg:py-36 border-t border-zinc-900 bg-black/40 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{'>'} BLOG</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Technical Articles
          </h1>
          <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-base text-zinc-400 max-w-2xl">
            Sharing knowledge and experiences in Embedded Systems, IoT, VLSI, and Full Stack Development
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <span>{blogPosts.length} articles published</span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 hover:border-cyan-500/30 transition-all h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-zinc-400 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-lg border border-zinc-800 bg-zinc-900/50 font-mono text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}