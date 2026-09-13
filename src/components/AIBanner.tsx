import {
  Bot,
  Cpu,
  Sparkles,
  Zap,
  BrainCircuit,
  Cog,
} from 'lucide-react';

const floatingIcons = [
  { Icon: Bot, delay: '0s' },
  { Icon: Cpu, delay: '0.5s' },
  { Icon: Sparkles, delay: '1s' },
  { Icon: Zap, delay: '1.5s' },
  { Icon: BrainCircuit, delay: '2s' },
  { Icon: Cog, delay: '2.5s' },
];

const stats = [
  { icon: Bot, label: 'AI Projects', value: '5+' },
  { icon: Cpu, label: 'Tech Stack', value: '10+' },
  { icon: Zap, label: 'Automation', value: '100%' },
  { icon: Cog, label: 'Learning', value: '24/7' },
];

export const AIBanner = () => {
  return (
    <section className="relative py-8 lg:py-12 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating AI icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-10"
            style={{
              left: `${8 + index * 16}%`,
              top: `${15 + (index % 3) * 30}%`,
              animationDelay: delay,
              animationDuration: `${4 + index * 0.5}s`,
            }}
          >
            <Icon className="w-8 h-8 text-primary" />
          </div>
        ))}
      </div>

      <div className="section-container relative z-10">

        {/* Main Card */}
        <div className="relative group max-w-6xl mx-auto">

          {/* Subtle glow behind card */}
          <div
            className="
              absolute -inset-1
              rounded-2xl
              bg-gradient-to-br from-cyan-500 to-purple-500
              opacity-10
              blur-xl
              transition-opacity duration-500
              group-hover:opacity-20
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
              p-8 sm:p-10 lg:p-12
              transition-all duration-300
              group-hover:border-primary/30
            "
          >

            {/* Badge */}
            <div className="flex justify-center">
              <span
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  bg-primary/10
                  border border-primary/20
                  text-primary
                  text-sm
                  font-medium
                "
              >
                <BrainCircuit className="w-4 h-4" />
                Powered by AI Innovation
                <Sparkles className="w-4 h-4" />
              </span>
            </div>

            {/* Heading */}
            <div className="text-center mt-6">
              <h2
                className="
                  text-3xl sm:text-4xl lg:text-5xl
                  font-bold
                  font-display
                  leading-tight
                  opacity-0
                  animate-fade-in-up
                  animation-delay-100
                "
              >
                Building the{' '}
                <span className="gradient-text">Future</span>
                {' '}with{' '}
                <span className="gradient-text">AI</span>
              </h2>

              <p
                className="
                  text-base sm:text-lg
                  text-muted-foreground
                  max-w-2xl
                  mx-auto
                  mt-5
                  leading-relaxed
                  opacity-0
                  animate-fade-in-up
                  animation-delay-200
                "
              >
                Passionate about creating intelligent systems that transform
                ideas into reality. From machine learning models to automation
                pipelines, I'm on a mission to make technology work smarter.
              </p>
            </div>

            {/* Stats */}
            <div
              className="
                grid grid-cols-2
                md:grid-cols-4
                gap-3 sm:gap-4
                mt-8
                opacity-0
                animate-fade-in-up
                animation-delay-300
              "
            >
              {stats.map(({ icon: Icon, label, value }, index) => (
                <div
                  key={index}
                  className="
                    group/stat
                    rounded-xl
                    border border-border/50
                    bg-background/50
                    backdrop-blur-sm
                    p-4
                    text-center
                    transition-all duration-300
                    hover:border-primary/30
                    hover:bg-primary/5
                  "
                >
                  <div
                    className="
                      w-10 h-10
                      mx-auto mb-3
                      rounded-xl
                      bg-primary/10
                      border border-primary/15
                      flex items-center justify-center
                    "
                  >
                    <Icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover/stat:scale-110" />
                  </div>

                  <div className="text-2xl font-bold gradient-text">
                    {value}
                  </div>

                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="
                flex flex-col sm:flex-row
                gap-3
                justify-center
                mt-8
                opacity-0
                animate-fade-in-up
                animation-delay-400
              "
            >
              <a
                href="#projects"
                className="
                  inline-flex items-center justify-center
                  gap-2
                  px-6 py-3
                  rounded-xl
                  bg-primary
                  text-primary-foreground
                  font-medium
                  border border-primary/50
                  transition-all duration-300
                  hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]
                  hover:-translate-y-0.5
                "
              >
                <Sparkles className="w-4 h-4" />
                Explore My Work
              </a>

              <a
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  gap-2
                  px-6 py-3
                  rounded-xl
                  bg-background/50
                  border border-border/60
                  text-foreground
                  font-medium
                  transition-all duration-300
                  hover:border-primary/40
                  hover:bg-primary/5
                  hover:-translate-y-0.5
                "
              >
                <Bot className="w-4 h-4 text-primary" />
                Let's Collaborate
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};