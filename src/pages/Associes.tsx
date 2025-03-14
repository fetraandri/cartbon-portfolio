import Card from '../components/Card';
import './styles/associes.css';

function Associes() {
  const members = [
    { name: "Membre 1", role: "Président", image: "url_image" },
    { name: "Membre 2", role: "Trésorier", image: "url_image" },
  ];

  const president = members[0]; // Le président est toujours le premier
  const otherMembers = members.slice(1); // Les autres membres

  return (
    <section className="associes bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 tracking-tight">
        Nos Associés
      </h2>

      {/* Carte du Président centrée en haut */}
      <div className="max-w-7xl mx-auto flex justify-center mb-12">
        <Card
          title={president.name}
          description={president.role}
          image={president.image}
          className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Grille pour les autres membres en bas */}
      <div className="member-list max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherMembers.map((member, index) => (
          <Card
            key={index}
            title={member.name}
            description={member.role}
            image={member.image}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}

export default Associes;