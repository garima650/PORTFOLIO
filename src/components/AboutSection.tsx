import { GraduationCap, Sparkles, Target, Rocket, Music, Palette, Users } from 'lucide-react';

const timelineData = [
  {
    year: '2025 - 2029',
    title: 'B.Tech in Computer Science (AI)',
    institution: 'Banasthali Vidyapith',
    description: 'Pursuing specialization in Artificial Intelligence with focus on machine learning and intelligent systems.',
    icon: GraduationCap,
    status: 'current',
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: 'Fresher',
    description: 'Actively learning & building',
  },
  {
    icon: Target,
    title: 'Focus Area',
    description: 'AI Automation & Smart Systems',
  },
  {
    icon: Rocket,
    title: 'Goal',
    description: 'Build intelligent solutions',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4 opacity-0 animate-fade-in-up">
            About Me
          </span>
          <h2 className="section-title opacity-0 animate-fade-in-up animation-delay-100">
            Passionate About <span className="gradient-text">Innovation</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 opacity-0 animate-fade-in-up animation-delay-200">
            A curious mind exploring the intersection of technology and artificial intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <div className="space-y-6">
            <div className="glass-card p-8 opacity-0 animate-slide-in-left animation-delay-300">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Hello! I'm Garima 👋
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a first-year B.Tech Computer Science student specializing in Artificial Intelligence 
                  at Banasthali Vidyapith. My passion lies in understanding how machines can learn, 
                  adapt, and solve complex problems.
                </p>
                <p>
                  Currently, I'm diving deep into programming fundamentals, exploring machine learning 
                  concepts, and working on projects that combine my love for technology with practical 
                  problem-solving.
                </p>
                <p>
                  My goal is to contribute to the development of AI systems that automate mundane tasks 
                  and make technology more accessible and intelligent for everyone.
                </p>
              </div>

              {/* Extracurricular Activities */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Extracurricular Activities
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Music, label: 'Singing' },
                    { icon: Palette, label: 'Crafting' },
                    { icon: Users, label: 'Women Empowerment' },
                  ].map((activity) => (
                    <span
                      key={activity.label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium"
                    >
                      <activity.icon className="w-4 h-4" />
                      {activity.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 opacity-0 animate-fade-in-up animation-delay-400">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card-hover p-4 text-center"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-3 opacity-0 animate-slide-in-right animation-delay-300">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

              {timelineData.map((item, index) => (
                <div key={index} className="relative pl-16 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary glow-cyan" />

                  <div className="glass-card-hover p-6 opacity-0 animate-slide-in-right animation-delay-400">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                      {item.year}
                    </span>
                    <h4 className="font-display text-xl font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary/80 font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    {item.status === 'current' && (
                      <span className="inline-flex items-center gap-1 mt-3 text-xs text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Currently Pursuing
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
