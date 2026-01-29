import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">📞</div>
        <div className="absolute bottom-10 right-10 text-9xl">📍</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Get in Touch
            </h2>
            <p className="text-xl text-amber-800">We're here to serve you fresh, healthy curd daily</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-900" style={{ fontFamily: 'Georgia, serif' }}>
                    Call Us
                  </h3>
                  <p className="text-amber-700">Speak with our team</p>
                </div>
              </div>
              <a
                href="tel:9390905453"
                className="block text-center bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-bold text-2xl hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl"
              >
                9390905453
              </a>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-900" style={{ fontFamily: 'Georgia, serif' }}>
                    WhatsApp
                  </h3>
                  <p className="text-amber-700">Quick responses</p>
                </div>
              </div>
              <a
                href="https://wa.me/919390905453?text=Hello%20Master%20Curd!%20I%20want%20to%20order%20fresh%20village%20curd."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold text-2xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl"
              >
                Chat Now
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl p-10 shadow-2xl border-4 border-orange-300">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-200">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Service Area
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Anantapur, Guntakal, Dharmavaram, and nearby villages
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-200">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Delivery Time
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Fresh morning delivery: 6 AM - 8 AM daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200 inline-block">
              <h3 className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Ready to Order?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Start your healthy journey with authentic village curd today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9390905453"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919390905453?text=Hello%20Master%20Curd!%20I%20want%20to%20order%20fresh%20village%20curd."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t-4 border-orange-300">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🏺</div>
          <h3 className="text-3xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Master Curd
          </h3>
          <p className="text-xl text-amber-700 italic mb-6">"Kunda perugu"</p>
          <p className="text-gray-700 mb-4">
            Traditional village curd delivered fresh to your doorstep
          </p>
          <p className="text-amber-800 font-semibold">
            📞 9390905453 | 📍 Anantapur & nearby villages
          </p>
          <div className="mt-6 text-gray-600 text-sm">
            <p>&copy; 2024 Master Curd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
