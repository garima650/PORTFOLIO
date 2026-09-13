import { Brain, Gamepad2, CloudSun, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Tic Tac Toe",
    description:
      "A Python-based terminal Tic Tac Toe game built using core programming concepts, game logic, loops, conditions, and user input.",
    icon: Gamepad2,
    tags: ["Python", "Game Logic", "Terminal"],
    status: "Completed",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderGradient: "from-cyan-500 to-blue-500",
    code: "https://github.com/garima650/Tic-Tac-Toe-game.git",
    demo: null,
  },
  {
    title: "Hangman Game",
    description:
      "A Python terminal Hangman game developed using strings, loops, conditions, user input, and game logic.",
    icon: Gamepad2,
    tags: ["Python", "Game Logic", "Terminal"],
    status: "Completed",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
    code: "https://github.com/garima650/HANGMAN-GAME.git",
    demo: null,
  },
  {
    title: "Weather App",
    description:
      "A responsive weather website built using HTML, CSS, and JavaScript that fetches weather information through a weather API.",
    icon: CloudSun,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    status: "Live",
    gradient: "from-green-500/20 to-teal-500/20",
    borderGradient: "from-green-500 to-teal-500",
    code: "https://github.com/garima650/WEATHER-WEBSITE.git",
    demo: "https://weather-app-ykc6.onrender.com/",
  },
  {
    title: "LAPSPEC",
    description:
      "An AI-based application built with Streamlit, involving data processing, machine learning model training, prediction, and an interactive web interface.",
    icon: Brain,
    tags: ["Python", "Streamlit", "Machine Learning", "Model Training"],
    status: "Project",
    gradient: "from-orange-500/20 to-red-500/20",
    borderGradient: "from-orange-500 to-red-500",
    code: "https://github.com/garima650/LAPSPEC-AI.git",
    demo: "https://lapspec.streamlit.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-container">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A collection of projects where I explore programming, web
            development, APIs, artificial intelligence, and machine learning.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="relative group h-full"
              >

                {/* Subtle colored glow */}
                <div
                  className={`
                    absolute -inset-1 rounded-2xl
                    bg-gradient-to-br ${project.borderGradient}
                    opacity-0
                    group-hover:opacity-20
                    blur-lg
                    transition-opacity duration-500
                    pointer-events-none
                  `}
                />

                {/* Project Card */}
                <div
                  className="
                    relative z-10 h-full
                    rounded-2xl
                    border border-border/50
                    bg-background/80
                    backdrop-blur-xl
                    p-6
                    transition-all duration-300
                    group-hover:border-primary/30
                  "
                >

                  {/* Icon */}
                  <div
                    className={`
                      w-12 h-12
                      rounded-xl
                      bg-gradient-to-br ${project.gradient}
                      flex items-center justify-center
                      mb-5
                      transition-transform duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-primary">
                      {project.status}
                    </span>

                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-2.5 py-1
                          text-xs font-mono
                          rounded-md
                          bg-secondary/70
                          text-muted-foreground
                          border border-border/50
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center gap-4">

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        text-sm text-foreground
                        hover:text-primary
                        transition-colors
                      "
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2
                          text-sm text-foreground
                          hover:text-primary
                          transition-colors
                          ml-auto
                        "
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground ml-auto">
                        Terminal Project
                      </span>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export { ProjectsSection };
export default ProjectsSection;