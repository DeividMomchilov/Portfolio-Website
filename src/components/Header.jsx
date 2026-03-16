export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-slate-800">Deivid Momchilov</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-500 transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
        </nav>
        <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-colors">
            Contact Me
        </a>
        </div>
    </header>
  )
}