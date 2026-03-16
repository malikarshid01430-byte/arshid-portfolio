import React, { useEffect } from "react";
import TypedText from "./TypedText";
import { ArrowDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  // Add animated background shapes
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
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sapphire-900/20 to-background/95 -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="container-custom px-4 py-16 md:py-24 flex flex-col items-center text-center z-10">
        <ScrollReveal>
          <p className="text-lg md:text-xl mb-4 text-primary font-medium">Hello, I am</p>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white animate-name-glow">Prabjyot Singh</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground mb-8">
            I'm a <TypedText texts={["Cloud Engineer", "Web Developer", "Data Science Enthusiast", "Problem Solver"]} />
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={600}>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10">
            Building digital experiences that matter
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md mx-auto">
            <a
              href="#projects"
              className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover-lift flex items-center justify-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-md border border-primary/30 text-foreground font-medium transition-all hover:bg-primary/10 hover-lift flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </ScrollReveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground hover:text-primary transition-colors animate-bounce-subtle"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="animate-bounce" size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
