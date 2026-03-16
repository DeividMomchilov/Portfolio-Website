export default function Projects() {
  return (
        <section id="projects" className="bg-slate-900 py-20 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Personal Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">Gym Tracker</h3>
                  <span className="text-xs font-medium bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">12/2026 - Present</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  A comprehensive application to track gym workouts and calisthenics progress. Built with a focus on fast execution and logical data structuring without over-complicating the system.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs text-slate-300 bg-slate-700 px-3 py-1 rounded-full">C#</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-3 py-1 rounded-full">ASP.NET</span>
                  <span className="text-xs text-slate-300 bg-slate-700 px-3 py-1 rounded-full">Entity Framework</span>
                </div>
                <a href="https://github.com/DeividMomchilov/GymTrackerApp.git" target="_blank" rel="noreferrer" className="text-emerald-400 text-sm font-medium hover:text-emerald-300 flex items-center gap-1">
                  View Source Code &rarr;
                </a>
              </div>

      
            </div>
          </div>
        </section>
  )
}