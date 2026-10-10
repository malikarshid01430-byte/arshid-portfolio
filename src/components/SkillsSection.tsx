
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { skillCategories, levelColors, type SkillLevel } from "@/data/skills";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const displayed =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  const levelOrder: SkillLevel[] = ["Practical Experience", "Foundational Knowledge"];

  return (
    <section id="skills" className="section bg-muted/20">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Technical Skills</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-foreground/60 text-center text-sm max-w-2xl mx-auto mb-10">
            Skills organized by area. Labels reflect actual exposure — not arbitrary proficiency percentages.
          </p>
        </ScrollReveal>

        {/* Legend */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs">
            {levelOrder.map((level) => (
              <span key={level} className={`px-3 py-1 rounded-full font-medium ${levelColors[level]}`}>
                {level}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Category filter tabs */}
        <ScrollReveal delay={250}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground/70 hover:bg-muted/70"
              }`}
              id="skill-filter-all"
            >
              All Areas
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground/70 hover:bg-muted/70"
                }`}
                id={`skill-filter-${cat.id}`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((category, catIdx) => (
            <ScrollReveal key={category.id} delay={300 + catIdx * 80}>
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/40 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.emoji}</span>
                  <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md bg-muted/60 text-foreground/75 hover:bg-muted transition-colors"
                    >
                      {skill.name}
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${levelColors[skill.level]}`}>
                        {skill.level}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
