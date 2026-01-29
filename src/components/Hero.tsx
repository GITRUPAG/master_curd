import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-100 via-amber-50 to-yellow-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-orange-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-amber-400 blur-3xl"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="text-6xl md:text-8xl font-bold text-orange-800 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Master Curd
              </div>
              <div className="text-2xl md:text-4xl text-amber-700 italic" style={{ fontFamily: 'Georgia, serif' }}>
                "Kunda perugu"
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-orange-50 to-amber-50">
                <h1 className="text-3xl md:text-5xl font-bold text-orange-900 mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Fresh Village Curd
                  <br />
                  <span className="text-amber-700">Delivered to Your Doorstep</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Traditional matka curd made from pure organic milk, fermented naturally in earthen pots,
                  bringing authentic village taste to your home.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href="tel:9390905453"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6" />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919390905453?text=Hello%20Master%20Curd!%20I%20want%20to%20order%20fresh%20village%20curd."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp
                  </a>
                </div>

                <div className="inline-block bg-amber-100 border-2 border-amber-300 rounded-2xl px-6 py-3">
                  <p className="text-amber-900 font-semibold text-center">
                    📍 Serving Anantapur & nearby villages
                  </p>
                </div>
              </div>

              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🏺</div>
                    <p className="text-2xl font-bold text-orange-900" style={{ fontFamily: 'Georgia, serif' }}>
                      Traditional Matka Curd
                    </p>
                    <p className="text-lg text-amber-800 mt-2">Made with love & tradition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🌾', text: 'Organic Milk' },
              { icon: '🏺', text: 'Clay Pot Fermented' },
              { icon: '🌿', text: '100% Natural' },
              { icon: '🚚', text: 'Daily Delivery' }
            ].map((item, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all hover:scale-105">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-orange-900 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
