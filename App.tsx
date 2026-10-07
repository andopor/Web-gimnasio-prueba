import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModuleLanding from './components/ModuleLanding';
import { MODULES } from './module_data';
import Modules from './pages/Modules';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans antialiased bg-slate-900 text-slate-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modulos" element={<Modules />} />
            {MODULES.map(module => (
              <Route key={module.code} path={`/${module.slug}`} element={<ModuleLanding {...module} />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;