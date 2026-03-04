import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ScrollTrigger } from "@/lib/gsap";

const Index = () => {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const raf = window.requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
