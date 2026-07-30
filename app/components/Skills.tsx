"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Code2, Wrench, Smartphone, Brain, Printer } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const icons: Record<string, typeof Code2> = {
  "Programming Languages": Code2,
  "Embedded Systems": Cpu,
  "IoT & Connectivity": Cpu,
  "Android Development": Smartphone,
  "AI & Machine Learning": Brain,
  "VLSI & Digital Design": CircuitBoard,
  "PCB Design": Printer,
  "Tools & Software": Wrench,
  "Full Stack Development": Code2,
};

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const category = portfolioData.skillCategories[activeIdx];
  const Icon = icons[category.title] || Cpu;

  const handleCategoryChange = (index: number) => {
    setActiveIdx(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCategoryChange(index);
    }
  };

  return (
    <section id="skills" className="relative isolate py-24 lg:py-32 border-t border-zinc-900 scroll-mt-16 bg-black/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{'>'} REGISTER::TECHNICAL_SKILLS</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Competency Index</h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2 w-full" role="tablist" aria-label="Skill categories">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider pl-3 mb-2">Select Subsystem Domain</span>
            {portfolioData.skillCategories.map((cat, i) => {
              const CatIcon = icons[cat.title] || Cpu;
              const isSelected = i === activeIdx;
              return (
                <button 
                  key={cat.title} 
                  onClick={() => handleCategoryChange(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-lg border text-left font-mono text-xs tracking-wider transition-colors ${
                    isSelected ? "bg-cyan-950/20 border-cyan-400 text-cyan-400 font-semibold" : "bg-zinc-950/20 border-zinc-900 text-zinc-400 hover:text-white"
                  }`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="skills-panel"
                  id={`skills-tab-${i}`}
                  tabIndex={isSelected ? 0 : -1}
                >
                  <CatIcon className={`h-4.5 w-4.5 ${isSelected ? "text-cyan-400" : "text-zinc-500"}`} aria-hidden="true" />
                  <span className="truncate">{cat.title}</span>
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-8">
            <div 
              className="rounded-xl border border-cyan-500/10 bg-black/60 p-6 sm:p-8 min-h-[380px] flex flex-col justify-between"
              role="tabpanel"
              id="skills-panel"
              aria-labelledby={`skills-tab-${activeIdx}`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-cyan-400" />
                    <h3 className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-wider">{category.title}</h3>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">CAT_ID: 0x{activeIdx.toString(16).toUpperCase()}</span>
                </div>
                <div className="space-y-6" key={category.title}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {category.skills.map((s) => (
                      <div key={s.name} className="space-y-2">
                        <div className="flex justify-between font-mono text-xs">
                          <span className="text-zinc-300 font-semibold">{s.name}</span>
                          <span className="text-cyan-400">{s.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                          <motion.div className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                            initial={{ width: 0 }} animate={{ width: `${s.level}%` }} transition={{ duration: 0.5 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500 gap-2">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> DMA channels loaded</span>
                <span>REGISTER VALIDATED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}