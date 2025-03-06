import './styles/Contact.css';
import illustration from '../assets/pngegg.png'; 

function Contact() {
  return (
    <section className="contact">
      <h2>Contactez-nous</h2>
      <div className="contact-illustration">
        <img src={illustration} alt="Illustration artistique" />
      </div>
      <form>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;