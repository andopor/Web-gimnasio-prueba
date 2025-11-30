import React, { useState, useEffect } from 'react';
import { HeartPulse, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(NavLink.HOME);

  useEffect(() => {
    const handleScroll = () => {
      // Background change logic
      setIsScrolled(window.scrollY > 20);

      // Active section detection logic
      const sections = Object.values(NavLink);
      // Offset to account for header height + some buffer
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: NavLink.HOME, label: 'Inicio', href: `#${NavLink.HOME}` },
    { id: NavLink.FACILITIES, label: 'Instalaciones', href: `#${NavLink.FACILITIES}` },
    { id: NavLink.CLASSES, label: 'Clases', href: `#${NavLink.CLASSES}` },
    { id: NavLink.PRICING, label: 'Planes', href: `#${NavLink.PRICING}` },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href={`#${NavLink.HOME}`} className="flex items-center gap-2 group cursor-pointer z-50">
            <div className="bg-lime-400 p-2 rounded-lg group-hover:bg-lime-300 transition-colors shadow-lg shadow-lime-400/20">
              <HeartPulse className="h-6 w-6 text-slate-900" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-white">
              VITALITY<span className="text-lime-400">HUB</span>
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href} 
                  className={`relative px-4 py-2 text-sm font-bold tracking-wide uppercase transition-all duration-300 rounded-lg hover:text-lime-400 ${
                    activeSection === link.id 
                      ? 'text-lime-400' 
                      : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-lime-400 rounded-full shadow-[0_0_8px_rgba(163,230,53,0.8)] animate-pulse"></span>
                  )}
                </a>
              ))}
              <a 
                href={`#${NavLink.CONTACT}`} 
                className={`ml-6 px-6 py-2.5 rounded-full font-bold transition-all shadow-lg ${
                  activeSection === NavLink.CONTACT
                    ? 'bg-lime-300 text-slate-900 scale-105 shadow-lime-400/40'
                    : 'bg-lime-400 text-slate-900 hover:bg-lime-300 hover:scale-105 shadow-lime-400/20'
                }`}
              >
                Únete Ahora
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
        className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '0', paddingTop: '80px' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`block px-3 py-4 rounded-xl text-xl font-bold text-center transition-colors ${
                 activeSection === link.id 
                   ? 'bg-slate-800 text-lime-400 border border-slate-700' 
                   : 'text-slate-300 hover:text-lime-400 hover:bg-slate-800'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`#${NavLink.CONTACT}`} 
            onClick={() => setIsOpen(false)} 
            className="block px-3 py-4 mt-6 rounded-xl text-xl font-bold text-center bg-lime-400 text-slate-900 hover:bg-lime-300 shadow-lg shadow-lime-400/20"
          >
            Únete Ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;