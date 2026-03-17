const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-xl font-bold tracking-tighter hover:text-white transition-colors cursor-pointer">
            Mi<span className="text-indigo-500">Portafolio</span>
          </h2>
          
          <div className="hidden md:flex space-x-8">
  {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
  <a 
    key={item}
    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
    className="text-sm font-medium text-neutral-400 hover:text-indigo-400 transition-colors duration-300"
  >
    {item}
  </a>
  ))}
</div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;