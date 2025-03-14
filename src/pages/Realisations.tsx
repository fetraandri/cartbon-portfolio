import './styles/Realisations.css';
import itm2020 from '../assets/itm-2020.jpg';
import kantomanabe1 from '../assets/kanto-manabe/kantomanabe1.jpg'
import kantomanabe2 from '../assets/kanto-manabe/kantomanabe2.jpg'
import kantomanabe3 from '../assets/kanto-manabe/kantomanabe3.jpg'
import kantomanabe4 from '../assets/kanto-manabe/kantomanabe4.jpg'
import rencontredart from '../assets/rencontredart.jpg'


function Realisations() {
  const events = [
    {
      title: "Rencontre d'art - Mars 2019",
      description:
        "Une rencontre visant à réunir de jeunes artistes en dehors de l'association C'ArtBON pour discuter des enjeux de la scène artistique en Province A.",
      image: rencontredart,
    },
    {
      title: "Événement C'ArtBON - Janvier 2020",
      description:
        "Un événement au cours duquel des artistes extérieurs à la région ont été invités à partager leurs expériences en tant qu'artistes, en combinaison avec des performances culturelles et des sessions de peinture en direct.",
      image: "/assets/images/event-2020.jpg",
    },
    {
      title: "Art Meeting Part 2 - Février 2020",
      description:
        "Un suivi du premier Art Meeting, où nous avons présenté les idées discutées dans la partie 1 au Ministère de l'Artisanat de Madagascar.",
      image: "/assets/images/art-meeting-2-2020.jpg",
    },
    {
      title: "Participation à l'ITM 2020",
      description:
        "Représentation de notre travail artistique dans un espace d'exposition international au Salon International du Tourisme de Madagascar.",
      image: itm2020,
    },
    {
      title: "Exposition Kanto Manabe - 2023",
      description:
        "Exposition collective d'artistes locaux à l'Hôtel de Ville d'Antananarivo, en collaboration avec d'autres associations du centre-ville.",
      images: [
        kantomanabe1,
        kantomanabe2,
        kantomanabe3,
        kantomanabe4,
        
      ],
    },
    {
      title: "Ateliers permanents",
      description:
        "Parallèlement à ces projets, nous organisons continuellement des ateliers d'art pour soutenir et encourager les jeunes talents.",
      image: "/assets/images/workshops.jpg",
    },
  ];

  return (
    <section className="realisations bg-gray-100 pt-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="titre text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 tracking-tight">
          Nos Réalisations
        </h1>
        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              {/* Texte */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Image ou Album */}
              <div className="w-full md:w-1/2">
                {event.title === "Exposition Kanto Manabe - 2023" ? (
                  <div className="grid grid-cols-2 gap-4">
                    {event.images?.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative group">
                        <img
                          src={img}
                          alt={`${event.title} - Photo ${imgIndex + 1}`}
                          className="w-full h-40 md:h-48 object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Realisations;