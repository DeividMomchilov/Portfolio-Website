import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contacts() {
    return (
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-300 mb-10 max-w-xl mx-auto">
          I'm eager to practice my skills and knowledge and build efficient systems
          and long-term solutions alongside a dynamic team.
        </p>
  
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a
            href="mailto:deividmom2006@gmail.com"
            className="bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-slate-100 font-medium"
          >
            📧 deividmom2006@gmail.com
          </a>
          <div className="bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl shadow-sm text-slate-100 font-medium cursor-default">
            📱 +359 87 727 7739
          </div>
          <div className="bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl shadow-sm text-slate-100 font-medium cursor-default">
            📍 Plovdiv, Bulgaria
          </div>
        </div>
  
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/deivid-momchilov-a17a931a6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-blue-400 hover:border-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href="https://github.com/DeividMomchilov"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-slate-100 hover:border-slate-400 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://instagram.com/deividmomchilov"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-pink-400 hover:border-pink-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            <FaInstagram className="text-xl" />
            Instagram
          </a>
        </div>
      </section>
    );
  }