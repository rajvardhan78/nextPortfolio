import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>
      <main className="relative z-10 flex min-h-screen flex-col bg-transparent">
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection id="Home" />
          <AboutSection id="About" />
          <ProjectsSection id="Projects" />
          <EmailSection id="Contact" />
        </div>
        <Footer />
      </main>
    </>
  );
}
