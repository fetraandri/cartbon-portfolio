// src/pages/Realisations.tsx
import Card from '../components/Card';
import './styles/realisations.css';

function Realisations() {
  const events = [
    {
      title: "Rencontre d'art - Mars 2019",
      description: "Une rencontre visant à réunir de jeunes artistes en dehors de l'association C'ArtBON pour discuter des enjeux de la scène artistique en Province A.",
      image: "/assets/images/art-meeting-2019.jpg",
    },
    {
      title: "Événement C'ArtBON - Janvier 2020",
      description: "Un événement au cours duquel des artistes extérieurs à la région ont été invités à partager leurs expériences en tant qu'artistes, en combinaison avec des performances culturelles et des sessions de peinture en direct.",
      image: "/assets/images/event-2020.jpg",
    },
    {
      title: "Art Meeting Part 2 - Février 2020",
      description: "Un suivi du premier Art Meeting, où nous avons présenté les idées discutées dans la partie 1 au Ministère de l'Artisanat de Madagascar.",
      image: "/assets/images/art-meeting-2-2020.jpg",
    },
    {
      title: "Participation à l'ITM 2020",
      description: "Représentation de notre travail artistique dans un espace d'exposition international au Salon International du Tourisme de Madagascar.",
      image: "/assets/images/itm-2020.jpg",
    },
    {
      title: "Exposition Kanto Manabe - 2023",
      description: "Exposition collective d'artistes locaux à l'Hôtel de Ville d'Antananarivo, en collaboration avec d'autres associations du centre-ville.",
      image: "/assets/images/kanto-manabe-2023.jpg",
    },
    {
      title: "Ateliers permanents",
      description: "Parallèlement à ces projets, nous organisons continuellement des ateliers d'art pour soutenir et encourager les jeunes talents.",
      image: "/assets/images/workshops.jpg",
    },
  ];

  return (
    <section className="realisations">
      <h1>Nos Réalisations</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <Card key={index} title={event.title} description={event.description} image={event.image} />
        ))}
      </div>
    </section>
  );
}

export default Realisations;