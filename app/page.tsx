import RecruiterDashboard from "./components/RecruiterDashboard";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative" id="main-content" tabIndex={-1}>
      <Header />
      {/* H1 is inside the Hero section — "Arshid Ahmad Malik" */}
      <Hero />
      <RecruiterDashboard />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}