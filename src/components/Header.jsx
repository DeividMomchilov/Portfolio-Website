export default function Header() {
    return (
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
          <div className="text-xl font-bold text-white tracking-tight">
            Deivid Momchilov
          </div>
  
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
  
          <a
            href="#contact"
            className="hidden md:inline-flex bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-colors"
          >
            Contact Me
          </a>
        </div>
      </header>
    );
  }