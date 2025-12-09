import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from '../types';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(NavLink.HOME);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Background change logic
      setIsScrolled(window.scrollY > 20);

      // Active section detection logic (only on home page)
      if (isHome) {
        const sections = Object.values(NavLink);
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navLinks = [
    { id: NavLink.HOME, label: 'Inicio', href: `/#${NavLink.HOME}` },
    { id: NavLink.FACILITIES, label: 'Instalaciones', href: `/#${NavLink.FACILITIES}` },
    { id: NavLink.CLASSES, label: 'Clases', href: `/#${NavLink.CLASSES}` },
  ];

  const modules = [
    { name: 'Fitness', path: '/fitness' },
    { name: 'Postural', path: '/postural' },
    { name: 'Musicales', path: '/musicales' },
    { name: 'Hidrocinesia', path: '/hidrocinesia' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-2 shadow-lg'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer z-50">
            {/* Replace src with your local file if needed */}
            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-brand-blue/50 hover:border-brand-blue transition-colors">
              <img
                src="/csaf_logo_new.png"
                alt="CSAF Logo"
                className="h-full w-full object-contain p-0.5 scale-110"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-bold tracking-wide uppercase transition-all duration-300 rounded-lg hover:text-brand-blue ${activeSection === link.id && isHome
                    ? 'text-brand-blue'
                    : 'text-slate-300'
                    }`}
                >
                  {link.label}
                  {activeSection === link.id && isHome && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-blue rounded-full shadow-[0_0_8px_rgba(0,119,182,0.8)] animate-pulse"></span>
                  )}
                </a>
              ))}

              {/* Modules Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-bold tracking-wide uppercase text-slate-300 hover:text-brand-blue transition-colors"
                  onMouseEnter={() => setIsModulesOpen(true)}
                  onMouseLeave={() => setIsModulesOpen(false)}
                >
                  Módulos <ChevronDown className="h-4 w-4" />
                </button>

                <div
                  className={`absolute top-full left-0 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform origin-top ${isModulesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                  onMouseEnter={() => setIsModulesOpen(true)}
                  onMouseLeave={() => setIsModulesOpen(false)}
                >
                  {modules.map((module) => (
                    <Link
                      key={module.path}
                      to={module.path}
                      className="block px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-lime-400 transition-colors border-b border-slate-800/50 last:border-0"
                    >
                      {module.name}
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href="mailto:efmariasolinho@gmail.com"
                className={`ml-6 px-6 py-2.5 rounded-full font-bold transition-all shadow-lg ${activeSection === NavLink.CONTACT && isHome
                  ? 'bg-brand-blue text-white scale-105 shadow-brand-blue/40'
                  : 'bg-lime-500 text-slate-900 hover:bg-lime-400 hover:scale-105 shadow-lime-500/20'
                  }`}
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="-mr-2 flex md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ top: '0', paddingTop: '100px' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 rounded-xl text-xl font-bold text-center transition-colors ${activeSection === link.id && isHome
                ? 'bg-slate-800 text-brand-blue border border-slate-700'
                : 'text-slate-300 hover:text-brand-blue hover:bg-slate-800'
                }`}
            >
              {link.label}
            </a>
          ))}

          <div className="py-4 border-t border-slate-800 mt-4">
            <p className="text-center text-slate-500 text-sm uppercase tracking-widest font-bold mb-4">Módulos</p>
            <div className="grid grid-cols-2 gap-3">
              {modules.map((module) => (
                <Link
                  key={module.path}
                  to={module.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-xl text-lg font-bold text-center bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-lime-400 transition-colors"
                >
                  {module.name}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="mailto:efmariasolinho@gmail.com"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-4 mt-6 rounded-xl text-xl font-bold text-center bg-lime-500 text-slate-900 hover:bg-lime-400 shadow-lg shadow-lime-500/20"
          >
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;