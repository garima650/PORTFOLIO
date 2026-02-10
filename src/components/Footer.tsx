import { Heart, Mail, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center opacity-0 animate-fade-in-up">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                GA
              </div>
              <span className="font-display font-semibold">
                Garima<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Garima Agarwal. All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart size={14} className="text-destructive fill-destructive" /> and lots of ☕
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="mailto:garimaag36@gmail.com"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/garima-agarwal-1a9645378"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
