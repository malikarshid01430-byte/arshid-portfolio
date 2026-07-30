"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const cards = [
  { title: "Download Resume", desc: "Get my latest resume with detailed project history and technical skills.", href: portfolioData.personalInfo.resumeUrl, icon: Download },
  { title: "Email Me", desc: "Direct line for full-time opportunities and collaboration inquiries.", href: `mailto:${portfolioData.personalInfo.email}`, icon: Mail },
  { title: "Call / WhatsApp", desc: "Quick connect for recruiters and hiring managers.", href: `tel:${portfolioData.personalInfo.phone}`, icon: Phone },
  { title: "LinkedIn", desc: "Professional profile, endorsements, and recommendation history.", href: portfolioData.personalInfo.linkedin, icon: ExternalLink },
  { title: "GitHub", desc: "Source code repositories, commit history, and open-source contributions.", href: portfolioData.personalInfo.github, icon: ExternalLink },
  { title: "Portfolio", desc: "Live project deployments and architecture deep dives.", href: portfolioData.personalInfo.portfolioUrl, icon: ExternalLink },
];

const baseCard =
  "group relative h-full rounded-2xl border border-zinc-800 bg-zinc-950/40 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md focus-within:border-cyan-500/40";

export default function RecruiterInfo() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-zinc-900 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">{'>'} RECRUITER_DASHBOARD</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Recruiter Overview</h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">Essential information for recruiters and hiring managers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08 }}
                className={`${baseCard} focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/10 text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{card.title}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{card.desc}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-mono text-cyan-400">
                  <span>OPEN</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}