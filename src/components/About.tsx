export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">🐄</div>
        <div className="absolute bottom-10 right-10 text-9xl">🌾</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Our Story
            </h2>
            <p className="text-xl text-amber-800">Bringing village traditions to your modern kitchen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🏺</div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                      Traditional Matka Fermentation
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our curd is fermented in authentic earthen pots (matka), just like our grandmothers made it.
                      The porous clay naturally regulates temperature and adds minerals, giving our curd its unique
                      taste and creamy texture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🥛</div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                      Pure Organic Milk
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We source fresh milk daily from local village farms where cows graze freely on natural grass.
                      No hormones, no antibiotics - just pure, wholesome milk that nature intended.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🌿</div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                      Natural & Chemical-Free
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      No preservatives, no additives, no artificial cultures. We use natural fermentation methods
                      passed down through generations. What you get is 100% pure, traditional village curd.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-200 to-amber-300 rounded-3xl p-12 text-center shadow-2xl border-4 border-orange-300">
                <div className="text-8xl mb-6">🐄</div>
                <h3 className="text-3xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  From Village to Your Home
                </h3>
                <p className="text-lg text-orange-800 leading-relaxed">
                  Master Curd brings authentic South Indian village dairy traditions to modern homes.
                  Every pot of curd carries the warmth of village life, the purity of organic farming,
                  and the taste of tradition.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/90 rounded-2xl p-6 text-center shadow-lg border-2 border-orange-200">
                  <div className="text-5xl mb-3">🌾</div>
                  <p className="text-orange-900 font-bold text-lg">Natural Process</p>
                </div>
                <div className="bg-white/90 rounded-2xl p-6 text-center shadow-lg border-2 border-orange-200">
                  <div className="text-5xl mb-3">🏘️</div>
                  <p className="text-orange-900 font-bold text-lg">Village Fresh</p>
                </div>
                <div className="bg-white/90 rounded-2xl p-6 text-center shadow-lg border-2 border-orange-200">
                  <div className="text-5xl mb-3">💚</div>
                  <p className="text-orange-900 font-bold text-lg">Healthy Choice</p>
                </div>
                <div className="bg-white/90 rounded-2xl p-6 text-center shadow-lg border-2 border-orange-200">
                  <div className="text-5xl mb-3">⭐</div>
                  <p className="text-orange-900 font-bold text-lg">Quality First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
