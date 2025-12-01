import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { NavLink } from '../types';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center overflow-hidden border border-brand-blue">
                 <img 
                  src="https://1drv.ms/i/c/4531d83c907da731/IQD9_wFdE9xdRKaki8nmxeG7AdYfIV_nE_AXcSAl66ORhkI" 
                  alt="CSAF Logo" 
                  className="h-full w-full object-contain p-0.5"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tighter">CSAF</span>
                <span className="text-xs text-lime-400 font-bold">IES MARÍA SOLIÑO</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Centro Superior de Acondicionamiento Físico. Formando profesionales del deporte y la salud en Cangas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-900 p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-brand-blue transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-brand-blue transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-brand-blue transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Centro</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href={`#${NavLink.HOME}`} className="hover:text-brand-blue transition-colors">Inicio</a></li>
              <li><a href={`#${NavLink.FACILITIES}`} className="hover:text-brand-blue transition-colors">Instalaciones</a></li>
              <li><a href={`#${NavLink.CLASSES}`} className="hover:text-brand-blue transition-colors">Horarios</a></li>
              <li><a href="https://www.iesmariasolino.edu.es/" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors">Web del IES</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Información</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><span className="text-slate-500">Rúa Montecarrasco, 14</span></li>
              <li><span className="text-slate-500">Cangas, Pontevedra</span></li>
              <li><span className="text-slate-500">Tlf: 886 120 012</span></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Aviso Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <p className="text-slate-500 text-sm mb-4">Déjanos tu correo para recibir información sobre plazos de matrícula.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-blue text-white"
              />
              <button className="bg-brand-blue text-white font-bold text-sm py-2 rounded-lg hover:bg-sky-600 transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} CSAF IES María Soliño. Todos los derechos reservados.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-blue text-sm font-semibold transition-colors"
          >
            Volver arriba <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;