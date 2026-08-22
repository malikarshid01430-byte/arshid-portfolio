"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Code2, Cpu, Brain, Smartphone, CircuitBoard, Wrench, type LucideIcon } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages":  Code2,
  "Embedded Systems":       Cpu,
  "IoT & Connectivity":     CircuitBoard,
  "AI & Machine Learning":  Brain,
  "Android Development":    Smartphone,
  "VLSI & Digital Design":  CircuitBoard,
  "PCB Design":             CircuitBoard,
  "Tools & Software":       Wrench,
  "Full Stack Development": Code2,
};

function levelLabel(level: number) {
  if (level >= 88) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 60) return "Proficient";
  return "Familiar";
}

export default function SkillsPage() {
  const [query,    setQuery]    = useState("");
  const [category, setCategory] = useState("all");
  const [sort,     setSort]     = useState<"level" | "name">("level");

  const allSkills = useMemo(() =>
    portfolioData.skillCategories.flatMap((cat) =>
      cat.skills.map((s) => ({ ...s, category: cat.title })),
    ), []);

  const categories = useMemo(() =>
    Array.from(new Set(allSkills.map((s) => s.category))), [allSkills]);

  const visible = useMemo(() => {
    let list = allSkills;
    if (query)          list = list.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase()));
    if (category !== "all") list = list.filter((s) => s.category === category);
    return [...list].sort((a, b) => sort === "level" ? b.level - a.level : a.name.localeCompare(b.name));
  }, [allSkills, query, category, sort]);

  const avgLevel = Math.round(allSkills.reduce((s, x) => s + x.level, 0) / allSkills.length);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative overflow-hidden section-pad"
      style={{
        backgroundColor: "var(--bg-base)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "clamp(6rem, 12vw, 9rem)",
        minHeight: "100vh",
      }}
      aria-labelledby="skills-page-heading"
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: "5%", right: "5%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container-tight relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p className="section-eyebrow mb-4">Skills</p>
          <h1 id="skills-page-heading" className="section-title mb-4">Technical Skills Matrix</h1>
          <p className="text-sm max-w-lg" style={{ color: "var(--text-secondary)" }}>
            Interactive view of all engineering skills — searchable, filterable, and sortable.
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 rounded-xl"
          style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-dim)" }}
        >
          {[
            { value: allSkills.length,                          label: "Total Skills",   color: "var(--cyan)"    },
            { value: categories.length,                         label: "Domains",        color: "#818cf8"        },
            { value: `${avgLevel}%`,                            label: "Avg Proficiency",color: "var(--emerald)" },
            { value: allSkills.filter((s) => s.level >= 88).length, label: "Expert Level",  color: "var(--amber)"   },
          ].map((stat, i) => (
            <div key={i} className="text-center py-2">
              <p className="text-3xl font-bold tracking-tight mb-1" style={{ color: stat.color, letterSpacing: "-0.03em" }}>{stat.value}</p>
              <p className="text-label" style={{ color: "var(--text-dim)" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills..."
              className="input-field pl-9"
              aria-label="Search skills"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field sm:w-52"
            aria-label="Filter by category"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "level" | "name")}
            className="input-field sm:w-40"
            aria-label="Sort skills"
          >
            <option value="level">Sort by Level</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((skill, i) => {
            const Icon = categoryIcons[skill.category] ?? Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.4) }}
                className="group flex items-start gap-3 rounded-xl p-4 card-lift"
                style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-dim)" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "var(--bg-raised)", border: "1px solid var(--border-subtle)" }}
                >
                  <Icon className="h-4.5 w-4.5" style={{ color: "var(--cyan)" }} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold truncate transition-colors group-hover:text-cyan-400" style={{ color: "var(--text-primary)" }}>
                      {skill.name}
                    </p>
                    <span className="text-label shrink-0 ml-2" style={{ color: "var(--cyan)" }}>
                      {levelLabel(skill.level)}
                    </span>
                  </div>
                  <p className="text-label mb-2" style={{ color: "var(--text-dim)" }}>{skill.category}</p>
                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: skill.level / 100 }}
                      transition={{ delay: Math.min(i * 0.02, 0.4), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
              No skills found for &ldquo;{query}&rdquo;
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
