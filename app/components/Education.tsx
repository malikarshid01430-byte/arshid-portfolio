import React from "react";
import { GraduationCap, Award, BadgeCheck, ExternalLink, Calendar, Star } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative isolate py-24 lg:py-32 border-t border-zinc-900 scroll-mt-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{'>'} REGISTER::ACADEMICS_&_HONORS</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education & Credentials
          </h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Education */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-sm font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              {"// 01_ACADEMIC_RECORD"}
            </h3>
            
            {portfolioData.education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 transition-all hover:border-cyan-500/20"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-base font-bold text-white tracking-wide">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-zinc-300 mt-1">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mt-3 font-mono text-[10px] text-zinc-500">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{edu.period} | {edu.location}</span>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-zinc-400 leading-relaxed list-disc list-inside">
                    {edu.details.map((detail, didx) => (
                      <li key={didx} className="indent-[-12px] pl-[12px]">{detail}</li>
                    ))}
                  </ul>

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-900">
                      <h4 className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-2">{'>'} RELEVANT_COURSEWORK</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, cIdx) => (
                          <span key={cIdx} className="px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800 text-[10px] font-mono text-zinc-400">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.laboratories && edu.laboratories.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-900">
                      <h4 className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-2">{'>'} LABORATORIES</h4>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {edu.laboratories.map((lab, labIdx) => (
                          <li key={labIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">▹</span>
                            <span>{lab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.technicalSkillsLearned && edu.technicalSkillsLearned.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-900">
                      <h4 className="font-mono text-[10px] text-violet-400 uppercase tracking-widest mb-2">{'>'} TECHNICAL_SKILLS_ACQUIRED</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.technicalSkillsLearned.map((skill, skillIdx) => (
                          <span key={skillIdx} className="px-2 py-0.5 rounded bg-zinc-900/60 border border-zinc-800 text-[10px] font-mono text-zinc-400">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.certifications && edu.certifications.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-900">
                      <h4 className="font-mono text-[10px] text-teal-400 uppercase tracking-widest mb-2">{'>'} CERTIFICATIONS_EARNED</h4>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {edu.certifications.map((cert, certIdx) => (
                          <li key={certIdx} className="flex items-start gap-2">
                            <BadgeCheck className="h-3.5 w-3.5 text-teal-400 shrink-0 mt-0.5" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-900">
                      <h4 className="font-mono text-[10px] text-amber-400 uppercase tracking-widest mb-2">{'>'} ACHIEVEMENTS</h4>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {edu.achievements.map((achievement, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <Star className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
            ))}

            {/* Research interests segment under education */}
            <div className="rounded-xl border border-violet-500/10 bg-violet-950/5 p-6 mt-6">
              <h4 className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-3">{"// RESEARCH_INTERESTS"}</h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                {portfolioData.researchInterests.map((interest, iidx) => (
                  <li key={iidx} className="flex items-start gap-2">
                    <span className="text-violet-400 font-mono mt-0.5">{'>'}</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Certifications */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-mono text-sm font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-2 mb-4">
              <BadgeCheck className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              {"// 02_CERTIFICATIONS"}
            </h3>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide leading-snug">{cert.name}</h4>
                    <p className="text-xs font-semibold text-zinc-400 mt-1">{cert.issuer}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between font-mono text-[9px]">
                    <span className="text-zinc-500">ISSUED: {cert.date}</span>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                      >
                        VERIFY <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Achievements */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="font-mono text-sm font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              {"// 03_ACHIEVEMENTS"}
            </h3>

            <div className="space-y-4">
              {portfolioData.achievements.map((ach, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-5 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400/20" />
                    <span className="font-mono text-[9px] text-zinc-500">{ach.date}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">{ach.title}</h4>
                  <p className="text-xs text-zinc-400 leading-normal mt-2">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}