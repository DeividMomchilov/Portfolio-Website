export default function Contacts() {
  return (
<section id="contact" className="max-w-6xl mx-auto px-4 py-20 text-center">
    <h2 className="text-3xl font-bold text-slate-800 mb-6">Let's Connect</h2>
    <p className="text-slate-600 mb-10 max-w-xl mx-auto">
      I'm eager to practice my skills and knowledge and build efficient systems and long term solutions alongside a dynamic team. 
    </p>
    
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
      <a href="mailto:deividmom2006@gmail.com" className="bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-slate-700 font-medium">
        📧 deividmom2006@gmail.com
      </a>
      <div className="bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm text-slate-700 font-medium cursor-default">
        📱 +359 87 727 7739
      </div>
      <div className="bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm text-slate-700 font-medium cursor-default">
        📍 Plovdiv, Bulgaria
      </div>
    </div>
    
    <div className="flex justify-center gap-6">
      <a href="https://linkedin.com/in/deivid-momchilov-a17a931a6" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors font-bold text-lg">
        LinkedIn
      </a>
      <a href="https://github.com/DeividMomchilov" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors font-bold text-lg">
        GitHub
      </a>
      <a href="https://instagram.com/deividmomchilov" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors font-bold text-lg">
        Instagram
      </a>
    </div>
  </section>
  )
}