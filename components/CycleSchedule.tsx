import { useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import { CYCLE_1_DAYS, CYCLE_2_DAYS } from '../schedule_data';
import SectionHeading from './SectionHeading';
const minutes = (time: string) => { const [h, m] = time.split(':').map(Number); return h * 60 + m; };
const SCALE = 2.7;
export default function CycleSchedule() {
  const [cycle, setCycle] = useState<1 | 2>(1);
  const [day, setDay] = useState(0);
  const days = cycle === 1 ? CYCLE_1_DAYS : CYCLE_2_DAYS;
  return <section id="classes" className="section section-light"><div className="container"><SectionHeading eyebrow="03 / El día a día" title="Tu semana, de un vistazo." description="Horarios de ambos cursos según los documentos del 31/08/2026." /><div className="schedule-toolbar"><div className="segmented" aria-label="Seleccionar curso">{([1, 2] as const).map(value => <button key={value} onClick={() => setCycle(value)} aria-pressed={cycle === value}>{value}.º ciclo</button>)}</div><span className="schedule-date">Lunes a viernes · 08:05–15:00</span></div><div className="day-selector" aria-label="Seleccionar día">{days.map((item, index) => <button key={item.day} aria-pressed={day === index} onClick={() => setDay(index)}>{item.day}</button>)}</div><div className="schedule-grid">{days.map((item, index) => <section key={item.day} className={`schedule-day ${day === index ? 'selected-day' : ''}`} aria-labelledby={`day-${index}`}><h3 id={`day-${index}`}>{item.day}</h3><div className="day-timeline" style={{ height: (minutes('15:00') - minutes('08:05')) * SCALE }}>{item.sessions.map(session => <div key={session.startTime} className={`session ${session.type === 'break' ? 'session-break' : session.color}`} style={{ top: (minutes(session.startTime) - minutes('08:05')) * SCALE, height: (minutes(session.endTime) - minutes(session.startTime)) * SCALE - 5 }}><span className="session-time"><Clock size={12} aria-hidden="true" />{session.startTime}–{session.endTime}</span><strong>{session.subject}</strong>{session.type !== 'break' && <div className="session-details"><span><MapPin size={12} aria-hidden="true" />{session.room}</span><span><User size={12} aria-hidden="true" />{session.teacher}</span></div>}</div>)}</div></section>)}</div><p className="schedule-footnote">Los bloques de clases consecutivas se muestran juntos. Los recreos conservan su franja horaria.</p></div></section>;
}
