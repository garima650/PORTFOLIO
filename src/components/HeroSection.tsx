import { ArrowRight, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-placeholder.jpg';
import { RoboticsBackground } from './RoboticsBackground';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="neural-bg" />
      <div className="grid-pattern" />
      <RoboticsBackground />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float animation-delay-300" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                🚀 Open to Opportunities
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Garima Agarwal</span>
            </h1>

            <p className="opacity-0 animate-fade-in-up animation-delay-200 text-xl sm:text-2xl text-primary font-medium mb-4">
              AI & Future Tech Enthusiast
            </p>

            <p className="opacity-0 animate-fade-in-up animation-delay-300 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              First-year B.Tech CSE (AI) student passionate about building intelligent systems 
              and AI-powered solutions that automate tasks and reduce manual effort in technology workflows.
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn-primary-glow group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn-outline-glow"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="opacity-0 animate-scale-in animation-delay-200 relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-[-20px] rounded-full animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="50%" stopColor="hsl(var(--secondary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#ring-gradient)"
                    strokeWidth="0.5"
                    strokeDasharray="8 4 2 4"
                    className="opacity-60"
                  />
                </svg>
              </div>

              {/* Second rotating ring (opposite direction) */}
              <div className="absolute inset-[-12px] rounded-full animate-spin-reverse">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.3"
                    strokeDasharray="1 8"
                    className="opacity-40"
                  />
                </svg>
              </div>

              {/* Glow ring */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-primary via-secondary to-primary blur-md opacity-50 animate-pulse-glow" />
              
              {/* Orbiting dots */}
              <div className="absolute inset-[-30px] animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-cyan" />
              </div>
              <div className="absolute inset-[-30px] animate-spin-reverse" style={{ animationDuration: '12s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary glow-purple" />
              </div>
              <div className="absolute inset-[-25px] animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/70" />
              </div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30 p-1 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={profileImage} alt="Garima Agarwal" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Corner accent elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-secondary rounded-bl-lg" />
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/50 rounded-br-lg" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-600">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>;
};