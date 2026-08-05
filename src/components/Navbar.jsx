const Navbar = () => {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <span className="text-sm font-black tracking-tighter text-white">
            EC<span className="text-indigo-500">.</span>
          </span>

          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold tracking-widest uppercase text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cbelmer28@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
