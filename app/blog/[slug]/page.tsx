import { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedLink from "../../components/LocalizedLink";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react";

const SITE_URL = "https://arshid-portfolio.vercel.app";

const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    tags: string[];
    category: string;
  }
> = {
  "building-embedded-iot-projects": {
    title: "Building Embedded IoT Projects: A Complete Guide",
    excerpt:
      "Learn how to design, build, and deploy embedded IoT systems from scratch using ESP32, sensors, and cloud platforms.",
    date: "2026-07-15",
    readTime: "12 min",
    tags: ["IoT", "Embedded", "ESP32", "Tutorial"],
    category: "Embedded Systems",
    content: `
## Introduction

Embedded IoT projects combine hardware and software to create intelligent systems that can sense, process, and communicate data. This guide walks through building a complete IoT system from scratch.

## Prerequisites

- ESP32 Development Board
- Sensors (DHT11, MQ Sensors, etc.)
- Breadboard and jumper wires
- Arduino IDE or PlatformIO
- Basic knowledge of C/C++

## System Architecture

Signal flow: Sensors → ESP32 → WiFi/Cloud → Mobile App

## Hardware Components

ESP32 (main microcontroller), DHT11 (temperature/humidity), MQ sensors (air quality), LCD display (local output).

## Firmware Development

\`\`\`cpp
#include <WiFi.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin("SSID", "PASSWORD");
  while (WiFi.status() != WL_CONNECTED) delay(500);
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  Serial.printf("Temp: %.1f°C  Humidity: %.1f%%\\n", temp, humidity);
  delay(2000);
}
\`\`\`

## Cloud Integration

Connect your ESP32 to a cloud platform (Blynk, AWS IoT, or Firebase) for remote monitoring and control dashboards.

## Testing and Deployment

Test each component individually, integrate, run a 24-hour burn test, then deploy in a suitable enclosure.

## References

- ESP32 Documentation: https://docs.espressif.com
- Arduino Reference: https://arduino.cc/reference
    `,
  },
  "esp32-development-guide": {
    title: "ESP32 Development Guide: From Beginner to Advanced",
    excerpt:
      "Master ESP32 development with this comprehensive guide covering Wi-Fi, Bluetooth, sensors, and power optimization.",
    date: "2026-07-10",
    readTime: "15 min",
    tags: ["ESP32", "IoT", "WiFi", "Bluetooth"],
    category: "Embedded Systems",
    content: `
## Getting Started with ESP32

The ESP32 is a powerful microcontroller with built-in Wi-Fi and Bluetooth, ideal for IoT development.

## Hardware Overview

- CPU: Xtensa LX6 dual-core 32-bit up to 240 MHz
- RAM: 520 KB SRAM
- Flash: 4 MB – 16 MB
- Connectivity: Wi-Fi 802.11 b/g/n, Bluetooth 4.2 / BLE

## Wi-Fi Station Mode

\`\`\`cpp
WiFi.begin("SSID", "PASSWORD");
while (WiFi.status() != WL_CONNECTED) { delay(500); }
Serial.println("Connected: " + WiFi.localIP().toString());
\`\`\`

## Bluetooth Low Energy

\`\`\`cpp
#include <BLEDevice.h>
BLEDevice::init("ESP32_BLE");
BLEServer* pServer = BLEDevice::createServer();
\`\`\`

## Power Optimization

Use Deep Sleep, disable unused peripherals, and lower CPU frequency for battery-powered applications.
    `,
  },
  "pcb-design-workflow": {
    title: "PCB Design Workflow: From Schematic to Production",
    excerpt:
      "Complete PCB design workflow using EasyEDA and KiCad, from schematic capture to Gerber file generation.",
    date: "2026-07-05",
    readTime: "10 min",
    tags: ["PCB", "KiCad", "EasyEDA", "Hardware"],
    category: "Hardware Design",
    content: `
## PCB Design Process

A professional PCB design workflow moves from concept through schematic, layout, DRC, and Gerber export.

## Tool Comparison

- EasyEDA: Free online tool with JLCPCB integration — ideal for beginners.
- KiCad: Free, open-source, professional-grade — industry standard.
- Altium Designer: Commercial, full-featured — used in most professional environments.

## Design Rules

- Minimum trace width: 0.2 mm
- Minimum clearance: 0.2 mm
- Via size: 0.3 mm drill / 0.6 mm pad
- Copper-to-edge: 0.3 mm

## Gerber Export

Export: top/bottom copper, solder mask, silkscreen, drill file, board outline.
    `,
  },
  "learning-verilog": {
    title: "Learning Verilog: Digital Design for Beginners",
    excerpt:
      "Start your journey into digital hardware design with Verilog HDL. Learn RTL design, simulation, and FPGA implementation.",
    date: "2026-06-28",
    readTime: "14 min",
    tags: ["Verilog", "VLSI", "FPGA", "RTL"],
    category: "VLSI Design",
    content: `
## What is Verilog?

Verilog HDL is used to model digital systems from gate level to behavioural level.

## Basic Module Structure

\`\`\`verilog
module and_gate (
  input  wire a, b,
  output wire c
);
  assign c = a & b;
endmodule
\`\`\`

## 4-bit Adder

\`\`\`verilog
module adder_4bit (
  input  [3:0] a, b,
  input        cin,
  output [3:0] sum,
  output       cout
);
  assign {cout, sum} = a + b + cin;
endmodule
\`\`\`

## D Flip-Flop

\`\`\`verilog
module dff (
  input  clk, d,
  output reg q
);
  always @(posedge clk) q <= d;
endmodule
\`\`\`

## Simulation and FPGA

Write testbenches in ModelSim/Questa, then synthesise to FPGA using Vivado or Quartus.
    `,
  },
  "fpga-roadmap": {
    title: "FPGA Roadmap: Learning Path for 2026",
    excerpt:
      "Structured learning path for FPGA development, from basic digital logic to advanced FPGA implementations.",
    date: "2026-06-20",
    readTime: "8 min",
    tags: ["FPGA", "VLSI", "Digital Design"],
    category: "VLSI Design",
    content: `
## FPGA Learning Phases

**Phase 1 — Digital Logic Basics**: Boolean algebra, combinational/sequential circuits, FSMs.

**Phase 2 — HDL Programming**: Verilog/VHDL modules, testbenches, simulation.

**Phase 3 — FPGA Tools**: Vivado or Quartus, synthesis, timing analysis, board bring-up.

**Phase 4 — Advanced Topics**: HLS, partial reconfiguration, high-speed interfaces.

## Recommended Boards

- Beginner: Xilinx Artix-7 or Intel Cyclone IV
- Intermediate: Xilinx Zynq-7000
- Advanced: Xilinx Zynq UltraScale+
    `,
  },
  "nextjs-portfolio-development": {
    title: "Building a Portfolio with Next.js 16 and React 19",
    excerpt:
      "Learn how to build a modern, performant portfolio using Next.js 16, React 19, TypeScript, and Tailwind CSS.",
    date: "2026-06-15",
    readTime: "18 min",
    tags: ["Next.js", "React", "TypeScript", "Portfolio"],
    category: "Web Development",
    content: `
## Tech Stack

Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, Framer Motion, Vercel.

## Project Setup

\`\`\`bash
npx create-next-app@latest portfolio --typescript --tailwind
cd portfolio
npm install framer-motion lucide-react
\`\`\`

## App Router Basics

\`\`\`typescript
// app/page.tsx
export default function Home() {
  return <main>Welcome to my portfolio</main>;
}
\`\`\`

## Performance Checklist

- Image optimisation with next/image
- Font optimisation with next/font
- Dynamic imports for heavy components
- Bundle analysis with @next/bundle-analyzer
- Structured data (JSON-LD) for SEO
    `,
  },
  "android-jetpack-compose": {
    title: "Android Development with Jetpack Compose",
    excerpt:
      "Build modern Android apps using Jetpack Compose, Kotlin, and Material 3 design principles.",
    date: "2026-06-10",
    readTime: "13 min",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Mobile"],
    category: "Mobile Development",
    content: `
## Composable Functions

\`\`\`kotlin
@Composable
fun Greeting(name: String) {
    Text(text = "Hello $name!")
}
\`\`\`

## State Management

\`\`\`kotlin
@Composable
fun Counter() {
    var count by remember { mutableStateOf(0) }
    Button(onClick = { count++ }) {
        Text("Count: $count")
    }
}
\`\`\`

## Architecture

MVVM pattern with ViewModel, Repository, and dependency injection (Hilt). Material 3 components for modern UI.
    `,
  },
  "google-gemini-api-guide": {
    title: "Integrating Google Gemini API in Your Applications",
    excerpt:
      "Learn how to integrate Google's Gemini AI API into your applications for intelligent features and insights.",
    date: "2026-06-05",
    readTime: "11 min",
    tags: ["AI", "Gemini", "API", "Tutorial"],
    category: "Artificial Intelligence",
    content: `
## Installation

\`\`\`bash
npm install @google/generative-ai
\`\`\`

## Basic Usage

\`\`\`typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const result = await model.generateContent("Explain quantum computing");
console.log(result.response.text());
\`\`\`

## Best Practices

Always store your API key server-side. Implement rate limiting, proper error handling, and content filtering for production use.
    `,
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Post Not Found" };
  const postUrl = `${SITE_URL}/blog/${slug}`;
  return {
    title: `${post.title} | Arshid Ahmad Malik`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      authors: ["Arshid Ahmad Malik"],
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
    alternates: { canonical: postUrl },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderContent(raw: string) {
  return raw
    .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
    .replace(/^## (.*$)/gm, '<h2 class="blog-h2">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="blog-h3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    .split("\n\n")
    .map((block) => {
      const t = block.trim();
      if (!t) return "";
      if (t.startsWith("<h") || t.startsWith("<pre") || t.startsWith("<li")) return t;
      return `<p>${t}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const allSlugs = Object.keys(blogPosts);
  const currentIdx = allSlugs.indexOf(slug);
  const prevSlug = currentIdx > 0 ? allSlugs[currentIdx - 1] : null;
  const nextSlug = currentIdx < allSlugs.length - 1 ? allSlugs[currentIdx + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: "Arshid Ahmad Malik", url: SITE_URL },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    url: postUrl,
    publisher: { "@type": "Person", name: "Arshid Ahmad Malik" },
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
          background: "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8">

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-label mb-8"
          style={{ color: "var(--text-dim)" }}
          aria-label="Breadcrumb"
        >
          <LocalizedLink href="/" className="transition-colors hover:text-cyan-400">Home</LocalizedLink>
          <span>/</span>
          <LocalizedLink href="/blog" className="transition-colors hover:text-cyan-400">Blog</LocalizedLink>
          <span>/</span>
          <span style={{ color: "var(--text-tertiary)" }} aria-current="page">{post.category}</span>
        </nav>

        {/* Back link */}
        <LocalizedLink
          href="/blog"
          className="inline-flex items-center gap-2 text-label mb-10 transition-colors hover:text-cyan-400"
          style={{ color: "var(--text-tertiary)" }}
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to Blog
        </LocalizedLink>

        {/* Article */}
        <article aria-labelledby="post-title">
          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="badge badge-cyan">{post.category}</span>
              <span
                className="flex items-center gap-1.5 text-label"
                style={{ color: "var(--text-dim)" }}
              >
                <Clock className="h-3 w-3" aria-hidden="true" />
                {post.readTime} read
              </span>
              <span
                className="flex items-center gap-1.5 text-label"
                style={{ color: "var(--text-dim)" }}
              >
                <Calendar className="h-3 w-3" aria-hidden="true" />
                {formatDate(post.date)}
              </span>
            </div>

            <h1
              id="post-title"
              className="section-title mb-5"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              {post.title}
            </h1>

            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </header>

          {/* Divider */}
          <div
            className="mb-10 h-px"
            style={{ backgroundColor: "var(--border-subtle)" }}
            aria-hidden="true"
          />

          {/* Body */}
          <div
            className="prose-engineering"
            style={{ color: "var(--text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />

          {/* Footer */}
          <footer
            className="mt-14 pt-8"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
              <span className="text-label" style={{ color: "var(--text-dim)" }}>Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </footer>
        </article>

        {/* Prev / Next navigation */}
        {(prevSlug || nextSlug) && (
          <nav
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
            aria-label="Article navigation"
          >
            {prevSlug ? (
              <LocalizedLink
                href={`/blog/${prevSlug}`}
                className="group flex flex-col gap-2 rounded-xl p-5 card-lift"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <span className="text-label flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" /> Previous
                </span>
                <span
                  className="text-sm font-semibold leading-snug transition-colors group-hover:text-cyan-400"
                  style={{ color: "var(--text-primary)" }}
                >
                  {blogPosts[prevSlug]?.title}
                </span>
              </LocalizedLink>
            ) : <div />}

            {nextSlug ? (
              <LocalizedLink
                href={`/blog/${nextSlug}`}
                className="group flex flex-col gap-2 rounded-xl p-5 card-lift sm:text-right"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-dim)",
                }}
              >
                <span className="text-label flex items-center gap-1.5 sm:justify-end" style={{ color: "var(--text-dim)" }}>
                  Next <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </span>
                <span
                  className="text-sm font-semibold leading-snug transition-colors group-hover:text-cyan-400"
                  style={{ color: "var(--text-primary)" }}
                >
                  {blogPosts[nextSlug]?.title}
                </span>
              </LocalizedLink>
            ) : <div />}
          </nav>
        )}

      </div>

      {/* Blog body styles */}
      <style>{`
        .blog-h2 {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.015em;
        }
        .blog-h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 0.5rem;
        }
        .prose-engineering p {
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        .prose-engineering pre {
          background: var(--bg-inset);
          border: 1px solid var(--border-dim);
          border-radius: 10px;
          padding: 1.25rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .prose-engineering pre code {
          background: none;
          border: none;
          padding: 0;
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-family: "JetBrains Mono", "Fira Code", ui-monospace, monospace;
        }
        .prose-engineering code {
          background: var(--bg-raised);
          border: 1px solid var(--border-dim);
          border-radius: 4px;
          padding: 0.1em 0.4em;
          font-size: 0.85em;
          color: var(--cyan);
          font-family: "JetBrains Mono", "Fira Code", ui-monospace, monospace;
        }
        .prose-engineering li {
          margin-bottom: 0.4rem;
          padding-left: 1rem;
          position: relative;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .prose-engineering li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--cyan);
        }
        .prose-engineering strong {
          color: var(--text-primary);
          font-weight: 600;
        }
        .prose-engineering a {
          color: var(--cyan);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>
    </main>
  );
}
