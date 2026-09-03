const esTranslation = {
  translation: {
    home: "Inicio",

    languages: {
      title: "Idioma",
      es: "Español",
      en: "Inglés",
    },

    mainInfo: {
      career: "Ingeniero Backend e Infraestructura",
      university: "UASLP",
      description:
        "Ingeniero Backend e Infraestructura con experiencia en el diseño, desarrollo y operación de plataformas de software en producción. Ex Backend Lead con experiencia en la construcción de arquitecturas backend escalables, APIs, aplicaciones orientadas al negocio e infraestructura de alta disponibilidad. Actualmente enfocado en la modernización de entornos legacy mediante Docker, Kubernetes, Talos Linux, Proxmox y LINSTOR/DRBD, cubriendo el ciclo completo desde la arquitectura y desarrollo de software hasta el despliegue y la operación en producción.",
    },

    job_history: "Experiencia profesional",

    jobs: {
      "Bitcat Services": {
        description:
          "Ingeniería de software e infraestructura enfocada en sistemas backend, alta disponibilidad, automatización, integraciones industriales y operación de servicios en producción.",
        title: "Ingeniero de Software e Infraestructura",
        start: "Mayo 2024",
        end: "Actualidad",
        activities: [
          "Diseñé y desplegué infraestructura de servidores, incluyendo instalación física, cableado, configuración de red, switching, virtualización, almacenamiento y alta disponibilidad.",
          "Administré clústeres Proxmox de alta disponibilidad que alojan aplicaciones y bases de datos en producción, utilizando almacenamiento replicado mediante LINSTOR para minimizar tiempos de inactividad y migración de máquinas virtuales.",
          "Administré clústeres Kubernetes ejecutándose sobre Talos Linux, gestionando despliegues de aplicaciones, cargas de trabajo de alta disponibilidad, almacenamiento persistente e infraestructura de producción.",
          "Implementé Cloudflare Tunnels para exponer servicios web de forma segura a Internet sin requerir direcciones IP públicas estáticas ni exposición directa de puertos de entrada.",
          "Implementé pipelines de CI/CD utilizando GitHub Actions y Docker, reduciendo aproximadamente un 80% los errores relacionados con builds y los tiempos de despliegue.",
          "Dockericé aplicaciones legacy y estandaricé los entornos de desarrollo, reduciendo aproximadamente un 50% los errores relacionados con diferencias entre entornos.",
          "Desarrollé una plataforma full-stack para la gestión de presupuestos de proyectos, integrando servicios internos con la API de CROL, reduciendo aproximadamente un 40% el tiempo necesario para solicitar materiales y mejorando la visibilidad del presupuesto en tiempo real.",
          "Lideré el desarrollo de una plataforma interna para la gestión de cotizaciones, eliminando los costos de licenciamiento asociados con la solución propietaria utilizada anteriormente.",
          "Integré sistemas web con PLCs e infraestructura de red industrial para mantenimiento, monitoreo y entornos de Industria 4.0.",
        ],
      },

      "Cooperative Computing": {
        description:
          "Desarrollo full-stack para aplicaciones de clientes, enfocado en interfaces de usuario, implementación frontend y automatización de repositorios.",
        title: "Practicante Full Stack",
        start: "Septiembre 2023",
        end: "Mayo 2024",
        activities: [
          "Desarrollé interfaces de usuario para aplicaciones propietarias, mejorando la usabilidad y experiencia del usuario.",
          "Implementé automatizaciones mediante GitHub para estandarizar el formato del código y aplicar reglas específicas dentro de los repositorios.",
          "Desarrollé funcionalidades frontend basadas en interfaces y flujos de aplicación previamente diseñados.",
        ],
      },

      "AIA Partners": {
        description:
          "Liderazgo del desarrollo backend de una plataforma fintech utilizando Node.js, Express y MongoDB, con enfoque en arquitectura, rendimiento, automatización, seguridad y desarrollo del equipo.",
        title: "Backend Lead Developer",
        start: "Junio 2022",
        end: "Septiembre 2023",
        activities: [
          "Diseñé e implementé la arquitectura backend de una plataforma fintech utilizando Node.js y Express, reduciendo aproximadamente un 30% los tiempos de respuesta de las APIs y un 40% los errores de la aplicación.",
          "Implementé Replica Sets de MongoDB para mejorar la disponibilidad, redundancia y tolerancia a fallos de las bases de datos.",
          "Implementé tareas programadas para automatizar flujos de trabajo backend y procesos recurrentes del negocio.",
          "Implementé mecanismos de cifrado y almacenamiento seguro de archivos con información sensible.",
          "Proporcioné soporte técnico y capacitación a usuarios y administradores.",
          "Lideré y capacité al equipo de desarrollo, coordinando responsabilidades y formación técnica para acelerar la entrega del producto.",
        ],
      },

      "Pixel & Byte": {
        description:
          "Desarrollo de herramientas para el procesamiento de imágenes médicas utilizadas en flujos de entrenamiento de inteligencia artificial.",
        title: "Servicio Social",
        start: "Junio 2022",
        end: "Diciembre 2022",
        activities: [
          "Desarrollé un convertidor DICOM a JSON sin pérdida de información para procesar conjuntos de imágenes médicas utilizadas en el entrenamiento de modelos de inteligencia artificial y detección temprana de enfermedades.",
          "Desarrollé un servidor Node.js capaz de ejecutar scripts de procesamiento escritos en Python.",
          "Implementé flujos de procesamiento mediante Python para manejar grandes conjuntos de imágenes médicas.",
        ],
      },

      UPSLP: {
        description:
          "Desarrollo de Brand Wars, un videojuego educativo creado para la Semana LAG 2022 utilizando JavaScript y RPG Maker.",
        title: "Desarrollador de Videojuegos Freelance",
        start: "Noviembre 2021",
        end: "Marzo 2022",
        activities: [
          "Desarrollé un videojuego educativo utilizando JavaScript y RPG Maker para enseñar conceptos de marketing durante la Semana LAG 2022.",
          "Implementé interacciones personalizadas de interfaz y funcionalidades de gameplay utilizando JavaScript.",
          "Realicé pruebas con usuarios para validar el funcionamiento, usabilidad y experiencia general del videojuego.",
        ],
      },
    },

    skills: "Habilidades",

    skillsTabs: {
      languages: "Lenguajes de programación",
      frameworks: "Frameworks y tecnologías",
      databases: "Bases de datos",
      tools: "Infraestructura y herramientas",
    },

    skillsSet: {
      frameworks: [
        {
          img: "node.svg",
          title: "Node.js",
          time: "5 años",
        },
        {
          img: "express.svg",
          title: "Express",
          time: "5 años",
        },
        {
          img: "nest.svg",
          title: "NestJS",
          time: "2 años",
        },
        {
          img: "react.svg",
          title: "React",
          time: "4 años",
        },
        {
          img: "laravel.svg",
          title: "Laravel",
          time: "1 año",
        },
        {
          img: "docker.svg",
          title: "Docker",
          time: "2+ años",
        },
        {
          img: "nginx.svg",
          title: "Nginx",
          time: "2+ años",
        },
      ],

      languages: [
        {
          img: "javascript.svg",
          title: "JavaScript",
          time: "5 años",
        },
        {
          img: "typescript.svg",
          title: "TypeScript",
          time: "3+ años",
        },
        {
          img: "html.svg",
          title: "HTML5",
          time: "5 años",
        },
        {
          img: "php.svg",
          title: "PHP",
          time: "1 año",
        },
        {
          img: "c.svg",
          title: "C",
          time: "3 años",
        },
      ],

      databases: [
        {
          img: "mongod.svg",
          title: "MongoDB",
          time: "4+ años",
        },
        {
          img: "postgre.svg",
          title: "PostgreSQL",
          time: "2+ años",
        },
      ],

      tools: [
        {
          img: "proxmox.svg",
          title: "Proxmox VE",
          time: "2+ años",
        },
        {
          img: "kubernetes.svg",
          title: "Kubernetes",
          time: "1+ año",
        },
        {
          img: "talos.svg",
          title: "Talos Linux",
          time: "1+ año",
        },
        {
          img: "git.svg",
          title: "Git",
          time: "5 años",
        },
        {
          img: "github.svg",
          title: "GitHub",
          time: "5 años",
        },
        {
          img: "postman.svg",
          title: "Postman",
          time: "4+ años",
        },
        {
          img: "figma.svg",
          title: "Figma",
          time: "3 años",
        },
      ],
    },

    projects: {
      header: "Proyectos",

      list: [
        {
          title:
            "Guía para solucionar errores de renovación SSL/TLS con Certbot",
          description:
            "Guía paso a paso para solucionar errores durante la renovación de certificados SSL/TLS provocados por timeouts en el desafío HTTP de Certbot. Está orientada a usuarios con poca experiencia en administración de servidores y certificados TLS.",
          url: "https://github.com/DEadMan10sds/CertbotSSLRenovationFail",
          img: "CertbotError.png",
          tags: ["Guide", "SSL"],
        },

        {
          title: "Plataforma de Trazabilidad para Línea de Producción",
          description:
            "Sistema de trazabilidad de producción que registra el ciclo de vida de piezas ensambladas, genera números de serie y etiquetas, registra cada etapa del proceso de fabricación y valida el flujo esperado dentro de la línea de producción.",
          tags: ["Project", "Frontend", "Backend"],
          list: [
            "Comunicación de eventos en tiempo real mediante WebSockets",
            "Monitoreo de archivos mediante Python",
            "Trazabilidad del proceso de producción",
            "Generación de números de serie y etiquetas",
          ],
          badges: ["react", "javascript", "express", "mongodb"],
        },

        {
          title: "Plataforma de Gestión de Presupuestos de Proyectos",
          description:
            "Plataforma para la gestión de presupuestos que permite controlar fondos asignados, compras, proveedores, costos, presupuesto restante y estado de adquisición de materiales, proporcionando visibilidad en tiempo real de los gastos de cada proyecto.",
          tags: ["Project", "Frontend", "Backend"],
          list: [
            "Operaciones transaccionales en base de datos",
            "Patrón State para flujos de adquisición",
            "Control de presupuestos y gastos",
            "Integraciones con APIs internas y externas",
          ],
          badges: ["react", "typescript", "nestjs", "redux", "postgres"],
        },

        {
          title:
            "Control de Acceso de Proveedores y Gestión de Certificados Hospitalarios",
          description:
            "Plataforma web para administrar el acceso de proveedores y gestionar flujos administrativos relacionados con certificados dentro de entornos hospitalarios.",
          tags: ["Project", "Frontend", "Backend", "Support"],
          list: [
            "Gestión de acceso de proveedores",
            "Flujos de gestión de certificados",
            "Seguimiento de procesos administrativos",
          ],
          badges: ["react", "javascript", "express", "mongodb"],
        },
      ],

      tags: {
        guide: "Guía",
        projects: "Proyecto",
        ssl: "SSL",
        backend: "Backend",
        frontend: "Frontend",
        support: "Soporte",
      },
    },
  },
};

export default esTranslation;
