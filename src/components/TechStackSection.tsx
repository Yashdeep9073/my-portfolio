import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    color: "text-neon-cyan",
  },
  {
    title: "Backend",
    items: ["Node.js", "Laravel"],
    color: "text-neon-blue",
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma ORM"],
    color: "text-neon-purple",
  },
  {
    title: "Infrastructure",
    items: ["AWS", "Docker", "Linux", "KVM"],
    color: "text-neon-cyan",
  },
  {
    title: "Architecture",
    items: ["Kafka", "BullMQ", "Pub/Sub", "Workers"],
    color: "text-neon-blue",
  },
  {
    title: "DevOps",
    items: ["DNS", "CI/CD", "Security", "Scaling"],
    color: "text-neon-purple",
  },
];

const TechStackSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stack-category", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={ref} className="section-padding max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
        <span className="text-primary font-mono text-lg block mb-3">02.</span>
        Tech Stack
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
