import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Featured projects (a subset of all projects)
  const featuredProjects = [
    {
      id: 1,
      title: "Sentryl",
      category: "web",
      image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Sentryl",
      description: "Advanced Vulnerability Management and Bug Bounty Platform.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      demoLink: "https://github.com/Prabjyotsingh996/Sentryl.git",
      codeLink: "https://github.com/Prabjyotsingh996/Sentryl.git",
      featured: true
    },
    {
      id: 2,
      title: "Car Service Centre",
      category: "web",
      image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Car+Service+Centre",
      description: "Car service centre management system.",
      technologies: ["JavaScript", "SQL.js", "Bootstrap"],
      demoLink: "https://github.com/Prabjyotsingh996/carservicecentre.git",
      codeLink: "https://github.com/Prabjyotsingh996/carservicecentre.git",
      featured: true
    },
    {
      id: 3,
      title: "Agribuddy",
      category: "web",
      image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Agribuddy",
      description: "Agricultural assistant platform.",
      technologies: ["React", "Node.js"],
      demoLink: "https://github.com/Prabjyotsingh996/agribuddy.git",
      codeLink: "https://github.com/Prabjyotsingh996/agribuddy.git",
      featured: true
    },
    {
      id: 4,
      title: "Moviego",
      category: "web",
      image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Moviego",
      description: "Movie information and recommendation app.",
      technologies: ["React", "API"],
      demoLink: "https://github.com/Prabjyotsingh996/Moviego.git",
      codeLink: "https://github.com/Prabjyotsingh996/Moviego.git",
      featured: true
    },
  ];

  const projects = [...featuredProjects];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "ai", name: "AI Projects" },
    { id: "python", name: "Python Projects" },
  ];

  // Remove auto-slide effect - we'll only use manual navigation
  useEffect(() => {
    // Initialize the first slide
    setCurrentSlide(0);
  }, []);

  // Staggered animation for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, idx * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const staggerItems = document.querySelectorAll(".stagger-item");
    staggerItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      staggerItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [filter]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 3D Card effect
  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <section id="projects" className="section bg-background" ref={projectsRef}>
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            My Projects
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
        </ScrollReveal>

        {/* Featured Projects Slider */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold mb-6 text-center relative inline-block">
            Featured Work
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </h3>
          <div className="featured-projects-slider mb-16">
            <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {featuredProjects.map((project) => (
                <div key={project.id} className="slider-item">
                  <div 
                    className="bg-card rounded-lg overflow-hidden h-full border border-border shadow-lg card-3d"
                    onMouseMove={handleCardMove}
                    onMouseLeave={handleCardLeave}
                  >
                    <div className="card-3d-content">
                      <div className="relative overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a
                            href={project.demoLink}
                            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors animate-pulse-soft"
                            aria-label="View Demo"
                          >
                            <ExternalLink size={22} className="text-white" />
                          </a>
                          <a
                            href={project.codeLink}
                            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                            aria-label="View Source Code"
                          >
                            <Github size={22} className="text-white" />
                          </a>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 hover-underline-animation inline-block">{project.title}</h3>
                        <p className="text-foreground/70 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium px-2 py-1 bg-muted/50 rounded-full text-foreground/70 hover-grow"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider controls */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <button 
                onClick={prevSlide} 
                className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors hover-grow"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide} 
                className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors hover-grow"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide indicators */}
            <div className="slider-controls">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* All projects */}
        <ScrollReveal delay={200}>
          <h3 className="text-2xl font-bold mb-6 text-center">All Projects</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover-lift ${
                  filter === category.id
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground/70 hover:bg-muted/70"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={300 + index * 100}>
              <div 
                className="bg-card rounded-lg overflow-hidden h-full hover:translate-y-[-5px] transition-all duration-300 border border-border stagger-item hover-lift"
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoLink}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                    <a
                      href={project.codeLink}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/40 transition-colors"
                      aria-label="View Source Code"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover-underline-animation inline-block">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2 py-1 bg-muted/50 rounded-full text-foreground/70 hover-grow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
