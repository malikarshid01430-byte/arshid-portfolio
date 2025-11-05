import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Mail, Phone, Send, Loader2, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // FormSubmit.co will handle submission server-side; no local submission state needed

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: "Location",
      details: ["Bangalore, Karnataka", "India"],
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      details: ["prabjyotsingh996@gmail.com"],
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      details: ["+91 8899640581"],
    },
  ];

  const socialLinks = [
    { name: "Github", icon: <Github size={18} />, url: "https://github.com/prabjyotsingh" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/prabjyot-singh-a2bab4259" },
    { name: "Twitter", icon: <Twitter size={18} />, url: "https://x.com/Prabjyot_singh1" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "https://www.instagram.com/the_ps_maratha.996" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // No JS submission handler required when using FormSubmit.co

  return (
    <section id="contact" className="section bg-background py-16">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In Touch
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="w-20 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-foreground/70 mb-8">
                Feel free to reach out to me for collaboration, inquiries, or just 
                to say hello. I'm always open to discussing new projects, creative 
                ideas, or opportunities to be part of your vision.
              </p>
            </ScrollReveal>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} delay={400 + index * 100}>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-foreground/70">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={700}>
              <h4 className="text-lg font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${link.name}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <form action="https://formsubmit.co/prabjyotsingh996@gmail.com" method="POST" className="space-y-4">
                {/* FormSubmit settings */}
                <input type="hidden" name="_subject" value="Someone just submitted your form on https://www.sachinpatel.me/." />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                {/* Optional: redirect after submit - update if you want a different thank-you page */}
                <input type="hidden" name="_next" value="/" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-md bg-primary text-white font-medium flex items-center justify-center transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
