
import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experience";

const typeBadge: Record<string, string> = {
  Internship: "bg-violet-500/15 text-violet-400 border border-violet-500/30",
  Training:   "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Project:    "bg-blue-500/15 text-blue-400 border border-blue-500/30",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section bg-muted/20">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Experience &amp; Training
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-foreground/60 text-center text-sm max-w-2xl mx-auto mb-12">
            Internships, structured training programs, and industry skilling — all accurately represented.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((item, index) => (
            <ScrollReveal key={item.id} delay={200 + index * 120}>
              <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div>
                    <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-2 ${typeBadge[item.type] || typeBadge.Training}`}>
                      {item.type}
                    </span>
                    <h3 className="font-bold text-foreground text-base leading-snug group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-foreground/40 hover:text-primary transition-colors mt-1"
                      aria-label={`View credential for ${item.company}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Company */}
                <p className="text-primary font-semibold text-sm mb-3">{item.company}</p>

                {/* Meta — period & location */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/50 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-primary" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-primary" />
                    {item.location}
                  </span>
                </div>

                {/* Description bullets */}
                <ul className="space-y-2 flex-1">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/65">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-primary rotate-45 flex-shrink-0" />
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-border/50">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-0.5 bg-muted/60 rounded-full text-foreground/55"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
