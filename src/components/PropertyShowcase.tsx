import Icon from "@/components/ui/icon";

const properties = [
  {
    id: 1,
    title: "Пентхаус в ЖК «Резиденция»",
    location: "Остоженка",
    price: "150 млн ₽",
    area: "280 м²",
    rooms: 4,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: 2,
    title: "Особняк в Барвихе",
    location: "Барвиха",
    price: "350 млн ₽",
    area: "650 м²",
    rooms: 7,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 3,
    title: "Апартаменты с видом на Кремль",
    location: "Тверская",
    price: "95 млн ₽",
    area: "180 м²",
    rooms: 3,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
];

const PropertyShowcase = () => {
  return (
    <section className="py-20 bg-marble-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cormorant text-5xl font-bold text-white mb-6">
            Эксклюзивные объекты
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Тщательно отобранная недвижимость для самых взыскательных клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 animate-scale-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-gold text-marble-dark px-3 py-1 rounded-full text-sm font-semibold">
                  Эксклюзив
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-cormorant text-2xl font-semibold text-white mb-2">
                  {property.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <Icon name="map-pin" size={16} className="text-gold" />
                  <span className="text-gray-400">{property.location}</span>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-gold">
                    {property.price}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Icon name="home" size={14} />
                      <span>{property.rooms} комн</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="square" size={14} />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-marble-dark py-3 rounded-lg font-semibold transition-all duration-300">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
