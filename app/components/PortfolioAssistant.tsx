"use client";

import { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Copy, Check } from "lucide-react";
import { portfolioData } from "../data/portfolio";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Tell me about Arshid",
  "What are his strongest skills?",
  "Explain his projects",
  "Show experience",
  "What internships has he completed?",
  "Why should we hire him?",
  "What is his education?",
  "Where is he located?",
  "Is he willing to relocate?",
  "How can I contact him?",
];

const PORTFOLIO_CONTEXT = `
Name: ${portfolioData.personalInfo.name}
Title: ${portfolioData.personalInfo.title}
Bio: ${portfolioData.personalInfo.bioShort}
Email: ${portfolioData.personalInfo.email}
Phone: ${portfolioData.personalInfo.phone}
Location: ${portfolioData.personalInfo.location}
GitHub: ${portfolioData.personalInfo.github}
LinkedIn: ${portfolioData.personalInfo.linkedin}
Resume: ${portfolioData.personalInfo.resumeUrl}

Education:
${portfolioData.education.map(e => `${e.degree} at ${e.institution} (${e.period})`).join('\n')}

Skills:
${portfolioData.skillCategories.map(c => `${c.title}: ${c.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}`).join('\n')}

Projects:
${portfolioData.projects.map(p => `${p.title}: ${p.description} | Technologies: ${p.technologies.join(', ')}`).join('\n')}

Experience:
${portfolioData.experience.map(e => `${e.role} at ${e.company} (${e.period})`).join('\n')}

Certifications: ${portfolioData.certifications.slice(0, 5).map(c => c.name).join(', ')}
`;

function getLocalResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("arshid") || q.includes("about")) {
    return `${portfolioData.personalInfo.name} is ${portfolioData.personalInfo.title}. ${portfolioData.personalInfo.bioShort}`;
  }

  if (q.includes("skill") || q.includes("strongest")) {
    const topSkills = portfolioData.skillCategories
      .flatMap(cat => cat.skills)
      .sort((a, b) => b.level - a.level)
      .slice(0, 5);
    return `Arshid's strongest skills include: ${topSkills.map(s => `${s.name} (${s.level}%)`).join(", ")}. He specializes in Embedded Systems, IoT, VLSI, and Full Stack Development.`;
  }

  if (q.includes("project")) {
    const projectNames = portfolioData.projects.map(p => p.title).join(", ");
    return `Arshid has completed ${portfolioData.projects.length} major projects: ${projectNames}. Each project demonstrates his expertise in embedded systems, IoT, and AI. Would you like to know more about any specific project?`;
  }

  if (q.includes("experience") || q.includes("internship")) {
    const internships = portfolioData.experience.map(e => `${e.role} at ${e.company} (${e.period})`).join(", ");
    return `Arshid has completed ${portfolioData.experience.length} internships: ${internships}. He has hands-on experience in Android Development, IoT Systems, VLSI DFT, and AI.`;
  }

  if (q.includes("hire") || q.includes("why")) {
    return `You should hire Arshid because he combines strong technical skills in Embedded Systems, IoT, VLSI, and Full Stack Development with real-world internship experience. He has built 7+ projects, holds 20+ certifications, and demonstrates passion for building intelligent systems that bridge hardware and software.`;
  }

  if (q.includes("education") || q.includes("degree") || q.includes("college")) {
    const edu = portfolioData.education[0];
    return `Arshid is currently pursuing ${edu.degree} in ${edu.details[0]} at ${edu.institution}, ${edu.location} (${edu.period}). He also holds a Diploma in Electronics and Communication Engineering.`;
  }

  if (q.includes("location") || q.includes("where") || q.includes("based")) {
    return `Arshid is currently located in ${portfolioData.personalInfo.location}. His home state is Jammu and Kashmir. He is willing to relocate for the right opportunity.`;
  }

  if (q.includes("relocate") || q.includes("relocation")) {
    return "Yes, Arshid is willing to relocate. He is flexible and open to opportunities across India and internationally.";
  }

  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    return `You can contact Arshid at ${portfolioData.personalInfo.email} or ${portfolioData.personalInfo.phone}. You can also reach out via LinkedIn: ${portfolioData.personalInfo.linkedin} or GitHub: ${portfolioData.personalInfo.github}`;
  }

  if (q.includes("graduation") || q.includes("graduate") || q.includes("passout")) {
    return "Arshid is expected to graduate in 2026 with a Bachelor of Engineering in Electronics and Communication Engineering from MVJ College of Engineering, VTU.";
  }

  if (q.includes("resume") || q.includes("cv")) {
    return `You can download Arshid's resume from the button on this page. His resume includes detailed information about his skills, projects, experience, and education.`;
  }

  if (q.includes("embedded") || q.includes("iot")) {
    const embeddedProjects = portfolioData.projects.filter(p => 
      p.category === "Embedded & IoT" || p.technologies.some(t => 
        ["ESP32", "Arduino", "MQTT", "Sensors"].includes(t)
      )
    );
    return `Arshid has built ${embeddedProjects.length} embedded/IoT projects including: ${embeddedProjects.map(p => p.title).join(", ")}. He is proficient with ESP32, Arduino, STM32, and various sensors.`;
  }

  if (q.includes("vlsi") || q.includes("fpga")) {
    return `Arshid has VLSI experience from his DFT internship at VLSIGuru where he worked on Verilog, RTL Design, Scan Chain, ATPG, and Boundary Scan. He has completed 5 VLSI design projects with 95% test coverage.`;
  }

  if (q.includes("programming") || q.includes("language") || q.includes("languages")) {
    const languages = portfolioData.skillCategories
      .find(cat => cat.title === "Programming Languages")
      ?.skills.map(s => s.name)
      .join(", ");
    return `Arshid is proficient in: ${languages}. He also has experience with Verilog for VLSI, Kotlin for Android, and JavaScript/TypeScript for web development.`;
  }

  return `I am Arshid's portfolio assistant. I can answer questions about his skills, projects, experience, education, and contact information. Please ask me anything about Arshid's background or qualifications.`;
}

