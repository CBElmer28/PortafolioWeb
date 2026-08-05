const Education = () => {
  return (
    <section className="py-24 border-t border-white/5">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-3">Formación</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
            Educación &<br />
            <span className="text-indigo-400">Credenciales</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* Educación formal */}
        <div className="space-y-0 border-r border-white/5 pr-0 lg:pr-16">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-8">Académica</p>

          <div className="pb-10 border-b border-white/5">
            <span className="text-xs font-mono text-neutral-700 block mb-2">Mar 2021 – Actualidad</span>
            <h3 className="text-lg font-bold text-white mb-1">Ingeniería de Software</h3>
            <p className="text-indigo-400 text-sm font-medium mb-3">Universidad Tecnológica del Perú (UTP)</p>
            <p className="text-neutral-500 text-sm leading-relaxed">
              IX ciclo. Formación en arquitectura de software, bases de datos,
              gestión de proyectos y metodologías ágiles.
            </p>
          </div>

          <div className="pt-10">
            <span className="text-xs font-mono text-neutral-700 block mb-2">2022 – 2023</span>
            <h3 className="text-lg font-bold text-white mb-1">Inglés Avanzado</h3>
            <p className="text-indigo-400 text-sm font-medium mb-3">ICPNA</p>
            <p className="text-neutral-500 text-sm">Nivel B2 validado por prueba TOEFL.</p>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-12 lg:mt-0 lg:pl-16">
          <p className="text-xs font-bold tracking-widest uppercase text-neutral-600 mb-8">Certificaciones</p>

          <div className="space-y-0">
            {[
              {
                year: "2025",
                title: "Google Cloud Skills Boost",
                detail: "BigQuery for Data Analysts · Derive Insights · Create ML Models with BigQuery ML"
              },
              {
                year: "2025",
                title: "Cisco — Ciberseguridad",
                detail: "Networking Academy · Fundamentos de seguridad en redes"
              },
              {
                year: "2024",
                title: "Cisco — Networking",
                detail: "Networking Academy · Infraestructura y protocolos de red"
              },
            ].map((cert, i) => (
              <div key={i} className="flex gap-6 py-6 border-b border-white/5 group hover:bg-white/[0.02] transition-colors -mx-4 px-4">
                <span className="text-xs font-mono text-neutral-700 w-10 shrink-0 mt-0.5">{cert.year}</span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-200 mb-1 group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
