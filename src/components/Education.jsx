const Education = () => {
  return (
    <div className="py-24 border-t border-white/5">
      <h2 className="text-3xl font-bold text-center mb-16">
        Formación & <span className="text-indigo-500">Credenciales</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Ingeniería de Software</h3>
            <p className="text-indigo-400 font-medium mb-4">Universidad Tecnológica del Perú (UTP)</p>
            <p className="text-neutral-400 text-sm">Estudiante de últimos ciclos. Formación sólida en arquitectura de software, bases de datos y gestión de proyectos tecnológicos.</p>
          </div>

          <div className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Idiomas</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                Inglés Avanzado (Certificado ICPNA)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                Nivel B2 TOEFL
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/40 p-6 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6">Certificaciones Clave</h3>
          
          <div className="space-y-6">
            <div className="relative pl-6 border-l border-indigo-500/30">
              <span className="absolute -left-[5px] top-1 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></span>
              <h4 className="font-semibold text-neutral-200">Google Cloud Skills Boost (2025)</h4>
              <p className="text-sm text-neutral-400 mt-1">BigQuery for Data Analysts • Derive Insights • Create ML Models</p>
            </div>
            
            <div className="relative pl-6 border-l border-indigo-500/30">
              <span className="absolute -left-[5px] top-1 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></span>
              <h4 className="font-semibold text-neutral-200">Cisco Networking Academy</h4>
              <p className="text-sm text-neutral-400 mt-1">Ciberseguridad (2025) • Networking (2024)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;