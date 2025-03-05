import './styles/Home.css';

function Home() {
  const events = [
    {
      title: "Rencontre d'art - Mars 2019",
      description:
        "Une rencontre visant à réunir de jeunes artistes en dehors de l'association C'ArtBON pour discuter des enjeux de la scène artistique en Province A.",
    },
    {
      title: "Événement C'ArtBON - Janvier 2020",
      description:
        "Un événement au cours duquel des artistes extérieurs à la région ont été invités à partager leurs expériences en tant qu'artistes, en combinaison avec des performances culturelles et des sessions de peinture en direct.",
    },
    {
      title: "Art Meeting Part 2 - Février 2020",
      description:
        "Un suivi du premier Art Meeting, où nous avons présenté les idées discutées dans la partie 1 au Ministère de l'Artisanat de Madagascar.",
    },
    {
      title: "Participation à l'ITM 2020",
      description:
        "Représentation de notre travail artistique dans un espace d'exposition international au Salon International du Tourisme de Madagascar.",
    },
    {
      title: "Exposition Kanto Manabe - 2023",
      description:
        "Exposition collective d'artistes locaux à l'Hôtel de Ville d'Antananarivo, en collaboration avec d'autres associations du centre-ville.",
    },
    {
      title: "Ateliers permanents",
      description:
        "Parallèlement à ces projets, nous organisons continuellement des ateliers d'art pour soutenir et encourager les jeunes talents.",
    },
  ];

  return (
    <section className="home">
      <header className="hero">
        <h1>Bienvenue chez C'Artbon</h1>
        <p>
          Une association dédiée à la promotion de l'art et au soutien des jeunes talents à Madagascar et au-delà.
        </p>
      </header>

      <div className="about">
        <h2>Qui sommes-nous ?</h2>
        <p>
          C'Artbon est une association dynamique qui œuvre pour connecter les artistes, valoriser leurs créations et
          encourager l'expression artistique à travers des événements, expositions et ateliers. Depuis 2019, nous
          construisons des ponts entre les talents locaux et les opportunités internationales.
        </p>
      </div>

      <div className="events">
        <h2>Nos moments forts</h2>
        <div className="event-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;