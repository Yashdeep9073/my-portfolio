import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Distributed Task Engine",
    description: "High-throughput job processing system using Kafka and BullMQ, handling 50k+ jobs/minute with dead-letter queues and retry logic.",
    stack: ["Node.js", "Kafka", "BullMQ", "Redis", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Cloud Deployment Platform",
    description: "Automated CI/CD pipeline with Docker orchestration, zero-downtime deployments, and infrastructure-as-code on AWS.",
    stack: ["AWS", "Docker", "Linux", "PostgreSQL", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Analytics API",
    description: "Event-driven analytics service processing millions of events via Pub/Sub architecture with sub-second query latency.",
    stack: ["Node.js", "Redis", "PostgreSQL", "Pub/Sub", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Multi-Tenant SaaS Backend",
    description: "Scalable multi-tenant API with row-level security, tenant isolation, rate limiting, and automated provisioning.",
    stack: ["Laravel", "MySQL", "Redis", "AWS", "Docker"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
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
    <section id="projects" ref={ref} className="section-padding max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
        <span className="text-primary font-mono text-lg block mb-3">03.</span>
        Projects
      </h2>
      <div className="w-20 h-0.5 bg-primary/50 mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card glass rounded-xl p-6 group transition-all duration-300 hover:box-glow-hover hover:border-primary/30 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-secondary/80 text-primary font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
