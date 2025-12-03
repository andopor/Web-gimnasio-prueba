import React from 'react';

const TechReference: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                    Espazos de Tecnoloxía Aplicada 2025
                </h2>
                <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
                    <img
                        src="/referencia_tecnologica.png"
                        alt="Conversión de aulas en espacios de tecnología aplicada - Xunta de Galicia"
                        className="max-w-full h-auto max-h-40 md:max-h-52 object-contain hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="/logo_ies.png"
                        alt="IES María Soliño"
                        className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default TechReference;
