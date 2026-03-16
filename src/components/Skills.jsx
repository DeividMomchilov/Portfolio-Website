export default function Skills() 
{
    const skills = [
      "ASP.NET Core", "Entity Framework", 
      "SQL / NoSQL", "JavaScript", "HTML / CSS", "AJAX",
      "React", "Vite", "Tailwind", "Bootstrap", "Git", "GitHub"
    ];
  
    return (
      <section id="skills" className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full shadow-sm font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
}