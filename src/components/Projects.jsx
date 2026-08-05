import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Paleta de colores de acento por categoría
const categoryColor = {
  "Cloud & Alta Disponibilidad": "from-violet-500/20 to-indigo-500/10 border-violet-500/20",
  "Microservicios & QA Automation": "from-sky-500/20 to-indigo-500/10 border-sky-500/20",
  "Backend & Billetera Digital": "from-indigo-500/20 to-purple-500/10 border-indigo-500/20",
  "Fullstack & Mobile": "from-emerald-500/20 to-teal-500/10 border-emerald-500/20",
  "Fullstack Java": "from-amber-500/20 to-orange-500/10 border-amber-500/20",
  "DevOps & Automatización": "from-rose-500/20 to-pink-500/10 border-rose-500/20",
};

const categoryAccent = {
  "Cloud & Alta Disponibilidad": "text-violet-400",
  "Microservicios & QA Automation": "text-sky-400",
  "Backend & Billetera Digital": "text-indigo-400",
  "Fullstack & Mobile": "text-emerald-400",
  "Fullstack Java": "text-amber-400",
  "DevOps & Automatización": "text-rose-400",
};

// Placeholder SVG cuando no hay imagen de portada
const CoverPlaceholder = ({ category }) => {
  const icons = {
    "Cloud & Alta Disponibilidad": "devicon-kubernetes-plain colored",
    "Microservicios & QA Automation": "devicon-laravel-original colored",
    "Backend & Billetera Digital": "devicon-fastapi-plain colored",
    "Fullstack & Mobile": "devicon-react-original colored",
    "Fullstack Java": "devicon-spring-original colored",
    "DevOps & Automatización": "devicon-docker-plain colored",
  };
  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-900/60">
      <i className={`${icons[category] || 'devicon-github-original'} text-6xl opacity-20`} />
    </div>
  );
};

const ProjectCard = ({ project, index, isVisible }) => {
  const accent = categoryAccent[project.category] || "text-indigo-400";
  const grad = categoryColor[project.category] || "from-indigo-500/20 to-purple-500/10 border-indigo-500/20";

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-white/8 bg-neutral-900/30 overflow-hidden
        hover:-translate-y-2 hover:border-white/15 hover:shadow-2xl hover:shadow-black/40
        transition-all duration-500 ease-out
        ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Portada */}
      <div className="relative w-full aspect-video overflow-hidden">
        {project.cover
          ? (
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          )
          : <CoverPlaceholder category={project.category} />
        }
        {/* Overlay gradiente sobre portada */}
        <div className={`absolute inset-0 bg-gradient-to-br ${grad} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
        {/* Número de proyecto */}
        <span className="absolute top-3 left-4 text-xs font-mono text-white/20 font-bold">
          {String(index + 1).padStart(2, '0')}
        </span>
        {/* Categoría badge */}
        <span className={`absolute top-3 right-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm ${accent}`}>
          {project.category}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className={`text-xl font-bold text-white mb-1 group-hover:${accent} transition-colors tracking-tight`}>
          {project.title}
        </h3>
        <p className="text-xs text-neutral-600 font-medium mb-3">{project.role}</p>
        <p className="text-sm text-neutral-400 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-1 text-[11px] font-semibold text-neutral-500 border border-neutral-800 rounded-md">
              {t}
            </span>
          ))}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/5">
          <Link
            to={`/proyecto/${project.id}`}
            className="flex-1 text-center text-xs font-bold py-2.5 rounded-lg bg-white/5 hover:bg-indigo-600 text-neutral-300 hover:text-white border border-white/8 hover:border-indigo-500 transition-all duration-300"
          >
            Caso de estudio →
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="p-2.5 rounded-lg border border-white/8 text-neutral-500 hover:text-white hover:border-neutral-600 transition-all"
              aria-label="Código en GitHub">
              <FaGithub className="text-base" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer"
              className="p-2.5 rounded-lg border border-white/8 text-neutral-500 hover:text-indigo-400 hover:border-indigo-500 transition-all"
              aria-label="Demo en vivo">
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} id="proyectos"
      className={`py-24 border-t border-white/5 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-3">Portafolio</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Proyectos <span className="text-indigo-400">destacados</span>
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-end">
          <p className="text-neutral-500 text-sm leading-relaxed">
            Soluciones end-to-end que abarcan cloud-native, microservicios, QA automation y
            fullstack. Cada uno documenta decisiones técnicas y resultados medibles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;