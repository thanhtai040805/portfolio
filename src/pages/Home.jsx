import { Navbar } from "@/components/Navbar"
import { StartBackground } from "@/components/StarBackground"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { useEffect } from "react";
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer";
import { ScrollBarSection } from "@/components/ScrollBarSection"
import { ProjectSection } from "@/components/ProjectSection"

export const Home = () => {

      useEffect(() => {
        if (window.AOS) {
          window.AOS.init({
            duration: 700,
            once: false,
          });
        }
      }, []);
      
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ScrollBarSection />
        <StartBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    );
}