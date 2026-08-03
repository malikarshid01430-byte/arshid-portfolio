"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink, Briefcase, Award, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";

interface SearchResult {
  id: string;
  type: "project" | "skill" | "blog" | "experience" | "certification" | "education";
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const typeColors: Record<string, { bg: string; border: string; text: string }> = {
  project: { bg: "bg-cyan-500/5", border: "border-cyan-500/20", text: "text-cyan-400" },
  skill: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400" },
  blog: { bg: "bg-violet-500/5", border: "border-violet-500/20", text: "text-violet-400" },
  experience: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400" },
  certification: { bg: "bg-amber-500/5", border: "border-amber-500/20", text: "text-amber-400" },
  education: { bg: "bg-pink-500/5", border: "border-pink-500/20", text: "text-pink-400" },
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const results: SearchResult[] = [];
    const q = query.toLowerCase();

    portfolioData.projects.forEach((project) => {
      if (project.title.toLowerCase().includes(q) || project.description.toLowerCase().includes(q)) {
        results.push({
          id: `project-${project.id}`,
          type: "project",
          title: project.title,
          description: project.description,
          href: `/projects/${project.id}`,
          icon: Briefcase,
        });
      }
    });

    portfolioData.skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        if (skill.name.toLowerCase().includes(q)) {
          results.push({
            id: `skill-${skill.name}`,
            type: "skill",
            title: skill.name,
            description: `${category.title} - ${skill.level}% proficiency`,
            href: `/#skills`,
            icon: GraduationCap,
          });
        }
      });
    });

    portfolioData.experience.forEach((exp, idx) => {
      if (exp.role.toLowerCase().includes(q) || exp.company.toLowerCase().includes(q)) {
        results.push({
          id: `experience-${idx}`,
          type: "experience",
          title: `${exp.role} at ${exp.company}`,
          description: exp.period,
          href: `/#experience`,
          icon: Briefcase,
        });
      }
    });

    portfolioData.certifications.forEach((cert, idx) => {
      if (cert.name.toLowerCase().includes(q) || cert.issuer.toLowerCase().includes(q)) {
        results.push({
          id: `certification-${idx}`,
          type: "certification",
          title: cert.name,
          description: cert.issuer,
          href: "/certifications",
          icon: Award,
        });
      }
    });

    portfolioData.education.forEach((edu, idx) => {
      if (edu.degree.toLowerCase().includes(q) || edu.institution.toLowerCase().includes(q)) {
        results.push({
          id: `education-${idx}`,
          type: "education",
          title: edu.degree,
          description: `${edu.institution} - ${edu.period}`,
          href: `/#education`,
          icon: GraduationCap,
        });
      }
    });

    return results.slice(0, 20);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setQuery("");
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 flex h-12 items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 text-zinc-400 hover:border-cyan-400 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span className="text-xs font-mono hidden sm:inline">Search...</span>
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-zinc-700 bg-zinc-900 px-1.5 font-mono text-[10px] text-zinc-400">
          <span className="text-[10px]">Ctrl</span>K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-zinc-900 p-4">
                <Search className="h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, skills, experience..."
                  className="flex-1 bg-transparent font-mono text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto p-4">
                {query.trim() === "" ? (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
                    <p className="text-sm text-zinc-400">Start typing to search...</p>
                    <p className="text-xs text-zinc-500 mt-2">Press ESC to close</p>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-sm text-zinc-400">No results found for {query}</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {searchResults.map((result) => {
                      const Icon = result.icon;
                      const colors = typeColors[result.type] || typeColors.project;
                      return (
                        <a
                          key={result.id}
                          href={result.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-900/30 p-3 hover:border-cyan-500/20 transition-colors group"
                        >
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${colors.border} ${colors.bg} ${colors.text} flex-shrink-0`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors truncate">
                              {result.title}
                            </h4>
                            <p className="text-xs text-zinc-500 truncate">{result.description}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}