import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Brand from './Brand';
import { NAVIGATION } from '../site_data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname, hash]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  const active = (href: string) => href === '/modulos' ? pathname !== '/' : pathname + hash === href;
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegación principal">
        {NAVIGATION.map(link => <Link key={link.href} to={link.href} className={active(link.href) ? 'is-active' : ''} aria-current={active(link.href) ? 'page' : undefined}>{link.label}</Link>)}
      </nav>
      <Link to="/#contact" className="button button-small header-contact">Contactar <ArrowUpRight size={16} aria-hidden="true" /></Link>
      <button ref={button} className="menu-toggle" onClick={() => setOpen(value => !value)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" hidden={!open} aria-label="Navegación móvil">
      {NAVIGATION.map(link => <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Link to="/#contact" onClick={() => setOpen(false)}>Contacto <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </nav>
  </header>;
}
