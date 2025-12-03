import React from 'react';
import { ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

interface ModuleLandingProps {
    title: string;
    description: string;
    image: string;
    professor: {
        name: string;
        role: string;
        qualities: string[];
        image?: string;
    };
    curriculum: string[];
    color: string;
}

const ModuleLanding: React.FC<ModuleLandingProps> = ({
    title,
    description,
    image,
    professor,
    curriculum,
    color
}) => {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={image} alt={title} className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <Link to="/" className="inline-flex items-center text-lime-400 hover:text-lime-300 mb-6 font-bold transition-colors">
                        <ArrowLeft className="mr-2 h-5 w-5" /> Volver al Inicio
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Módulo <span className={`text-${color}`}>{title}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>
            </section>

            {/* Professor Section */}
            <section className="py-20 bg-slate-800/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3">
                            <div className={`aspect-square rounded-3xl overflow-hidden border-4 border-${color} shadow-2xl relative group`}>
                                <img
                                    src={professor.image || "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
                                    alt={professor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{professor.name}</h3>
                                        <p className={`text-${color} font-medium`}>{professor.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-bold text-white mb-6">Conoce a tu Profesor</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {professor.qualities.map((quality, idx) => (
                                    <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                                        <Star className={`h-6 w-6 text-${color} flex-shrink-0`} />
                                        <span className="text-slate-300">{quality}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">¿Qué aprenderás?</h2>
                        <p className="text-slate-400">Competencias clave que desarrollarás en este módulo.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {curriculum.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                                <CheckCircle className={`h-6 w-6 text-${color} flex-shrink-0 mt-1`} />
                                <p className="text-slate-300 text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModuleLanding;
