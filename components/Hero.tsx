import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return <section id="home" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Formación profesional · Cangas</p>
        <h1>El movimiento.<br /><span>Tu profesión.</span></h1>
        <p className="hero-description">Ciclo Superior de Acondicionamiento Físico en el IES María Soliño. Conoce los módulos, los espacios de práctica y los horarios del CSAF.</p>
        <div className="button-row"><Link className="button" to="/modulos">Explorar el ciclo <ArrowRight size={18} aria-hidden="true" /></Link><Link className="text-link" to="/#classes">Ver horarios <ArrowDown size={16} aria-hidden="true" /></Link></div>
        <dl className="hero-facts"><div><dt>02</dt><dd>Cursos</dd></div><div><dt>16</dt><dd>Módulos</dd></div><div><dt>FP</dt><dd>Grado superior</dd></div></dl>
      </div>
      <figure className="hero-image"><img src="/facilities/studio_wide.jpg" width="1200" height="900" alt="Sala principal de acondicionamiento físico del CSAF" fetchPriority="high" /><figcaption><span>01 / Espacios de práctica</span><strong>Aprender en movimiento.</strong></figcaption><div className="hero-logo"><img src="/csaf-logo.svg" alt="CSAF" width="100" height="100" /></div></figure>
    </div>
    <div className="container hero-bottom"><span>CSAF / IES MARÍA SOLIÑO</span><span>Acondicionamiento físico <ArrowDown size={14} aria-hidden="true" /></span></div>
  </section>;
}
