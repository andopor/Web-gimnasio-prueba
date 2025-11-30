import React from 'react';
import { HeartPulse, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';
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
            <div className="flex items-center gap-2 mb-6">
              <HeartPulse className="h-8 w-8 text-lime-400" />
              <span className="font-extrabold text-2xl tracking-tighter">VITALITY<span className="text-lime-400">HUB</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              El centro deportivo líder en transformación física y mental. Equipamiento premium, comunidad inigualable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-900 p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-lime-500 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-lime-500 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-900 p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-lime-500 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explorar</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href={`#${NavLink.HOME}`} className="hover:text-lime-400 transition-colors">Inicio</a></li>
              <li><a href={`#${NavLink.FACILITIES}`} className="hover:text-lime-400 transition-colors">Instalaciones</a></li>
              <li><a href={`#${NavLink.CLASSES}`} className="hover:text-lime-400 transition-colors">Clases y Horarios</a></li>
              <li><a href={`#${NavLink.PRICING}`} className="hover:text-lime-400 transition-colors">Planes de Precio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Aviso Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Suscríbete para recibir consejos de entrenamiento y ofertas.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-lime-400 text-white"
              />
              <button className="bg-lime-400 text-slate-900 font-bold text-sm py-2 rounded-lg hover:bg-lime-300 transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Vitality Hub Sports Center. Todos los derechos reservados.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-lime-400 text-sm font-semibold transition-colors"
          >
            Volver arriba <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;