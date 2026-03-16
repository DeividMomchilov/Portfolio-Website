export default function Hero() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
    <div className="flex-1 space-y-6">
      <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
        Hi, I'm <span className="text-emerald-500">Deivid</span> <br />
        Junior Full Stack .NET Developer
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
        Aspiring .NET Developer driven by a passion for engineering and continuous learning. 
        Thrives on diving deep into complex logic to build fast, highly optimized applications 
        without over-complicating the solution.
      </p>
      <div className="flex gap-4 pt-4">
        <a href="#projects" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors shadow-lg">
          View My Work
        </a>
        <a href="https://github.com/DeividMomchilov" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors border border-slate-200">
          GitHub Profile
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center md:justify-end">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <img 
          src="/MyPhoto.jpg" 
          alt="Deivid Momchilov" 
          className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
        />
      </div>
    </div>
  </section>
  )
}