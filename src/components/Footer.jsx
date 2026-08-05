const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-neutral-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Elmer Josué Calizaya Bendezú — Construido con React, Vite & Tailwind CSS
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/CBElmer28" target="_blank" rel="noreferrer"
              className="text-neutral-600 hover:text-neutral-300 transition-colors text-xs">GitHub</a>
            <a href="https://www.linkedin.com/in/elmer-calizaya-0a4976321/" target="_blank" rel="noreferrer"
              className="text-neutral-600 hover:text-neutral-300 transition-colors text-xs">LinkedIn</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cbelmer28@gmail.com" target="_blank" rel="noreferrer"
              className="text-neutral-600 hover:text-neutral-300 transition-colors text-xs">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
