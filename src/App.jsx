import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Philosophy from './components/sections/Philosophy';
import Contact from './components/sections/Contact';
import SmoothScroll from './components/ui/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen selection:bg-amber/30 text-dark">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Philosophy />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
