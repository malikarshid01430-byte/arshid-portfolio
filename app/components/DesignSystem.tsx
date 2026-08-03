export const designTokens = {
  colors: {
    primary: {
      DEFAULT: "#06b6d4",
      dark: "#0891b2",
      light: "#22d3ee",
    },
    secondary: {
      DEFAULT: "#8b5cf6",
      dark: "#7c3aed",
      light: "#a78bfa",
    },
    accent: {
      DEFAULT: "#f59e0b",
      dark: "#d97706",
      light: "#fbbf24",
    },
    success: {
      DEFAULT: "#10b981",
      dark: "#059669",
      light: "#34d399",
    },
    background: {
      DEFAULT: "#030712",
      card: "#0a0f1a",
      elevated: "#0f172a",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      muted: "#64748b",
      disabled: "#475569",
    },
    border: {
      DEFAULT: "#1e293b",
      light: "#334155",
      focus: "#06b6d4",
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  typography: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    glow: "0 0 20px rgb(6 182 212 / 0.3)",
    "glow-lg": "0 0 40px rgb(6 182 212 / 0.4)",
  },
  animations: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
    easing: {
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      spring: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    },
  },
} as const;

export type DesignTokens = typeof designTokens;

export const glassStyles = {
  card: "bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg",
  header: "bg-black/70 backdrop-blur-xl border-b border-white/10",
  modal: "bg-black/95 backdrop-blur-xl border border-white/10",
  button: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20",
} as const;

export const sectionStyles = {
  container: "mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 2xl:px-16",
  padding: "py-24 lg:py-32",
  divider: "h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent",
} as const;

export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
} as const;

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
