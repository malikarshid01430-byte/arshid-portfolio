
import React, { useEffect } from "react";
import TypedText from "./TypedText";
import { ArrowDown, Github, Linkedin, Mail, Download, FolderOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { profile } from "@/data/profile";

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const shapes = document.querySelectorAll('.bg-shape');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      shapes.forEach((shape, index) => {
        const shapeElem = shape as HTMLElement;
        const speed = index === 0 ? 30 : 20;
        const offsetX = (x * speed) - (speed / 2);
        const offsetY = (y * speed) - (speed / 2);
        shapeElem.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sapphire-900/20 to-background/95 -z-10"></div>

      {/* Animated background shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      {/* Circuit-board decorative lines (CSS-only) */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 10 50 H 40 V 10 H 70 V 50 H 90" stroke="hsl(160,84%,39%)" strokeWidth="1" fill="none"/>
              <circle cx="40" cy="10" r="3" fill="hsl(160,84%,39%)"/>
              <circle cx="70" cy="50" r="3" fill="hsl(160,84%,39%)"/>
              <path d="M 50 60 V 90 H 80" stroke="hsl(160,84%,39%)" strokeWidth="1" fill="none"/>
              <circle cx="50" cy="60" r="3" fill="hsl(160,84%,39%)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container-custom w-full min-w-0 px-4 py-16 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] gap-12 items-center z-10">
        <div className="min-w-0 text-center lg:text-left">
        {/* Status badge */}
        <ScrollReveal>
            <span className="inline-flex max-w-full flex-wrap justify-center items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-center whitespace-normal bg-primary/10 text-primary border border-primary/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            {profile.status}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-lg md:text-xl mb-3 text-primary font-medium">Hello, I'm</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="w-full max-w-full text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-tight whitespace-normal break-all sm:break-words">
            <span className="text-white animate-name-glow whitespace-normal break-all sm:break-words">{profile.name}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <h2 className="max-w-full text-xl md:text-2xl text-foreground/70 mb-4 break-words">
            <TypedText texts={profile.roles as unknown as string[]} />
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={450}>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl mb-8 leading-relaxed break-words">
            {profile.subheadline}
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={550}>
          <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full justify-center lg:justify-start">
            <a
              href="#projects"
              id="hero-view-projects"
              className="px-7 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 hover-lift flex items-center justify-center gap-2"
            >
              <FolderOpen size={16} />
              View Projects
            </a>
            {profile.resumePdf && (
              <a
                href={profile.resumePdf}
                download
                id="hero-download-resume"
                className="px-7 py-3 rounded-md border border-primary/30 text-foreground font-medium transition-all hover:bg-primary/10 hover-lift flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </a>
            )}
            <a
              href="#contact"
              id="hero-contact"
              className="px-7 py-3 rounded-md border border-border text-foreground/80 font-medium transition-all hover:border-primary/40 hover-lift flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </ScrollReveal>

        {/* Social links */}
        <ScrollReveal delay={650}>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              aria-label="GitHub profile"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span className="text-border">|</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-linkedin"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span className="text-border">|</span>
            <a
              href={`mailto:${profile.email}`}
              id="hero-email"
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              aria-label="Send email"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </ScrollReveal>
        </div>

        <ScrollReveal delay={250}>
          <figure className="min-w-0 max-w-md mx-auto lg:max-w-none">
            <img
              src="/images/mvj-college-presentation.png"
              alt="Arshid Ahmad Malik presenting at the MVJ College of Engineering lectern."
              width={1254}
              height={1254}
              className="w-full h-auto rounded-2xl border border-primary/25 shadow-2xl shadow-primary/10 object-contain bg-background"
              decoding="async"
            />
            <figcaption className="mt-3 text-center text-xs text-foreground/50">
              Presenting at MVJ College of Engineering
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors animate-bounce-subtle"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
