import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const projects = [
      {
        title: "Gym Tracker",
        description: "A comprehensive application to track gym workouts and calisthenics progress. Built with a focus on fast execution and logical data structuring without over-complicating the system.",
        techStack: ["C#", "ASP.NET", "Entity Framework"],
        githubLink: "https://github.com/DeividMomchilov/GymTrackerApp.git"
      },
      {
        title: "CineCritic",
        description: "A movie review and rating platform where users can discover new films, read reviews, and share their own thoughts. Features a sleek UI and responsive design.",
        techStack: ["React", "JavaScript", "Tailwind CSS"],
        githubLink: "https://github.com/DeividMomchilov/cineCritic"
      },
      {
        title: "Recipe Book",
        description: "A digital recipe book application for storing, organizing, and discovering new recipes. Includes intuitive features for categorizing meals and searching by ingredients.",
        techStack: ["JavaScript", "HTML", "CSS"],
        githubLink: "https://github.com/DeividMomchilov/Recipe-book"
      }
    ];
  
    return (
      <section id="projects" className="bg-slate-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Personal Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 group flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs text-slate-300 bg-slate-700/80 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-auto bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaGithub className="text-base" />
                  View Source Code
                </a>
              </div>
            ))}
  
          </div>
        </div>
      </section>
    )
  }