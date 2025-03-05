// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="C'Artbon Logo" />
        </Link>
      </div>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/realisations">Réalisations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/associes">Associés</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;