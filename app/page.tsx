import dynamic from "next/dynamic";
import { HeroSkeleton, SectionSkeleton } from "./components/SkeletonLoader";

// Dynamic imports for code splitting with skeletons
const Header = dynamic(() => import("./components/Header"), {
  loading: () => <div className="h-20" />,
  ssr: true,
});

const Hero = dynamic(() => import("./components/Hero"), {
  loading: HeroSkeleton,
  ssr: true,
});

const RecruiterDashboard = dynamic(() => import("./components/RecruiterDashboard"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

const About = dynamic(() => import("./components/About"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Skills = dynamic(() => import("./components/Skills"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Projects = dynamic(() => import("./components/Projects"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Experience = dynamic(() => import("./components/Experience"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Education = dynamic(() => import("./components/Education"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <SectionSkeleton />,
  ssr: true,
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="h-32" />,
  ssr: true,
});

const BackgroundGrid = dynamic(() => import("./components/BackgroundGrid"), {
  loading: () => null,
  ssr: true,
});

const ScrollProgress = dynamic(() => import("./components/ScrollProgress"), {
  loading: () => null,
  ssr: true,
});

const GitHubActivity = dynamic(() => import("./components/GitHubActivity"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

const PortfolioAssistant = dynamic(() => import("./components/PortfolioAssistant"), {
  loading: () => null,
  ssr: true,
});

const RecruiterInfo = dynamic(() => import("./components/RecruiterInfo"), {
  loading: () => <div className="h-96" />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg">
        Skip to main content
      </a>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Static background */}
      <BackgroundGrid />

      {/* Navigation header */}
      <Header />

      {/* Main content flow */}
      <main id="main-content" className="flex-1">
        {/* Landing segment - load immediately */}
        <Hero />

        {/* Recruiter Dashboard - Quick Overview */}
        <RecruiterDashboard />

        {/* Biography & core pillars */}
        <About />

        {/* Competencies sidebar and progress dashboard */}
        <Skills />

        {/* Filtering projects and architectural system flowcharts */}
        <Projects />

        {/* Career timeline checkpoints */}
        <Experience />

        {/* Credentials and education blocks */}
        <Education />

        {/* Interactive transceiver messaging center */}
        <Contact />

        {/* Recruiter Overview */}
        <RecruiterInfo />
      </main>

      {/* System diagnostics telemetry footer */}
      <Footer />

      {/* Lazy-loaded components */}
      <GitHubActivity />
      <PortfolioAssistant />
    </>
  );
}