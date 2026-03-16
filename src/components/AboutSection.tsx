import React, { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

const AboutSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Parallax effect for image
      const image = imageRef.current.querySelector('img');
      if (image) {
        (image as HTMLElement).style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
      }
      
      // Shadow effect
      imageRef.current.style.boxShadow = `
        ${-x * 20}px ${-y * 20}px 20px rgba(16, 185, 129, 0.2),
        ${x * 20}px ${y * 20}px 20px rgba(245, 158, 11, 0.2)
      `;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      
      const image = imageRef.current.querySelector('img');
      if (image) {
        (image as HTMLElement).style.transform = 'scale(1)';
      }
      
      imageRef.current.style.boxShadow = '';
    };
    
    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('mousemove', handleMouseMove);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mousemove', handleMouseMove);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const personalDetails = [
    { icon: <Calendar size={20} />, label: "Age", value: "20" },
    { icon: <MapPin size={20} />, label: "Location", value: "Bangalore, India" },
    { icon: <Mail size={20} />, label: "Email", value: "prabjyotsingh996@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 8899640581" },
  ];

  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About Me
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                Who am I?
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></span>
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                I'm a passionate Cloud Engineer and Web Developer
                currently pursuing my B.Tech at MVJ College of Engineering in
                Bangalore. With a strong foundation in cloud technologies and data science,
                I create innovative, scalable solutions that solve real-world problems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                As an undergraduate student, I'm constantly expanding my
                knowledge and skills while actively participating in tech
                communities and challenges. I thrive on turning complex problems
                into elegant solutions through clean, efficient code.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-muted p-3 rounded-md hover-lift"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center text-primary animate-pulse-soft">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{detail.label}</p>
                      <p className="text-sm font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="flex items-center justify-center">
            <ScrollReveal delay={300}>
              <div 
                ref={imageRef}
                className="relative rounded-lg overflow-hidden border-4 border-primary/20 shadow-xl transition-all duration-300"
              >
                <img 
                  src="/uploads/mee.jpeg" 
                  alt="Prabjyot Singh" 
                  className="w-full h-auto max-w-md object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
                
                {/* Animated highlight border */}
                <div className="absolute inset-0 opacity-30 pointer-events-none rotating-highlight"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
