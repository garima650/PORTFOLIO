import { Brain, Globe, Cpu, ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'AI/ML Experiments',
    description: 'Exploring machine learning algorithms, building prediction models, and understanding neural network fundamentals.',
    icon: Brain,
    tags: ['Python', 'Machine Learning', 'Data Science'],
    status: 'In Progress',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    borderGradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Smart Web Apps',
    description: 'Developing interactive web applications with modern frameworks and integrating intelligent features.',
    icon: Globe,
    tags: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
    status: 'In Progress',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderGradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Automation Tools',
    description: 'Building scripts and tools to automate repetitive tasks and improve workflow efficiency.',
    icon: Cpu,
    tags: ['Python', 'Automation', 'Scripting'],
    status: 'Coming Soon',
    gradient: 'from-green-500/20 to-teal-500/20',
    borderGradient: 'from-green-500 to-teal-500',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[100px]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4 opacity-0 animate-fade-in-up">
            Portfolio
          </span>
          <h2 className="section-title opacity-0 animate-fade-in-up animation-delay-100">
            Projects <span className="gradient-text">In Progress</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 opacity-0 animate-fade-in-up animation-delay-200">
            Building exciting solutions and learning through hands-on experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              
              <div className="glass-card-hover relative p-8 h-full">
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Coming Soon' 
                      ? 'bg-secondary/20 text-secondary' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    <Sparkles size={12} />
                    {project.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-7 h-7 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links (disabled for now) */}
                <div className="flex items-center gap-4">
                  <button
                    disabled
                    className="flex items-center gap-2 text-sm text-muted-foreground/50 cursor-not-allowed"
                  >
                    <Github size={16} />
                    Code
                  </button>
                  <button
                    disabled
                    className="flex items-center gap-2 text-sm text-muted-foreground/50 cursor-not-allowed"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/20 opacity-0 animate-fade-in-up animation-delay-600">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">
              More projects coming soon! Currently building exciting solutions...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
