const testimonials = [
  {
    name: 'Lakshmi Devi',
    location: 'Anantapur',
    text: 'మాస్టర్ కర్డ్ తాగిన తర్వాత నా కుటుంబానికి ఆరోగ్యం చాలా మెరుగుపడింది. నిజంగా గ్రామ పెరుగు రుచి వస్తుంది!',
    translation: 'After using Master Curd, my family\'s health has improved significantly. It truly tastes like village curd!',
    rating: 5,
    emoji: '👵'
  },
  {
    name: 'Ramesh Kumar',
    location: 'Guntakal',
    text: 'బంకమట్టి కుండ పెరుగు అనేది చాలా రోజుల తర్వాత రుచి చూశాను. పిల్లలకు కూడా చాలా ఇష్టం!',
    translation: 'Tasted clay pot curd after so many years. Even my children love it!',
    rating: 5,
    emoji: '👨'
  },
  {
    name: 'Saraswathi',
    location: 'Dharmavaram',
    text: 'నేచురల్ గా ఉంటుంది మరియు డైజెస్షన్ కి చాలా బాగుంటుంది. డైలీ డెలివరీ కూడా టైమ్ కి వస్తుంది.',
    translation: 'It\'s natural and very good for digestion. Daily delivery is always on time.',
    rating: 5,
    emoji: '👩'
  },
  {
    name: 'Venkatesh Reddy',
    location: 'Anantapur',
    text: 'Original village taste! Takes me back to my childhood. Best curd in Anantapur!',
    translation: '',
    rating: 5,
    emoji: '👴'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-9xl">⭐</div>
        <div className="absolute bottom-20 right-1/4 text-9xl">💬</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            What Our Customers Say
          </h2>
          <p className="text-xl text-amber-800">Real reviews from real families</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-orange-200 hover:border-orange-400 transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{testimonial.emoji}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-orange-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-amber-700 text-sm mb-2">📍 {testimonial.location}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 mb-4 border-2 border-amber-200">
                <p className="text-gray-800 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
              </div>

              {testimonial.translation && (
                <p className="text-gray-600 text-sm italic pl-4 border-l-4 border-orange-300">
                  {testimonial.translation}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-8 shadow-lg border-4 border-orange-200">
            <p className="text-2xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Join 1000+ Happy Families!
            </p>
            <div className="flex gap-2 justify-center text-4xl">
              <span>👨‍👩‍👧‍👦</span>
              <span>🏺</span>
              <span>💚</span>
              <span>⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
