import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { PORTFOLIO_DATA } from "@/constants";

const categories = PORTFOLIO_DATA.techStack.categories;

const TechStackSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stack-category",
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
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
    <section id="stack" ref={ref} className="section-padding max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
        <span className="text-primary font-mono text-lg block mb-3">{PORTFOLIO_DATA.techStack.sectionNumber}</span>
        {PORTFOLIO_DATA.techStack.title}
      </h2>
      <div className="w-20 h-0.5 bg-primary/50 mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="stack-category glass rounded-xl p-6 transition-all duration-300 hover:box-glow-hover hover:border-primary/30"
          >
            <h3 className={`font-mono text-sm font-semibold mb-4 ${cat.color}`}>
              {`// ${cat.title}`}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-mono text-xs border border-border hover:border-primary/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
