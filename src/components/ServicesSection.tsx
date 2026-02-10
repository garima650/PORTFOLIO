import { Brain, Cpu, Globe, Users } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Exploring machine learning algorithms and building intelligent models for data analysis and prediction tasks.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cpu,
    title: 'Intelligent Automation',
    description: 'Creating automation tools that streamline workflows and reduce manual effort in repetitive tasks.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive web applications with modern technologies and clean, user-friendly interfaces.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Open to Collaborate',
    description: 'Actively seeking internships and collaborative opportunities to learn and contribute to real-world projects.',
    gradient: 'from-orange-500 to-red-500',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="section-title">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Passionate about applying my skills to real-world challenges and growing through hands-on experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card-hover p-8 text-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block p-8 max-w-2xl">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to connect with fellow tech enthusiasts, mentors, and potential collaborators. 
              Let's build something amazing!
            </p>
            <a href="#contact" className="btn-primary-glow">
              <span className="relative z-10">Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
