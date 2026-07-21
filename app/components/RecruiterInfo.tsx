"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Mail, Phone, Download, Link2, GitBranch, MessageSquare } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const statusConfig = {
  available: { label: "Available for Full Time", className: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
  relocation: { label: "Open to Relocate", className: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
  response: { label: "Response Within 24 Hours", className: "text-violet-400 border-violet-500/30 bg-violet-500/5" },
  graduation: { label: "Graduation 2026", className: "text-amber-400 border-amber-500/30 bg-amber-500/5" },
  location: { label: "Current Location: Bangalore", className: "text-pink-400 border-pink-500/30 bg-pink-500/5" },
};

const quickLinks = [
  { label: "Download Resume", href: portfolioData.personalInfo.resumeUrl, icon: Download, variant: "cyan" },
  { label: "Email", href: `mailto:${portfolioData.personalInfo.email}`, icon: Mail, variant: "violet" },
  { label: "Phone", href: `tel:${portfolioData.personalInfo.phone}`, icon: Phone, variant: "green" },
  { label: "LinkedIn", href: portfolioData.personalInfo.linkedin, icon: Link2, variant: "blue" },
  { label: "GitHub", href: portfolioData.personalInfo.github, icon: GitBranch, variant: "zinc" },
  { label: "Portfolio", href: portfolioData.personalInfo.portfolioUrl, icon: MessageSquare, variant: "emerald" },
];

const variantClasses: Record<string, string> = {
  cyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:border-cyan-400",
  violet: "border-violet-500/20 bg-violet-500/5 text-violet-400 hover:border-violet-400",
  green: "border-green-500/20 bg-green-500/5 text-green-400 hover:border-green-400",
  blue: "border-blue-500/20 bg-blue-500/5 text-blue-400 hover:border-blue-400",
  zinc: "border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/20",
  emerald: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400 hover:border-emerald-400",
};

export default function RecruiterInfo() {
  const statuses = useMemo(() => Object.entries(statusConfig).map(([key, value]) => ({ key, ...value })), []);
  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} RECRUITER_DASHBOARD</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Recruiter Overview</h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Status */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-sm font-bold text-cyan-400 tracking-widest uppercase">{'// STATUS_FLAGS'}</h3>

            {/* Status Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {statuses.map((item, idx) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 ${item.className}`}
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span className="text-[11px] font-mono font-medium leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 space-y-4">
              <span className="text-cyan-400 font-bold text-xs font-mono block border-b border-zinc-900 pb-2">{'// CANDIDATE_STATS'}</span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-bold text-white font-mono">20+</div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Certifications</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-mono">7+</div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-mono">3</div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Internships</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white font-mono">5</div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Hackathons</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="lg:col-span-7">
            <h3 className="font-mono text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4">{'// QUICK_LINKS'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${variantClasses[link.variant]}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-current/20 bg-current/5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-mono font-medium">{link.label}</span>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}