const enTranslation = {
  translation: {
    home: "Home",

    languages: {
      title: "Language",
      es: "Spanish",
      en: "English",
    },

    mainInfo: {
      career: "Backend & Infrastructure Engineer",
      university: "UASLP",
      description:
        "Backend & Infrastructure Engineer experienced in designing, developing, and operating production software platforms. Former Backend Lead with experience building scalable backend architectures, APIs, business-oriented applications, and highly available infrastructure. Currently focused on modernizing legacy environments through Docker, Kubernetes, Talos Linux, Proxmox, and LINSTOR/DRBD, covering the full lifecycle from software architecture and development to deployment and production operations.",
    },

    job_history: "Professional Experience",

    jobs: {
      "Bitcat Services": {
        description:
          "Software and infrastructure engineering focused on backend systems, highly available infrastructure, automation, industrial integrations, and production operations.",
        title: "Software & Infrastructure Engineer",
        start: "May 2024",
        end: "Present",
        activities: [
          "Designed and deployed server infrastructure, including physical installation, cabling, network configuration, switching, virtualization, storage, and high availability.",
          "Managed highly available Proxmox clusters hosting production applications and databases, using LINSTOR-backed replicated storage to minimize downtime and VM migration times.",
          "Administered Kubernetes clusters running on Talos Linux, managing application deployments, highly available workloads, persistent storage, and production infrastructure.",
          "Implemented Cloudflare Tunnels to securely expose web services to the Internet without requiring static public IP addresses or direct inbound port exposure.",
          "Implemented CI/CD pipelines using GitHub Actions and Docker, reducing build-related errors and deployment times by approximately 80%.",
          "Dockerized legacy applications and standardized development environments, reducing environment-related errors by approximately 50%.",
          "Built a full-stack project budgeting platform integrating internal services with the CROL API, reducing material-request lead time by approximately 40% and improving real-time budget visibility.",
          "Led the development of an internal quotation management platform, eliminating licensing costs associated with the previous proprietary solution.",
          "Integrated web systems with PLCs and industrial network infrastructure for maintenance, monitoring, and Industry 4.0 environments.",
        ],
      },

      "Cooperative Computing": {
        description:
          "Full-stack development for client applications, focused on user interfaces, frontend implementation, and repository automation.",
        title: "Full Stack Intern",
        start: "September 2023",
        end: "May 2024",
        activities: [
          "Developed user interfaces for proprietary applications, improving usability and user experience.",
          "Implemented GitHub-based automation for code formatting and repository-specific coding standards.",
          "Developed frontend features based on previously designed interfaces and application workflows.",
        ],
      },

      "AIA Partners": {
        description:
          "Backend leadership for a fintech platform using Node.js, Express, and MongoDB, focused on architecture, performance, automation, security, and team development.",
        title: "Backend Lead Developer",
        start: "June 2022",
        end: "September 2023",
        activities: [
          "Designed and implemented the backend architecture for a fintech platform using Node.js and Express, reducing API response times by approximately 30% and application errors by approximately 40%.",
          "Implemented MongoDB replica sets to improve database availability, redundancy, and fault tolerance.",
          "Implemented scheduled jobs to automate backend workflows and recurring business processes.",
          "Implemented encryption and secure file-storage mechanisms for sensitive information.",
          "Provided technical support and training to users and administrators.",
          "Led and mentored the development team, coordinating responsibilities and technical training to accelerate product delivery.",
        ],
      },

      "Pixel & Byte": {
        description:
          "Development of tools for processing medical imaging data used in AI training workflows.",
        title: "Social Service",
        start: "June 2022",
        end: "December 2022",
        activities: [
          "Developed a lossless DICOM-to-JSON converter to support medical imaging datasets used for AI training and early disease detection.",
          "Developed a Node.js server capable of executing Python processing scripts.",
          "Implemented Python-based processing workflows for handling large medical imaging datasets.",
        ],
      },

      UPSLP: {
        description:
          "Development of Brand Wars, an educational video game created for Semana LAG 2022 using JavaScript and RPG Maker.",
        title: "Freelance Video Game Developer",
        start: "November 2021",
        end: "March 2022",
        activities: [
          "Developed an educational video game using JavaScript and RPG Maker to teach marketing concepts during Semana LAG 2022.",
          "Implemented custom user-interface interactions and gameplay functionality using JavaScript.",
          "Performed user testing to validate gameplay, usability, and overall user experience.",
        ],
      },
    },

    skills: "Skills",

    skillsTabs: {
      languages: "Programming Languages",
      frameworks: "Frameworks & Technologies",
      databases: "Databases",
      tools: "Infrastructure & Tools",
    },

    skillsSet: {
      frameworks: [
        {
          img: "node.svg",
          title: "Node.js",
          time: "5 years",
        },
        {
          img: "express.svg",
          title: "Express",
          time: "5 years",
        },
        {
          img: "nest.svg",
          title: "NestJS",
          time: "2 years",
        },
        {
          img: "react.svg",
          title: "React",
          time: "4 years",
        },
        {
          img: "laravel.svg",
          title: "Laravel",
          time: "1 year",
        },
        {
          img: "docker.svg",
          title: "Docker",
          time: "2+ years",
        },
        {
          img: "nginx.svg",
          title: "Nginx",
          time: "2+ years",
        },
      ],

      languages: [
        {
          img: "javascript.svg",
          title: "JavaScript",
          time: "5 years",
        },
        {
          img: "typescript.svg",
          title: "TypeScript",
          time: "3+ years",
        },
        {
          img: "html.svg",
          title: "HTML5",
          time: "5 years",
        },
        {
          img: "php.svg",
          title: "PHP",
          time: "1 year",
        },
        {
          img: "c.svg",
          title: "C",
          time: "3 years",
        },
      ],

      databases: [
        {
          img: "mongod.svg",
          title: "MongoDB",
          time: "4+ years",
        },
        {
          img: "postgre.svg",
          title: "PostgreSQL",
          time: "2+ years",
        },
      ],

      tools: [
        {
          img: "proxmox.svg",
          title: "Proxmox VE",
          time: "2+ years",
        },
        {
          img: "kubernetes.svg",
          title: "Kubernetes",
          time: "1+ year",
        },
        {
          img: "talos.svg",
          title: "Talos Linux",
          time: "1+ year",
        },
        {
          img: "git.svg",
          title: "Git",
          time: "5 years",
        },
        {
          img: "github.svg",
          title: "GitHub",
          time: "5 years",
        },
        {
          img: "postman.svg",
          title: "Postman",
          time: "4+ years",
        },
        {
          img: "figma.svg",
          title: "Figma",
          time: "3 years",
        },
      ],
    },

    projects: {
      header: "Projects",

      list: [
        {
          title: "Certbot SSL/TLS Renewal Troubleshooting Guide",
          description:
            "A step-by-step troubleshooting guide for SSL/TLS certificate renewal failures caused by Certbot HTTP challenge timeouts. Written for users with limited experience in server administration and TLS certificate management.",
          url: "https://github.com/DEadMan10sds/CertbotSSLRenovationFail",
          img: "CertbotError.png",
          tags: ["Guide", "SSL"],
        },

        {
          title: "Production Line Traceability Platform",
          description:
            "A production traceability system that records the lifecycle of assembled parts, generates serial numbers and labels, tracks each manufacturing stage, and validates the expected production workflow.",
          tags: ["Project", "Frontend", "Backend"],
          list: [
            "WebSocket-based real-time event communication",
            "Python-based file monitoring",
            "Production process traceability",
            "Serial number and label generation",
          ],
          badges: ["react", "javascript", "express", "mongodb"],
        },

        {
          title: "Project Budget Management Platform",
          description:
            "A project budgeting platform that tracks allocated funds, purchases, suppliers, costs, remaining budget, and procurement status while providing real-time visibility into project expenses.",
          tags: ["Project", "Frontend", "Backend"],
          list: [
            "Transactional database operations",
            "State Pattern for procurement workflows",
            "Budget and expense tracking",
            "External and internal API integrations",
          ],
          badges: ["react", "typescript", "nestjs", "redux", "postgres"],
        },

        {
          title: "Supplier Access Control & Hospital Certificate Management",
          description:
            "A web platform for managing supplier access and administrative certificate workflows in hospital environments.",
          tags: ["Project", "Frontend", "Backend", "Support"],
          list: [
            "Supplier access management",
            "Certificate management workflows",
            "Administrative process tracking",
          ],
          badges: ["react", "javascript", "express", "mongodb"],
        },
      ],

      tags: {
        guide: "Guide",
        projects: "Project",
        ssl: "SSL",
        backend: "Backend",
        frontend: "Frontend",
        support: "Support",
      },
    },
  },
};

export default enTranslation;
