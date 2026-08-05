import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const roles = [
  "Full Stack Developer",
  "DevOps / Cloud",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Columna principal */}
        <div className="lg:col-span-8">

          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-emerald-500/30 rounded-full bg-emerald-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
              Disponible · Lima, Perú
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
            <span className="block text-white">Elmer</span>
            <span className="block text-white">Calizaya</span>
          </h1>

          {/* Rol rotativo */}
          <div className="h-12 flex items-center mb-8">
            <span
              className="text-3xl md:text-4xl font-bold text-indigo-400 tracking-tight transition-opacity duration-300"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {roles[roleIdx]}
            </span>
          </div>

          <p className="text-neutral-400 text-base leading-relaxed max-w-xl mb-10">
            Estudiante de Ingeniería de Software (UTP) con perfil versátil —
            construyo soluciones <span className="text-white">end-to-end</span>: desde APIs
            y microservicios hasta dashboards BI y pipelines de datos.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20 text-sm"
            >
              Ver proyectos
            </button>
            <button
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-bold rounded-full transition-all text-sm"
            >
              Contactar
            </button>
          </div>

          <div className="flex gap-5 text-neutral-500">
            {[
              { icon: FaGithub, link: "https://github.com/CBElmer28", label: "GitHub" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/elmer-calizaya-0a4976321/", label: "LinkedIn" },
              { icon: FaEnvelope, link: "https://mail.google.com/mail/?view=cm&fs=1&to=cbelmer28@gmail.com", label: "Email" }
            ].map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noreferrer"
                aria-label={s.label}
                className="hover:text-indigo-400 transition-colors text-xl">
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Columna derecha — áreas con iconos */}
        <div className="lg:col-span-4">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-5">Áreas</p>
          {[
            { icon: "devicon-spring-original colored", label: "Backend & APIs" },
            { icon: "devicon-react-original colored", label: "Frontend & Móvil" },
            { icon: "devicon-postgresql-plain colored", label: "Bases de Datos" },
            { icon: "devicon-docker-plain colored", label: "DevOps & Cloud" },
            { icon: "devicon-amazonwebservices-plain-wordmark colored", label: "AWS" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 hover:border-indigo-500/30 transition-colors group cursor-default">
              <i className={`${item.icon} text-2xl`} />
              <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;