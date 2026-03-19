import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="py-24">
      <h2 className="text-3xl font-bold text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
        Proyectos Destacados
        <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-1 bg-indigo-500 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="group bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <Link 
                to={`/proyecto/${project.id}`} 
                className="mt-6 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Ver detalles del caso <span>&rarr;</span>
              </Link>
            </div>
            
            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-900/20 rounded-full border border-indigo-500/20">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Projects;