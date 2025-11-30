import React from 'react';
import { NavLink } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={NavLink.HOME} className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <div className="inline-block mb-6">
          <span className="text-lime-400 font-bold tracking-[0.2em] text-sm md:text-base uppercase py-1 px-3 border border-lime-400/30 rounded-full bg-lime-400/10 backdrop-blur-sm animate-fade-in-up">
            Más que un gimnasio, un estilo de vida
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
          TRANSFORMA TU <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500 drop-shadow-2xl">
            POTENCIAL
          </span>
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Instalaciones de vanguardia, entrenadores de élite y una comunidad que te impulsa a superar tus límites cada día. Tu mejor versión empieza aquí.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href={`#${NavLink.CONTACT}`} className="w-full sm:w-auto bg-lime-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.3)] flex items-center justify-center">
            Prueba Gratis Hoy
          </a>
          <a href={`#${NavLink.FACILITIES}`} className="w-full sm:w-auto border border-slate-600 bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center">
            Ver Instalaciones
          </a>
        </div>
        
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-slate-800/50 pt-8 max-w-3xl mx-auto">
          <div className="text-center group">
            <p className="text-3xl md:text-4xl font-black text-white group-hover:text-lime-400 transition-colors">24/7</p>
            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold mt-1">Acceso</p>
          </div>
          <div className="text-center group">
            <p className="text-3xl md:text-4xl font-black text-white group-hover:text-lime-400 transition-colors">50+</p>
            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold mt-1">Clases / Sem</p>
          </div>
          <div className="text-center group">
            <p className="text-3xl md:text-4xl font-black text-white group-hover:text-lime-400 transition-colors">2K m²</p>
            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold mt-1">Espacio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;