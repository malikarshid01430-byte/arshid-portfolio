"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  Briefcase,
  Code,
  Database,
  Award,
  Terminal,
  Clock,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

const quickInfo = [
  { icon: Briefcase, label: "Current Status", value: "Actively Seeking Full Time Roles", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
  { icon: MapPin, label: "Current Location", value: "Bangalore, Karnataka", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
  { icon: MapPin, label: "Home State", value: "Jammu and Kashmir", color: "text-violet-400 border-violet-500/30 bg-violet-500/5" },
  { icon: Calendar, label: "Graduation", value: "2026", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
  { icon: CheckCircle, label: "Willing to Relocate", value: "Yes", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
  { icon: Clock, label: "Response Time", value: "Within 24 Hours", color: "text-violet-400 border-violet-500/30 bg-violet-500/5" },
  { icon: TrendingUp, label: "Years of Learning", value: "4+ Years", color: "text-amber-400 border-amber-500/30 bg-amber-500/5" },
  { icon: Code, label: "Projects Completed", value: "7+", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
  { icon: Globe, label: "Core Domains", value: "Embedded, IoT, VLSI, AI", color: "text-pink-400 border-pink-500/30 bg-pink-500/5" },
  { icon: Users, label: "Current Focus", value: "Edge AI & IoT", color: "text-teal-400 border-teal-500/30 bg-teal-500/5" },
  { icon: MapPin, label: "Expected Role", value: "Embedded / IoT Engineer", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
  { icon: CheckCircle, label: "Open to Relocation", value: "Yes", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
];

const quickActions = [
  { icon: Download, label: "Download Resume", href: portfolioData.personalInfo.resumeUrl, color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10" },
  { icon: ExternalLink, label: "LinkedIn", href: portfolioData.personalInfo.linkedin, color: "border-blue-500/30 bg-blue-500/5 text-blue-400 hover:border-blue-400 hover:bg-blue-500/10" },
  { icon: ExternalLink, label: "GitHub", href: portfolioData.personalInfo.github, color: "border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/30" },
  { icon: Mail, label: "Email", href: `mailto:${portfolioData.personalInfo.email}`, color: "border-violet-500/30 bg-violet-500/5 text-violet-400 hover:border-violet-400 hover:bg-violet-500/10" },
  { icon: Phone, label: "Call", href: `tel:${portfolioData.personalInfo.phone}`, color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10" },
  { icon: ExternalLink, label: "Portfolio", href: portfolioData.personalInfo.portfolioUrl, color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10" },
];

const stats = [
  { icon: Briefcase, label: "Internships", value: "4+", color: "text-cyan-400" },
  { icon: Code, label: "Projects", value: "7+", color: "text-violet-400" },
  { icon: Database, label: "Certifications", value: "20+", color: "text-emerald-400" },
  { icon: Award, label: "Achievements", value: "7+", color: "text-amber-400" },
];

export default function RecruiterDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate py-28 lg:py-36 border-t border-zinc-900 scroll-mt-32 overflow-hidden" aria-labelledby="recruiter-dashboard-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{">"} RECRUITER::DASHBOARD</span>
          <h2 id="recruiter-dashboard-heading" className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recruiter Overview
          </h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Essential information for recruiters and hiring managers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {quickInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 hover:border-cyan-500/30 transition-colors"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg border bg-black/40 ${info.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm font-medium text-white mt-0.5 truncate">{info.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 rounded-xl border p-4 transition-colors group ${action.color}`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg border bg-black/40 transition-colors ${action.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{action.label}</p>
                </div>
                <div className="text-zinc-500 group-hover:text-cyan-400 transition-colors">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 text-center">
                <Icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wide flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              System Status
            </h3>
            <span className="text-[10px] font-mono text-zinc-500">
              {currentTime.toLocaleTimeString()}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-400">Portfolio Online</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-400">Resume Ready</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-400">Open to Work</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-400">Immediate Joiner</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}