import Card from '../components/Card';
import './styles/associes.css';

function Associes() {
  const members = [
    { name: "Membre 1", role: "Président", image: "url_image" },
    { name: "Membre 2", role: "Trésorier", image: "url_image" },
  ];

  return (
    <section className="associes">
      <h2>Nos Associés</h2>
      <div className="member-list">
        {members.map((member, index) => (
          <Card key={index} title={member.name} description={member.role} image={member.image} />
        ))}
      </div>
    </section>
  );
}

export default Associes;