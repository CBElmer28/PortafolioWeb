const Contact = () => {
  return (
    <div className="py-24 text-center">
      <div className="max-w-3xl mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 p-12 rounded-3xl border border-indigo-500/20 shadow-2xl shadow-indigo-500/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Buscando talento tecnológico?</h2>
        <p className="text-neutral-400 mb-8 text-lg">
          Actualmente estoy en búsqueda activa de oportunidades para prácticas pre-profesionales o roles Junior en áreas de Desarrollo de Software, DevOps o Data Analytics. ¡Conversemos sobre cómo puedo aportar valor a tu equipo!
        </p>
        <a 
          href="mailto:tuemail@ejemplo.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-500 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
        >
          <span>Enviar un correo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </a>
      </div>
    </div>
  );
};
export default Contact;