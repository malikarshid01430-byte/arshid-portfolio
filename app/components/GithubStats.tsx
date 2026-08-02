"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, FileCode2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

export default function GithubStats() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/malikarshid01430-byte/repos?sort=updated&per_page=8");
        const data = await res.json();
        setRepos(data);
      } catch (e) {
        console.error("GitHub fetch error:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="github" className="relative isolate py-28 lg:py-36 border-t border-zinc-900 scroll-mt-20 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest" aria-hidden="true">Open Source</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">GitHub Activity</h2>
          <p className="mt-4 text-base text-zinc-400 max-w-2xl">Recent repositories and contribution metrics.</p>
          <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/50 font-mono text-xs text-zinc-300 hover:text-cyan-400 transition-colors">
            <FaGithub className="h-4 w-4" /> View Profile
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: FileCode2, label: "Repositories", value: `${repos.length}+` },
            { icon: Star, label: "Stars", value: "12+" },
            { icon: GitFork, label: "Forks", value: "8+" },
          ].map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1, duration: 0.3 }} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 text-center">
              <stat.icon className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12 text-zinc-500 font-mono text-xs">Loading repositories...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition-all hover:border-cyan-500/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{repo.name}</h3>
                  <span className="text-[9px] font-mono text-zinc-500 border border-zinc-800 rounded px-1.5 py-0.5">{repo.language}</span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 mb-4">{repo.description || "No description provided."}</p>
                <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-mono">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 text-amber-400" /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3 text-emerald-400" /> {repo.forks_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}