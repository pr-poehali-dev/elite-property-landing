const MapSection = () => {
  return (
    <section className="py-20 bg-marble-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl font-bold text-white mb-6">
              Наш офис
            </h2>
            <p className="text-xl text-gray-300">
              г. Нижний Новгород, улица Воровского, д.22
            </p>
          </div>

          <div className="animate-scale-in">
            <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="h-96 relative">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7b8e5a8f8e8a8e8a8e8a8e8a8e8a8e8a&amp;source=constructor"
                  width="100%"
                  height="100%"
                  className="border-0"
                  title="Карта офиса"
                ></iframe>

                {/* Overlay with address */}
                <div className="absolute bottom-4 left-4 bg-marble-dark/90 backdrop-blur-sm text-white p-4 rounded-2xl border border-gold/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                      <span className="text-marble-dark">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold">Офис продаж</div>
                      <div className="text-sm text-gray-300">
                        ул. Воровского, 22
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
