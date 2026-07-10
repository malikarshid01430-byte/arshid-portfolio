
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Always start in dark mode on load.
    setDarkMode(true);
    localStorage.setItem("darkMode", "true");
    document.documentElement.classList.add("dark-mode");

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
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
        <a href="#home" className="text-2xl font-bold flex items-center">
          <span className="text-primary">Prabjyot</span>
          <span className="text-white ml-1">Singh</span>
        </a>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none md:hidden p-2 rounded-full hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors hover-underline-animation py-2 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full md:hidden mt-1">
            <nav className="flex flex-col space-y-2 bg-card shadow-lg rounded-lg py-4 px-6 border border-border mx-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary py-2 transition-colors text-center font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
