"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative isolate py-28 lg:py-36 border-t border-zinc-900 scroll-mt-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{'>'} REGISTER::EXPERIENCE_LOG</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Internships & Experience</h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-zinc-900 transform sm:-translate-x-1/2" aria-hidden="true" />
          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className={`relative flex flex-col sm:flex-row items-stretch ${isEven ? "sm:flex-row-reverse" : ""}`}
                  itemScope
                  itemType="https://schema.org/JobPosting"
                >
                  <div className="absolute left-4 sm:left-1/2 top-6 h-4.5 w-4.5 rounded-full border-2 border-cyan-400 bg-black transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <div className="hidden sm:block w-1/2 px-8" />
                  <div className="w-full sm:w-1/2 px-8 pl-12 sm:pl-8">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-6 transition-colors hover:border-cyan-500/30">
                      <span className="font-mono text-[10px] text-cyan-400 tracking-wider">{"// INTERNSHIP_0"}{idx + 1}</span>
                      <h3 className="text-lg font-bold text-white tracking-wide mt-1">{exp.role}</h3>
                      <div className="flex items-center gap-1 mt-1 text-sm font-semibold text-zinc-300">
                        <Briefcase className="h-4 w-4 text-cyan-400" /><span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 font-mono text-[10px] text-zinc-500">
                        <div className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /><span>{exp.period}</span></div>
                        <div className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /><span>{exp.location}</span></div>
                      </div>
                      {exp.responsibilities.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">{'>'} RESPONSIBILITIES</h4>
                          <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
                            {exp.responsibilities.map((bullet, bidx) => (
                              <li key={bidx} className="indent-[-12px] pl-[12px]">{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <ul className="mt-4 space-y-2 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
                        {exp.description.map((bullet, bidx) => (
                          <li key={bidx} className="indent-[-12px] pl-[12px]">{bullet}</li>
                        ))}
                      </ul>
                      {exp.achievements.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-mono text-[10px] text-amber-400 uppercase tracking-widest mb-2">{'>'} KEY_ACHIEVEMENTS</h4>
                          <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
                            {exp.achievements.map((achievement, aidx) => (
                              <li key={aidx} className="indent-[-12px] pl-[12px]">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {exp.impact && (
                        <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
                          <h4 className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-1">{'>'} IMPACT</h4>
                          <p className="text-xs text-zinc-400 leading-relaxed">{exp.impact}</p>
                        </div>
                      )}
                      <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800 text-[9px] font-mono text-zinc-400">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}