import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
}> = {
  "building-embedded-iot-projects": {
    title: "Building Embedded IoT Projects: A Complete Guide",
    excerpt: "Learn how to design, build, and deploy embedded IoT systems from scratch using ESP32, sensors, and cloud platforms.",
    date: "2026-07-15",
    readTime: "12 min",
    tags: ["IoT", "Embedded", "ESP32", "Tutorial"],
    category: "Embedded Systems",
    content: `
# Building Embedded IoT Projects: A Complete Guide

## Introduction

Embedded IoT projects combine hardware and software to create intelligent systems that can sense, process, and communicate data. In this comprehensive guide, we'll walk through building a complete IoT system from scratch.

## Prerequisites

- ESP32 Development Board
- Sensors (DHT11, MQ Sensors, etc.)
- Breadboard and jumper wires
- Arduino IDE or PlatformIO
- Basic knowledge of C/C++

## System Architecture

\`\`\`
[Sensors] → [ESP32] → [WiFi/Cloud] → [Mobile App]
\`\`\`

## Hardware Components

| Component | Purpose | Cost |
|-----------|---------|------|
| ESP32 | Main microcontroller | ₹300-500 |
| DHT11 | Temperature/Humidity | ₹50-100 |
| MQ Sensors | Air Quality | ₹100-200 |
| LCD Display | Local output | ₹100-150 |

## Software Stack

- **Firmware**: Arduino C++
- **Communication**: MQTT/HTTP
- **Cloud**: Blynk/AWS IoT
- **Mobile**: Flutter/Native

## Implementation Steps

### 1. Circuit Design

Design your circuit schematic before assembly. Connect sensors to ESP32 GPIO pins with appropriate pull-up/pull-down resistors.

### 2. Firmware Development

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
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Send to cloud
  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.println("°C");
  
  delay(2000);
}
\`\`\`

### 3. Cloud Integration

Connect your device to a cloud platform for remote monitoring and control.

### 4. Mobile App

Create a mobile app to monitor sensor data and control devices remotely.

## Testing and Deployment

1. Test each component individually
2. Integrate all components
3. Test the complete system
4. Deploy in enclosure
5. Monitor for 24-48 hours

## Conclusion

Building IoT projects requires understanding of both hardware and software. Start with simple projects and gradually increase complexity.

## References

- ESP32 Documentation: https://docs.espressif.com
- Arduino Reference: https://arduino.cc/reference
- MQTT Protocol: https://mqtt.org
    `,
  },
  "esp32-development-guide": {
    title: "ESP32 Development Guide: From Beginner to Advanced",
    excerpt: "Master ESP32 development with this comprehensive guide covering Wi-Fi, Bluetooth, sensors, and power optimization.",
    date: "2026-07-10",
    readTime: "15 min",
    tags: ["ESP32", "IoT", "WiFi", "Bluetooth"],
    category: "Embedded Systems",
    content: `
# ESP32 Development Guide: From Beginner to Advanced

## Getting Started with ESP32

The ESP32 is a powerful microcontroller with built-in Wi-Fi and Bluetooth capabilities, perfect for IoT projects.

## Hardware Overview

- **CPU**: Xtensa LX6 dual-core 32-bit
- **Clock Speed**: Up to 240 MHz
- **RAM**: 520 KB SRAM
- **Flash**: 4 MB to 16 MB
- **Connectivity**: Wi-Fi 802.11 b/g/n, Bluetooth 4.2

## Development Environment

### Arduino IDE Setup

1. Install Arduino IDE
2. Add ESP32 board URL in preferences
3. Install ESP32 board package
4. Select your board and port

### PlatformIO Setup

\`\`\`bash
pip install platformio
platformio project init --board esp32dev
\`\`\`

## Core Features

### Wi-Fi Station Mode

\`\`\`cpp
WiFi.begin("SSID", "PASSWORD");
while (WiFi.status() != WL_CONNECTED) {
  delay(500);
  Serial.print(".");
}
Serial.println("Connected!");
\`\`\`

### Bluetooth Low Energy

\`\`\`cpp
#include <BLEDevice.h>
#include <BLEServer.h>

BLEServer* pServer = BLEDevice::createServer();
\`\`\`

## Power Optimization

- Use Deep Sleep mode
- Disable unused peripherals
- Lower CPU frequency when possible
- Use efficient power supplies

## Conclusion

ESP32 is versatile for IoT development. Master these fundamentals for advanced projects.
    `,
  },
  "pcb-design-workflow": {
    title: "PCB Design Workflow: From Schematic to Production",
    excerpt: "Complete PCB design workflow using EasyEDA and KiCad, from schematic capture to Gerber file generation.",
    date: "2026-07-05",
    readTime: "10 min",
    tags: ["PCB", "KiCad", "EasyEDA", "Hardware"],
    category: "Hardware Design",
    content: `
# PCB Design Workflow: From Schematic to Production

## PCB Design Process

Designing a PCB involves several stages from concept to manufacturing.

## Tools Comparison

| Tool | Cost | Features | Best For |
|------|------|----------|----------|
| EasyEDA | Free/Paid | Online, JLCPCB integration | Beginners |
| KiCad | Free | Open-source, powerful | Advanced users |
| Altium | Paid | Professional features | Industry |

## Design Steps

### 1. Schematic Capture

Create circuit diagram with proper component placement and connections.

### 2. PCB Layout

- Define board outline
- Place components
- Route traces
- Add copper pour
- Design for Manufacturing (DFM)

### 3. Design Rules

- Minimum trace width: 0.2mm
- Minimum clearance: 0.2mm
- Via size: 0.3mm/0.6mm
- Copper-to-edge: 0.3mm

### 4. Gerber Generation

Export manufacturing files:
- Top/Bottom copper layers
- Solder mask
- Silkscreen
- Drill files
- Board outline

## Best Practices

1. Keep components on a grid
2. Route power traces first
3. Use ground plane
4. Minimize via count
5. Add test points for debugging

## Conclusion

Good PCB design ensures reliable manufacturing and performance.
    `,
  },
  "learning-verilog": {
    title: "Learning Verilog: Digital Design for Beginners",
    excerpt: "Start your journey into digital hardware design with Verilog HDL. Learn RTL design, simulation, and FPGA implementation.",
    date: "2026-06-28",
    readTime: "14 min",
    tags: ["Verilog", "VLSI", "FPGA", "RTL"],
    category: "VLSI Design",
    content: `
# Learning Verilog: Digital Design for Beginners

## What is Verilog?

Verilog HDL (Hardware Description Language) is used to model digital systems at various abstraction levels.

## Basic Concepts

### Module Structure

\`\`\`verilog
module and_gate(
  input a,
  input b,
  output c
);
  
  assign c = a & b;

endmodule
\`\`\`

### Data Types

- **wire**: Continuous assignments
- **reg**: Procedural blocks
- **parameter**: Constants

## Design Examples

### 4-bit Adder

\`\`\`verilog
module adder_4bit(
  input [3:0] a,
  input [3:0] b,
  input cin,
  output [3:0] sum,
  output cout
);
  
  assign {cout, sum} = a + b + cin;

endmodule
\`\`\`

### Flip-Flop

\`\`\`verilog
module d_flip_flop(
  input clk,
  input d,
  output reg q
);
  
  always @(posedge clk) begin
    q <= d;
  end

endmodule
\`\`\`

## Simulation

Use testbenches to verify functionality before hardware implementation.

## FPGA Implementation

Synthesize and upload to FPGA board for hardware testing.

## Conclusion

Verilog is essential for VLSI and FPGA development. Practice with small modules and gradually build complex systems.
    `,
  },
  "fpga-roadmap": {
    title: "FPGA Roadmap: Learning Path for 2026",
    excerpt: "Structured learning path for FPGA development, from basic digital logic to advanced FPGA implementations.",
    date: "2026-06-20",
    readTime: "8 min",
    tags: ["FPGA", "VLSI", "Digital Design"],
    category: "VLSI Design",
    content: `
# FPGA Roadmap: Learning Path for 2026

## FPGA Development Journey

This roadmap will guide you from beginner to advanced FPGA development.

## Phase 1: Digital Logic Basics

- Boolean algebra
- Logic gates
- Combinational circuits
- Sequential circuits
- State machines

## Phase 2: HDL Programming

- Learn Verilog/VHDL
- Write simple modules
- Create testbenches
- Simulation with ModelSim/Questa

## Phase 3: FPGA Tools

- Xilinx Vivado or Intel Quartus
- Synthesis and implementation
- Timing analysis
- Board bring-up

## Phase 4: Advanced Topics

- High-Level Synthesis (HLS)
- FPGA architecture optimization
- Partial reconfiguration
- High-speed interfaces

## Recommended Boards

1. **Beginner**: Xilinx Artix-7 or Cyclone IV
2. **Intermediate**: Xilinx Zynq-7000
3. **Advanced**: Xilinx Zynq UltraScale+

## Conclusion

FPGA development is a rewarding skill. Follow this roadmap systematically for best results.
    `,
  },
  "nextjs-portfolio-development": {
    title: "Building a Portfolio with Next.js 16 and React 19",
    excerpt: "Learn how to build a modern, performant portfolio using Next.js 16, React 19, TypeScript, and Tailwind CSS.",
    date: "2026-06-15",
    readTime: "18 min",
    tags: ["Next.js", "React", "TypeScript", "Portfolio"],
    category: "Web Development",
    content: `
# Building a Portfolio with Next.js 16 and React 19

## Modern Web Development

Create a high-performance portfolio with the latest web technologies.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Project Setup

\`\`\`bash
npx create-next-app@latest portfolio --typescript --tailwind
cd portfolio
npm install framer-motion lucide-react
\`\`\`

## Key Features

### 1. App Router

\`\`\`typescript
// app/page.tsx
export default function Home() {
  return <main>Welcome to my portfolio</main>;
}
\`\`\`

### 2. Server Components

Leverage React Server Components for optimal performance.

### 3. Dynamic Imports

\`\`\`typescript
import dynamic from 'next/dynamic';
const Component = dynamic(() => import('./Component'));
\`\`\`

## Performance Optimization

- Image optimization with next/image
- Font optimization with next/font
- Route prefetching
- Bundle analysis

## SEO Best Practices

- Metadata API
- OpenGraph tags
- Structured data
- Sitemap.xml
- robots.txt

## Conclusion

Next.js 16 with React 19 provides an excellent foundation for modern web applications.
    `,
  },
  "android-jetpack-compose": {
    title: "Android Development with Jetpack Compose",
    excerpt: "Build modern Android apps using Jetpack Compose, Kotlin, and Material 3 design principles.",
    date: "2026-06-10",
    readTime: "13 min",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Mobile"],
    category: "Mobile Development",
    content: `
# Android Development with Jetpack Compose

## Modern Android UI

Jetpack Compose is Android's modern toolkit for building native UI.

## Core Concepts

### Composable Functions

\`\`\`kotlin
@Composable
fun Greeting(name: String) {
  Text(text = "Hello $name!")
}
\`\`\`

### State Management

\`\`\`kotlin
@Composable
fun Counter() {
  var count by remember { mutableStateOf(0) }
  
  Button(onClick = { count++ }) {
    Text("Count: $count")
  }
}
\`\`\`

### Layouts

- Column
- Row
- Box
- ConstraintLayout

## Material 3 Design

Implement modern Material Design with Material3 components.

## Architecture

- MVVM pattern
- ViewModel
- Repository pattern
- Dependency injection

## Conclusion

Jetpack Compose simplifies Android development with declarative UI.
    `,
  },
  "google-gemini-api-guide": {
    title: "Integrating Google Gemini API in Your Applications",
    excerpt: "Learn how to integrate Google's Gemini AI API into your applications for intelligent features and insights.",
    date: "2026-06-05",
    readTime: "11 min",
    tags: ["AI", "Gemini", "API", "Tutorial"],
    category: "Artificial Intelligence",
    content: `
# Integrating Google Gemini API in Your Applications

## Google Gemini AI

Gemini is Google's most capable AI model, designed for multimodal understanding.

## Getting Started

### API Key

1. Visit Google AI Studio
2. Create API key
3. Store securely (never expose in client)

### Installation

\`\`\`bash
npm install @google/generative-ai
\`\`\`

## Basic Usage

\`\`\`typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const result = await model.generateContent("Explain quantum computing");
console.log(result.response.text());
\`\`\`

## Advanced Features

- Multimodal inputs (text, images)
- Chat conversations
- Function calling
- Streaming responses

## Best Practices

1. Rate limiting
2. Error handling
3. Token management
4. Content filtering

## Conclusion

Gemini API enables powerful AI features in your applications.
    `,
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: "Post Not Found" };
  }

  const postUrl = `https://arshid-portfolio.vercel.app/blog/${slug}`;

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
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": "Arshid Ahmad Malik",
              "url": "https://arshid-portfolio.vercel.app"
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "keywords": post.tags.join(", "),
            "url": `https://arshid-portfolio.vercel.app/blog/${slug}`,
            "publisher": {
              "@type": "Person",
              "name": "Arshid Ahmad Malik"
            }
          })
        }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-zinc-400">{post.title}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="prose prose-invert max-w-none">
          <header className="mb-12">
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-zinc-600">|</span>
              <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <span className="text-zinc-600">|</span>
              <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                <Clock className="h-3 w-3" />
                {post.readTime} read
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-zinc-400">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 rounded-lg border border-cyan-500/20 bg-cyan-500/5 font-mono text-cyan-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-cyan max-w-none
            prose-headings:text-white
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-4
            prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-lg
            prose-code:text-cyan-400 prose-code:font-mono prose-code:text-sm
            prose-ul:text-zinc-300 prose-li:mb-2
            prose-strong:text-white
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline"
          >
            <div dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/`{3}(\w+)?\n([\s\S]*?)`{3}/g, '<pre><code>$2</code></pre>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
                .replace(/^\d+\. (.*$)/gim, '<ol><li>$1</li></ol>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^(?!<[hupol])/gm, '<p>')
                .replace(/<\/(h[123]|ul|ol|li|pre)>\s*<\/(h[123]|ul|ol|li|pre)>/g, '</$1></$2>')
                .replace(/<p><\/p>/g, '')
                .replace(/<ul><\/ul>/g, '')
                .replace(/<ol><\/ol>/g, '')
            }} />
          </div>

          {/* Tags Footer */}
          <footer className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-2 mb-6">
              <Tag className="h-4 w-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-500">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}