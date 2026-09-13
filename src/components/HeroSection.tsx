import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import { RoboticsBackground } from "./RoboticsBackground";

const animatedWords = [
  "Garima Agarwal",
  "AI Enthusiast",
  "Python Developer",
  "Problem Solver",
];

export const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const currentWord = animatedWords[wordIndex];

    let typingSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && displayText === currentWord) {
      typingSpeed = 1800;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % animatedWords.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(
          currentWord.substring(0, displayText.length - 1)
        );
      } else {
        setDisplayText(
          currentWord.substring(0, displayText.length + 1)
        );
      }

      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="neural-bg" />
      <div className="grid-pattern" />
      <RoboticsBackground />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 py-16 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* =====================================================
              LEFT — TEXT
          ===================================================== */}

          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Status Badge */}
            <div className="opacity-0 animate-fade-in-up">
              <span
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  border border-primary/20
                  bg-primary/5
                  text-primary
                  text-sm
                  font-mono
                  mb-6
                "
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open to Opportunities
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                opacity-0
                animate-fade-in-up
                animation-delay-100
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-bold
                leading-[1.05]
                tracking-tight
                mb-6
              "
            >
              <span className="block text-foreground">
                Hi, I'm
              </span>

              <span
                className="
                  block
                  gradient-text
                  min-h-[1.2em]
                "
              >
                {displayText}

                <span
                  className="
                    inline-block
                    w-[3px]
                    h-[0.8em]
                    bg-primary
                    ml-1
                    align-middle
                    animate-pulse
                  "
                />
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className="
                opacity-0
                animate-fade-in-up
                animation-delay-200
                inline-flex
                items-center
                gap-2
                mb-5
              "
            >
              <span className="w-8 h-px bg-primary/50" />

              <p className="text-lg sm:text-xl text-primary font-medium">
                AI & Python Developer
              </p>

              <span className="w-8 h-px bg-primary/50" />
            </div>

            {/* Description */}
            <p
              className="
                opacity-0
                animate-fade-in-up
                animation-delay-300
                text-base
                sm:text-lg
                text-muted-foreground
                max-w-xl
                mx-auto
                lg:mx-0
                leading-relaxed
                mb-8
              "
            >
              First-year B.Tech CSE (AI) student passionate about
              building intelligent systems and AI-powered solutions
              that automate tasks and reduce manual effort in
              technology workflows.
            </p>

            {/* Small Tech Tags */}
            <div
              className="
                opacity-0
                animate-fade-in-up
                animation-delay-300
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-2
                mb-8
              "
            >
              <span className="px-3 py-1.5 rounded-xl border border-primary/20 bg-primary/5 text-xs text-primary">
                Python
              </span>

              <span className="px-3 py-1.5 rounded-xl border border-secondary/20 bg-secondary/5 text-xs text-secondary">
                AI / ML
              </span>

              <span className="px-3 py-1.5 rounded-xl border border-border/50 bg-background/40 text-xs text-muted-foreground">
                Automation
              </span>
            </div>

            {/* Buttons */}
            <div
              className="
                opacity-0
                animate-fade-in-up
                animation-delay-400
                flex
                flex-col
                sm:flex-row
                gap-3
                justify-center
                lg:justify-start
              "
            >
              {/* Primary */}
              <button
                onClick={() => scrollToSection("projects")}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-primary
                  text-primary-foreground
                  font-medium
                  border border-primary/30
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_25px_hsl(var(--primary)/0.2)]
                "
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              {/* Secondary */}
              <button
                onClick={() => scrollToSection("contact")}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border border-border/60
                  bg-background/40
                  backdrop-blur-md
                  text-foreground
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-primary/30
                  hover:bg-primary/5
                  hover:text-primary
                "
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* =====================================================
              RIGHT — PROFILE
          ===================================================== */}

          <div className="order-1 lg:order-2 flex justify-center">

            <div
              className="
                opacity-0
                animate-scale-in
                animation-delay-200
                relative
              "
            >

              {/* Outer Ring */}
              <div
                className="
                  absolute
                  inset-[-20px]
                  rounded-full
                  animate-spin-slow
                "
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient
                      id="ring-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="hsl(var(--primary))"
                      />

                      <stop
                        offset="50%"
                        stopColor="hsl(var(--secondary))"
                      />

                      <stop
                        offset="100%"
                        stopColor="hsl(var(--primary))"
                      />
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

              {/* Second Ring */}
              <div
                className="
                  absolute
                  inset-[-12px]
                  rounded-full
                  animate-spin-reverse
                "
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                >
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

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-[-4px]
                  rounded-full
                  bg-gradient-to-br
                  from-primary/50
                  via-secondary/30
                  to-primary/50
                  blur-md
                  opacity-40
                  animate-pulse-glow
                "
              />

              {/* Orbit Dot 1 */}
              <div
                className="
                  absolute
                  inset-[-30px]
                  animate-spin-slow
                "
              >
                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-3
                    h-3
                    rounded-full
                    bg-primary
                    glow-cyan
                  "
                />
              </div>

              {/* Orbit Dot 2 */}
              <div
                className="
                  absolute
                  inset-[-30px]
                  animate-spin-reverse
                "
                style={{ animationDuration: "12s" }}
              >
                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    w-2
                    h-2
                    rounded-full
                    bg-secondary
                    glow-purple
                  "
                />
              </div>

              {/* Orbit Dot 3 */}
              <div
                className="
                  absolute
                  inset-[-25px]
                  animate-spin-slow
                "
                style={{ animationDuration: "15s" }}
              >
                <div
                  className="
                    absolute
                    top-1/2
                    right-0
                    -translate-y-1/2
                    w-2
                    h-2
                    rounded-full
                    bg-primary/70
                  "
                />
              </div>

              {/* Profile */}
              <div
                className="
                  relative
                  w-64
                  h-64
                  sm:w-80
                  sm:h-80
                  lg:w-96
                  lg:h-96
                  rounded-full
                  overflow-hidden
                  border border-primary/30
                  p-1
                  bg-background/60
                  backdrop-blur-xl
                  shadow-[0_0_35px_hsl(var(--primary)/0.08)]
                "
              >
                <div
                  className="
                    w-full
                    h-full
                    rounded-full
                    overflow-hidden
                    border border-border/30
                  "
                >
                  <img
                    src={profileImage}
                    alt="Garima Agarwal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Corner Accents */}
              <div
                className="
                  absolute
                  -top-2
                  -right-2
                  w-4
                  h-4
                  border-t-2
                  border-r-2
                  border-primary
                  rounded-tr-lg
                "
              />

              <div
                className="
                  absolute
                  -bottom-2
                  -left-2
                  w-4
                  h-4
                  border-b-2
                  border-l-2
                  border-secondary
                  rounded-bl-lg
                "
              />

              <div
                className="
                  absolute
                  -top-2
                  -left-2
                  w-4
                  h-4
                  border-t-2
                  border-l-2
                  border-primary/50
                  rounded-tl-lg
                "
              />

              <div
                className="
                  absolute
                  -bottom-2
                  -right-2
                  w-4
                  h-4
                  border-b-2
                  border-r-2
                  border-secondary/50
                  rounded-br-lg
                "
              />

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div
          className="
            absolute
            bottom-6
            left-1/2
            -translate-x-1/2
            opacity-0
            animate-fade-in-up
            animation-delay-600
          "
        >
          <a
            href="#about"
            className="
              flex
              flex-col
              items-center
              gap-2
              text-muted-foreground
              hover:text-primary
              transition-colors
            "
          >
            <span className="font-mono text-xs">
              Scroll to explore
            </span>

            <ChevronDown
              size={20}
              className="animate-bounce"
            />
          </a>
        </div>

      </div>
    </section>
  );
};