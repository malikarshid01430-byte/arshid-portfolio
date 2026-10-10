import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Cpu,
  Smartphone,
  Bot,
  Wrench,
  Radio,
  Zap,
  Code,
  Layers,
} from "lucide-react";
import { projects, allCategories, type ProjectCategory, type Project } from "@/data/projects";

const getCategoryIcon = (cat: ProjectCategory) => {
  switch (cat) {
    case "Embedded Systems":
      return <Cpu size={24} className="text-emerald-400" />;
    case "Android Development":
      return <Smartphone size={24} className="text-violet-400" />;
    case "AI & Generative AI":
      return <Bot size={24} className="text-purple-400" />;
    case "Robotics & IoT":
      return <Radio size={24} className="text-cyan-400" />;
    case "EV Technology":
      return <Zap size={24} className="text-amber-400" />;
    case "Electronics":
      return <Wrench size={24} className="text-blue-400" />;
    default:
      return <Code size={24} className="text-primary" />;
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [showFullFeatures, setShowFullFeatures] = useState(false);

  return (
    <div className="bg-card rounded-xl overflow-hidden h-full border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col group">
      {/* Visual Header / Banner */}
      <div className="relative h-28 bg-gradient-to-r from-primary/10 via-sapphire-900/20 to-muted/40 p-5 flex items-center justify-between border-b border-border/40">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-sm">
            {getCategoryIcon(project.category)}
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            <p className="text-foreground/50 text-xs line-clamp-1">{project.tagline}</p>
          </div>
        </div>

        {/* Status Badge */}
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          <CheckCircle size={12} />
          {project.status}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Short Overview */}
        <p className="text-foreground/75 text-xs leading-relaxed mb-3">
          {project.overview}
        </p>

        {/* Problem & Purpose */}
        <div className="p-3 rounded-lg bg-muted/40 border border-border/50 mb-3">
          <p className="text-[11px] font-semibold text-primary mb-0.5">Problem &amp; Purpose:</p>
          <p className="text-[11px] text-foreground/70 leading-relaxed">
            {project.problemPurpose}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-3">
          <p className="text-[11px] font-semibold text-foreground/80 mb-1.5 flex items-center gap-1">
            <Layers size={12} className="text-primary" /> Key Implemented Features:
          </p>
          <ul className="space-y-1">
            {(showFullFeatures ? project.mainFeatures : project.mainFeatures.slice(0, 2)).map(
              (feature, i) => (
                <li key={i} className="text-[11px] text-foreground/65 flex items-start gap-1.5 leading-relaxed">
                  <span className="mt-1 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              )
            )}
          </ul>
          {project.mainFeatures.length > 2 && (
            <button
              onClick={() => setShowFullFeatures(!showFullFeatures)}
              className="text-[10px] text-primary hover:underline font-medium mt-1 inline-block"
            >
              {showFullFeatures ? "Show less" : `+${project.mainFeatures.length - 2} more features`}
            </button>
          )}
        </div>

        {/* Implementation Focus */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold text-foreground/80 mb-0.5">Implementation Focus:</p>
          <p className="text-[11px] text-foreground/60 leading-relaxed italic">
            {project.implementationFocus}
          </p>
        </div>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/50">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-0.5 bg-muted/70 rounded-full text-foreground/70 border border-border/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Verified Links (only rendered when genuine link exists) */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex items-center gap-3 pt-3 mt-3 border-t border-border/40">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={13} />
                Repository
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projects.filter((p) => p.featured);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(filter as ProjectCategory));

  useEffect(() => {
    setCurrentSlide(0);
  }, [filter]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));

  const categoryFilters = [
    { id: "all", label: "All Projects" },
    ...allCategories.map((c) => ({ id: c, label: c })),
  ];

  return (
    <section id="projects" className="section bg-muted/15" ref={projectsRef}>
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Projects</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-foreground/60 text-center text-sm max-w-2xl mx-auto mb-10">
            A comprehensive portfolio of 10 completed hardware, embedded, Android, robotics, and software projects — accurately scoped with zero exaggerations.
          </p>
        </ScrollReveal>

        {/* Featured Projects Highlight */}
        <ScrollReveal>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground relative inline-block">
              Featured Highlights
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
            </h3>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous featured project"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next featured project"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="featured-projects-slider mb-14">
            <div
              className="slider-content"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="slider-item">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {/* Slide dots */}
            <div className="slider-controls">
              {featuredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`slider-dot ${currentSlide === idx ? "active" : ""}`}
                  aria-label={`Go to featured project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* All Projects with Category Filters */}
        <ScrollReveal delay={200}>
          <h3 className="text-xl font-bold mb-5 text-center">Complete Project Catalogue (10 Projects)</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categoryFilters.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                id={`project-filter-${cat.id.replace(/\s/g, "-").toLowerCase()}`}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === cat.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-muted text-foreground/70 hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={250 + index * 50}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
