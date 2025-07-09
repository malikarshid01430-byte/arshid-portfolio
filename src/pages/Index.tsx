import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Prabjyot Singh - Cloud Engineer";
    
    // Cursive follower effect (decorative element that follows the cursor)
    const createCursorFollower = () => {
      const follower = document.createElement('div');
      follower.className = 'fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference';
      follower.style.background = 'rgba(255, 255, 255, 0.2)';
      follower.style.backdropFilter = 'blur(4px)';
      follower.style.transform = 'translate(-50%, -50%)';
      follower.style.transition = 'transform 0.1s ease-out, width 0.3s ease, height 0.3s ease';
      document.body.appendChild(follower);
      
      let mouseX = 0;
      let mouseY = 0;
      let followerX = 0;
      let followerY = 0;
      const speed = 0.1;
      
      const updateFollower = () => {
        const distX = mouseX - followerX;
        const distY = mouseY - followerY;
        
        followerX += distX * speed;
        followerY += distY * speed;
        
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
        
        requestAnimationFrame(updateFollower);
      };
      
      document.addEventListener('mousemove', (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Expand follower on interactive elements
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A' || 
            target.closest('button') || target.closest('a')) {
          follower.style.width = '40px';
          follower.style.height = '40px';
          follower.style.background = 'rgba(16, 185, 129, 0.3)';
        } else {
          follower.style.width = '8px';
          follower.style.height = '8px';
          follower.style.background = 'rgba(255, 255, 255, 0.2)';
        }
      });
      
      // Hide follower when cursor leaves the window
      document.addEventListener('mouseleave', () => {
        follower.style.opacity = '0';
      });
      
      document.addEventListener('mouseenter', () => {
        follower.style.opacity = '1';
      });
      
      updateFollower();
      
      return follower;
    };
    
    const follower = createCursorFollower();
    
    return () => {
      if (follower && document.body.contains(follower)) {
        document.body.removeChild(follower);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
