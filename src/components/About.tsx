import { motion } from 'framer-motion';

function About() {
  const bounceAnimation = {
    y: [0, -20, 0], 
    transition: {
      duration: 1.5, 
      repeat: Infinity, 
      ease: 'easeInOut', 
    },
  };

  return (
    <div className="about">
      <motion.h2
        animate={bounceAnimation} 
      >
        Qui sommes-nous ?
      </motion.h2>
      <p>
        C'Artbon est une association dynamique qui œuvre pour connecter les artistes, valoriser leurs créations et encourager l'expression artistique à travers des événements, expositions et ateliers. Depuis 2019, nous construisons des ponts entre les talents locaux et les opportunités internationales.
      </p>
    </div>
  );
}

export default About;