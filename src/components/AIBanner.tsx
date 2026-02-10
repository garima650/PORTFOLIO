import { Bot, Cpu, Sparkles, Zap, BrainCircuit, Cog } from 'lucide-react';

const floatingIcons = [
  { Icon: Bot, delay: '0s' },
  { Icon: Cpu, delay: '0.5s' },
  { Icon: Sparkles, delay: '1s' },
  { Icon: Zap, delay: '1.5s' },
  { Icon: BrainCircuit, delay: '2s' },
  { Icon: Cog, delay: '2.5s' },
];

export const AIBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.05)_25%,hsl(var(--primary)/0.05)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.05)_75%)] bg-[length:60px_60px] animate-[gradient-shift_20s_linear_infinite]" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 3) * 25}%`,
              animationDelay: delay,
              animationDuration: `${4 + index * 0.5}s`,
            }}
          >
            <Icon className="w-8 h-8 text-primary" />
          </div>
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6 animate-pulse-glow">
            <BrainCircuit className="w-4 h-4" />
            <span>Powered by AI Innovation</span>
            <Sparkles className="w-4 h-4" />
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Building the{' '}
            <span className="gradient-text">Future</span>
            {' '}with{' '}
            <span className="gradient-text">AI</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
            Passionate about creating intelligent systems that transform ideas into reality. 
            From machine learning models to automation pipelines, I'm on a mission to make 
            technology work smarter.
          </p>

          {/* Stats/Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 opacity-0 animate-fade-in-up animation-delay-300">
            {[
              { icon: Bot, label: 'AI Projects', value: '5+' },
              { icon: Cpu, label: 'Tech Stack', value: '10+' },
              { icon: Zap, label: 'Automation', value: '100%' },
              { icon: Cog, label: 'Learning', value: '24/7' },
            ].map(({ icon: Icon, label, value }, index) => (
              <div
                key={index}
                className="glass-card p-4 text-center hover:border-primary/30 transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-400">
            <a href="#projects" className="btn-primary-glow group">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Explore My Work
              </span>
            </a>
            <a href="#contact" className="btn-outline-glow">
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Let's Collaborate
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
