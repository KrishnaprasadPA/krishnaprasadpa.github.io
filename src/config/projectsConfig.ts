import { Project } from "@/types/projectTypes";

export const projects: Project[] = [
  {
    slug: "ai-mental-modeler",
    name: "AIMM: AI Mental Modeler for Causal Inference",
    techStack: [
      "React",
      "Python",
      "MongoDB",
      "EconML",
      "Nginx",
      "Ubuntu",
      "TLS",
      "Time Series",
      "Directed Graphs",
    ],
    period: "June 2024 – May 2025",
    description: [
      "Developed an AI-powered decision support tool that enables users to explore causal relationships between factors affecting agricultural outcomes.",
      "Modeled causal effects using directed factor graphs and estimated treatment effects with Microsoft’s EconML library.",
      "Built a full-stack web app with real-time graph editing and interactive inference on time series data.",
      "Deployed the platform on a secure Ubuntu server using Nginx reverse proxy and MongoDB for persistence.",
    ],
    details: {
      overview:
        "AI Mental Modeler (AIMM) is a web-based causal inference platform that empowers users to visualize, edit, and analyze factor relationships through interactive graphs. It enables scenario simulation and estimation of causal effects using counterfactual reasoning over time series data. The application was built as part of an AI research initiative at ASU to support sustainable agriculture planning.",
      why: "Decision-makers often lack intuitive tools to explore causal relationships in complex domains. AIMM fills this gap by making causal inference interpretable, interactive, and visual. The project specifically targeted the agricultural domain, modeling factors influencing pecan production in the US and Mexico.",
      learnings:
        "This project taught me how to embed causal inference into usable software. I gained experience with EconML's heterogenous treatment effect models, React-based data visualizations, and performance optimizations for real-time multi-user graph editing. I also configured secure cloud deployments with TLS and Nginx.",
      achievements: [
        "Enabled end-to-end causal modeling — from graph design to effect estimation — all within a browser interface.",
        "Implemented counterfactual analysis using EconML over time series data spanning 30+ years.",
        "Supported concurrent editing and access with MongoDB and real-time sync logic.",
        "Deployed a secure, scalable server environment to host AIMM for 1000+ users.",
      ],
      future:
        "Plan to expand with probabilistic graphical models and automated causal discovery. Long-term goal includes LLM-assisted graph generation and natural language querying of causal effects.",
      extra:
        "AIMM was used to analyze pecan agriculture trends as part of NASA’s LCLUC initiative. It also became a live demo for stakeholder workshops and academic outreach.",
    },
    links: {
      repo: "https://github.com/KrishnaprasadPA/aimm",
      demo: "https://aimm.waterdmd.info/home",
    },
    screenshots: [],
    tags: ["Causal Inference", "EconML", "Graph Modeling", "Agriculture", "AI"],
  },
  {
    slug: "distributed-banking-system",
    name: "Distributed Banking System with gRPC, Logical Clocks, and Consistency Guarantees",
    techStack: [
      "Python",
      "gRPC",
      "Protobuf",
      "Distributed Systems",
      "Logical Clocks",
      "Client-Centric Consistency",
    ],
    period: "Fall 2023",
    description: [
      "Built a distributed banking system in 3 iterations: gRPC RPCs, Lamport logical clocks, and read-your-writes consistency.",
      "Enabled cross-branch operations (query, deposit, withdraw) while ensuring inter-branch state consistency.",
      "Introduced causal tracking via Lamport clocks and later enforced client-centric consistency guarantees.",
      "Demonstrated full correctness across 19+ test cases simulating concurrent and causal operations.",
    ],
    details: {
      overview:
        "This 3-part project series implemented a distributed banking system using Python and gRPC. It began with core operations over RPCs, extended into logical clock-based event ordering, and concluded with enforcing read-your-writes consistency to ensure a reliable user experience across distributed branches.",
      why: "Modern financial systems demand scalability and strong consistency guarantees. This project explored foundational techniques to build reliable distributed services for banking, providing practical experience with gRPC, causality, and consistency trade-offs.",
      learnings:
        "We learned how to serialize and propagate state changes via Protocol Buffers, manage event order through logical clocks, and implement client-centric consistency policies. Each iteration deepened our understanding of distributed coordination, synchronization bottlenecks, and system correctness validation.",
      achievements: [
        "Delivered a functional distributed banking system using gRPC and Protocol Buffers.",
        "Implemented Lamport’s logical clocks to track causality across distributed nodes.",
        "Guaranteed read-your-writes consistency through message propagation and blocking during sync.",
        "Achieved 100% correctness in validator tests simulating real-world banking scenarios.",
      ],
      future:
        "Plan to unify the three iterations into a hybrid-consistency system with fault-tolerant communication, retries on failure, and concurrency benchmarks to evaluate scalability under realistic workloads.",
      extra:
        "The system was validated with JSON-based test scripts and achieved correct balance propagation and transaction order across all test runs. Built entirely on a macOS local dev environment using IntelliJ IDEA and Python virtual environments.",
    },
    links: {
      repo: "https://github.com/KrishnaprasadPA/banking-system",
    },
    screenshots: [],
    tags: [
      "Distributed Systems",
      "gRPC",
      "Banking",
      "Causality",
      "Consistency",
    ],
  },
  {
    slug: "routing-asymmetry-fabric",
    name: "Exploring Routing Asymmetry in the FABRIC Testbed",
    techStack: [
      "Precision Time Protocol (PTP)",
      "Traceroute",
      "FABRIC Testbed",
      "Python",
      "Jupyter",
      "OWL (One-Way Latency)",
      "Docker",
    ],
    period: "May 2024",
    description: [
      "Investigated inter-site routing asymmetry using one-way latency (OWL) measurements and traceroute analysis across 10 PTP-enabled FABRIC nodes.",
      "Captured over 6,000 UDP packets per path using Dockerized OWL agents, synced via GPS-based PTP.",
      "Developed asymmetry quantification metrics (Absolute Asymmetry and Normalized Asymmetry) and proposed a Minimal Composite Dissimilarity algorithm.",
      "Identified asymmetry hotspots (e.g., UCSD-FIU with NA = 0.66) and published code for reproducible research.",
    ],
    details: {
      overview:
        "This project explored routing asymmetry within FABRIC — a national research testbed — by measuring one-way delay discrepancies between site pairs. Using PTP-synchronized clocks and OWL tools, the team quantified real-time asymmetry patterns and proposed new algorithms to characterize their impact on network performance.",
      why: "Traditional round-trip-time (RTT) metrics often mask asymmetric routing behaviors. This project aimed to provide a rigorous, one-way-delay-based assessment of asymmetry, enabled by the controlled FABRIC testbed environment. It serves as a foundation for future adaptive routing systems.",
      learnings:
        "We gained hands-on experience with low-level network tools (PTP, OWL, traceroute), deployed synchronized Docker agents across real infrastructure, and handled large-scale network telemetry. The project also emphasized analytical rigor with custom metric design and reproducibility.",
      achievements: [
        "First known comprehensive routing asymmetry study on the FABRIC testbed.",
        "Quantified path asymmetries using Absolute and Normalized Asymmetry (NA) — e.g., NA = 0.66 between UCSD and FIU.",
        "Built a Minimal Composite Dissimilarity algorithm to identify asymmetric path pairs.",
        "Open-sourced the codebase for replication and future extensions in network research.",
      ],
      future:
        "Plan to expand testing to all 33 FABRIC sites, integrate QoS/congestion metrics, and build a real-time asymmetry detection module for adaptive routing protocols.",
      extra:
        "Fun fact: We achieved sub-microsecond OWL precision by leveraging FABRIC’s GPS-synchronized clocks — essential for detecting even subtle asymmetries invisible in RTT!",
    },
    links: {
      repo: "https://github.com/KrishnaprasadPA/computer-networks",
    },
    screenshots: [],
    tags: ["Networks", "Latency", "FABRIC", "PTP", "Routing", "OWL", "Python"],
  },
  {
    slug: "ri-al-agent",
    name: "Reinforcement Learning Agents in Pacman",
    techStack: [
      "Python",
      "Reinforce",
      "Actor-Critic",
      "Q-Learning",
      "Function Approximation",
      "Statistical Testing",
    ],
    period: "May 2024",
    description: [
      "Implemented REINFORCE (Monte-Carlo Policy Gradient) and Actor-Critic RL agents with linear function approximation for the Pacman domain.",
      "Compared agent performance against a Q-Learning baseline using convergence speed and average scores across diverse game environments.",
      "Used softmax policy with custom feature extraction including ghost proximity, food count, and score.",
      "Performed paired Student’s T-tests to evaluate statistical significance of differences in performance.",
    ],
    details: {
      overview:
        "This project explored advanced reinforcement learning algorithms — REINFORCE and Actor-Critic — in the classic Pacman environment. These agents were evaluated against a Q-learning agent using linear function approximation. The focus was on learning stability, convergence behavior, and statistical performance across diverse scenarios with variable complexity and ghost count.",
      why: "We aimed to investigate whether policy gradient methods like REINFORCE and hybrid approaches like Actor-Critic could outperform traditional Q-learning in dynamic game environments. This comparison is essential to understand their practicality in real-world, uncertain domains.",
      learnings:
        "We deepened our understanding of policy gradient algorithms, implemented linear function approximation with softmax-based stochastic policies, and extracted interpretable state features. We also learned how to design statistically sound experiments and apply Student’s T-tests to validate results across multiple domains and runs.",
      achievements: [
        "Implemented REINFORCE and Actor-Critic agents with custom feature extractors and softmax policies.",
        "Demonstrated that both agents outperform Q-learning in long-term performance, despite higher variance.",
        "Validated performance differences using rigorous statistical analysis (T-tests) over 100+ runs.",
        "Designed modular RL training framework and environment generator for large-scale experiments.",
      ],
      future:
        "Future work may involve extending these agents to deep reinforcement learning with neural network-based approximators, and transferring learned policies across domains.",
      extra:
        "The REINFORCE agent's reward variance gave us practical insights into how batch-based updates impact training stability. It was rewarding (pun intended!) to see statistical tests confirm our intuitions.",
    },
    links: {
      repo: "https://github.com/KrishnaprasadPA/ai-rl-agent",
    },
    screenshots: [],
    tags: ["RL", "AI", "Softmax Policy", "Pacman", "Function Approximation"],
  },
  {
    slug: "diffusion-model-comparison",
    name: "Comparative Analysis of Diffusion Models for Image Generation",
    techStack: [
      "Stable Diffusion",
      "FLUX.1",
      "Python",
      "TorchMetrics",
      "CLIP",
      "ComfyUI",
      "Quantization",
      "Image Synthesis",
      "Evaluation Metrics",
    ],
    period: "Dec 2024",
    description: [
      "Conducted a comprehensive performance comparison of text-to-image diffusion models: Stable Diffusion 3, Stable Diffusion 3.5, and FLUX.1-dev.",
      "Evaluated models using key metrics: Inception Score (IS), Fréchet Inception Distance (FID), CLIP Score, TIFA, and CLIP MMD.",
      "Built a complete generation pipeline using ComfyUI, with prompt encoding, latent space transformations, and image synthesis.",
      "Implemented quantization (8/4-bit) to fit 30GB+ model weights into 6GB VRAM hardware and benchmarked inference time and quality tradeoffs.",
    ],
    details: {
      overview:
        "This project aimed to evaluate and compare the effectiveness of diffusion models (Stable Diffusion 3, 3.5, FLUX.1-dev) in generating high-quality, semantically faithful images from text prompts. We leveraged a range of advanced evaluation metrics and implemented an end-to-end generation pipeline that accommodated resource constraints through model quantization.",
      why: "With the rapid rise of generative AI, understanding the strengths and limitations of different diffusion models is critical for selecting the right model for applications such as content creation, scientific illustration, and training dataset generation.",
      learnings:
        "We gained deep experience in setting up inference pipelines for large-scale diffusion models, working with ComfyUI and custom CLIP-based evaluators. We explored low-bit quantization techniques for model deployment under memory constraints and evaluated semantic faithfulness using TIFA and CLIP MMD.",
      achievements: [
        "Implemented quantized inference pipelines using ComfyUI for multiple diffusion models.",
        "Successfully computed and analyzed five different evaluation metrics on 300+ generated images.",
        "Demonstrated superior semantic fidelity of FLUX.1-dev using CLIP MMD and TIFA, while SD3 had higher FID and IS scores.",
        "Overcame hardware limitations by testing models with limited VRAM using 4–8-bit quantization.",
      ],
      future:
        "Plan to extend the evaluation to new models like SD4 and Midjourney, explore advanced metrics capturing texture/originality, and experiment with domain-specific fine-tuning and model pruning for real-time deployment.",
      extra:
        "Despite using a consumer-grade laptop with 6GB VRAM, we successfully benchmarked some of the largest open-source diffusion models through clever quantization and pipelining.",
    },
    links: {
      repo: "https://github.com/KrishnaprasadPA/SML-Project",
    },
    screenshots: [],
    tags: [
      "Diffusion Models",
      "Generative AI",
      "Quantization",
      "CLIP",
      "Image Generation",
      "Metrics",
    ],
  },
  {
    slug: "effort-logger-poker-tool",
    name: "Planning Poker Tool (Integrated with EffortLogger V2.0)",
    techStack: [
      "Java",
      "JavaFX",
      "MySQL",
      "JDBC",
      "Encryption",
      "User Authentication",
    ],
    period: "Dec 2023",
    description: [
      "Desktop-based Agile estimation tool integrated with EffortLogger V2.0 to enhance planning poker sessions.",
      "Enabled secure, weighted estimations using historical effort data via JDBC-connected MySQL backend.",
      "Provided multi-round estimation, session tracking, and data finalization features.",
      "Designed with stakeholder feedback to ensure data privacy, team collaboration, and future extensibility.",
    ],
    details: {
      overview:
        "This application was designed to improve Agile estimation accuracy by integrating historical effort data into planning poker sessions. It replaces traditional opinion-based estimations with a structured, data-driven process, enhancing both efficiency and consistency across teams.",
      why: "Agile teams often spend excessive time in subjective story point discussions. This tool aimed to anchor planning sessions in real, past effort logs while maintaining the collaborative spirit of poker estimation. Stakeholders also demanded better security and reliability in how estimation data was handled.",
      learnings:
        "We learned how to architect scalable Java-based desktop apps, use JDBC for seamless MySQL data integration, and incorporate secure authentication and encryption. Building an estimation pipeline taught us to balance UX clarity with backend accuracy.",
      achievements: [
        "Delivered a fully functional prototype demonstrating login, estimation rounds, and final story integration with EffortLogger V2.0.",
        "Built dynamic weighted estimation features, allowing fine-tuned control over historical story comparisons.",
        "Successfully addressed stakeholder concerns around session inefficiencies and data privacy.",
        "Designed to complement in-person Agile rituals using physical cards, enhancing team engagement.",
      ],
      future:
        "Planned improvements include a revamped UI with drag-and-drop support, real-time sync for remote teams, and integrations with tools like Jira or Trello.",
      extra:
        "This was developed for ASU’s CSE 563 Software Engineering course, with domain feedback from Dr. Lynn Robert Carter acting as our customer representative.",
    },
    links: {
      repo: "https://github.com/KrishnaprasadPA/software-requirements",
    },
    screenshots: [],
    tags: [
      "Agile",
      "Estimation",
      "JavaFX",
      "Effort Logging",
      "Planning Poker",
      "Desktop",
    ],
  },
  {
    slug: "semantic-graph-job-recommendation",
    name: "Semantic Graph-Based Job Recommendation System",
    techStack: [
      "Sentence-BERT (MiniLM-L6-v2)",
      "FAISS (IndexFlatIP)",
      "NetworkX (Personalized PageRank)",
      "Python",
      "pandas",
      "sentence-transformers",
    ],
    period: "2023",
    description: [
      "Developed a hybrid job recommendation system combining BERT embeddings, FAISS similarity search, and Personalized PageRank to deliver contextually relevant job matches.",
      "Encoded 124K LinkedIn job postings into 384-dimensional vectors using Sentence-BERT for semantic understanding beyond keyword matching.",
      "Reduced the search space via FAISS approximate nearest neighbor search to top-50 jobs per query, followed by graph-based reranking using similarity graphs and Personalized PageRank.",
      "Implemented a fallback mechanism to revert to FAISS results in sparse graph scenarios (<1% cases).",
    ],
    details: {
      overview:
        "This system integrates semantic embedding and graph-based techniques to improve job recommendations over traditional keyword or collaborative filtering methods. By combining SBERT, FAISS, and graph reranking, it delivers more accurate, explainable job matches.",
      why: "Keyword-based methods often yield irrelevant results due to vocabulary mismatch and ignore job similarity context. This project aimed to enhance recommendation relevance and solve cold-start issues by leveraging semantic understanding and graph algorithms.",
      learnings:
        "Gained experience with large-scale embedding generation, approximate nearest neighbor search, and graph-based ranking algorithms. Learned the practical benefits of Personalized PageRank in reranking and improved user trust through explainability features.",
      achievements: [
        "Achieved 87% precision@10 and 75% recall@10, outperforming KMeans clustering by 27% in precision.",
        "Effectively addressed cold-start problems without requiring user history.",
        "Demonstrated applicability through 100+ use cases including diverse roles and locations.",
        "Leveraged graph-based reranking to reorder 76% of initial FAISS results, improving contextual relevance.",
      ],
      future:
        "Plan to incorporate user feedback loops for dynamic personalization, extend to multi-turn conversational job search, and optimize system for real-time job posting updates.",
      extra:
        "Handled a large dataset of 124,000 LinkedIn job postings from 2023, showcasing scalability of the approach.",
    },
    links: {
      repo: "https://github.com/KrishnaprasadPA/data-mining",
    },
    screenshots: [],
    tags: [
      "NLP",
      "Semantic Search",
      "Graph Algorithms",
      "Recommendation System",
      "FAISS",
      "Sentence-BERT",
      "Python",
      "NetworkX",
    ],
  },
];
