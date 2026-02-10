import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { AIBanner } from '@/components/AIBanner';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <AIBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
