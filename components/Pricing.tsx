import React from 'react';
import { Check, X } from 'lucide-react';
import { NavLink } from '../types';
import { PRICING_DATA } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id={NavLink.PRICING} className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-2 block">Membresía</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Invierte en Ti</h2>
          <p className="text-slate-400 text-lg">Sin matrícula oculta. Sin permanencia obligatoria. Cancela cuando quieras.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_DATA.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-slate-800 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 md:-translate-y-4 z-10' 
                  : 'bg-slate-800/50 border border-slate-700 hover:border-lime-400/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 flex justify-center -mt-4">
                  <span className="bg-lime-400 text-slate-900 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-white">{plan.price}€</span>
                  <span className="text-slate-500 ml-2 font-medium">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <div className="bg-lime-400/10 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-lime-400" />
                      </div>
                    ) : (
                      <div className="bg-slate-700/50 p-1 rounded-full mr-3 mt-0.5">
                        <X className="h-4 w-4 text-slate-600" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-slate-200' : 'text-slate-600 line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] ${
                  plan.highlight
                    ? 'bg-lime-400 text-slate-900 hover:bg-lime-300 shadow-lg shadow-lime-400/20'
                    : 'bg-slate-700 text-white hover:bg-slate-600 hover:text-white'
                }`}
              >
                Elegir {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;