const Contact = () => {
  return (
    <section id="contacto" className="py-24 border-t border-white/5">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">

        <div className="lg:col-span-7">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-3">Contacto</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight mb-8">
            Disponible para<br />
            <span className="text-indigo-400">prácticas</span><br />
            <span className="text-neutral-500">& roles junior</span>
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed max-w-lg">
            Busco oportunidades laborales. Perfil orientado
            al ecosistema Java — listo para aportar desde el primer día en un
            equipo de desarrollo.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cbelmer28@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-6 py-5 border border-neutral-700 hover:border-indigo-500 rounded-xl group transition-all hover:bg-indigo-500/5"
          >
            <div>
              <p className="text-xs text-neutral-600 mb-1">Email</p>
              <p className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                cbelmer28@gmail.com
              </p>
            </div>
            <span className="text-neutral-600 group-hover:text-indigo-400 transition-colors text-lg">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/elmer-calizaya-0a4976321/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-6 py-5 border border-neutral-700 hover:border-indigo-500 rounded-xl group transition-all hover:bg-indigo-500/5"
          >
            <div>
              <p className="text-xs text-neutral-600 mb-1">LinkedIn</p>
              <p className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                Elmer Calizaya Bendezú
              </p>
            </div>
            <span className="text-neutral-600 group-hover:text-indigo-400 transition-colors text-lg">↗</span>
          </a>

          <a
            href="https://github.com/CBElmer28"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-6 py-5 border border-neutral-700 hover:border-indigo-500 rounded-xl group transition-all hover:bg-indigo-500/5"
          >
            <div>
              <p className="text-xs text-neutral-600 mb-1">GitHub</p>
              <p className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                github.com/CBElmer28
              </p>
            </div>
            <span className="text-neutral-600 group-hover:text-indigo-400 transition-colors text-lg">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
