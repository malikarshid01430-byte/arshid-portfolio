"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code, Info, ArrowRight, ShieldCheck, CircuitBoard } from "lucide-react";
import { portfolioData, Project } from "../data/portfolio";

const categories = ["All", "Embedded & IoT", "Electronics & VLSI", "AI & Edge Computer Vision", "Full Stack Web"];

const getNodeColor = (type: string) => {
  const colors: Record<string, string> = {
    sensor: "bg-emerald-950/40 border-emerald-500 text-emerald-400",
    mcu: "bg-cyan-950/40 border-cyan-500 text-cyan-400",
    "edge-ai": "bg-pink-950/40 border-pink-500 text-pink-400",
    hardware: "bg-amber-950/40 border-amber-500 text-amber-400",
    cloud: "bg-sky-950/40 border-sky-500 text-sky-400",
    ui: "bg-violet-950/40 border-violet-500 text-violet-400",
  };
  return colors[type] || "bg-zinc-900 border-zinc-500 text-zinc-400";
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () => selectedCategory === "All" ? portfolioData.projects : portfolioData.projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section id="projects" className="relative py-24 border-t border-zinc-900 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} REGISTER::REPOSITORIES</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full border font-mono text-[10px] sm:text-xs tracking-wider transition-colors ${
                selectedCategory === cat ? "bg-cyan-500/20 border-cyan-400 text-cyan-400" : "bg-zinc-950/30 border-zinc-900 text-zinc-400 hover:text-white"
              }`}
              role="tab"
              aria-selected={selectedCategory === cat}
            >{cat}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveProject(project)}
                className="group relative rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 cursor-pointer transition-colors hover:border-cyan-500/30">
                <div className="absolute top-4 right-4 text-zinc-800 group-hover:text-cyan-500/20 transition-colors"><CircuitBoard className="h-10 w-10 stroke-[1]" /></div>
                <div className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase mb-2">{"// "}{project.category}</div>
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="mt-2 text-sm text-zinc-400 font-mono leading-relaxed line-clamp-3">{project.subtitle}</p>
                <p className="mt-4 text-xs text-zinc-500 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded bg-zinc-900/60 border border-zinc-800 text-[10px] font-mono text-zinc-400">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-0.5 rounded bg-cyan-950/10 border border-cyan-950/40 text-[10px] font-mono text-cyan-400">+{project.technologies.length - 4} MORE</span>
                  )}
                </div>
                <div className="mt-6 flex items-center gap-1.5 font-mono text-xs text-cyan-400 group-hover:underline"><Info className="h-4 w-4" /><span>View Details</span></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 overflow-y-auto"
              onClick={() => setActiveProject(null)}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl rounded-2xl border border-cyan-500/20 bg-zinc-950 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors" aria-label="Close project details"><X className="h-4 w-4" /></button>
                <div className="border-b border-zinc-900 pb-4 mb-6">
                  <span className="font-mono text-xs text-cyan-400 tracking-wider">{"// PROJECT // "}{activeProject.category}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide mt-2">{activeProject.title}</h3>
                  <p className="text-sm text-zinc-400 font-mono mt-1">{activeProject.subtitle}</p>
                  {activeProject.timeline && (
                    <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500 font-mono">
                      <span>⏱ {activeProject.timeline}</span>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-6 space-y-6">
                    {activeProject.problem && (
                      <div><h4 className="font-mono text-xs text-rose-400 uppercase tracking-widest mb-2">{'>'} PROBLEM_STATEMENT</h4><p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{activeProject.problem}</p></div>
                    )}
                    {activeProject.solution && (
                      <div><h4 className="font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2">{'>'} SOLUTION_APPROACH</h4><p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{activeProject.solution}</p></div>
                    )}
                    <div><h4 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">{'>'} OVERVIEW</h4><p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{activeProject.longDescription}</p></div>
                    {activeProject.results && (
                      <div><h4 className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-3">{'>'} RESULTS_&_IMPACT</h4>
                        <ul className="space-y-2 text-xs text-zinc-400">{activeProject.results.map((r, i) => (
                          <li key={i} className="flex items-start gap-2"><ShieldCheck className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" /><span>{r}</span></li>
                        ))}</ul></div>
                    )}
                    <div><h4 className="font-mono text-xs text-teal-400 uppercase tracking-widest mb-3">{'>'} KEY_HIGHLIGHTS</h4>
                      <ul className="space-y-2 text-xs text-zinc-400">{activeProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2"><ShieldCheck className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" /><span>{h}</span></li>
                      ))}</ul></div>
                    <div><h4 className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-3">{'>'} FEATURES</h4>
                      <ul className="space-y-2 text-xs text-zinc-400">{activeProject.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2"><ArrowRight className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" /><span>{f}</span></li>
                      ))}</ul></div>
                    <div><h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">{'>'} TECH_STACK</h4>
                      <div className="flex flex-wrap gap-1.5">{activeProject.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">{t}</span>
                      ))}</div></div>
                    {activeProject.technicalChallenges.length > 0 && (
                      <div><h4 className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">{'>'} TECHNICAL_CHALLENGES</h4>
                        <ul className="space-y-2 text-xs text-zinc-400">{activeProject.technicalChallenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">⚠</span><span>{c}</span></li>
                        ))}</ul></div>
                    )}
                    {activeProject.github && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        <a href={activeProject.github} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-cyan-950/5 font-mono text-xs text-cyan-400 hover:border-cyan-400 transition-colors"><Code className="h-4 w-4" /> View Source</a>
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-6 flex flex-col">
                    <h4 className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-4 flex items-center gap-2"><CircuitBoard className="h-4 w-4" /> SYSTEM ARCHITECTURE</h4>
                    {activeProject.architecture ? (
                      <div className="flex-1 rounded-xl border border-zinc-900 bg-black/60 p-4 font-mono text-[10px] sm:text-xs">
                        <div className="flex flex-wrap gap-3 justify-center mb-6">
                          {activeProject.architecture.nodes.map((n) => (
                            <div key={n.id} className={`px-3 py-2 rounded-lg border flex flex-col items-center text-center max-w-[140px] ${getNodeColor(n.type)}`}>
                              <span className="font-bold text-[9px] uppercase opacity-75">{n.type}</span><span className="font-semibold mt-1">{n.label}</span>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-zinc-900 pt-4">
                          <span className="text-[10px] text-zinc-500 block mb-3 uppercase tracking-wider">{"// SIGNAL PATH CONNECTIONS:"}</span>
                          <div className="space-y-2.5 max-h-[220px] overflow-y-auto">
                            {activeProject.architecture.edges.map((e, i) => {
                              const from = activeProject.architecture?.nodes.find((n) => n.id === e.from)?.label || e.from;
                              const to = activeProject.architecture?.nodes.find((n) => n.id === e.to)?.label || e.to;
                              return (
                                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 p-2 rounded bg-zinc-950/60 border border-zinc-900">
                                  <div className="flex items-center gap-2 flex-wrap"><span className="text-zinc-300 font-semibold">{from}</span><ArrowRight className="h-3.5 w-3.5 text-cyan-500" /><span className="text-cyan-400">{to}</span></div>
                                  <span className="px-2 py-0.5 rounded bg-cyan-950/20 text-cyan-400 border border-cyan-500/10 text-[9px] font-bold">{e.label}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center justify-center border border-dashed border-zinc-800 rounded-xl p-8 text-zinc-600">No system block diagram available.</div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}