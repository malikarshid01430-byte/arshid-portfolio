
import React, { useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { Code, Cpu, Database, PenTool, Server, Smartphone } from "lucide-react";

const ServicesSection = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!servicesRef.current) return;
      
      const cards = servicesRef.current.querySelectorAll('.service-card');
      const rect = servicesRef.current.getBoundingClientRect();
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
        
        const distanceX = cardCenterX - x;
        const distanceY = cardCenterY - y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        const maxDistance = 400;
        const intensity = Math.max(0, 1 - distance / maxDistance);
        
        if (intensity > 0) {
          const cardElement = card as HTMLElement;
          const moveX = distanceX * intensity * 0.03;
          const moveY = distanceY * intensity * 0.03;
          cardElement.style.transform = `translateX(${-moveX}px) translateY(${-moveY}px)`;
        } else {
          const cardElement = card as HTMLElement;
          cardElement.style.transform = '';
        }
      });
    };
    
    const handleMouseLeave = () => {
      if (!servicesRef.current) return;
      
      const cards = servicesRef.current.querySelectorAll('.service-card');
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        cardElement.style.transform = '';
      });
    };
    
    const section = servicesRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description:
        "Creating responsive, user-friendly websites and web applications using the latest technologies.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      description:
        "Building native and cross-platform mobile applications with smooth user experiences.",
    },
    {
      icon: <Cpu size={24} />,
      title: "AI Projects",
      description:
        "Implementing machine learning and AI solutions for various business problems.",
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description:
        "Designing and optimizing database structures for efficient data management.",
    },
    {
      icon: <Server size={24} />,
      title: "Backend Services",
      description:
        "Developing robust backend systems with API integrations and server management.",
    },
    {
      icon: <PenTool size={24} />,
      title: "UI/UX Design",
      description:
        "Creating intuitive interfaces and user experiences that enhance usability.",
    },
  ];

  return (
    <section id="services" className="section bg-muted/30 py-20" ref={servicesRef}>
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            My Services
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-foreground/70 text-center max-w-3xl mx-auto mb-12">
            I offer a comprehensive range of services to help businesses and individuals 
            bring their digital ideas to life through innovative solutions and 
            cutting-edge technologies.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={300 + index * 100}>
              <div className="service-card bg-card p-8 rounded-xl h-full border border-border group hover:border-primary/50 transition-all duration-300 relative flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 animate-float">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 flex-grow">{service.description}</p>
                
                {/* Radial gradient effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                     style={{
                       background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)'
                     }}>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
