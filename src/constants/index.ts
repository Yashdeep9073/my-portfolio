export const PORTFOLIO_DATA = {
    //   Branding 
    brand: {
        logoText: "<dev />",
        terminalPath: "~/portfolio",
        terminalCommand: "$ whoami",
        name: "Yashdeep",
        roleSummary: "Full Stack Engineer • Distributed Systems • Scalable Architecture",
    },

    // Navigation
    navigation: [
        { label: "About", href: "#about" },
        { label: "Stack", href: "#stack" },
        { label: "Projects", href: "#projects" },
        { label: "Stats", href: "#stats" },
        { label: "Contact", href: "#contact" },
    ],

    // Hero
    hero: {
        primaryAction: { label: "View Projects", href: "#projects" },
        secondaryAction: { label: "Contact", href: "#contact" },
    },

    // About, 
    about: {
        sectionNumber: "01.",
        title: "About Me",
        description:
            "I'm a backend-heavy full stack developer who thrives on building systems that scale. From designing distributed queue architectures and microservices to deploying containerized applications on cloud infrastructure — I engineer solutions that handle real-world load with reliability and performance at their core.",
        highlights: [
            { label: "Scalable Systems", desc: "Designed for millions of requests" },
            { label: "Distributed Queues", desc: "Kafka, BullMQ, Pub/Sub workers" },
            { label: "Cloud Infrastructure", desc: "AWS, Docker, Linux, KVM" },
            { label: "Full Stack Delivery", desc: "Frontend to production deploy" },
        ],
    },

    // Tech Stack
    techStack: {
        sectionNumber: "02.",
        title: "Tech Stack",
        categories: [
            {
                title: "Frontend",
                items: ["HTML", "CSS", "JavaScript", "TypeScript"],
                color: "text-neon-cyan",
            },
            {
                title: "Backend",
                items: ["Node.js", "Laravel", "Bun"],
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
        ],
    },

    // Projects
    projects: {
        sectionNumber: "03.",
        title: "Projects",
        items: [
            {
                title: "Distributed Task Engine",
                description:
                    "High-throughput job processing system using Kafka and BullMQ, handling 50k+ jobs/minute with dead-letter queues and retry logic.",
                stack: ["Node.js", "Kafka", "BullMQ", "Redis", "Docker"],
                github: "#",
                live: "#",
            },
            {
                title: "Cloud Deployment Platform",
                description:
                    "Automated CI/CD pipeline with Docker orchestration, zero-downtime deployments, and infrastructure-as-code on AWS.",
                stack: ["AWS", "Docker", "Linux", "PostgreSQL", "TypeScript"],
                github: "#",
                live: "#",
            },
            {
                title: "Real-Time Analytics API",
                description:
                    "Event-driven analytics service processing millions of events via Pub/Sub architecture with sub-second query latency.",
                stack: ["Node.js", "Redis", "PostgreSQL", "Pub/Sub", "Prisma"],
                github: "#",
                live: "#",
            },
            {
                title: "Multi-Tenant SaaS Backend",
                description:
                    "Scalable multi-tenant API with row-level security, tenant isolation, rate limiting, and automated provisioning.",
                stack: ["Laravel", "MySQL", "Redis", "AWS", "Docker"],
                github: "#",
                live: "#",
            },
        ],
    },

    // Stats
    stats: {
        sectionNumber: "04.",
        title: "By the Numbers",
        items: [
            { label: "Years Experience", value: 2, suffix: "+" },
            { label: "Projects Completed", value: 15, suffix: "+" },
            { label: "Systems Deployed", value: 15, suffix: "+" },
            { label: "APIs Built", value: 120, suffix: "+" },
            { label: "Queue Workers Running", value: 16, suffix: "+" },
        ],
    },

    // Contact
    contact: {
        sectionNumber: "05.",
        title: "Get in Touch",
        description: "Have a project in mind or want to discuss scalable systems? Drop me a message.",
        socialLinks: [
            {
                label: "GitHub",
                href: "https://github.com/Yashdeep9073",
                external: true,
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/yash-deep-22aa41238",
                external: true,
            },
            {
                label: "ydeep9073@gmail.com",
                href: "mailto:ydeep9073@gmail.com",
                external: false,
            },
        ],
    },

    // Footer 
    footer: {
        text: "Built with precision",
    },
} as const;
