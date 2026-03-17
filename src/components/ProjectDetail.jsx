import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
// Reutilizamos el Footer y Navbar si quieres, o creamos un layout, por ahora un Navbar simple de regreso
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-white">Proyecto no encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans">
      {/* Navbar simplificado para regresar */}
      <nav className="border-b border-white/10 bg-neutral-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-neutral-400 hover:text-indigo-400 transition-colors">
            <FaArrowLeft /> Volver al Portafolio
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-20">
        {/* Cabecera del Proyecto */}
        <div className="mb-12 text-center">
          <span className="text-indigo-500 font-medium tracking-wider text-sm uppercase">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{project.title}</h1>
          <p className="text-xl text-neutral-400 leading-relaxed">{project.description}</p>
        </div>

        {/* Stack Tecnológico */}
        <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-white mb-4">Tecnologías Utilizadas</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(t => (
              <span key={t} className="px-4 py-2 bg-neutral-950 rounded-lg border border-neutral-800 text-indigo-300 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Detalles Estructurales (Ideal para tu perfil de Arquitectura/Data) */}
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">El Reto</h3>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Aquí puedes explicar el problema que resolviste. Por ejemplo, en MaxiCompra, cómo estructuraste el pipeline ETL. En PixelMoney, por qué elegiste una arquitectura de microservicios en lugar de un monolito.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">Arquitectura & Solución</h3>
            <p className="text-neutral-400 leading-relaxed text-lg mb-6">
              Detalla cómo integraste las herramientas. Puedes mencionar los flujos de CI/CD que usaste, cómo estructuraste la base de datos, o las decisiones de rendimiento que tomaste.
            </p>
            {/* Espacio para un diagrama de arquitectura o captura de pantalla */}
            <div className="w-full h-64 bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-neutral-500 italic">
              [Espacio para captura de pantalla o diagrama de arquitectura]
            </div>
          </section>
        </div>

        {/* Botones de Acción */}
        <div className="mt-16 flex justify-center gap-6">
          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all">
            <FaGithub /> Ver Repositorio
          </a>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;