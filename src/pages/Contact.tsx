import './styles/Contact.css';
import illustration from '../assets/pngegg.png';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-illustration">
        <img src={illustration} alt="Illustration artistique" />
      </div>
      <div className="contact-form-container">
        <h2>Contactez-nous</h2> {}
        <form>
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;