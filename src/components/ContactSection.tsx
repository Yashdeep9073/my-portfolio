import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants";
import { useToast } from "@/components/ui/use-toast";
import { contactFormSchema, type ContactFormValues } from "@/schema/form.sceham";

const contactLinks = PORTFOLIO_DATA.contact.socialLinks;

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [form, setForm] = useState<ContactFormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});

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

  const handleFieldChange = (field: keyof ContactFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });

      toast({
        variant: "destructive",
        title: "Invalid form",
        description: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setErrors({});
    toast({
      title: "Message ready",
      description: "Client-side validation passed successfully.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="section-padding max-w-4xl mx-auto">
      <div className="contact-content">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
          <span className="text-primary font-mono text-lg block mb-3">{PORTFOLIO_DATA.contact.sectionNumber}</span>
          {PORTFOLIO_DATA.contact.title}
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mb-8" />
        <p className="text-muted-foreground mb-12 max-w-lg">
          {PORTFOLIO_DATA.contact.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                
                maxLength={100}
                aria-invalid={Boolean(errors.name)}
                className={`w-full px-4 py-3 rounded-lg bg-secondary border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? "border-destructive/80 focus:border-destructive/80 focus:ring-destructive/30"
                    : "border-border focus:border-primary/50 focus:ring-primary/20"
                }`}
              />
              {errors.name ? <p className="mt-2 text-xs text-destructive font-mono">{errors.name}</p> : null}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                
                maxLength={255}
                aria-invalid={Boolean(errors.email)}
                className={`w-full px-4 py-3 rounded-lg bg-secondary border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all ${
                  errors.email
                    ? "border-destructive/80 focus:border-destructive/80 focus:ring-destructive/30"
                    : "border-border focus:border-primary/50 focus:ring-primary/20"
                }`}
              />
              {errors.email ? <p className="mt-2 text-xs text-destructive font-mono">{errors.email}</p> : null}
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => handleFieldChange("message", e.target.value)}
                
                maxLength={1000}
                aria-invalid={Boolean(errors.message)}
                className={`w-full px-4 py-3 rounded-lg bg-secondary border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all resize-none ${
                  errors.message
                    ? "border-destructive/80 focus:border-destructive/80 focus:ring-destructive/30"
                    : "border-border focus:border-primary/50 focus:ring-primary/20"
                }`}
              />
              {errors.message ? <p className="mt-2 text-xs text-destructive font-mono">{errors.message}</p> : null}
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
              href={contactLinks[0].href}
              target={contactLinks[0].external ? "_blank" : undefined}
              rel={contactLinks[0].external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Github className="w-5 h-5" /> {contactLinks[0].label}
            </a>
            <a
              href={contactLinks[1].href}
              target={contactLinks[1].external ? "_blank" : undefined}
              rel={contactLinks[1].external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Linkedin className="w-5 h-5" /> {contactLinks[1].label}
            </a>
            <a
              href={contactLinks[2].href}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            >
              <Mail className="w-5 h-5" /> {contactLinks[2].label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
