import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const HeroScene = lazy(() => import("./HeroScene"));

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScene, setShowScene] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const target = containerRef.current;
    if (!target || reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowScene(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px 0px",
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-subtitle", { y: 40, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" });
      gsap.from(".hero-buttons", { y: 30, opacity: 0, duration: 0.8, delay: 0.9, ease: "power3.out" });
      gsap.from(".hero-terminal", { y: 20, opacity: 0, duration: 0.8, delay: 1.2, ease: "power3.out" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0" />}>
        {showScene && !reducedMotion ? <HeroScene /> : null}
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="hero-terminal inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-secondary/50 backdrop-blur-sm">
          <span className="font-mono text-sm text-primary">~/portfolio</span>
          <span className="font-mono text-sm text-muted-foreground"> $ whoami</span>
        </div>

        <h1 className="hero-title font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Yashdeep</span>
        </h1>

        <p className="hero-subtitle font-mono text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Full Stack Engineer • Distributed Systems • Scalable Architecture
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_25px_hsl(170_100%_50%/0.4)] hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-primary/30 text-primary font-mono text-sm font-semibold transition-all duration-200 hover:bg-primary/10 hover:border-primary/60"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
