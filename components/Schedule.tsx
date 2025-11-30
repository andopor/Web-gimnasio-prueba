import React, { useState } from 'react';
import { Calendar, Clock, User, Zap } from 'lucide-react';
import { NavLink } from '../types';
import { SCHEDULE_DATA } from '../constants';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState("Lunes");
  const days = Object.keys(SCHEDULE_DATA);

  return (
    <section id={NavLink.CLASSES} className="py-24 bg-slate-800 relative overflow-hidden">
        {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-2 block">Agenda Semanal</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Horario de Clases</h2>
            <p className="text-slate-400 mt-4 text-lg">Encuentra tu ritmo. Reserva tu plaza directamente desde nuestra App.</p>
          </div>
          <div className="mt-8 md:mt-0">
            <button className="text-lime-400 font-bold hover:text-lime-300 flex items-center gap-2 group border border-lime-400/20 px-6 py-3 rounded-full hover:bg-lime-400/10 transition-all">
              <span>Descargar PDF</span>
              <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex overflow-x-auto pb-6 mb-8 gap-3 scrollbar-hide snap-x">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`snap-start px-8 py-4 rounded-xl font-bold whitespace-nowrap transition-all duration-300 border-2 ${
                activeDay === day 
                  ? "bg-lime-400 text-slate-900 border-lime-400 shadow-[0_0_15px_rgba(132,204,22,0.4)] scale-105" 
                  : "bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHEDULE_DATA[activeDay].map((slot, index) => (
            <div 
              key={index} 
              className="bg-slate-900 p-6 rounded-2xl border border-slate-700/50 hover:border-lime-500/50 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-slate-800 text-lime-400 py-1.5 px-3 rounded-lg text-sm font-mono font-bold border border-slate-700 group-hover:border-lime-400/30 transition-colors">
                  {slot.time}
                </span>
                <div className={`p-2 rounded-full ${
                  slot.difficulty === 'Alto' ? 'bg-red-500/10 text-red-400' :
                  slot.difficulty === 'Medio' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-green-500/10 text-green-400'
                }`}>
                  <Zap className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">{slot.class}</h3>
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span>{slot.trainer}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button className="w-full py-2.5 rounded-lg border border-slate-700 bg-transparent text-slate-300 hover:bg-lime-400 hover:text-slate-900 hover:border-lime-400 transition-all text-sm font-bold flex justify-center items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Reservar Plaza
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;