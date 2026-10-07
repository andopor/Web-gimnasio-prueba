import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CycleSchedule from '../components/CycleSchedule';
import Contact from '../components/Contact';
import TechReference from '../components/TechReference';
import SectionHeading from '../components/SectionHeading';
export default function Home() {
  return <><Hero /><Features /><section className="section modules-intro"><div className="container"><SectionHeading eyebrow="02 / Formación" title="Un ciclo. Todas sus posibilidades." description="Los 16 módulos de primero y segundo, con información breve basada en sus currículos oficiales." action={<Link className="button button-light" to="/modulos">Todos los módulos <ArrowRight size={18} aria-hidden="true" /></Link>} /><div className="module-preview-grid">{[{ name: 'Fitness', code: 'MP1148', path: '/fitness', text: 'Entrenamiento en sala polivalente' }, { name: 'Control postural', code: 'MP1153', path: '/postural', text: 'Bienestar y mantenimiento funcional' }, { name: 'Hidrocinesia', code: 'MP1152', path: '/hidrocinesia', text: 'Ejercicio en el medio acuático' }].map(module => <Link className="module-preview" key={module.code} to={module.path}><span>{module.code}</span><h3>{module.name}</h3><p>{module.text}</p><ArrowRight size={22} aria-hidden="true" /></Link>)}</div></div></section><CycleSchedule /><Contact /><TechReference /></>;
}
