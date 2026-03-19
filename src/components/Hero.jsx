import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  // ✅ Datos de tu Sobre Mí (Extracto)
  const aboutMeText = "Estudiante de últimos ciclos de Ingeniería de Software (UTP) con un perfil tecnológico versátil y orientado a la construcción de soluciones end-to-end. Mi experiencia abarca desde el desarrollo Full Stack, hasta el diseño de Arquitecturas Cloud-Native y DevOps. Poseo una sólida especialización en BI e Ingeniería de Datos, integrando herramientas de IA para optimizar flujos de trabajo.";

  // ✅ Estado para el texto animado
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  // ✅ Efecto de Máquina de Escribir
  useEffect(() => {
    if (index < aboutMeText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + aboutMeText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 15); // Velocidad de escritura (milisegundos por letra)
      return () => clearTimeout(timeoutId);
    }
  }, [index, aboutMeText]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-28 pb-20 border-b border-white/5 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      
      {/* Círculo de luz de fondo con degradado y desenfoque */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-purple-500/10 rounded-full blur-[110px] -z-10"></div>

      {/* Tu Nombre con un degradado de texto más vibrante y animación de fade-in inicial */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 animate-fade-in-up">
        <span className="block text-white mb-3">Elmer</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600">
          Calizaya 
        </span>
      </h1>
      
      {/* Tu Rol Profesional */}
      <h2 className="text-2xl md:text-3xl font-medium text-indigo-300 mb-10 tracking-wide animate-fade-in-up delay-100">
        Ingeniero de Software | Full Stack | Data & Cloud / DevOps
      </h2>
      
      {/* ✅ TEXTO CON EFECTO DE ESCRITURA */}
      <div className="text-base md:text-lg text-neutral-400 max-w-4xl mb-12 leading-relaxed px-4 min-h-[140px] md:min-h-[100px] animate-fade-in-up delay-200">
        <p>
          {typedText}
          {/* Cursor que parpadea (opcional) */}
          <span className="inline-block w-[2px] h-[1.1em] bg-indigo-500 ml-1 animate-pulse"></span>
        </p>
      </div>
      
      {/* Botones de Acción con estilos mejorados y animación de fade-in */}
      <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-300">
        <button 
          onClick={() => document.getElementById('proyectos').scrollIntoView()}
          className="group relative px-10 py-4 bg-indigo-600 rounded-full font-bold text-white shadow-lg shadow-indigo-500/20 overflow-hidden transition-all hover:scale-105 hover:shadow-indigo-500/40"
        >
          <span className="relative z-10">Ver Proyectos</span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </button>
        <button 
          onClick={() => document.getElementById('contacto').scrollIntoView()}
          className="px-10 py-4 bg-transparent border-2 border-neutral-700 rounded-full font-bold text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all shadow-md hover:border-neutral-600"
        >
          Contactar
        </button>
      </div>

      {/* Íconos de Redes Sociales con estilos unificados y animación de fade-in */}
      <div className="flex gap-6 mt-16 text-2xl text-neutral-500 animate-fade-in delay-500">
        {[
          { icon: FaGithub, link: "https://github.com/CBElmer28" },
          { icon: FaLinkedin, link: "https://www.linkedin.com/in/elmer-calizaya-0a4976321/" },
          { icon: FaEnvelope, link: "mailto:cbelmer28@gmail.com"}
        ].map((social, i) => (
          <a key={i} href={social.link} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
            <social.icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;