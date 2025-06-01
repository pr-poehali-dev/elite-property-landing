import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "search",
    title: "Подбор объектов",
    description: "Эксклюзивный поиск недвижимости по индивидуальным критериям",
  },
  {
    icon: "file-check",
    title: "Юридическое сопровождение",
    description: "Полная проверка документов и безопасность сделки",
  },
  {
    icon: "handshake",
    title: "Персональный консультант",
    description: "Индивидуальный подход и сопровождение на всех этапах",
  },
  {
    icon: "trending-up",
    title: "Инвестиционный анализ",
    description: "Профессиональная оценка инвестиционного потенциала",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 marble-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cormorant text-5xl font-bold text-white mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Комплексное решение всех вопросов при покупке элитной недвижимости
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-card/50 backdrop-blur-sm rounded-xl hover:bg-card/80 transition-all duration-500 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={service.icon as any}
                  size={24}
                  className="text-marble-dark"
                />
              </div>

              <h3 className="font-cormorant text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
