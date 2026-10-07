import React from 'react';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ModuleInfo } from '../module_data';

const ModuleLanding: React.FC<ModuleInfo> = ({ title, description, code, course, curriculum, sources, note }) => {
    const { pathname } = useLocation();
    React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

    return (
        <article className="min-h-screen bg-slate-900 text-slate-200 pt-36 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/modulos" className="inline-flex items-center text-lime-400 hover:text-lime-300 mb-8 font-bold">
                    <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" /> Todos los módulos
                </Link>
                <p className="text-brand-blue font-bold tracking-widest uppercase mb-4">{course}.º curso · {code}</p>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">{title}</h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-12">{description}</p>
                <section aria-labelledby="curriculum-heading" className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 sm:p-8 mb-8">
                    <h2 id="curriculum-heading" className="text-2xl font-bold text-white mb-3">Qué se trabaja</h2>
                    <p className="text-slate-400 mb-6">Resumen de los contenidos y resultados de aprendizaje del currículo.</p>
                    <ul className="space-y-5">
                        {curriculum.map(item => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-lime-400 shrink-0 mt-1" aria-hidden="true" />
                                <span className="text-lg leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                    {note && <p className="text-slate-400 mt-6 leading-relaxed">{note}</p>}
                </section>
                <section aria-labelledby="sources-heading">
                    <h2 id="sources-heading" className="text-xl font-bold text-white mb-4">Referencias curriculares</h2>
                    <ul className="space-y-4">
                        {sources.map(source => (
                            <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-brand-blue hover:text-lime-400 underline underline-offset-4">
                                    <span>{source.label}</span><ExternalLink className="h-4 w-4 shrink-0 mt-1" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </article>
    );
};

export default ModuleLanding;
