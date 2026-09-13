import { Github, Linkedin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/40">
      {/* Background Glows */}
      <div className="absolute -top-32 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 !py-10 lg:!py-12">

        {/* Main Footer Card */}
        <div className="relative group">

          {/* Glow */}
          <div
            className="
              absolute -inset-1
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-purple-500
              to-pink-500
              opacity-0
              group-hover:opacity-10
              blur-lg
              transition-opacity duration-500
              pointer-events-none
            "
          />

          <div
            className="
              relative z-10
              rounded-2xl
              border border-border/50
              bg-background/80
              backdrop-blur-xl
              px-6 py-7
              md:px-8 md:py-8
            "
          >

            {/* Top Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

              {/* Logo + Description */}
              <div className="flex items-center gap-4">

                <div
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-gradient-to-br
                    from-primary
                    to-secondary
                    flex items-center justify-center
                    font-display font-bold
                    text-primary-foreground
                    border border-white/10
                    shadow-[0_0_20px_hsl(var(--primary)/0.15)]
                  "
                >
                  GA
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    Garima<span className="text-primary">.</span>
                  </h3>

                  <p className="text-xs text-muted-foreground mt-1">
                    Building intelligent solutions, one project at a time.
                  </p>
                </div>

              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">

                {/* GitHub */}
                <a
                  href="https://github.com/garima650"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    w-10 h-10
                    rounded-xl
                    border border-border/50
                    bg-background/50
                    flex items-center justify-center
                    text-muted-foreground
                    transition-all duration-300
                    hover:text-primary
                    hover:border-primary/30
                    hover:bg-primary/5
                  "
                >
                  <Github size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/garima-agarwal-1a9645378"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-10 h-10
                    rounded-xl
                    border border-border/50
                    bg-background/50
                    flex items-center justify-center
                    text-muted-foreground
                    transition-all duration-300
                    hover:text-primary
                    hover:border-primary/30
                    hover:bg-primary/5
                  "
                >
                  <Linkedin size={18} />
                </a>

                {/* Back To Top */}
                <a
                  href="#home"
                  aria-label="Back to top"
                  className="
                    w-10 h-10
                    rounded-xl
                    border border-border/50
                    bg-background/50
                    flex items-center justify-center
                    text-muted-foreground
                    transition-all duration-300
                    hover:text-primary
                    hover:border-primary/30
                    hover:bg-primary/5
                  "
                >
                  <ArrowUp size={18} />
                </a>

              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-border/40" />

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">

              <p>
                © {new Date().getFullYear()} Garima Agarwal. All rights reserved.
              </p>

              <p className="flex items-center gap-1.5">
                Made with
                <Heart
                  size={13}
                  className="text-pink-500 fill-pink-500"
                />
                and curiosity.
              </p>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;