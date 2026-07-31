"use client";

import { ArrowUp, Terminal, Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const year = 2025;

  return (
    <footer className="relative border-t border-zinc-900 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-zinc-800">
          <div className="md:col-span-4 flex flex-col gap-1.5">
            <span className="text-sm font-bold text-white tracking-widest uppercase">{portfolioData.personalInfo.name}</span>
            <span className="text-[10px] text-zinc-500">&copy; {year} Arshid Ahmad Malik. All Rights Reserved.</span>
            <span className="text-[10px] text-zinc-600">Electronics & Communication Engineer</span>
          </div>
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-2 text-zinc-400"><Mail className="h-3.5 w-3.5 text-cyan-400" /><a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-cyan-400 transition-colors">{portfolioData.personalInfo.email}</a></div>
            <div className="flex items-center gap-2 text-zinc-400"><Phone className="h-3.5 w-3.5 text-cyan-400" /><a href={`tel:${portfolioData.personalInfo.phone}`} className="hover:text-cyan-400 transition-colors">{portfolioData.personalInfo.phone}</a></div>
            <div className="flex items-center gap-2 text-zinc-400"><MapPin className="h-3.5 w-3.5 text-cyan-400" /><span>{portfolioData.personalInfo.location}</span></div>
          </div>
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-3">
            <div className="flex gap-3">
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors" aria-label="GitHub"><FaGithub className="h-4 w-4" /></a>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn"><FaLinkedin className="h-4 w-4" /></a>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-cyan-400 transition-colors" aria-label="Scroll to top"><ArrowUp className="h-4 w-4" /></button>
            </div>
            <span className="text-[9px] text-zinc-600 text-left md:text-right">Platform: Next.js 16 // React 19 // Tailwind v4</span>
          </div>
        </div>
        <div className="pt-6 flex flex-wrap items-center justify-between text-[9px] text-zinc-600 gap-4">
          <div className="flex items-center gap-1.5"><Terminal className="h-3 w-3" /><span>ATS_PARSING_COMPATIBLE_SYSTEM</span></div>
          <div className="flex flex-wrap gap-3">
            {["Embedded Systems", "IoT", "VLSI", "FPGA", "ESP32", "STM32", "Arduino", "Android", "React", "Next.js", "Verilog", "Edge AI"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}