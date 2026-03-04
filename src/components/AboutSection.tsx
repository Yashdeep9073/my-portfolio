import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { PORTFOLIO_DATA } from "@/constants";

const highlights = PORTFOLIO_DATA.about.highlights;

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
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

      gsap.fromTo(
        ".about-card",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true, invalidateOnRefresh: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding max-w-6xl mx-auto">
      <div className="about-text mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
          <span className="text-primary font-mono text-lg block mb-3">{PORTFOLIO_DATA.about.sectionNumber}</span>
          {PORTFOLIO_DATA.about.title}
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mb-8" />
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
          {PORTFOLIO_DATA.about.description}
        </p>
      </div>

      <div className="about-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="about-card glass rounded-xl p-6 transition-all duration-300 hover:box-glow-hover hover:border-primary/30"
          >
            <h3 className="font-display font-semibold text-foreground mb-1">{h.label}</h3>
            <p className="font-mono text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
