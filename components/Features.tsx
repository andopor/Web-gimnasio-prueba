import React from 'react';
import { NavLink } from '../types';
import { FEATURES_DATA } from '../constants';

const Features: React.FC = () => {
  return (
    <section id={NavLink.FACILITIES} className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Instalaciones de Clase Mundial</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Diseñamos cada espacio pensando en tu rendimiento y comodidad. Desde la entrada hasta el vestuario, cada detalle respira excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES_DATA.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 border border-slate-700/50 hover:border-lime-400/50 group hover:-translate-y-2 shadow-lg"
            >
              <div className="bg-slate-900 p-4 rounded-xl inline-block mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 h-96">
          <div className="md:col-span-2 h-full rounded-2xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Weight Area" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <span className="text-white font-bold text-xl">Zona de Peso Libre</span>
            </div>
          </div>
          <div className="h-full grid grid-rows-2 gap-4">
            <div className="rounded-2xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Cardio Area" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <span className="text-white font-bold">Cardio Tech</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Studio" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <span className="text-white font-bold">Salas Grupales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;