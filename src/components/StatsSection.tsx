import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PORTFOLIO_DATA } from "@/constants";

const stats = PORTFOLIO_DATA.stats.items;

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const animated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (animated.current) return;
          animated.current = true;
          stats.forEach((stat, i) => {
            const counter = { val: 0 };
            gsap.to(counter, {
              val: stat.value,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                const node = valueRefs.current[i];
                if (node) {
                  node.textContent = `${Math.round(counter.val)}${stat.suffix}`;
                }
              },
            });
          });
        },
      });

      gsap.fromTo(
        ".stat-item",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          immediateRender: false,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true, invalidateOnRefresh: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={ref} className="section-padding max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
        <span className="text-primary font-mono text-lg block mb-3">{PORTFOLIO_DATA.stats.sectionNumber}</span>
        {PORTFOLIO_DATA.stats.title}
      </h2>
      <div className="w-20 h-0.5 bg-primary/50 mb-12" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item glass rounded-xl p-6 text-center transition-all duration-300 hover:box-glow-hover"
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
              <span ref={(element) => { valueRefs.current[i] = element; }}>
                0{stat.suffix}
              </span>
            </div>
            <div className="font-mono text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
