import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '../site_data';
export default function Contact() {
  return <section id="contact" className="section contact-section"><div className="container contact-grid">
    <div><p className="eyebrow">04 / Contacto</p><h2>Hablamos<br />de tu próximo paso.</h2><p className="section-description">Consulta tus dudas sobre el ciclo y las actividades del CSAF.</p><a className="button" href={`mailto:${SITE.email}`}>Escríbenos <ArrowUpRight size={18} aria-hidden="true" /></a></div>
    <address className="contact-details"><a href={`mailto:${SITE.email}`}><Mail aria-hidden="true" /><span><small>Correo electrónico</small><strong>{SITE.email}</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a><a href={SITE.phoneHref}><Phone aria-hidden="true" /><span><small>Teléfono del centro</small><strong>{SITE.phone}</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" /><span><small>IES María Soliño</small><strong>{SITE.address}</strong></span><ArrowUpRight size={18} aria-hidden="true" /></a></address>
  </div></section>;
}
