interface CardProps {
  title: string;
  description: string;
  image?: string;
  className?: string; // Ajouté pour permettre des styles externes (ex. hover dans Associes)
}

function Card({ title, description, image, className }: CardProps) {
  return (
    <div
      className={`card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${className}`}
    >
      {image && (
        <div className="card-image">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="card-content p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;