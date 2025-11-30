import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-slate-900 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Schedule />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;