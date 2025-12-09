import React, { useState } from 'react';
import { Clock, MapPin, User, Info } from 'lucide-react';
import { NavLink } from '../types';
import { CYCLE_1_DAYS, CYCLE_2_DAYS } from '../schedule_data';

const PIXELS_PER_MINUTE = 2.4;

const getDurationInMinutes = (start: string, end: string): number => {
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);
    return (endH * 60 + endM) - (startH * 60 + startM);
};

const CycleSchedule: React.FC = () => {
    const [activeCycle, setActiveCycle] = useState<1 | 2>(1);
    const activeData = activeCycle === 1 ? CYCLE_1_DAYS : CYCLE_2_DAYS;

    return (
        <section id={NavLink.CLASSES} className="py-24 bg-slate-900 relative">
            <div className="absolute inset-0 bg-slate-900" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-bold uppercase tracking-widest mb-4 block">Formación Académica</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        HORARIOS DEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-lime-400">CURSO</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Consulta la distribución semanal de las clases teóricas y prácticas para cada ciclo formativo.
                    </p>
                </div>

                {/* Cycle Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="bg-slate-800 p-1.5 rounded-full inline-flex relative shadow-xl border border-slate-700">
                        <div
                            className={`absolute inset-y-1.5 bg-brand-blue rounded-full transition-all duration-300 ease-out shadow-lg ${activeCycle === 1 ? 'left-1.5 w-[calc(50%-6px)]' : 'left-[50%] w-[calc(50%-6px)]'}`}
                        ></div>
                        <button
                            onClick={() => setActiveCycle(1)}
                            className={`relative z-10 px-8 py-3 rounded-full text-base font-bold transition-colors ${activeCycle === 1 ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            1º CICLO
                        </button>
                        <button
                            onClick={() => setActiveCycle(2)}
                            className={`relative z-10 px-8 py-3 rounded-full text-base font-bold transition-colors ${activeCycle === 2 ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            2º CICLO
                        </button>
                    </div>
                </div>

                {/* Schedule Grid */}
                <div className="overflow-x-auto pb-6">
                    <div className="min-w-[1000px] grid grid-cols-5 gap-4">
                        {activeData.map((daySchedule) => (
                            <div key={daySchedule.day} className="flex flex-col space-y-3">
                                {/* Day Header */}
                                <div className="text-center py-4 bg-slate-800 rounded-xl border-b-2 border-brand-blue mb-2 shadow-lg">
                                    <h3 className="text-xl font-black text-white uppercase tracking-wider">{daySchedule.day}</h3>
                                </div>

                                {/* Sessions List */}
                                <div className="space-y-2 flex-grow">
                                    {daySchedule.sessions.map((session, sIndex) => {
                                        const duration = getDurationInMinutes(session.startTime, session.endTime);
                                        const height = duration * PIXELS_PER_MINUTE;

                                        if (session.color === 'invisible') {
                                            // Render spacer
                                            return (
                                                <div
                                                    key={`${daySchedule.day}-${sIndex}`}
                                                    className="p-3 opacity-0 pointer-events-none border border-transparent"
                                                    style={{ height: `${height}px`, minHeight: `${height}px` }}
                                                    aria-hidden="true"
                                                >
                                                    {/* Content hidden but needed for structure? No, explicit height handles it now. */}
                                                </div>
                                            );
                                        }
                                        const isBreak = session.type === 'break';

                                        return (
                                            <div
                                                key={`${daySchedule.day}-${sIndex}`}
                                                className={`relative ${isBreak ? 'p-1 justify-center' : 'p-3'} rounded-xl border transition-all hover:scale-[1.02] hover:shadow-lg hover:z-10 group ${session.color} ${isBreak ? 'opacity-80' : 'shadow-md'} overflow-hidden flex flex-col`}
                                                style={{ height: `${height}px`, minHeight: `${height}px` }}
                                            >
                                                {/* Time */}
                                                <div className={`flex items-center ${isBreak ? 'text-[10px] justify-center' : 'text-xs'} font-bold font-mono ${isBreak ? 'mb-0' : 'mb-1'} opacity-80 shrink-0`}>
                                                    <Clock className={`${isBreak ? 'w-2.5 h-2.5' : 'w-3 h-3'} mr-1`} />
                                                    {session.startTime} - {session.endTime}
                                                </div>

                                                {/* Subject */}
                                                <div className={`font-extrabold ${isBreak ? 'text-xs text-center' : 'text-sm'} uppercase leading-tight ${isBreak ? 'mb-0' : 'mb-1'} truncate shrink-0`} title={session.subject}>
                                                    {session.subject}
                                                </div>

                                                {/* Details (Only for classes) */}
                                                {!isBreak && (
                                                    <div className="flex flex-col gap-0.5 mt-auto pt-2 border-t border-black/10 shrink-0">
                                                        {session.room && (
                                                            <div className="flex items-center text-[10px] font-semibold opacity-90">
                                                                <MapPin className="w-3 h-3 mr-1" />
                                                                <span className="truncate">{session.room}</span>
                                                            </div>
                                                        )}
                                                        {session.teacher && (
                                                            <div className="flex items-center text-[10px] font-semibold opacity-75">
                                                                <User className="w-3 h-3 mr-1" />
                                                                <span className="truncate">{session.teacher}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex justify-center items-center gap-2 text-slate-500 text-sm">
                    <Info className="w-4 h-4" />
                    <p>Desliza horizontalmente para ver la semana completa si es necesario.</p>
                </div>
            </div>
        </section>
    );
};

export default CycleSchedule;
