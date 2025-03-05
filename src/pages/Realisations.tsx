import Card from '../components/Card.tsx';
import './styles/Realisations.css';

function Realisations() {
  const projects = [
    { title: "Projet 1", description: "Description du projet 1", image: "url_image" },
    { title: "Projet 2", description: "Description du projet 2", image: "url_image" },
  ];

  return (
    <section className="realisations">
      <h2>Nos Réalisations</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Card key={index} title={project.title} description={project.description} image={project.image} />
        ))}
      </div>
    </section>
  );
}

export default Realisations;