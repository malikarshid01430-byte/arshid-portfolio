import React from "react";
import { setRequestLocale } from "next-intl/server";
import { locales } from "../i18n";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RecruiterDashboard from "../components/RecruiterDashboard";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative" id="main-content" tabIndex={-1}>
      <Header />
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
