import {
  Brain,
  Cpu,
  Globe,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "AI/ML Solutions",
    description:
      "Building intelligent solutions using Python, machine learning, data analysis, and AI concepts.",
    icon: Brain,
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderGradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Intelligent Automation",
    description:
      "Creating Python-based automation solutions to simplify repetitive tasks and improve workflows.",
    icon: Cpu,
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Web Development",
    description:
      "Developing responsive and interactive web experiences using modern frontend technologies.",
    icon: Globe,
    gradient: "from-green-500/20 to-teal-500/20",
    borderGradient: "from-green-500 to-teal-500",
  },
  {
    title: "Open to Collaborate",
    description:
      "Interested in working on innovative projects, learning new technologies, and building meaningful solutions.",
    icon: Users,
    gradient: "from-orange-500/20 to-red-500/20",
    borderGradient: "from-orange-500 to-red-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            What I Do
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My{" "}
            <span className="text-gradient">
              Services
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring technology and building solutions across AI,
            automation, and web development.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="relative group h-full"
              >
                {/* Same glow structure as Projects */}
                <div
                  className={`
                    absolute -inset-1
                    rounded-2xl
                    bg-gradient-to-br ${service.borderGradient}
                    opacity-0
                    group-hover:opacity-20
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
                    p-6
                    transition-all duration-300
                    group-hover:border-primary/30
                  "
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`
                        w-12 h-12
                        rounded-xl
                        bg-gradient-to-br ${service.gradient}
                        border border-border/50
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Service
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Explore
                      </span>

                      <ArrowRight
                        className="
                          w-4 h-4
                          text-muted-foreground
                          transition-all duration-300
                          group-hover:text-primary
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration CTA */}
        <div className="relative mt-8 group">

          <div
            className="
              absolute -inset-1
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-purple-500
              to-pink-500
              opacity-0
              group-hover:opacity-15
              blur-lg
              transition-opacity duration-500
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
              p-8
              md:p-10
              text-center
            "
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-5">
              <Users className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-3">
              Have an Idea?
            </h3>

            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Let's work together to turn your idea into a real,
              functional solution.
            </p>

            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                rounded-xl
                border border-primary/30
                bg-primary/10
                text-primary
                font-medium
                transition-all duration-300
                hover:bg-primary/20
                hover:border-primary/50
              "
            >
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;