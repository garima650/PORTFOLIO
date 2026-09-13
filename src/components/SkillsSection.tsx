import { Code2, Database, Layout, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
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
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'HTML/CSS', level: 75 },
      { name: 'Responsive Design', level: 65 },
      { name: 'Basic JavaScript', level: 50 },
    ],
  },
  {
    title: 'AI/ML Foundations',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Machine Learning Basics', level: 45 },
      { name: 'Data Analysis', level: 50 },
      { name: 'Problem Solving', level: 70 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Database,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Git & GitHub', level: 55 },
      { name: 'VS Code', level: 80 },
      { name: 'Jupyter Notebook', level: 60 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden">

      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">

          <span
            className="
              inline-flex
              items-center
              px-4 py-2
              rounded-xl
              bg-primary/10
              border border-primary/20
              text-primary
              text-sm
              font-medium
              mb-4
              opacity-0
              animate-fade-in-up
            "
          >
            My Skills
          </span>

          <h2
            className="
              section-title
              opacity-0
              animate-fade-in-up
              animation-delay-100
            "
          >
            Technical <span className="gradient-text">Expertise</span>
          </h2>

          <p
            className="
              section-subtitle
              mx-auto
              mt-4
              opacity-0
              animate-fade-in-up
              animation-delay-200
            "
          >
            Building a strong foundation in programming, AI, and web
            technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  relative group
                  opacity-0
                  animate-fade-in-up
                "
                style={{
                  animationDelay: `${categoryIndex * 150}ms`,
                  animationFillMode: 'forwards',
                }}
              >

                {/* Subtle glow behind card */}
                <div
                  className={`
                    absolute -inset-1
                    rounded-2xl
                    bg-gradient-to-br ${category.color}
                    opacity-0
                    group-hover:opacity-15
                    blur-lg
                    transition-opacity duration-500
                    pointer-events-none
                  `}
                />

                {/* Main Card */}
                <div
                  className="
                    relative z-10
                    h-full
                    rounded-2xl
                    border border-border/50
                    bg-background/80
                    backdrop-blur-xl
                    p-6 sm:p-7
                    transition-all duration-300
                    group-hover:border-primary/30
                  "
                >

                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-6">

                    <div
                      className="
                        w-12 h-12
                        rounded-xl
                        bg-primary/10
                        border border-primary/20
                        flex items-center justify-center
                        shrink-0
                        transition-all duration-300
                        group-hover:bg-primary/15
                      "
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-wider text-primary font-medium">
                        Skill Set
                      </span>

                      <h3 className="font-display text-xl font-semibold mt-1">
                        {category.title}
                      </h3>
                    </div>

                  </div>

                  {/* Skills */}
                  <div className="space-y-3">

                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="
                          rounded-xl
                          border border-border/40
                          bg-background/50
                          p-4
                          transition-all duration-300
                          hover:border-primary/25
                          hover:bg-primary/5
                          opacity-0
                          animate-slide-in-left
                        "
                        style={{
                          animationDelay: `${
                            categoryIndex * 150 +
                            skillIndex * 100 +
                            200
                          }ms`,
                          animationFillMode: 'forwards',
                        }}
                      >

                        {/* Skill name and percentage */}
                        <div className="flex items-center justify-between">

                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>

                          <span className="text-xs text-primary font-mono">
                            {skill.level}%
                          </span>

                        </div>

                        {/* Percentage line */}
                        <div className="relative mt-4">

                          {/* Track */}
                          <div className="h-1 rounded-full bg-muted/70" />

                          {/* Filled portion */}
                          <div
                            className="
                              absolute
                              left-0
                              top-0
                              h-1
                              rounded-full
                              bg-primary/40
                              transition-all
                              duration-700
                            "
                            style={{
                              width: `${skill.level}%`,
                            }}
                          />

                          {/* Percentage dot */}
                          <div
                            className="
                              absolute
                              top-1/2
                              -translate-y-1/2
                              w-2.5
                              h-2.5
                              rounded-full
                              bg-primary
                              border-2
                              border-background
                              shadow-[0_0_10px_hsl(var(--primary)/0.7)]
                              transition-all
                              duration-700
                            "
                            style={{
                              left: `calc(${skill.level}% - 5px)`,
                            }}
                          />

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Learning note */}
        <div className="flex justify-center mt-8">

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5 py-3
              rounded-xl
              bg-background/60
              border border-border/50
              backdrop-blur-xl
              opacity-0
              animate-fade-in-up
              animation-delay-700
            "
          >

            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-50 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>

            <span className="text-sm text-muted-foreground">
              Continuously learning and expanding my skill set
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};