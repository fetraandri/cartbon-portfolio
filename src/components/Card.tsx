import PropTypes from 'prop-types';
import './styles/Card.css';

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className="card">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Définir les types de props pour une meilleure robustesse
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string, // Optionnel
};

export default Card;