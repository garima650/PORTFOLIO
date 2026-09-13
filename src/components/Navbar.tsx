import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`
          max-w-7xl mx-auto
          rounded-2xl
          border
          bg-background/80
          backdrop-blur-xl
          transition-all duration-500
          ${
            isScrolled
              ? "border-border/60 shadow-lg shadow-black/10"
              : "border-border/30"
          }
        `}
      >
        <div className="px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group"
            >
              <div
                className="
                  w-10 h-10
                  rounded-xl
                  bg-gradient-to-br from-primary to-secondary
                  flex items-center justify-center
                  font-display font-bold
                  text-primary-foreground
                  text-lg
                  border border-white/10
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)]
                "
              >
                GA
              </div>

              <span className="font-display font-semibold text-lg text-foreground hidden sm:block">
                Garima<span className="text-primary">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    px-3 py-2
                    rounded-xl
                    text-sm
                    font-medium
                    text-muted-foreground
                    transition-all duration-300
                    hover:text-foreground
                    hover:bg-white/[0.04]
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/garima-agarwal-1a9645378"
                target="_blank"
                rel="noopener noreferrer"
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
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              {/* CTA */}
              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  rounded-xl
                  border border-primary/30
                  bg-primary/10
                  text-primary
                  text-sm font-medium
                  transition-all duration-300
                  hover:bg-primary/20
                  hover:border-primary/50
                  hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]
                "
              >
                Let's Connect
              </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              className="
                lg:hidden
                w-10 h-10
                rounded-xl
                border border-border/50
                bg-background/50
                flex items-center justify-center
                text-muted-foreground
                transition-all duration-300
                hover:text-foreground
                hover:border-primary/30
              "
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all duration-300
            ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="border-t border-border/40 px-4 py-4">

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    block
                    px-4 py-3
                    rounded-xl
                    text-sm
                    font-medium
                    text-muted-foreground
                    transition-all duration-300
                    hover:text-foreground
                    hover:bg-white/[0.04]
                  "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile LinkedIn */}
            <a
              href="https://www.linkedin.com/in/garima-agarwal-1a9645378"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-4 py-3
                rounded-xl
                text-sm
                font-medium
                text-muted-foreground
                transition-all duration-300
                hover:text-primary
                hover:bg-primary/5
              "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            {/* Mobile CTA */}
            <a
              href="#contact"
              className="
                flex items-center justify-center
                w-full
                px-5 py-3
                mt-3
                rounded-xl
                border border-primary/30
                bg-primary/10
                text-primary
                text-sm font-medium
                transition-all duration-300
                hover:bg-primary/20
                hover:border-primary/50
              "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Connect
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};