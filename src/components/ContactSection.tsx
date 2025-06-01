import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-marble-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-cormorant text-5xl font-bold text-white mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-300">
              Получите персональную консультацию по элитной недвижимости
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h3 className="font-cormorant text-2xl font-semibold text-white mb-8">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                    <Icon name="phone" size={20} className="text-marble-dark" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      +7 (495) 123-45-67
                    </div>
                    <div className="text-gray-400">Круглосуточно</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                    <Icon name="mail" size={20} className="text-marble-dark" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      info@elite-realty.ru
                    </div>
                    <div className="text-gray-400">Ответим в течение часа</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                    <Icon
                      name="map-pin"
                      size={20}
                      className="text-marble-dark"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Тверская ул., 12, стр. 1
                    </div>
                    <div className="text-gray-400">Москва, 125009</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-6 py-4 bg-card border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-6 py-4 bg-card border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 bg-card border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-6 py-4 bg-card border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient text-marble-dark py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-gold/30"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
