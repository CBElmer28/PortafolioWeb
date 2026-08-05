export const projects = [
  {
    id: 1,
    title: "VoteSystem",
    category: "Cloud & Alta Disponibilidad",
    role: "Fullstack & DevOps Engineer",
    description: "Sistema de empadronamiento y votación electrónica con autenticación biométrica, microservicios en Python y base de datos en clúster con replicación síncrona.",
    tech: ["Python", "Flask/FastAPI", "Percona XtraDB", "Kubernetes", "Nginx", "AWS Rekognition"],
    cover: "", // /images/votesystem-cover.png
    objective: "Construir una plataforma de votación electrónica end-to-end que garantice la identidad real del votante mediante biometría y que no pierda un solo voto, incluso ante fallos de infraestructura, gracias a una base de datos distribuida con replicación síncrona.",
    github: "https://github.com/CBElmer28/vote",
    demo: "",
    features: [
      {
        title: "Full Stack & Autenticación Biométrica",
        description: "Wizard de empadronamiento de 5 pasos: captura facial en vivo procesada por AWS Rekognition para detección y comparación de identidad, y registro de huella dactilar mediante extracción de minucias bajo el estándar ISO/IEC 19794-2. Un votante solo puede emitir su voto tras superar ambas validaciones, blindando el sistema contra duplicidad o suplantación.",
        images: ["/images/projects/votes/verificacionFacial.png", "/images/projects/votes/huellaDactilar.png"] // 1: captura facial (DroidCam) · 2: registro de huella (minucias)
      },
      {
        title: "Arquitectura Backend & Alta Disponibilidad",
        description: "Cinco microservicios independientes (usuarios, biométrico, votación, análisis, candidatos) detrás de un API Gateway en Nginx. La persistencia corre sobre un clúster Percona XtraDB (Galera) de 3 nodos con replicación síncrona multi-maestro: cada voto se confirma en los tres nodos antes de considerarse persistido.",
        images: ["", "", ""] // 1: métricas por microservicio · 2: dashboard PMM cluster · 3: namespace k8s
      },
      {
        title: "DevSecOps, QA & Chaos Engineering",
        description: "Suite de pruebas con Pytest (backend y seguridad) y Playwright (E2E), incluyendo validaciones de Rate Limiting y SQLi. Entornos efímeros con KinD desplegados vía GitHub Actions en cada ejecución. Recovery Tests: eliminación en vivo de pods del clúster de base de datos para validar el auto-sanado de Kubernetes y la resiliencia de Percona ante fallos reales.",
        images: ["/images/projects/votes/TestPlaywright.png", ""] // pendiente: terminal kubectl delete pod + reporte Playwright
      }
    ]
  },
  {
    id: 2,
    title: "Biblioteca Digital",
    category: "Microservicios & QA Automation",
    role: "Software Engineer & DevOps",
    description: "Sistema de gestión bibliotecaria con arquitectura de microservicios en Laravel, 72 pruebas automatizadas y despliegue en AWS vía Docker.",
    tech: ["PHP 8.2", "Laravel 11", "Vue 3", "Playwright", "AWS EC2", "Docker"],
    cover: "", // /images/library-cover.png
    objective: "Arquitectar una plataforma de gestión bibliotecaria híbrida con microservicios independientes, QA automation exhaustivo y despliegue en staging aislado con Zero Trust.",
    github: "",
    demo: "",
    features: [
      {
        title: "72 Pruebas Automatizadas",
        description: "Plan completo con pruebas unitarias, integración, seguridad (XSS, SQLi, IDOR) y E2E con Playwright. Reducción del 80% en tiempo de ejecución usando DatabaseTransactions.",
        image: ""
      },
      {
        title: "Microservicios con Laravel",
        description: "6 servicios: identity, inventory, loan, penalty, notification y support (ACL a GLPI). Comunicación via Redis pub/sub y JWT compartido.",
        image: ""
      },
      {
        title: "Staging en AWS + Zero Trust",
        description: "Entornos aislados en EC2 con Docker, servidor SMTP Sandbox y acceso seguro mediante Cloudflare Tunnels sin puertos expuestos.",
        image: ""
      }
    ]
  },
  {
    id: 3,
    title: "PixelMoney",
    category: "Backend & Billetera Digital",
    role: "Fullstack & Cloud Developer",
    description: "Billetera digital con 6 microservicios en Python desplegados en AWS EC2, persistencia híbrida (RDS + AstraDB) y frontend en Next.js sobre Vercel.",
    tech: ["Python", "AWS EC2", "AWS RDS", "AstraDB", "Next.js", "TypeScript", "Vercel"],
    cover: "", // /images/pixelmoney-cover.png
    objective: "Construir una billetera digital completa —saldo, transferencias, préstamos y grupos— con arquitectura de microservicios desplegada en infraestructura cloud real (AWS), separando responsabilidades entre persistencia relacional y NoSQL según el tipo de dato.",
    github: "https://github.com/CBElmer28/billetera-digital",
    githubLabel: "Repositorio Backend",
    frontendGithub: "https://github.com/CBElmer28/front-billetera-digital",
    demo: "https://front-billetera-digital.vercel.app",
    features: [
      {
        title: "Producto: Pixel Money",
        description: "Billetera digital con login, dashboard financiero (saldo disponible, deuda pendiente, ingresos/egresos), transferencias entre usuarios, solicitud de préstamos, gestión de grupos y un historial de movimientos en tiempo real. Frontend construido en Next.js + TypeScript + Tailwind, desplegado en Vercel.",
        images: ["", "", ""] // Imagen 1 (login) · Imagen 2 (dashboard) · Imagen 3 (movimientos recientes)
      },
      {
        title: "Microservicios en Python",
        description: "Seis servicios independientes: auth_service, balance_service, gateway_service, group_service, interbank_service y ledger_service. El Gateway centraliza el enrutamiento hacia cada dominio de negocio, manteniendo el saldo, las transferencias y la lógica interbancaria desacoplados entre sí.",
        image: ""
      },
      {
        title: "Persistencia Híbrida",
        description: "AWS RDS para los datos relacionales de cuentas, saldos y transacciones (consistencia ACID), y AstraDB (Cassandra) para los registros de alta escritura del ledger de movimientos, donde la velocidad de inserción importa más que las relaciones complejas.",
        image: ""
      },
      {
        title: "Infraestructura en AWS",
        description: "Backend desplegado en instancias EC2 con scripts de deploy y teardown propios, base de datos relacional administrada en RDS, y monitoreo del entorno mediante un módulo dedicado (monitoring/). El frontend corre de forma independiente en Vercel, separando el ciclo de despliegue del cliente y del servidor.",
        image: "" // captura de la instancia EC2 + RDS en la consola de AWS
      }
    ]
  },
  {
    id: 4,
    title: "MiBarrio",
    category: "App Móvil & Delivery",
    role: "Fullstack Developer (Proyecto en equipo de 4)",
    description: "App móvil de delivery con 3 roles de usuario (cliente, cocinero, repartidor), tracking GPS en tiempo real vía WebSockets y backend Node.js con MySQL.",
    tech: ["React Native", "Expo", "Node.js", "Express", "Socket.IO", "MySQL", "Google Maps API"],
    cover: "", // /images/mibarrio-cover.png
    objective: "Digitalizar el delivery de pequeños negocios peruanos con una app multiplataforma (iOS, Android, Web) que conecte clientes, cocineros y repartidores en un mismo flujo, con seguimiento de pedidos en tiempo real.",
    github: "https://github.com/CBElmer28/MiBarrio",
    githubLabel: "Repositorio Frontend",
    backendGithub: "https://github.com/CBElmer28/MiBarrio-backend",
    demo: "",
    features: [
      {
        title: "App Multi-Rol (Cliente, Cocinero, Repartidor)",
        description: "Construida en React Native + Expo desde una sola base de código para iOS, Android y Web. Tras el login, la app lee el rol del usuario y renderiza un set de pantallas distinto por tipo de usuario: el cliente gestiona su carrito y pedidos, el cocinero administra órdenes entrantes y el repartidor recibe asignaciones con navegación GPS.",
        images: ["", ""] // Imagen 1 (lista de órdenes del cocinero) + Imagen 2 (mapa de tracking del repartidor)
      },
      {
        title: "Tracking en Tiempo Real con Socket.IO",
        description: "El repartidor emite su ubicación GPS cada 2 segundos vía WebSocket; el backend retransmite esas coordenadas al cliente para que vea la entrega moverse en el mapa en vivo. Las transiciones de estado del pedido (pendiente → preparando → en_ruta → entregada) disparan notificaciones automáticas a cocinero y repartidor mediante salas (rooms) privadas de Socket.IO.",
        image: "" // captura del mapa con la ruta trazada (Imagen 2, vista izquierda)
      },
      {
        title: "Backend Node.js + Panel Administrativo",
        description: "API REST en Express con arquitectura MVC y Sequelize ORM sobre MySQL, autenticación JWT y geocodificación de direcciones vía Google Maps API. Sobre esta base se construyó un panel de Super Usuario para administrar restaurantes y sucursales, contratar y asignar cocineros, y gestionar las categorías de comida del catálogo.",
        images: ["", "", ""] // Imagen 3 (panel admin) + Imagen 4 (gestionar cocineros) + Imagen 5 (categorías)
      }
    ]
  },
  {
    id: 5,
    title: "HealthyMe",
    category: "Fullstack Java",
    role: "Fullstack Java Developer",
    description: "Clínica virtual con backend en Spring Boot, autenticación JWT con Spring Security y documentación completa de endpoints con Swagger.",
    tech: ["Java", "Spring Boot", "Angular", "JWT", "Spring Security", "Swagger"],
    cover: "", // /images/healthyme-cover.png
    objective: "Desarrollar una plataforma de clínica virtual end-to-end con gestión de usuarios, citas médicas y seguridad robusta basada en JWT.",
    github: "",
    demo: "",
    features: [
      {
        title: "Gestión de Citas",
        description: "Módulo completo de agendamiento con lógica de negocio en Spring Boot: creación, modificación, cancelación y historial por paciente.",
        image: ""
      },
      {
        title: "Spring Security + JWT",
        description: "Autenticación stateless con tokens JWT, roles diferenciados (paciente/médico/admin) y protección de endpoints sensibles.",
        image: ""
      },
      {
        title: "API Documentada con Swagger",
        description: "Documentación exhaustiva de todos los endpoints con OpenAPI/Swagger, facilitando la integración del frontend Angular.",
        image: ""
      }
    ]
  },
  {
    id: 6,
    title: "Alertas con n8n",
    category: "DevOps & Automatización",
    role: "DevOps / Automation Engineer",
    description: "Sistema de automatización de alertas en Linux que intercepta incidencias vía Webhooks y las enruta en tiempo real con lógica personalizada en JS.",
    tech: ["n8n", "Docker", "Ubuntu", "Webhooks", "Node.js", "JavaScript"],
    cover: "", // /images/n8n-cover.png
    objective: "Desplegar un entorno de automatización en VMs Linux capaz de interceptar incidencias, transformar payloads JSON y enviar alertas en tiempo real a múltiples canales.",
    github: "",
    demo: "",
    features: [
      {
        title: "Pipelines de Webhooks",
        description: "Flujos n8n que reciben eventos de sistemas externos, los clasifican por severidad y disparan acciones automáticas configurables.",
        image: ""
      },
      {
        title: "Transformación JSON",
        description: "Lógica personalizada en JavaScript para parseo, normalización y enriquecimiento de payloads antes de su distribución.",
        image: ""
      },
      {
        title: "Despliegue en Linux",
        description: "n8n self-hosted en Ubuntu vía Docker con persistencia de workflows, variables de entorno seguras y reinicio automático.",
        image: ""
      }
    ]
  }
];