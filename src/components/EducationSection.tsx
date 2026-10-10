
import React from "react";
import ScrollReveal from "./ScrollReveal";
import { BookOpen, GraduationCap } from "lucide-react";
import { education } from "@/data/education";

const levelIcon: Record<string, React.ReactNode> = {
  degree:    <GraduationCap size={20} />,
  diploma:   <BookOpen size={20} />,
  secondary: <BookOpen size={18} />,
  school:    <BookOpen size={16} />,
};

const levelStyle: Record<string, string> = {
  degree:    "border-primary/40 bg-primary/5",
  diploma:   "border-violet-500/30 bg-violet-500/5",
  secondary: "border-border bg-muted/30",
  school:    "border-border bg-muted/20",
};

const dotStyle: Record<string, string> = {
  degree:    "bg-primary border-primary",
  diploma:   "bg-violet-400 border-violet-400",
  secondary: "bg-foreground/30 border-foreground/30",
  school:    "bg-foreground/20 border-foreground/20",
};

const EducationSection = () => {
  return (
    <section id="education" className="section bg-background">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Education</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-foreground/60 text-center text-sm max-w-xl mx-auto mb-12">
            Academic background — presented accurately with the most recent first.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-3 bottom-3 w-px bg-border"></div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <ScrollReveal key={item.id} delay={200 + index * 100}>
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-primary z-10 relative ${dotStyle[item.level]} bg-background`}>
                        {levelIcon[item.level]}
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 rounded-xl border p-5 transition-all duration-300 hover:shadow-md ${levelStyle[item.level]}`}>
                      {/* Period & status badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-foreground/50 bg-muted/60 px-2.5 py-1 rounded-full">
                          {item.period}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            item.status.includes("Completed")
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                          }`}
                        >
                          {item.status}
                        </span>
                        {item.percentage && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {item.percentage}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-foreground text-base mb-0.5">
                        {item.degree}
                        {item.field && (
                          <span className="text-primary"> — {item.field}</span>
                        )}
                      </h3>
                      <p className="text-foreground/65 text-sm mb-1">{item.institution}</p>
                      {item.board && (
                        <p className="text-foreground/45 text-xs mb-2">{item.board}</p>
                      )}
                      {item.description && (
                        <p className="text-foreground/60 text-xs leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
