import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { label: "Scalable Systems", desc: "Designed for millions of requests" },
  { label: "Distributed Queues", desc: "Kafka, BullMQ, Pub/Sub workers" },
  { label: "Cloud Infrastructure", desc: "AWS, Docker, Linux, KVM" },
  { label: "Full Stack Delivery", desc: "Frontend to production deploy" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: { trigger: ".about-text", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".about-card", {
        scrollTrigger: { trigger: ".about-grid", start: "top 80%" },
        y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding max-w-6xl mx-auto">
      <div className="about-text mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
          <span className="text-primary font-mono text-lg block mb-3">01.</span>
          About Me
        </h2>
        <div className="w-20 h-0.5 bg-primary/50 mb-8" />
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
          I'm a backend-heavy full stack developer who thrives on building systems that scale.
          From designing distributed queue architectures and microservices to deploying
          containerized applications on cloud infrastructure — I engineer solutions that
          handle real-world load with reliability and performance at their core.
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
