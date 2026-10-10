import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import EducationSection from "../components/EducationSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { profile } from "@/data/profile";

const Index = () => {
  useEffect(() => {
    document.title = `${profile.name} | Engineering Portfolio`;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        `Explore the engineering portfolio of ${profile.name}, an Electronics and Communication Engineering graduate interested in embedded systems, IoT, EV technology, electronics, and software development.`
      );
    }

    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Cursor follower effect
    const follower = document.createElement("div");
    follower.className =
      "fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference bg-white/30 backdrop-blur-sm";
    follower.style.transform = "translate(-50%, -50%)";
    follower.style.transition = "width 0.3s ease, height 0.3s ease, opacity 0.3s ease";
    document.body.appendChild(follower);

    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
    const speed = 0.12;

    let animationFrameId = 0;

    const updateFollower = () => {
      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")) {
        follower.style.width = "36px";
        follower.style.height = "36px";
        follower.style.background = "rgba(16, 185, 129, 0.3)";
      } else {
        follower.style.width = "14px";
        follower.style.height = "14px";
        follower.style.background = "rgba(255,255,255,0.25)";
      }
    };
    const handleMouseLeave = () => { follower.style.opacity = "0"; };
    const handleMouseEnter = () => { follower.style.opacity = "1"; };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    updateFollower();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (follower && document.body.contains(follower)) {
        document.body.removeChild(follower);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground w-full overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
