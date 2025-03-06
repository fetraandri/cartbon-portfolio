import Welcome from '../components/Welcom';
import About from '../components/About';
import './styles/Home.css';

function Home() {
  return (
    <section className="home">
      <Welcome />
      <About />
    </section>
  );
}

export default Home;