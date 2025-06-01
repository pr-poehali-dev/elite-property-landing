import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-screen marble-texture flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-gold/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-gold/20 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Элитная
            <span className="block gold-gradient bg-clip-text text-transparent">
              недвижимость
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
            Эксклюзивные объекты премиум-класса в самых престижных районах
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gold hover:bg-gold-dark text-marble-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/30">
              <div className="flex items-center gap-3">
                <Icon name="home" size={20} />
                <span>Посмотреть объекты</span>
              </div>
            </button>

            <button className="group border-2 border-gold text-gold hover:bg-gold hover:text-marble-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <Icon name="phone" size={20} />
                <span>Консультация</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="chevron-down" size={24} className="text-gold" />
      </div>
    </section>
  );
};

export default HeroSection;
