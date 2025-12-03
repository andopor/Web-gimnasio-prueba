import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { NavLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-brand-blue">
                <img
                  src="/logo.png"
                  alt="CSAF Logo"
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-purple-600 ml-2">
                <img
                  src="/logo_ies.png"
                  alt="IES María Soliño Logo"
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
              <h3 className="text-white text-2xl font-black">
                <span className="font-black text-xl tracking-tighter text-white ml-1">CSAF</span> <span className="text-lime-400">MARÍA SOLIÑO</span>
              </h3>
            </div>
            <p className="mb-4 max-w-sm">
              Formando a los futuros profesionales del acondicionamiento físico con excelencia, práctica y pasión.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href={`#${NavLink.HOME}`} className="hover:text-lime-400 transition-colors">Inicio</a></li>
              <li><a href={`#${NavLink.FACILITIES}`} className="hover:text-lime-400 transition-colors">Instalaciones</a></li>
              <li><a href={`#${NavLink.CLASSES}`} className="hover:text-lime-400 transition-colors">Horarios</a></li>
              <li><a href={`#${NavLink.PRICING}`} className="hover:text-lime-400 transition-colors">Precios</a></li>
              <li><a href={`#${NavLink.CONTACT}`} className="hover:text-lime-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-blue" />
                <span>Cangas, Pontevedra</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-blue" />
                <span>886 120 012</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-blue" />
                <span>efmariasolinhotsaf@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} CSAF IES María Soliño. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado con <span className="text-red-500">❤</span> para el deporte.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;