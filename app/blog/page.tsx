import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Arshid Ahmad Malik",
  description: "Technical articles and tutorials on Embedded Systems, IoT, VLSI, Android Development, and Full Stack Development by Arshid Ahmad Malik.",
  openGraph: {
    title: "Blog | Arshid Ahmad Malik",
    description: "Technical articles and tutorials on Embedded Systems, IoT, VLSI, Android Development, and Full Stack Development.",
    type: "website",
  },
};

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

export default function BlogPage() {
  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} BLOG</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical Articles
          </h1>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Sharing knowledge and experiences in Embedded Systems, IoT, VLSI, and Full Stack Development
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-cyan-500/20 transition-colors"
            >
              <div className="flex flex-col h-full">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {post.readTime} read
                  </span>
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

                {/* Date */}
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}