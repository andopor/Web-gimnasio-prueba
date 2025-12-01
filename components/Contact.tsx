import React, { useState } from 'react';
import { MapPin, Clock, Send, Phone, Mail } from 'lucide-react';
import { NavLink } from '../types';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("¡Gracias por contactarnos! Te responderemos pronto.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id={NavLink.CONTACT} className="py-24 bg-slate-800 relative overflow-hidden">
        {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#84cc16 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-blue font-bold uppercase tracking-widest mb-4 block">Contacto</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              VEN AL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-lime-400">CSAF</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              ¿Quieres formar parte del CSAF IES María Soliño? Ven a vernos o escríbenos para más información sobre nuestras actividades y oferta educativa.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-slate-900 p-4 rounded-xl mr-5 border border-slate-700 group-hover:border-brand-blue/50 transition-colors shadow-lg">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Ubicación</h4>
                  <p className="text-slate-400">Rúa Montecarrasco, 14, Cangas</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-slate-900 p-4 rounded-xl mr-5 border border-slate-700 group-hover:border-brand-blue/50 transition-colors shadow-lg">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Llámanos</h4>
                  <p className="text-slate-400">886 120 012</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-slate-900 p-4 rounded-xl mr-5 border border-slate-700 group-hover:border-brand-blue/50 transition-colors shadow-lg">
                  <Clock className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Horario Centro</h4>
                  <p className="text-slate-400">Lunes - Viernes: 08:30 - 21:30</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue rounded-3xl blur-2xl opacity-10"></div>
            <form onSubmit={handleSubmit} className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-700 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Más Información</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Nombre</label>
                  <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Email</label>
                  <input required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Interés</label>
                <select className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none">
                  <option>Actividades Dirigidas</option>
                  <option>Ciclo Superior</option>
                  <option>Instalaciones</option>
                  <option>Otros</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Mensaje</label>
                <textarea className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all h-32 resize-none" placeholder="Escribe tu consulta..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-blue text-white font-black py-4 rounded-xl hover:bg-sky-600 transition-all uppercase tracking-wide flex justify-center items-center gap-2 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    Enviar Mensaje <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;