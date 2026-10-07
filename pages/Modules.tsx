import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MODULES, TITLE_SOURCE } from '../module_data';

const Modules: React.FC = () => (
    <div className="min-h-screen bg-slate-900 pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-blue uppercase tracking-widest font-bold mb-4">Ciclo Superior de Acondicionamiento Físico</p>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Módulos del ciclo</h1>
            <p className="text-slate-400 text-lg max-w-3xl mb-6">Consulta los 16 módulos de la relación oficial de la Xunta de Galicia. Cada ficha incluye un resumen breve y sus referencias curriculares.</p>
            <a href={TITLE_SOURCE.url} target="_blank" rel="noopener noreferrer" className="text-lime-400 underline underline-offset-4">Consultar la relación oficial de la Xunta</a>
            {([1, 2] as const).map(course => (
                <section key={course} aria-labelledby={`course-${course}`} className="mt-12">
                    <h2 id={`course-${course}`} className="text-2xl font-bold text-white mb-6">{course}.º curso</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {MODULES.filter(module => module.course === course).map(module => (
                            <Link key={module.code} to={`/${module.slug}`} className="flex flex-col p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-brand-blue transition-colors">
                                <span className="text-brand-blue font-mono text-sm mb-3">{module.code}</span>
                                <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-6">{module.description}</p>
                                <span className="mt-auto inline-flex items-center gap-2 text-lime-400 font-bold">Ver currículo <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    </div>
);

export default Modules;
