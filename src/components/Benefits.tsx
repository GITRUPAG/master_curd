import { Heart, Leaf, Droplet, Sparkles, Shield, Smile } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Natural Probiotic',
    description: 'Rich in beneficial bacteria that support gut health and boost immunity naturally.',
    emoji: '🦠'
  },
  {
    icon: Shield,
    title: 'No Chemicals',
    description: 'Completely free from preservatives, artificial colors, and chemical additives.',
    emoji: '🚫'
  },
  {
    icon: Droplet,
    title: 'Clay Pot Taste',
    description: 'Unique earthy flavor from matka fermentation that brings back childhood memories.',
    emoji: '🏺'
  },
  {
    icon: Heart,
    title: 'Healthy Digestion',
    description: 'Improves digestion, reduces bloating, and promotes overall gut wellness.',
    emoji: '💚'
  },
  {
    icon: Leaf,
    title: 'Organic & Pure',
    description: 'Made from organic milk sourced from grass-fed cows in local villages.',
    emoji: '🌿'
  },
  {
    icon: Smile,
    title: 'Traditional Goodness',
    description: 'Prepared using age-old methods that preserve nutrients and natural enzymes.',
    emoji: '😊'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 via-yellow-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 text-9xl">💚</div>
        <div className="absolute bottom-1/4 right-10 text-9xl">🌿</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Health Benefits
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Discover why traditional matka curd is the healthiest choice for you and your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200 hover:border-orange-400 transition-all hover:scale-105 group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="text-6xl">{benefit.emoji}</div>
              </div>

              <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                {benefit.title}
              </h3>

              <p className="text-gray-700 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Start Your Healthy Journey Today!
            </h3>
            <p className="text-xl mb-8 opacity-95">
              Experience the authentic taste of village life with every spoonful
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9390905453"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Call 9390905453
              </a>
              <a
                href="https://wa.me/919390905453?text=Hello%20Master%20Curd!%20I%20want%20to%20order%20fresh%20village%20curd."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
