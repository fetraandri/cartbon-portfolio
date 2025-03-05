import './styles/home.css';

function Home() {
  return (
    <section className="home">
      <header className="hero">
        <h1>Bienvenue chez C'Artbon</h1>
        <p>Une association dédiée à la promotion de l'art et au soutien des jeunes talents à Madagascar et au-delà.</p>
      </header>
      <div className="about">
        <h2>Qui sommes-nous ?</h2>
        <p>
          C'Artbon est une association dynamique qui œuvre pour connecter les artistes, valoriser leurs créations et encourager l'expression artistique à travers des événements, expositions et ateliers. Depuis 2019, nous construisons des ponts entre les talents locaux et les opportunités internationales.
        </p>
      </div>
    </section>
  );
}

export default Home;