
import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github size={18} />, url: profile.github },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: profile.linkedin },
    { name: "Email", icon: <Mail size={18} />, url: `mailto:${profile.email}` },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border py-10">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className="text-primary">Arshid</span>
              <span className="text-foreground ml-1">Ahmad Malik</span>
            </h3>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              {profile.headline}
            </p>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/70 mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/55 hover:text-primary text-sm transition-colors py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social + contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground/70 mb-3 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-foreground/55 hover:text-primary text-sm transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                  {link.name === "Email" ? profile.email : link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/50 pt-6 gap-4">
          <p className="text-foreground/40 text-xs">
            &copy; {new Date().getFullYear()} Arshid Ahmad Malik. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            id="back-to-top"
            className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
