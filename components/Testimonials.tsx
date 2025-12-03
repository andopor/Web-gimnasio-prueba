import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Ana García",
    role: "Alumna 2º CSAF",
    content: "La formación práctica es increíble. Desde el primer día estás en contacto con equipamiento real y situaciones profesionales.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Pablo Rodríguez",
    role: "Ex-alumno, Entrenador Personal",
    content: "Gracias al CSAF pude encontrar trabajo inmediatamente. La bolsa de empleo y las prácticas en empresas son un gran plus.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Laura Martínez",
    role: "Alumna 1º CSAF",
    content: "Las instalaciones son mejores que las de muchos gimnasios comerciales. Es un lujo aprender en un entorno así.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-2 block">Comunidad</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Lo que dicen de nosotros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 relative hover:bg-slate-800/50 transition-colors">
              <Quote className="absolute top-8 right-8 text-slate-700 h-8 w-8" />
              
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-lime-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-lime-400/50 mr-4"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
