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
      id: 15,
      title: "Advocate Reminders",
      category: "ai",
      image: "/photo/project/advocatereminders.png",
      description: "Automated WhatsApp assistant system for lawyers to manage client relations, track court hearing schedules, sync live Google Sheets, and dispatch context-aware, localized reminders.",
      technologies: ["Next.js", "React", "Supabase", "WAHA", "Docker", "Groq API", "Tailwind CSS"],
      demoLink: "https://quantumlawyer.vercel.app/",
      codeLink: "https://github.com/prabjyotsingh",
      featured: true
    },
    {
      id: 14,
      title: "Auctra AI",
      category: "ai",
      image: "/photo/project/auctraai.png",
      description: "AI-powered procurement and supplier management platform featuring reverse auctions, RFQ automation, Razorpay settlement, spend analytics, and a Chrome extension for marketplace sourcing.",
      technologies: ["Next.js 15", "React 19", "Tailwind CSS", "Razorpay", "Supabase", "Chrome Extension"],
      demoLink: "https://auctraai.vercel.app/",
      codeLink: "https://github.com/prabjyotsingh/razorpay-auctraai",
      featured: true
    },
    {
      id: 13,
      title: "CampusConnect",
      category: "web",
      image: "/photo/project/campusconnect.png",
      description: "Placement Automation Portal (mvjlaunchpad.in) built for 1,000+ students and admins: dual dashboards, in-house ATS resume scoring engine, and automated multi-sheet Excel exports.",
      technologies: ["React 18", "Redux Toolkit", "Node.js", "Firebase", "Tailwind CSS"],
      demoLink: "https://mvjlaunchpad.in",
      codeLink: "https://github.com/prabjyotsingh",
      featured: true
    },
    {
      id: 12,
      title: "GT-Skin",
      category: "ai",
      image: "/photo/project/gtskin.png",
      description: "An AI-powered diagnostic helper that classifies dermoscopic skin images into 7 distinct disease categories (including malignant melanoma) using a state-of-the-art Deep Learning Ensemble.",
      technologies: ["PyTorch", "timm", "Albumentations", "Gradio", "Hugging Face"],
      demoLink: "https://prabysingh996-gt-skin-demo.hf.space/",
      codeLink: "https://github.com/prabjyotsingh/context_free_skin",
      featured: true
    },
    {
      id: 1,
      title: "CarBot",
      category: "web",
      image: "/photo/project/carbot.png",
      description: "Automotive assistant to manage vehicles, predict engine health, locate nearby workshops, and shop for parts. Web-based app with AI-driven features.",
      technologies: ["Python", "JavaScript"],
      demoLink: "https://car-pi-nine.vercel.app/",
      codeLink: "https://github.com/prabjyotsingh",
      featured: true
    },
    {
      id: 11,
      title: "Swayam",
      category: "web",
      image: "/photo/project/swayam.png",
      description: "A polished React-based festival platform for SWAYAM 2026, MVJCE's annual cultural celebration, built to deliver a modern, engaging, and responsive event experience.",
      technologies: ["React 18", "Vite", "React Router", "Axios", "html5-qrcode", "Express 5", "Supabase", "JWT"],
      demoLink: "https://swayammvjce.cc",
      codeLink: "https://github.com/prabjyotsingh/Swayam",
      featured: true
    },
    {
      id: 7,
      title: "VidyaX AI",
      category: "ai",
      image: "/photo/project/vidyaxai.jpeg",
      description: "Productivity web app to track YouTube playlists, monitor study progress, maintain daily streaks, and organize AI-generated notes with a StudyBuddy AI chatbot powered by Groq API.",
      technologies: ["React", "Vite", "TailwindCSS", "Groq API", "Express.js"],
      demoLink: "https://vidyaxai.vercel.app",
      codeLink: "https://github.com/prabjyotsingh/Vidyax",
      featured: true
    },
       {
      id: 2,
      title: "Panthhnama",
      category: "web",
      image: "/photo/project/panthanama.png",
      description: "Modern React website for Virsa Channel promoting Punjabi culture, history and literature.",
      technologies: ["React", "TailwindCSS"],
      demoLink: "https://panthnama.vercel.app/",
      codeLink: "https://github.com/prabjyotsingh/panthhnama",
      featured: true
    },
    {
      id: 3,
      title: "Sentryl",
      category: "web",
      image: "/photo/project/sentryl.png",
      description: "Advanced Vulnerability Management and Bug Bounty Platform.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      demoLink: "https://github.com/prabjyotsingh/Sentryl",
      codeLink: "https://github.com/prabjyotsingh/Sentryl",
      featured: true
    },
    {
      id: 4,
      title: "Car Service Centre",
      category: "web",
      image: "/photo/project/carservicecenter.png",
      description: "Local SQL database demo for a car service appointment system. Pure client-side SQL operations; ideal for learning and exam demonstrations.",
      technologies: ["JavaScript", "SQL.js", "Bootstrap"],
      demoLink: "https://carservicecentre.vercel.app/",
      codeLink: "https://github.com/Prabjyotsingh996/carservicecentre.git",
      featured: true
    },
       {
      id: 5,
      title: "fitness Tracker",
      category: "web",
      image: "/photo/project/fitness.png",
      description: "Modern And intelligent website  for health insights, exercise, and wellness  based on food intake.",
      technologies: ["React", "TailwindCSS"],
      demoLink: "https://fitt-track.vercel.app/",
      codeLink: "https://github.com/prabjyotsingh/panthhnama",
      featured: true
    },
    {
      id: 6,
      title: "Agribuddy",
      category: "web",
      image: "/photo/project/agribuddy.png",
      description: "Smart farming dashboard built with React, TypeScript and TailwindCSS to visualize and manage agricultural activities.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      demoLink: "https://github.com/prabjyotsingh/agribuddy",
      codeLink: "https://github.com/prabjyotsingh/agribuddy",
      featured: true
    },
    {
      id: 8,
      title: "Moviego",
      category: "web",
      image: "/photo/project/moviego.png",
      description: "Responsive movie ticket booking website with theaters, listings and a smooth, interactive UX.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://moviego-henna.vercel.app/",
      codeLink: "https://github.com/prabjyotsingh/Moviego",
      featured: true
    },
 
    {
      id: 9,
      title: "Carbon Footprint",
      category: "python",
      image: "/photo/project/carbon-footprint.jpg",
      description: "AI-assisted Streamlit app to estimate a meal's CO₂, calories, and water footprint with eco-friendly alternatives and simple meal history. Built completely in Python.",
      technologies: ["Python", "Streamlit"],
      demoLink: "https://github.com/prabjyotsingh/carbon-footprint",
      codeLink: "https://github.com/prabjyotsingh/carbon-footprint",
      featured: true
    },
  
    {
      id: 10,
      title: "DNS Lookup Simulator",
      category: "web",
      image: "/photo/project/dns.jpeg",
      description: "Interactive educational app that visualizes DNS resolution step-by-step — from root to TLD to authoritative servers — showing how domains (e.g., google.com) map to IP addresses.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      demoLink: "https://github.com/prabjyotsingh/dns-simulator",
      codeLink: "https://github.com/prabjyotsingh/dns-simulator",
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
                          className={`w-full h-64 ${project.id === 11 ? "object-contain bg-[#07111f] p-2" : "object-cover transition-transform duration-500 group-hover:scale-110"}`}
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
