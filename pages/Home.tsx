import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CycleSchedule from '../components/CycleSchedule';
import Contact from '../components/Contact';

import TechReference from '../components/TechReference';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Features />
            <section className="bg-slate-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Módulos del ciclo</h2>
                    <p className="text-slate-400 mb-6">Información de los 16 módulos, con sus referencias curriculares oficiales.</p>
                    <Link to="/modulos" className="inline-block bg-brand-blue text-white font-bold rounded-xl px-6 py-3 hover:bg-blue-700">Consultar todos los módulos</Link>
                </div>
            </section>
            <CycleSchedule />
            <Contact />
            <TechReference />
        </>
    );
};

export default Home;
