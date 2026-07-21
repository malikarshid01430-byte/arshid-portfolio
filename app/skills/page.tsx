"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Code2, Cpu, Brain, Smartphone, CircuitBoard, BookOpen, Wrench, type LucideIcon } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Embedded Systems": Cpu,
  "IoT & Protocols": CircuitBoard,
  "AI & Machine Learning": Brain,
  "Android Development": Smartphone,
  "Frameworks & Tools": Wrench,
  "EDA Tools": BookOpen,
};

export default function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "level">("level");

  const allSkills = useMemo(() => {
    const skills: Array<{
      name: string;
      level: number;
      category: string;
      icon: LucideIcon;
    }> = [];

    portfolioData.skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        skills.push({
          name: skill.name,
          level: skill.level,
          category: category.title,
          icon: categoryIcons[category.title] || Code2,
        });
      });
    });

    return skills;
  }, []);

  const filteredSkills = useMemo(() => {
    let filtered = allSkills;

    if (searchQuery) {
      filtered = filtered.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(skill => skill.category === selectedCategory);
    }

    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "level") return b.level - a.level;
      return a.name.localeCompare(b.name);
    });

    return filtered;
  }, [allSkills, searchQuery, selectedCategory, sortBy]);

  const categories = useMemo(() => {
    return Array.from(new Set(allSkills.map(s => s.category)));
  }, [allSkills]);

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-emerald-400";
    if (level >= 75) return "text-cyan-400";
    if (level >= 60) return "text-blue-400";
    if (level >= 40) return "text-violet-400";
    return "text-amber-400";
  };

  const getLevelBg = (level: number) => {
    if (level >= 90) return "bg-emerald-500/10 border-emerald-500/20";
    if (level >= 75) return "bg-cyan-500/10 border-cyan-500/20";
    if (level >= 60) return "bg-blue-500/10 border-blue-500/20";
    if (level >= 40) return "bg-violet-500/10 border-violet-500/20";
    return "bg-amber-500/10 border-amber-500/20";
  };

  return (
    <div className="relative py-24 border-t border-zinc-900 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{'>'} SKILLS_MATRIX</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical Skills
          </h1>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-violet-500" />
          <p className="mt-4 text-zinc-400 max-w-2xl">
            Interactive matrix of technologies, tools, and domains
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">{allSkills.length}</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Total Skills</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">{categories.length}</div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Categories</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-violet-400">
              {Math.round(allSkills.reduce((sum, s) => sum + s.level, 0) / allSkills.length)}%
            </div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Avg Proficiency</div>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-4 text-center">
            <div className="text-2xl font-bold text-amber-400">
              {allSkills.filter(s => s.level >= 90).length}
            </div>
            <div className="text-xs font-mono text-zinc-500 mt-1">Expert Level</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full rounded-lg border border-zinc-900 bg-zinc-950/40 pl-9 pr-4 py-2 font-mono text-sm text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-zinc-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-zinc-900 bg-zinc-950/40 px-4 py-2 font-mono text-sm text-white focus:border-cyan-500/50 focus:outline-none"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "level")}
              className="rounded-lg border border-zinc-900 bg-zinc-950/40 px-4 py-2 font-mono text-sm text-white focus:border-cyan-500/50 focus:outline-none"
            >
              <option value="level">Sort by Level</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.02 }}
                className={`group rounded-xl border ${getLevelBg(skill.level)} p-4 hover:border-opacity-40 transition-all`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 flex-shrink-0">
                    <Icon className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                        {skill.name}
                      </h3>
                      <span className={`text-xs font-mono font-bold ${getLevelColor(skill.level)}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-zinc-500 mb-2">{skill.category}</p>
                    <div className="h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.02 }}
                        className={`h-full rounded-full ${getLevelColor(skill.level).replace('text-', 'bg-')}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-zinc-400">No skills found matching {searchQuery}</p>
            </div>
          )}
      </div>
    </div>
  );
}