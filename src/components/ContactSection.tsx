import { useState, useRef } from 'react';
import {
  Mail,
  Linkedin,
  Send,
  MapPin,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';

const EMAILJS_SERVICE_ID = 'service_t6wcf5x';
const EMAILJS_TEMPLATE_ID = 'template_q6cisqb';
const EMAILJS_PUBLIC_KEY = '_E2vZq5I2aDesNTkZ';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'garimaag36@gmail.com',
    href: 'mailto:garimaag36@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/garima-agarwal-1a9645378',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: 'Message sent!',
        description:
          "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);

      toast({
        title: 'Failed to send',
        description:
          'Something went wrong. Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">

          <span
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-xl
              bg-primary/10
              border border-primary/20
              text-primary
              text-sm font-medium
              mb-4
              opacity-0
              animate-fade-in-up
            "
          >
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </span>

          <h2
            className="
              section-title
              opacity-0
              animate-fade-in-up
              animation-delay-100
            "
          >
            Let's <span className="gradient-text">Connect</span>
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
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6 opacity-0 animate-slide-in-left animation-delay-300">

            {/* Contact Information Card */}
            <div className="relative group">

              {/* Glow */}
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
                  relative z-10
                  rounded-2xl
                  border border-border/50
                  bg-background/80
                  backdrop-blur-xl
                  p-7
                  transition-all duration-300
                  group-hover:border-primary/30
                "
              >
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">
                    Contact
                  </span>

                  <h3 className="font-display text-2xl font-semibold mt-1">
                    Contact Information
                  </h3>
                </div>

                <div className="space-y-3">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="
                          group/item
                          rounded-xl
                          border border-border/40
                          bg-background/50
                          p-4
                          transition-all duration-300
                          hover:border-primary/30
                          hover:bg-primary/5
                        "
                      >
                        <div className="flex items-center gap-4">

                          <div
                            className="
                              w-11 h-11
                              rounded-xl
                              bg-primary/10
                              border border-primary/15
                              flex items-center justify-center
                              shrink-0
                            "
                          >
                            <Icon className="w-5 h-5 text-primary" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                              {item.label}
                            </p>

                            {item.href ? (
                              <a
                                href={item.href}
                                target={
                                  item.href.startsWith('http')
                                    ? '_blank'
                                    : undefined
                                }
                                rel={
                                  item.href.startsWith('http')
                                    ? 'noopener noreferrer'
                                    : undefined
                                }
                                className="
                                  font-medium
                                  text-foreground
                                  hover:text-primary
                                  transition-colors
                                  flex items-center gap-2
                                  break-all
                                "
                              >
                                {item.value}

                                <ArrowRight
                                  size={14}
                                  className="
                                    opacity-0
                                    -translate-x-2
                                    group-hover/item:opacity-100
                                    group-hover/item:translate-x-0
                                    transition-all
                                    shrink-0
                                  "
                                />
                              </a>
                            ) : (
                              <span className="font-medium">
                                {item.value}
                              </span>
                            )}
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="relative group">

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
                  relative z-10
                  rounded-2xl
                  border border-border/50
                  bg-background/80
                  backdrop-blur-xl
                  p-7
                  transition-all duration-300
                  group-hover:border-secondary/30
                "
              >
                <div className="flex items-start gap-4">

                  <div
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-secondary/10
                      border border-secondary/20
                      flex items-center justify-center
                      shrink-0
                    "
                  >
                    <SparklesIcon />
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold">
                      Let's Build Something Amazing
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      I'm always excited to connect with fellow developers,
                      mentors, and anyone interested in AI and technology.
                      Don't hesitate to reach out!
                    </p>
                  </div>

                </div>

                <div className="flex gap-3 mt-6">

                  <a
                    href="mailto:garimaag36@gmail.com"
                    className="
                      inline-flex items-center justify-center
                      gap-2
                      px-5 py-2.5
                      rounded-xl
                      bg-primary
                      text-primary-foreground
                      text-sm font-medium
                      border border-primary/50
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]
                    "
                  >
                    <Mail size={16} />
                    Send Email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/garima-agarwal-1a9645378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      w-11 h-11
                      rounded-xl
                      bg-background/50
                      border border-border/60
                      transition-all duration-300
                      hover:border-primary/40
                      hover:bg-primary/5
                      hover:text-primary
                    "
                  >
                    <Linkedin size={17} />
                  </a>

                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE — FORM ================= */}
          <div className="relative group opacity-0 animate-slide-in-right animation-delay-300">

            {/* Glow */}
            <div
              className="
                absolute -inset-1
                rounded-2xl
                bg-gradient-to-br from-cyan-500 to-purple-500
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
                p-7 sm:p-8
                transition-all duration-300
                group-hover:border-primary/30
              "
            >

              {/* Form heading */}
              <div className="mb-7">
                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                  Message
                </span>

                <h3 className="font-display text-2xl font-semibold mt-1">
                  Send a Message
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  I'd love to hear from you. Fill in the details below.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="space-y-5">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        px-4 py-3
                        rounded-xl
                        bg-background/50
                        border border-border/60
                        text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none
                        focus:border-primary/50
                        focus:ring-2
                        focus:ring-primary/10
                        transition-all
                      "
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        px-4 py-3
                        rounded-xl
                        bg-background/50
                        border border-border/60
                        text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none
                        focus:border-primary/50
                        focus:ring-2
                        focus:ring-primary/10
                        transition-all
                      "
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="
                        w-full
                        px-4 py-3
                        rounded-xl
                        bg-background/50
                        border border-border/60
                        text-foreground
                        placeholder:text-muted-foreground
                        focus:outline-none
                        focus:border-primary/50
                        focus:ring-2
                        focus:ring-primary/10
                        transition-all
                        resize-none
                      "
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full
                      inline-flex items-center justify-center
                      gap-2
                      px-6 py-3
                      rounded-xl
                      bg-primary
                      text-primary-foreground
                      font-medium
                      border border-primary/50
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <div
                          className="
                            w-5 h-5
                            border-2
                            border-primary-foreground/30
                            border-t-primary-foreground
                            rounded-full
                            animate-spin
                          "
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={18}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* Small reusable icon for the collaboration card */
const SparklesIcon = () => (
  <Sparkles className="w-5 h-5 text-secondary" />
);