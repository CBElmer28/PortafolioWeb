import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  const experiences = [
    {
      period: "Mar 2025 – Jul 2025",
      role: "Desarrollador Java Backend",
      project: "HealthyMe — Clínica Virtual",
      org: "Proyecto UTP",
      type: "Backend",
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate", "JUnit", "Git"],
      bullets: [
        "Desarrollé servicios backend con Spring Boot para la gestión de usuarios y citas médicas, implementando la lógica de negocio completa.",
        "Integré Spring Data JPA e Hibernate con bases de datos relacionales, asegurando persistencia y recuperación eficiente.",
        "Implementé la capa de seguridad con Spring Security y JWT. Participé en code reviews y desarrollé pruebas unitarias con JUnit.",
      ]
    },
    {
      period: "2026",
      role: "Colaboración Técnica & Bases de Datos",
      project: "Sistema de Gestión Bibliotecaria",
      org: "Proyecto Aplicado",
      type: "Backend · DB",
      tech: ["MySQL", "PostgreSQL", "SQL", "Pruebas automatizadas", "Code Review"],
      bullets: [
        "Diseñé y optimicé consultas en MySQL/PostgreSQL, garantizando integridad referencial y rendimiento de la aplicación.",
        "Colaboré en el desarrollo de nuevas funcionalidades en entorno iterativo, aplicando buenas prácticas de programación.",
        "Participé activamente en revisión de código y estructuración de pruebas automatizadas.",
      ]
    },
    {
      period: "Ago – Dic 2025",
      role: "Integración y Consolidación de Datos",
      project: "MaxiCompra — Retail BI",
      org: "Proyecto UTP",
      type: "Data · SQL",
      tech: ["SQL Server", "SSIS", "ETL", "Power BI", "DAX"],
      bullets: [
        "Desarrollé consultas SQL estructuradas en SQL Server para consolidación de información empresarial.",
        "Colaboré en la extracción y transformación de datos, asegurando calidad e integración con otras plataformas.",
      ]
    },
  ];

  return (
    <section ref={ref} id="experiencia" className={`py-24 border-t border-white/5 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-3">Trayectoria</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Experiencia<br />
            <span className="text-indigo-400">aplicada</span>
          </h2>
        </div>
      </div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-white/5 hover:bg-white/[0.015] transition-colors group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Izquierda: meta */}
            <div className="lg:col-span-3">
              <span className="text-xs font-mono text-neutral-600 block mb-2">{exp.period}</span>
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-500/70 bg-indigo-500/10 px-2 py-0.5 rounded">
                {exp.type}
              </span>
              <p className="text-sm text-neutral-600 mt-3">{exp.org}</p>
            </div>

            {/* Centro: contenido principal */}
            <div className="lg:col-span-9">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                {exp.role}
              </h3>
              <p className="text-indigo-400 text-sm font-medium mb-5">{exp.project}</p>

              <ul className="space-y-2 mb-6">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-neutral-400 leading-relaxed flex gap-3">
                    <span className="text-indigo-500 mt-1.5 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 border border-neutral-800 text-neutral-500 rounded group-hover:border-neutral-700 group-hover:text-neutral-400 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
