import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DualIdentitySection } from "@/components/sections/DualIdentitySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CompetitiveProgrammingSection } from "@/components/sections/CompetitiveProgrammingSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060a12] text-[#f1f5f9] selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Subtle top ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-cyan-950/20 via-purple-950/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Sticky Modern Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex flex-col">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Dual Identity (CP vs SWE) */}
        <DualIdentitySection />

        {/* 4. Skills */}
        <SkillsSection />

        {/* 5. Projects */}
        <ProjectsSection />

        {/* 6. Competitive Programming */}
        <CompetitiveProgrammingSection />

        {/* 7. Achievements */}
        <AchievementsSection />

        {/* 8. Education */}
        <EducationSection />

        {/* 9. Contact */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
