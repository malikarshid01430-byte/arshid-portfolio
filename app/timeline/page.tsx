"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Calendar
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

// Note: Metadata should be added via server component wrapper or layout

interface TimelineEvent {
  id: string;
  type: "education" | "project" | "internship" | "certification" | "achievement";
  title: string;
  organization?: string;
  date: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function TimelinePage() {
  const events: TimelineEvent[] = [];

  // Add education
  portfolioData.education.forEach((edu, idx) => {
    events.push({
      id: `edu-${idx}`,
      type: "education",
      title: edu.degree,
      organization: edu.institution,
      date: edu.period,
      description: edu.details.join(", "),
      icon: GraduationCap,
      color: "cyan",
    });
  });

  // Add internships
  portfolioData.experience.forEach((exp, idx) => {
    events.push({
      id: `exp-${idx}`,
      type: "internship",
      title: exp.role,
      organization: exp.company,
      date: exp.period,
      description: exp.achievements[0],
      icon: Briefcase,
      color: "emerald",
    });
  });

  // Add certifications (top 10)
  portfolioData.certifications.slice(0, 10).forEach((cert, idx) => {
    events.push({
      id: `cert-${idx}`,
      type: "certification",
      title: cert.name,
      organization: cert.issuer,
      date: cert.date,
      icon: Award,
      color: "violet",
    });
  });

  // Add achievements
  portfolioData.achievements.forEach((achievement, idx) => {
    events.push({
      id: `ach-${idx}`,
      type: "achievement",
      title: achievement.title,
      date: achievement.date,
      description: achievement.description,
      icon: Award,
      color: "amber",
    });
  });

  // Add projects
  portfolioData.projects.slice(0, 5).forEach((project, idx) => {
    events.push({
      id: `proj-${idx}`,
      type: "project",
      title: project.title,
      date: project.timeline || "2026",
      description: project.category,
      icon: Code2,
      color: "blue",
    });
  });

  // Sort by date
  events.sort((a, b) => b.date.localeCompare(a.date));

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      cyan: {
        bg: "bg-cyan-500/5",
        border: "border-cyan-500/20",
        text: "text-cyan-400",
        icon: "bg-cyan-500/10",
      },
      emerald: {
        bg: "bg-emerald-500/5",
        border: "border-emerald-500/20",
        text: "text-emerald-400",
        icon: "bg-emerald-500/10",
      },
      violet: {
        bg: "bg-violet-500/5",
        border: "border-violet-500/20",
        text: "text-violet-400",
        icon: "bg-violet-500/10",
      },
      amber: {
        bg: "bg-amber-500/5",
        border: "border-amber-500/20",
        text: "text-amber-400",
        icon: "bg-amber-500/10",
      },
      blue: {
        bg: "bg-blue-500/5",
        border: "border-blue-500/20",
        text: "text-blue-400",
        icon: "bg-blue-500/10",
      },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} TIMELINE</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Career Journey
          </h1>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Education, experience, certifications, and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-amber-500/50" />

          {/* Events */}
          <div className="space-y-8">
            {events.map((event, idx) => {
              const Icon = event.icon;
              const colors = getColorClasses(event.color);

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 ${colors.border} ${colors.icon} flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 rounded-xl border ${colors.border} ${colors.bg} p-6`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-semibold text-white">
                        {event.title}
                      </h3>
                      <span className={`text-[10px] font-mono ${colors.text} flex items-center gap-1`}>
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </span>
                    </div>

                    {event.organization && (
                      <p className="text-sm text-zinc-400 mb-2">{event.organization}</p>
                    )}

                    {event.description && (
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {event.description}
                      </p>
                    )}

                    <span className={`inline-block mt-3 text-[10px] font-mono uppercase tracking-wider ${colors.text}`}>
                      {event.type}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}