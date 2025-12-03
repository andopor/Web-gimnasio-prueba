import React, { useState } from 'react';
import { MapPin, Clock, Send, Phone, MessageCircle } from 'lucide-react';
import { NavLink } from '../types';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id={NavLink.CONTACT} className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#84cc16 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-brand-blue font-bold uppercase tracking-widest mb-4 block">Contacto</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              VEN AL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-lime-400">CSAF</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              ¿Quieres formar parte del CSAF IES María Soliño? Ven a vernos o escríbenos para más información sobre nuestras actividades y oferta educativa.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-slate-900 p-4 rounded-xl mr-5 border border-slate-700 group-hover:border-brand-blue/50 transition-colors shadow-lg">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Ubicación</h4>
                  <p className="text-slate-400">Rúa Montecarrasco, 14, Cangas</p>
                  <a href="https://maps.app.goo.gl/example" target="_blank" rel="noopener noreferrer" className="text-lime-400 text-sm hover:underline mt-1 inline-block">Ver en Google Maps</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-slate-900 p-4 rounded-xl mr-5 border border-slate-700 group-hover:border-brand-blue/50 transition-colors shadow-lg">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Llámanos</h4>
                  <p className="text-slate-400">886 120 012</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-slate-900 p-4 rounded-xl mr-5 border border-slate-700 group-hover:border-brand-blue/50 transition-colors shadow-lg">
                  <Clock className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Horario Centro</h4>
                  <p className="text-slate-400">Lunes - Viernes: 08:30 - 21:30</p>
                </div>
              </div>

              <a
                href="https://wa.me/34886120012"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-[#25D366]/20 transform hover:-translate-y-1"
              >
                <MessageCircle className="h-6 w-6" />
                Chat en WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-blue rounded-3xl blur-2xl opacity-10"></div>
              <form onSubmit={handleSubmit} className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-700 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Más Información</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Nombre</label>
                    <input name="name" required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Email</label>
                    <input name="email" required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Interés</label>
                  <select name="interest" className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none">
                    <option>Actividades Dirigidas</option>
                    <option>Ciclo Superior</option>
                    <option>Instalaciones</option>
                    <option>Otros</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Mensaje</label>
                  <textarea name="message" className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all h-32 resize-none" placeholder="Escribe tu consulta..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue text-white font-black py-4 rounded-xl hover:bg-sky-600 transition-all uppercase tracking-wide flex justify-center items-center gap-2 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Enviar Mensaje <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center">
                    ¡Mensaje enviado correctamente!
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center">
                    Hubo un error al enviar. Inténtalo de nuevo.
                  </div>
                )}
              </form>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-700 h-64 md:h-80 shadow-2xl relative z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.326776182604!2d-8.784666684550787!3d42.26199997919364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f623631023759%3A0x606553258525c34!2sIES%20Mar%C3%ADa%20Soli%C3%B1o!5e0!3m2!1ses!2ses!4v1646845678901!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación IES María Soliño"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;