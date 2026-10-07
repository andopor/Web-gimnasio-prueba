import SectionHeading from './SectionHeading';
const spaces = [
  { image: '/facilities/studio_wide.jpg', title: 'Sala principal', label: 'Movimiento y práctica', alt: 'Sala principal del CSAF' },
  { image: '/facilities/rsp_inertial.jpg', title: 'Tecnología inercial', label: 'Equipamiento RSP', alt: 'Equipo de entrenamiento inercial RSP' },
  { image: '/facilities/training_wall.jpg', title: 'Training Wall', label: 'Trabajo funcional', alt: 'Equipamiento Training Wall del CSAF' },
];
export default function Features() {
  return <section id="facilities" className="section section-light"><div className="container">
    <SectionHeading eyebrow="01 / Instalaciones" title="Espacios para ponerlo en práctica." description="Una mirada a las instalaciones y al equipamiento del CSAF." />
    <div className="spaces-grid">{spaces.map((space, index) => <figure className="space-card" key={space.title}><div className="space-image"><img src={space.image} alt={space.alt} loading="lazy" width="800" height="600" /></div><figcaption><div><span className="eyebrow">{space.label}</span><h3>{space.title}</h3></div><span className="space-number">0{index + 1}</span></figcaption></figure>)}</div>
  </div></section>;
}
