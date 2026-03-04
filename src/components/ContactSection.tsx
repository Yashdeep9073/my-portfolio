import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true, invalidateOnRefresh: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="section-padding max-w-4xl mx-auto">
      <div className="contact-content">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
          <span className="text-primary font-mono text-lg block mb-3">05.</span>
          Get in Touch
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mb-8" />
        <p className="text-muted-foreground mb-12 max-w-lg">
          Have a project in mind or want to discuss scalable systems? Drop me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                maxLength={1000}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_25px_hsl(170_100%_50%/0.4)] hover:scale-105"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="md:col-span-2 flex flex-col justify-center gap-5">
            <a
              href="https://github.com/Yashdeep9073"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yash-deep-22aa41238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="mailto:ydeep9073@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Mail className="w-5 h-5" /> ydeep9073@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
