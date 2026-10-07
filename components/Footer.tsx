import { Link } from 'react-router-dom';
import Brand from './Brand';
import { NAVIGATION, SITE } from '../site_data';
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><Brand /><p>Ciclo Superior de<br />Acondicionamiento Físico</p><nav aria-label="Enlaces del pie de página">{NAVIGATION.map(link => <Link key={link.href} to={link.href}>{link.label}</Link>)}</nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {SITE.centre}</span><span>Cangas · Pontevedra</span></div></footer>;
}
