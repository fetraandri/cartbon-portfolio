import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>C'Artbon</h1>
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