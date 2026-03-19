const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
           <a href="#" className="text-neutral-400 hover:text-white transition-colors">Github</a>
           <a href="#" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Tu Nombre. Construido con React, Vite & Tailwind.
        </p>
      </div>
    </footer>
  );
};
export default Footer;