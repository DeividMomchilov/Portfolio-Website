import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-50 leading-tight drop-shadow-[0_4px_16px_rgba(16,185,129,0.35)]">
          Hi, I'm <span className="text-emerald-400">Deivid</span> <br />
          Junior Full Stack .NET Developer
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
          Aspiring .NET Developer driven by a passion for engineering and continuous learning. 
          Thrives on diving deep into complex logic to build fast, highly optimized applications 
          without over-complicating the solution.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="bg-emerald-500 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:-translate-y-1 hover:shadow-emerald-400/40 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="https://github.com/DeividMomchilov"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-900/60 text-slate-100 px-6 py-3 rounded-full font-medium hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/40 transition-all duration-300 border border-slate-700"
          >
            <FaGithub className="text-lg" /> GitHub Profile
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 group">
          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
          <div className="absolute -inset-4 rounded-full border border-emerald-500/40 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
          <img 
            src="/MyPhoto.jpg" 
            alt="Deivid Momchilov" 
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  )
}