import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans scroll-smooth">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}