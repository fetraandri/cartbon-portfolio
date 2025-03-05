import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Associes from './pages/Associes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/associes" element={<Associes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;