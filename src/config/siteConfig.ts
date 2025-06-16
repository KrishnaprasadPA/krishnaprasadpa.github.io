export const siteConfig = {
  hero: {
    name: "Krishnaprasad Aji",
    tagline: "Software Engineer | Distributed Systems",
  },
  about: {
    content:
      "I’m a backend-focused Software Engineer with over four years of experience building reliable, scalable software systems. My work spans backend architecture, distributed systems, real-time data processing, and full-stack product development. At Arizona State University, I contributed to a research project that brought AI-driven insights into a decision-support platform — integrating machine learning models into real-world backend workflows.Previously, I worked at Target Corporation, where I led the development of core backend services that powered large-scale order management. My efforts improved system performance and reliability, helping streamline millions of daily transactions. I enjoy designing systems that are both robust and efficient, and I’m especially interested in the intersection of backend engineering and applied AI — finding practical ways to bring intelligent features into production systems.I hold a Master’s in Computer Science from Arizona State University and a Bachelor’s from NIT Calicut. Outside of work, I’m passionate about systems design, cloud infrastructure, and building tools that make complex technology approachable and impactful.",
  },
  projects: [
    {
      name: "AI Mental Modeler (AIMM)",
      techStack: [
        "React",
        "Python",
        "MongoDB",
        "Nginx",
        "EconML",
        "Ubuntu",
        "TLS",
      ],
      period: "June 2024 – May 2025",
      description: [
        "Developed a causal modeling tool to analyze factors influencing Pecan Area using directed factor graphs.",
        "Used EconML to compute individualized treatment effects on time series data.",
        "Deployed to LunaNode with Nginx reverse proxy and MongoDB for multi-user access; TLS-secured.",
        "Optimized backend for real-time graph interactions and supported 1000+ concurrent sessions.",
      ],
    },
    {
      name: "Distributed Banking System with gRPC",
      techStack: ["gRPC", "Java", "Lamport Clock"],
      period: "Aug 2023 – Dec 2023",
      description: [
        "Designed a distributed banking system with support for deposit, withdraw, and query operations.",
        "Ensured consistency using Lamport logical clocks and session-based backend routing.",
        "Guaranteed strong consistency in concurrent cross-branch operations with state synchronization.",
      ],
    },
    {
      name: "Routing Asymmetry Analysis in FABRIC",
      techStack: ["Python", "PTP", "Traceroute", "FABRIC"],
      period: "Jan 2024 – May 2024",
      description: [
        "Measured one-way latency using Precision Time Protocol and analyzed routing paths via traceroute.",
        "Identified and quantified routing asymmetries in the FABRIC testbed for improved network performance.",
        "Automated latency/path diagnostics using Python scripts.",
      ],
    },
  ],
  experience: [
    {
      role: "Senior Engineer / Engineer",
      company: "Target Corporation",
      location: "Bangalore, India",
      period: "July 2019 – July 2023",
      bullets: [
        "Built order management systems using Java/Kotlin and PostgreSQL, reducing stuck orders by 60%.",
        "Redesigned microservices with Kafka, improving throughput 4x; deployed via Kubernetes using GitOps.",
        "Enabled end-to-end automation using Spock, reducing manual testing time by 70%.",
        "Created a Spring Boot service to optimize hourly order release, reducing shipping cost and emissions.",
      ],
    },
    {
      role: "Research Aide",
      company: "Arizona State University",
      location: "Tempe, AZ",
      period: "June 2024 – May 2025",
      bullets: [
        "Developed a causal inference system using React and Python to support decision-making in agriculture.",
        "Deployed a full-stack web app on Ubuntu with TLS, MongoDB, and Nginx for secure multi-user access.",
        "Enabled real-time graph editing and AI model updates using EconML in the backend.",
      ],
    },
  ],
  education: [
    {
      school: "Arizona State University",
      location: "Tempe, AZ",
      degree: "MS in Computer Science",
      gpa: "3.97/4",
      period: "Aug 2023 - May 2025",
      details: [
        "Focus: Distributed Systems, Software Engineering, Validation & Testing",
        "Research: AI-driven causal modeling system for agriculture (AIMM project)",
      ],
    },
    {
      school: "National Institute of Technology Calicut",
      location: "India",
      degree: "B.Tech in Computer Science and Engineering",
      gpa: "7.35/10",
      period: "Aug 2015 - May 2019",
      details: [
        "Core Courses: Data Structures, Software Engineering, Foundations of Programming, Computer Networks",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        "Java",
        "Python",
        "Kotlin",
        "C++",
        "TypeScript",
        "JavaScript",
        "SQL",
        "C",
      ],
    },
    {
      category: "Backend Frameworks & Libraries",
      items: [
        "Spring Boot",
        "Flask",
        "gRPC",
        "Protobuf",
        "Node.js",
        "RabbitMQ",
      ],
    },
    {
      category: "Distributed Systems & Messaging",
      items: [
        "Kafka",
        "gRPC",
        "Lamport Clocks",
        "Client-Centric Consistency",
        "PTP",
        "OWL",
      ],
    },
    {
      category: "Frontend & UI",
      items: ["React", "JavaFX", "Angular", "Framer Motion", "Figma"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "GCP",
        "Docker",
        "Kubernetes",
        "Git",
        "GitOps",
        "Drone CI",
        "Vela CI",
        "Jenkins",
        "Nginx",
        "Ubuntu",
      ],
    },
    {
      category: "Databases & Storage",
      items: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Oracle",
        "DynamoDB",
        "Redis",
        "SQLite",
      ],
    },
    {
      category: "Testing, Monitoring & Observability",
      items: [
        "Spock",
        "JUnit",
        "JMeter",
        "Postman",
        "Prometheus",
        "Grafana",
        "Kibana",
      ],
    },
    {
      category: "AI, ML & Data Tools",
      items: [
        "EconML",
        "TorchMetrics",
        "CLIP",
        "Quantization",
        "Diffusion Models",
        "ComfyUI",
        "Jupyter Notebooks",
      ],
    },
    {
      category: "Other Tools & Platforms",
      items: [
        "FABRIC Testbed",
        "IntelliJ IDEA",
        "ComfyUI",
        "Bitbucket",
        "Linux",
        "OWL Containers",
      ],
    },
  ],
  certifications: [{}],
};
