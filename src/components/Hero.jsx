const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
        <span className="block text-white mb-2">Elmer Josué</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600">
          Calizaya Bendezú
        </span>
      </h1>
      
      <h2 className="text-xl md:text-2xl font-medium text-indigo-300 mb-8 tracking-wide">
        Ingeniero de Software | Full Stack | Data & Cloud / DevOps
      </h2>
      
      <p className="text-base md:text-lg text-neutral-400 max-w-3xl mb-10 leading-relaxed px-4">
        Estudiante de últimos ciclos de Ingeniería de Software (UTP) con un perfil tecnológico versátil y orientado a la construcción de soluciones end-to-end. Mi experiencia abarca desde el desarrollo Full Stack hasta el diseño de Arquitecturas Cloud-Native, DevOps y Business Intelligence. Me apasiona la automatización y la integración de IA para crear software escalable y extraer valor estratégico de los datos.
      </p>
      
      <div className="flex gap-4">
        <button 
          onClick={() => document.getElementById('proyectos').scrollIntoView()}
          className="px-8 py-3 bg-indigo-600 rounded-full font-semibold text-white shadow-lg shadow-indigo-500/20 hover:scale-105 hover:bg-indigo-500 transition-all"
        >
          Ver Proyectos
        </button>
        <button 
          onClick={() => document.getElementById('contacto').scrollIntoView()}
          className="px-8 py-3 bg-transparent border border-neutral-700 rounded-full font-semibold text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all"
        >
          Contactar
        </button>
      </div>
    </div>
  );
};

export default Hero;