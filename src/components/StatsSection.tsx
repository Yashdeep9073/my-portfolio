import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Systems Deployed", value: 30, suffix: "+" },
  { label: "APIs Built", value: 120, suffix: "+" },
  { label: "Queue Workers Running", value: 200, suffix: "+" },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const animated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        onEnter: () => {
          if (animated.current) return;
          animated.current = true;
          stats.forEach((stat, i) => {
            gsap.to({ val: 0 }, {
              val: stat.value,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setCounts((prev) => {
                  const next = [...prev];
                  next[i] = Math.round(this.targets()[0].val);
                  return next;
                });
              },
            });
          });
        },
      });

      gsap.from(".stat-item", {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={ref} className="section-padding max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
        <span className="text-primary font-mono text-lg block mb-3">04.</span>
        By the Numbers
      </h2>
      <div className="w-20 h-0.5 bg-primary/50 mb-12" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item glass rounded-xl p-6 text-center transition-all duration-300 hover:box-glow-hover"
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
              {counts[i]}{stat.suffix}
            </div>
            <div className="font-mono text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
