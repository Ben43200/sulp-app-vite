import { NavLink, useLocation } from 'react-router-dom';
import './menucompetences.scss';
const MenuCompetences = () => {
  const location = useLocation();

  return (
    <ul className="menu-comp">
      <li><NavLink to="/Famille" className={location.pathname === '/Famille' ? 'active' : ''}>Le droit de la famille</NavLink></li>
      <li><NavLink to="/Patrimoine" className={location.pathname === '/Patrimoine' ? 'active' : ''}>Le patrimoine</NavLink></li>
      <li><NavLink to="/Immobilier" className={location.pathname === '/Immobilier' ? 'active' : ''}>Le droit immobilier</NavLink></li>
      <li><NavLink to="/Entreprise" className={location.pathname === '/Entreprise' ? 'active' : ''}>Le droit de l'entreprise</NavLink></li>
      <li><NavLink to="/Expertise" className={location.pathname === '/Expertise' ? 'active' : ''}>L'expertise</NavLink></li>
    </ul>
  );
};

export default MenuCompetences;