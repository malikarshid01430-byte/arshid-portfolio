
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Mail, Phone, Send, Github, Linkedin, Copy, Check, Globe2 } from "lucide-react";
import { profile } from "@/data/profile";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin size={18} />,
      title: "Location",
      details: [profile.location],
    },
    {
      icon: <Mail size={18} />,
      title: "Email",
      details: [profile.email],
      href: `mailto:${profile.email}`,
    },
    ...(profile.phone
      ? [{
          icon: <Phone size={18} />,
          title: "Phone",
          details: [profile.phone],
          href: `tel:${profile.phone.replace(/\s/g, "")}`,
        }]
      : []),
  ];

  const socialLinks = [
    { name: "Live Portfolio", icon: <Globe2 size={18} />, url: profile.portfolioUrl },
    { name: "GitHub", icon: <Github size={18} />, url: profile.github },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: profile.linkedin },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="section bg-muted/20">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Get In Touch</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-foreground/60 text-center text-sm max-w-xl mx-auto mb-12">
            Whether it's an internship, entry-level role, or just a conversation about tech — I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            </ScrollReveal>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} delay={300 + index * 80}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-0.5">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        info.href ? (
                          <a
                            key={i}
                            href={info.href}
                            className="text-foreground/65 text-sm hover:text-primary transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-foreground/65 text-sm">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Copy email button */}
            <ScrollReveal delay={500}>
              <button
                onClick={handleCopyEmail}
                id="copy-email-btn"
                className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg bg-muted/60 text-foreground/70 hover:bg-primary/10 hover:text-primary transition-all mb-8"
                aria-label="Copy email address"
              >
                {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                {copied ? "Email copied!" : "Copy email address"}
              </button>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal delay={600}>
              <h4 className="text-sm font-bold mb-3">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted/60 text-foreground/70 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.name}`}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — contact form */}
          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              {/*
                FormSubmit.co handles delivery server-side.
                Replace the action email below with yours once ready.
                For a no-backend fallback, the mailto: link above works fine.
              */}
              <form
                action={`https://formsubmit.co/${profile.email}`}
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Portfolio Contact Form — Arshid Ahmad Malik" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium mb-1.5">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Question about a project"
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-2.5 rounded-lg bg-muted/60 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none text-sm transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-white font-medium flex items-center justify-center gap-2 transition-all hover:bg-primary/90 hover-lift"
                >
                  <Send size={16} />
                  Send Message
                </button>

                <p className="text-foreground/40 text-xs">
                  This form uses FormSubmit.co for delivery. You can also email directly at{" "}
                  <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
                    {profile.email}
                  </a>.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
