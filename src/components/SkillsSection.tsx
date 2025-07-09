
import React, { useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { Code, GitBranch, Palette, Database, FileVideo, Star, Book, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  // Animate skill progress bars when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
              const level = progressBar.getAttribute('data-level');
              (progressBar as HTMLElement).style.width = `${level}%`;
              
              // Also animate the value text
              const valueText = entry.target.querySelector('.skill-value');
              if (valueText) {
                setTimeout(() => {
                  (valueText as HTMLElement).style.opacity = '1';
                  (valueText as HTMLElement).style.transform = 'translateY(0)';
                }, 500);
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      skillItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const skills = [
    { 
      name: "HTML/CSS", 
      level: 90,
      icon: <Palette size={24} className="text-primary" /> 
    },
    { 
      name: "JavaScript", 
      level: 85,
      icon: <Code size={24} className="text-primary" /> 
    },
    { 
      name: "React.js", 
      level: 80,
      icon: <Code size={24} className="text-primary" /> 
    },
    { 
      name: "Java", 
      level: 75,
      icon: <Cpu size={24} className="text-primary" /> 
    },
    { 
      name: "Python", 
      level: 70,
      icon: <Code size={24} className="text-primary" /> 
    },
    { 
      name: "MySQL", 
      level: 65,
      icon: <Database size={24} className="text-primary" /> 
    },
    { 
      name: "Git/GitHub", 
      level: 80,
      icon: <GitBranch size={24} className="text-primary" /> 
    },
    { 
      name: "Video Editing", 
      level: 60,
      icon: <FileVideo size={24} className="text-primary" /> 
    },
  ];

  return (
    <section id="skills" className="section bg-background py-20" ref={skillsRef}>
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            My Skills
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-foreground/70 text-center max-w-3xl mx-auto mb-12">
            My technical proficiencies span a wide range of programming languages and tools
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={200 + index * 50}>
              <div className="card-effect dark:bg-card/80 rounded-lg p-6 group hover:bg-primary/5 transition-all duration-300 skill-item hover-lift h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mr-3 group-hover:animate-pulse">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold group-hover:text-primary transition-colors text-lg">
                    {skill.name}
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Proficiency</span>
                    <span className="text-primary skill-value">{skill.level}%</span>
                  </div>
                  <div className="skill-bar bg-muted dark:bg-muted/50">
                    <div
                      className="skill-progress bg-primary"
                      data-level={skill.level}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
                
                {/* Decorative dots - more interactive now */}
                <div className="flex justify-between mt-6">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        i < Math.ceil(skill.level / 20) 
                          ? 'bg-primary scale-100' 
                          : 'bg-border scale-75'
                      } group-hover:scale-100`}
                    ></div>
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
