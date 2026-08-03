"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Code2, Wrench, Smartphone, Brain } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const icons: Record<string, typeof Code2> = {
  "Programming Languages": Code2,
  "Embedded Systems": Cpu,
  "IoT & Connectivity": Cpu,
  "Android Development": Smartphone,
  "AI & Machine Learning": Brain,
  "VLSI & Digital Design": CircuitBoard,
  "PCB Design": CircuitBoard,
  "Tools & Software": Wrench,
  "Full Stack Development": Code2,
};

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const category = portfolioData.skillCategories[activeIdx];
  const Icon = icons[category.title] || Cpu;

  return (
    <section id="skills" className="relative isolate py-28 lg:py-36 border-t border-zinc-900 scroll-mt-20 overflow-hidden">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">Technical Skills</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">Competency Matrix</h2>
          <p className="mt-4 text-base text-zinc-400 max-w-2xl">Proficiency levels across embedded, electronics, AI, and full-stack domains.</p>
          <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3 w-full" role="tablist" aria-label="Skill categories">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider pl-3 mb-2">Select Domain</span>
            {portfolioData.skillCategories.map((cat, i) => {
              const CatIcon = icons[cat.title] || Cpu;
              const isSelected = i === activeIdx;
              return (
                <button 
                  key={cat.title} 
                  onClick={() => setActiveIdx(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveIdx(i); } }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left font-mono text-xs tracking-wider transition-all ${
                    isSelected ? "bg-cyan-950/30 border-cyan-400/50 text-cyan-400 font-semibold" : "bg-zinc-950/20 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="skills-panel"
                  id={`skills-tab-${i}`}
                  tabIndex={isSelected ? 0 : -1}
                >
                  <CatIcon className={`h-4 w-4 ${isSelected ? "text-cyan-400" : "text-zinc-500"}`} aria-hidden="true" />
                  <span className="truncate">{cat.title}</span>
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-8">
            <div 
              className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 sm:p-8 min-h-[380px] flex flex-col"
              role="tabpanel"
              id="skills-panel"
              aria-labelledby={`skills-tab-${activeIdx}`}
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-wider">{category.title}</h3>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">CAT_ID: 0x{activeIdx.toString(16).toUpperCase()}</span>
              </div>
              <div className="space-y-6 flex-1" key={category.title}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  {category.skills.map((s) => (
                    <div key={s.name} className="space-y-2">
                      <div className="flex justify-between font-mono text-xs">
                        <span className="text-zinc-300 font-semibold">{s.name}</span>
                        <span className="text-cyan-400">{s.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                        <motion.div className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                          initial={{ width: 0 }} animate={{ width: `${s.level}%` }} transition={{ duration: 0.5 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500 gap-2">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Systems validated</span>
                <span>READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}