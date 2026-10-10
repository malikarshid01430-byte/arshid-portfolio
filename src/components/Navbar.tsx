import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Download, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { profile } from "@/data/profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Initialize dark mode
    const saved = localStorage.getItem("theme");
    const dark = saved !== "light";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);

    const handleScroll = () => setScrolled(window.scrollY > 10);

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Wordmark */}
        <a href="#home" className="text-xl md:text-2xl font-bold flex items-center" aria-label="Arshid Ahmad Malik — home">
          <span className="text-primary">Arshid</span>
          <span className="text-foreground ml-1">Ahmad Malik</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors hover-underline-animation py-2 text-xs xl:text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* GitHub link in header */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={17} />
          </a>

          {/* LinkedIn link in header */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={17} />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            id="theme-toggle"
            className="p-2 rounded-full hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Resume button (desktop) */}
          <a
            href="#resume"
            id="nav-resume-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-primary/40 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-all"
            aria-label="Go to Resume section"
          >
            <Download size={13} />
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none lg:hidden p-2 rounded-full hover:bg-primary/10"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full lg:hidden mt-1">
            <nav
              className="flex flex-col space-y-1 bg-card shadow-lg rounded-lg py-4 px-6 border border-border mx-4"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary py-2.5 transition-colors text-center text-sm font-medium border-b border-border/50 last:border-0"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex justify-center gap-4 pt-3 mt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted text-foreground/80 hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted text-foreground/80 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
