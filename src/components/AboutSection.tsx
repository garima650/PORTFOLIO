import {
  GraduationCap,
  Sparkles,
  Target,
  Rocket,
  Music,
  Palette,
  Users,
} from 'lucide-react';

const timelineData = [
  {
    year: '2025 - 2029',
    title: 'B.Tech in Computer Science (AI)',
    institution: 'Banasthali Vidyapith',
    description:
      'Pursuing specialization in Artificial Intelligence with focus on machine learning and intelligent systems.',
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

const activities = [
  { icon: Music, label: 'Singing' },
  { icon: Palette, label: 'Crafting' },
  { icon: Users, label: 'Women Empowerment' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-2 rounded-xl bg-primary/10 border border-primary/25 text-primary text-sm font-medium mb-4 opacity-0 animate-fade-in-up">
            About Me
          </span>

          <h2 className="section-title opacity-0 animate-fade-in-up animation-delay-100">
            Passionate About{' '}
            <span className="gradient-text">Innovation</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4 opacity-0 animate-fade-in-up animation-delay-200">
            A curious mind exploring the intersection of technology and
            artificial intelligence
          </p>
        </div>

        {/* Main About Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ================= BIO CARD ================= */}
          <div className="relative group opacity-0 animate-slide-in-left animation-delay-300">

            {/* Subtle glow */}
            <div
              className="
                absolute -inset-1
                rounded-2xl
                bg-gradient-to-br from-cyan-500 to-blue-500
                opacity-0
                group-hover:opacity-15
                blur-lg
                transition-opacity duration-500
                pointer-events-none
              "
            />

            <div
              className="
                relative z-10 h-full
                rounded-2xl
                border border-border/50
                bg-background/80
                backdrop-blur-xl
                p-7 sm:p-8
                transition-all duration-300
                group-hover:border-primary/30
              "
            >
              {/* Card heading */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-primary/10
                    border border-primary/20
                    flex items-center justify-center
                  "
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">
                    Introduction
                  </span>

                  <h3 className="font-display text-2xl font-semibold mt-1">
                    Hello! I'm Garima 👋
                  </h3>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a first-year B.Tech Computer Science student specializing
                  in Artificial Intelligence at Banasthali Vidyapith. My
                  passion lies in understanding how machines can learn, adapt,
                  and solve complex problems.
                </p>

                <p>
                  Currently, I'm diving deep into programming fundamentals,
                  exploring machine learning concepts, and working on projects
                  that combine my love for technology with practical
                  problem-solving.
                </p>

                <p>
                  My goal is to contribute to the development of AI systems
                  that automate mundane tasks and make technology more
                  accessible and intelligent for everyone.
                </p>
              </div>

              {/* Activities */}
              <div className="mt-7 pt-6 border-t border-border/40">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Extracurricular Activities
                </h4>

                <div className="flex flex-wrap gap-2">
                  {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                      <span
                        key={activity.label}
                        className="
                          inline-flex items-center gap-2
                          px-3 py-2
                          rounded-xl
                          bg-primary/5
                          border border-primary/15
                          text-sm
                          text-muted-foreground
                          transition-all duration-300
                          hover:bg-primary/10
                          hover:border-primary/30
                          hover:text-primary
                        "
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        {activity.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ================= EDUCATION CARD ================= */}
          <div className="relative group opacity-0 animate-slide-in-right animation-delay-300">

            {/* Subtle glow */}
            <div
              className="
                absolute -inset-1
                rounded-2xl
                bg-gradient-to-br from-purple-500 to-pink-500
                opacity-0
                group-hover:opacity-15
                blur-lg
                transition-opacity duration-500
                pointer-events-none
              "
            />

            <div
              className="
                relative z-10 h-full
                rounded-2xl
                border border-border/50
                bg-background/80
                backdrop-blur-xl
                p-7 sm:p-8
                transition-all duration-300
                group-hover:border-secondary/30
              "
            >
              {/* Heading */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="
                    w-12 h-12
                    rounded-xl
                    bg-secondary/10
                    border border-secondary/20
                    flex items-center justify-center
                  "
                >
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-medium">
                    Academic Journey
                  </span>

                  <h3 className="font-display text-2xl font-semibold mt-1">
                    Education
                  </h3>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">

                {/* Timeline line */}
                <div
                  className="
                    absolute left-[7px] top-2 bottom-2
                    w-px
                    bg-gradient-to-b
                    from-primary/70
                    via-secondary/50
                    to-transparent
                  "
                />

                {timelineData.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <div
                        className="
                          absolute left-0 top-1
                          w-4 h-4
                          rounded-full
                          bg-background
                          border-2 border-primary
                          shadow-[0_0_12px_rgba(34,211,238,0.5)]
                        "
                      />

                      <div>
                        {/* Year */}
                        <span
                          className="
                            inline-flex
                            px-3 py-1
                            rounded-lg
                            bg-primary/10
                            border border-primary/15
                            text-primary
                            text-xs
                            font-medium
                            mb-4
                          "
                        >
                          {item.year}
                        </span>

                        {/* Degree */}
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-primary mt-1 shrink-0" />

                          <div>
                            <h4 className="font-display text-xl font-semibold leading-snug">
                              {item.title}
                            </h4>

                            <p className="text-primary/80 font-medium mt-2">
                              {item.institution}
                            </p>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                          {item.description}
                        </p>

                        {/* Current status */}
                        {item.status === 'current' && (
                          <div className="inline-flex items-center gap-2 mt-5 px-3 py-2 rounded-xl bg-primary/5 border border-primary/15">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                            <span className="text-xs text-primary font-medium">
                              Currently Pursuing
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="grid sm:grid-cols-3 gap-4 mt-6">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative group
                  rounded-2xl
                  border border-border/50
                  bg-background/80
                  backdrop-blur-xl
                  p-6
                  transition-all duration-300
                  hover:border-primary/30
                  opacity-0
                  animate-fade-in-up
                "
                style={{
                  animationDelay: `${500 + index * 100}ms`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="
                    absolute -inset-1
                    rounded-2xl
                    bg-gradient-to-br from-cyan-500/30 to-purple-500/30
                    opacity-0
                    group-hover:opacity-15
                    blur-lg
                    transition-opacity duration-500
                    pointer-events-none
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-primary/10
                      border border-primary/20
                      flex items-center justify-center
                      mb-4
                    "
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h4 className="font-display font-semibold text-lg mb-1">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};