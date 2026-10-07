import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MODULES } from '../module_data';
export default function RouteFocus() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const module = MODULES.find(item => `/${item.slug}` === pathname);
    document.title = `${module?.shortTitle || (pathname === '/modulos' ? 'Módulos del ciclo' : 'Acondicionamiento Físico')} · CSAF María Soliño`;
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
