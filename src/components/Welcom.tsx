import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, y: [0, -20, 0] },
};

function Welcome() {
  const line1 = "Bienvenue";
  const line2 = "Chez     C'Artbon";

  return (
    <header className="hero">
      <div className="hero-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="bouncy-title"
        >
          <div>
            {[...Array(line1.length)].map((_, i) => (
              <motion.span
                key={`line1-${i}`}
                variants={item}
                style={{ display: 'inline-block', margin: '0 2px' }}
              >
                {line1[i]}
              </motion.span>
            ))}
          </div>
          <div>
            {[...Array(line2.length)].map((_, i) => (
              <motion.span
                key={`line2-${i}`}
                variants={item}
                style={{ display: 'inline-block', margin: '0 2px' }}
              >
                {line2[i]}
              </motion.span>
            ))}
          </div>
          <p>Une association dédiée à la promotion de l'art et au soutien des jeunes talents à Madagascar et au-delà.</p>
        </motion.div>
        <div className="hero-image">
          <img src={logo} alt="C'Artbon Logo" />
        </div>
      </div>
    </header>
  );
}

export default Welcome;