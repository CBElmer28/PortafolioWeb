export const projects = [
  {
    id: 1,
    title: "PixelMoney",
    category: "Backend & Cloud / Microservicios",
    description: "Arquitectura de microservicios desplegada en contenedores con flujos de CI/CD.",
    tech: ["Java", "Spring Boot", "Docker", "AWS", "GitHub Actions"],
    objective: "Diseñar un sistema altamente disponible que permita escalar sus servicios financieros de forma independiente sin afectar el rendimiento global, utilizando una arquitectura basada en microservicios, bases de datos serverless y despliegue automatizado.",
    github: "https://github.com/tu-usuario/pixelmoney",
    demo: "", 
    features: [
      {
        title: "Arquitectura Escalable",
        description: "Separación de responsabilidades en microservicios independientes, permitiendo escalar solo los módulos con mayor tráfico sin afectar el resto del sistema.",
        image: ""
      },
      {
        title: "Integración Continua (CI/CD)",
        description: "Pipelines automatizados con GitHub Actions que ejecutan pruebas unitarias y construyen imágenes Docker con cada push a la rama principal.",
        image: ""
      },
      {
        title: "Base de Datos Serverless",
        description: "Implementación de bases de datos de alta disponibilidad que se escalan automáticamente según la demanda operativa de la aplicación.",
        image: ""
      }
    ]
  },
  {
    id: 2,
    title: "MaxiCompra",
    category: "Data Intelligence & BI",
    description: "Implementación integral de Inteligencia de Negocios para análisis estratégico de ventas minoristas.",
    tech: ["Power BI", "SQL Server", "SSIS", "DAX", "Excel"],
    objective: "Implementar un sistema integral de Inteligencia de Negocios para transformar datos transaccionales en información estratégica, permitiendo identificar patrones de compra, optimizar inventarios y visualizar el comportamiento de ventas mediante dashboards interactivos.",
    github: "https://github.com/tu-usuario/maxicompra",
    demo: "",
    features: [
      {
        title: "Procesamiento ETL Automatizado",
        description: "Diseño de flujos en Visual Studio con SSIS para la extracción desde fuentes crudas, transformación de datos mediante derivaciones y carga automatizada en SQL Server.",
        image: "" 
      },
      {
        title: "Modelado Dimensional",
        description: "Construcción de un Data Warehouse bajo el esquema de Estrella, centralizando la tabla de hechos de ventas conectada a dimensiones dinámicas (Tiempo, Producto, Cliente, Región).",
        image: ""
      },
      {
        title: "Data Storytelling & KPIs",
        description: "Creación de dashboards interactivos en Power BI utilizando funciones DAX avanzadas para revelar insights clave como el ticket promedio, estacionalidad y productos estrella.",
        image: ""
      }
    ]
  },
  {
    id: 3,
    title: "MiBarrio",
    category: "Frontend & Mobile",
    description: "Aplicación móvil para democratizar el comercio digital en pequeños y medianos negocios.",
    tech: ["React Native", "Expo", "Node.js", "MySQL", "Google Maps API"],
    objective: "Desarrollar una aplicación móvil multiplataforma que conecte a los negocios de barrio con consumidores locales, ofreciendo una experiencia operativa accesible, comisiones reducidas y herramientas esenciales de gestión y delivery.",
    github: "https://github.com/tu-usuario/mibarrio",
    demo: "",
    features: [
      {
        title: "Geolocalización en Tiempo Real",
        description: "Integración de la API de Google Maps para mostrar la ubicación exacta de los locales y calcular distancias precisas para el sistema de delivery de proximidad.",
        image: ""
      },
      {
        title: "Gestión Integral de Pedidos",
        description: "Desarrollo de un flujo funcional completo que abarca desde un carrito de compras intuitivo hasta la pasarela de pagos y la asignación de repartidores.",
        image: ""
      },
      {
        title: "Arquitectura Multiplataforma",
        description: "Uso de React Native y Expo para construir interfaces modulares y responsivas tanto para Android como iOS, soportadas por un backend robusto en Node.js y MySQL.",
        image: ""
      }
    ]
  }
];