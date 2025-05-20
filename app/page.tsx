import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackgroundPatterns } from "@/components/background-patterns"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundPatterns />
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