async function getAIResponse(question: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        question,
        context: PORTFOLIO_CONTEXT
      })
    });

    if (!response.ok) {
      throw new Error('API error');
    }

    const data = await response.json();
    return data.response || getLocalResponse(question);
  } catch {
    return getLocalResponse(question);
  }
}

function PortfolioAssistantComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const hasOpenAIKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY && 
                       process.env.NODE_ENV === 'production';

  const addMessage = useCallback((role: "user" | "assistant", content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    addMessage("user", userMessage);
    setInput("");
    setIsTyping(true);

    try {
      const response = hasOpenAIKey 
        ? await getAIResponse(userMessage)
        : getLocalResponse(userMessage);
      addMessage("assistant", response);
    } catch {
      addMessage("assistant", getLocalResponse(userMessage));
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = async (question: string) => {
    addMessage("user", question);
    setIsTyping(true);
    
    try {
      const response = hasOpenAIKey 
        ? await getAIResponse(question)
        : getLocalResponse(question);
      addMessage("assistant", response);
    } catch {
      addMessage("assistant", getLocalResponse(question));
    } finally {
      setIsTyping(false);
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Silently fail clipboard copy
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-400 shadow-lg hover:border-cyan-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open portfolio assistant"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 flex h-[600px] w-[400px] max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 p-4">
              <div>
                <h3 className="font-mono text-sm font-semibold text-white">Portfolio Assistant</h3>
                <p className="text-[10px] text-zinc-500">Ask me anything about Arshid</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Clear chat"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" role="log" aria-live="polite">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-zinc-400 text-center">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.slice(0, 4).map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="text-[10px] px-2 py-1 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`group relative max-w-[85%] rounded-xl p-3 ${
                      message.role === "user"
                        ? "bg-cyan-500/10 border border-cyan-500/20"
                        : "bg-zinc-900/50 border border-zinc-800"
                    }`}
                  >
                    <p className="text-xs text-zinc-300 leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    {message.role === "assistant" && (
                      <button
                        onClick={() => copyToClipboard(message.content, message.id)}
                        className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Copy response"
                      >
                        {copiedId === message.id ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2">
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-zinc-900 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Arshid..."
                  className="flex-1 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 font-mono text-xs text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                  aria-label="Chat message input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSuggestedQuestion(q)}
                    className="text-[9px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(PortfolioAssistantComponent);