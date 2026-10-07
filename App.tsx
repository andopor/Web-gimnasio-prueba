import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ModuleLanding from './components/ModuleLanding';
import { MODULES } from './module_data';
import Modules from './pages/Modules';
import RouteFocus from './components/RouteFocus';
export default function App() {
  return <BrowserRouter><RouteFocus /><a className="skip-link" href="#main-content">Saltar al contenido</a><Navbar /><main id="main-content"><Routes><Route path="/" element={<Home />} /><Route path="/modulos" element={<Modules />} />{MODULES.map(module => <Route key={module.code} path={`/${module.slug}`} element={<ModuleLanding {...module} />} />)}<Route path="*" element={<div className="page container"><p className="eyebrow">404 / Página no encontrada</p><h1>Volvemos al inicio.</h1><Link className="button" to="/">Ir al inicio</Link></div>} /></Routes></main><Footer /></BrowserRouter>;
}
