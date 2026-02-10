import { Code2, Database, Layout, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 70 },
      { name: 'C', level: 60 },
      { name: 'SQL', level: 55 },
      { name: 'HTML', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    icon: Layout,
    skills: [
      { name: 'HTML/CSS', level: 75 },
      { name: 'Responsive Design', level: 65 },
      { name: 'Basic JavaScript', level: 50 },
    ],
  },
  {
    title: 'AI/ML Foundations',
    icon: Brain,
    skills: [
      { name: 'Machine Learning Basics', level: 45 },
      { name: 'Data Analysis', level: 50 },
      { name: 'Problem Solving', level: 70 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Database,
    skills: [
      { name: 'Git & GitHub', level: 55 },
      { name: 'VS Code', level: 80 },
      { name: 'Jupyter Notebook', level: 60 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Building a strong foundation in programming, AI, and web technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card-hover p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="opacity-0 animate-slide-in-left"
                    style={{ 
                      animationDelay: `${(categoryIndex * 150) + (skillIndex * 100) + 200}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold opacity-0 animate-pop-in" 
                        style={{ 
                          animationDelay: `${(categoryIndex * 150) + (skillIndex * 100) + 600}ms`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-modern">
                      <div 
                        className="skill-bar-track"
                      >
                        <div
                          className="skill-bar-fill-modern"
                          style={{ 
                            '--skill-width': `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 150) + (skillIndex * 100) + 400}ms`
                          } as React.CSSProperties}
                        />
                        <div 
                          className="skill-bar-glow"
                          style={{ 
                            '--skill-width': `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 150) + (skillIndex * 100) + 400}ms`
                          } as React.CSSProperties}
                        />
                      </div>
                      <div 
                        className="skill-bar-dot"
                        style={{ 
                          '--skill-width': `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 150) + (skillIndex * 100) + 400}ms`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/20 animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="w-2 h-2 rounded-full bg-primary absolute" />
            <span className="text-sm text-muted-foreground">
              Continuously learning and expanding my skill set
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
