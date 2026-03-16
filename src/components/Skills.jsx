import { FaReact, FaHtml5, FaGithub, FaBootstrap} from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiDotnet, SiJavascript, SiTailwindcss, SiVite } from "react-icons/si";

export default function Skills() {
    const skills = [
      { name: "ASP.NET Core", icon: <SiDotnet className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      {name: "SQL" , icon: <TbSql className="text-blue-400"/>},
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML / CSS", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500" /> },
      { name: "Git & GitHub", icon: <FaGithub className="text-gray-800" /> }
    ];
  
    return (
      <section id="skills" className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Tech Stack
          </h2>
          <p className="text-slate-300 text-center max-w-2xl mx-auto mb-10">
            A focused set of technologies I use to build fast, reliable and
            maintainable applications across the full stack.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="group flex items-center gap-2 bg-slate-950/60 border border-slate-700 text-slate-100 px-6 py-3 rounded-full shadow-sm font-medium hover:border-emerald-500 hover:text-emerald-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 cursor-default transform"
              >
                <span className="text-xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                  {skill.icon}
                </span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
}