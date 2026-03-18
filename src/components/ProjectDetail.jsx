import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white">
        <h2 className="text-3xl font-bold mb-4">Proyecto no encontrado</h2>
        <Link to="/" className="text-indigo-400 hover:text-indigo-300">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans pb-20">
      {/* Navbar simplificado */}
      <nav className="border-b border-white/10 bg-neutral-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-neutral-400 hover:text-indigo-400 transition-colors">
            <FaArrowLeft /> Volver al Portafolio
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-20 animate-fade-in-up">
        {/* Cabecera del Proyecto */}
        <div className="mb-16 text-center">
          <span className="text-indigo-500 font-bold tracking-widest text-xs uppercase bg-indigo-500/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-6">{project.title}</h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">{project.description}</p>
        </div>

        {/* Stack Tecnológico */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {project.tech.map(t => (
            <span key={t} className="px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800 text-indigo-300 font-medium text-sm">
              {t}
            </span>
          ))}
        </div>

        {/* NUEVO: Objetivo del Proyecto */}
        <div className="mb-24 bg-neutral-900/30 p-8 md:p-12 rounded-3xl border border-white/5 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <span className="text-indigo-500"></span> Objetivo del Proyecto
          </h3>
          <p className="text-neutral-400 leading-relaxed text-lg">
            {project.objective}
          </p>
        </div>

        {/* Características Destacadas */}
        <div className="space-y-24 mb-24">
          <h3 className="text-3xl font-bold text-center text-white mb-16">Características Clave</h3>
          
          {project.features?.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/10 group bg-neutral-900 aspect-video flex items-center justify-center">
                    {/* Si no tienes la imagen real aún, se mostrará un placeholder gris oscuro */}
                    {feature.image ? (
                        <img 
                            src={feature.image} 
                            alt={feature.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <span className="text-neutral-600">Imagen: {feature.title}</span>
                    )}
                    <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-neutral-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-wrap justify-center gap-6 pt-12 border-t border-white/5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-full transition-all hover:-translate-y-1">
              <FaGithub className="text-xl" /> Ver Código Fuente
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-indigo-500/25">
              <FaExternalLinkAlt className="text-lg" /> Visitar Proyecto
            </a>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;