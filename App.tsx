import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModuleLanding from './components/ModuleLanding';
import { MODULES_DATA } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans antialiased bg-slate-900 text-slate-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fitness" element={<ModuleLanding {...MODULES_DATA.fitness} />} />
            <Route path="/postural" element={<ModuleLanding {...MODULES_DATA.postural} />} />
            <Route path="/musicales" element={<ModuleLanding {...MODULES_DATA.musicales} />} />
            <Route path="/hidrocinesia" element={<ModuleLanding {...MODULES_DATA.hidrocinesia} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;