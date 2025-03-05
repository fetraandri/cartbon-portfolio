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
  
  export default Card;