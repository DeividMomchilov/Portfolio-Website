import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="bg-white font-sans scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}