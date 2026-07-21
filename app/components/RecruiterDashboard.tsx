"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  MessageSquare,
  CheckCircle,
  GraduationCap,
  Cpu
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function RecruiterDashboard() {
  const quickInfo = [
    { icon: Briefcase, label: "Current Status", value: "Actively Seeking Full Time Roles", color: "emerald" },
    { icon: MapPin, label: "Current Location", value: "Bangalore, Karnataka", color: "cyan" },
    { icon: MapPin, label: "Home State", value: "Jammu and Kashmir", color: "violet" },
    { icon: Calendar, label: "Graduation", value: "2026", color: "emerald" },
    { icon: CheckCircle, label: "Willing to Relocate", value: "Yes", color: "cyan" },
    { icon: MessageSquare, label: "Response Time", value: "Within 24 Hours", color: "violet" },
  ];

  const primaryRoles = [
    "Embedded Systems Engineer",
    "IoT Engineer",
    "Electronics Engineer",
    "VLSI Engineer",
    "Firmware Engineer",
    "Android Developer",
    "Full Stack Developer"
  ];

  const quickActions = [
    { icon: Download, label: "Download Resume", href: portfolioData.personalInfo.resumeUrl, color: "cyan" },
    { icon: ExternalLink, label: "LinkedIn", href: portfolioData.personalInfo.linkedin, color: "blue" },
    { icon: ExternalLink, label: "GitHub", href: portfolioData.personalInfo.github, color: "zinc" },
    { icon: Mail, label: "Email", href: `mailto:${portfolioData.personalInfo.email}`, color: "violet" },
    { icon: Phone, label: "Call", href: `tel:${portfolioData.personalInfo.phone}`, color: "emerald" },
    { icon: ExternalLink, label: "Portfolio", href: portfolioData.personalInfo.portfolioUrl, color: "cyan" },
  ];

  return (
    <section className="relative py-16 border-t border-zinc-900 scroll-mt-16 lg:sticky lg:top-20 lg:z-30" aria-labelledby="recruiter-dashboard-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{'>'} RECRUITER::DASHBOARD</span>
          <h2 id="recruiter-dashboard-heading" className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recruiter Overview
          </h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Essential information for recruiters and hiring managers
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Quick Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide">
                Candidate Information
              </h3>
            </div>

            {quickInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950/50 p-4"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-${info.color}-500/20 bg-${info.color}-500/5 text-${info.color}-400`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{info.label}</p>
                    <p className="text-sm font-medium text-white mt-0.5">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Middle Column: Quick Actions */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide">
                Quick Actions
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <motion.a
                    key={idx}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 rounded-lg border border-${action.color}-500/20 bg-${action.color}-500/5 p-4 hover:border-${action.color}-400 transition-colors group`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg border border-${action.color}-500/20 bg-${action.color}-500/10 text-${action.color}-400 group-hover:border-${action.color}-400 transition-colors`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{action.label}</p>
                    </div>
                    <div className="text-zinc-500 group-hover:text-${action.color}-400 transition-colors">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Core Skills */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-cyan-400" aria-hidden="true" />
              <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide">
                Core Competencies
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-6"
            >
              <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-3">
                Primary Roles
              </p>
              <div className="flex flex-wrap gap-2">
                {primaryRoles.map((role, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 font-mono text-xs text-emerald-400"
                  >
                    <CheckCircle className="h-3 w-3" />
                    {role}
                  </motion.span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-3">
                  Additional Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skillCategories.slice(0, 3).map((category, catIdx) =>
                    category.skills.slice(0, 3).map((skill, skillIdx) => (
                      <span
                        key={`${catIdx}-${skillIdx}`}
                        className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/50 px-2.5 py-1 font-mono text-[10px] text-zinc-400"
                      >
                        {skill.name}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-emerald-500/10">
                <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-400">Available for Opportunities</p>
                <p className="text-xs text-zinc-400 mt-0.5">Open to full-time roles starting 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}