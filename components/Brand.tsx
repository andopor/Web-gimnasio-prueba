import { Link } from 'react-router-dom';
import { SITE } from '../site_data';

export default function Brand() {
  return <Link to="/" className="brand" aria-label={`${SITE.name} · Inicio`}>
    <img src="/csaf-logo.svg" width="64" height="64" alt="" />
    <img className="brand-centre-mark" src="/ies-logo.svg" width="58" height="58" alt="Logo del IES María Soliño" />
    <span><strong>CSAF</strong><small>IES María Soliño</small></span>
  </Link>;
}
