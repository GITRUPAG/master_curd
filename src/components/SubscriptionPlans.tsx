import { Check, Phone } from 'lucide-react';

const plans = [
  {
    duration: '1 Month',
    days: 30,
    originalPrice: 1800,
    discountedPrice: 1800,
    discount: 0,
    perDay: 60,
    popular: false
  },
  {
    duration: '3 Months',
    days: 90,
    originalPrice: 5400,
    discountedPrice: 5130,
    discount: 5,
    perDay: 57,
    popular: true
  },
  {
    duration: '6 Months',
    days: 180,
    originalPrice: 10800,
    discountedPrice: 9720,
    discount: 10,
    perDay: 54,
    popular: false
  },
  {
    duration: '12 Months',
    days: 365,
    originalPrice: 21900,
    discountedPrice: 17520,
    discount: 20,
    perDay: 48,
    popular: false
  }
];

export default function SubscriptionPlans() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-9xl">🏺</div>
        <div className="absolute bottom-20 right-1/4 text-9xl">🥛</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Subscription Plans
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Choose a plan that suits your family. Fresh 1 Liter curd delivered daily to your doorstep.
          </p>
          <div className="mt-4 inline-block bg-green-100 border-2 border-green-300 rounded-full px-6 py-2">
            <p className="text-green-800 font-semibold">Custom quantity plans available (500ml / 2L)</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 ${
                plan.popular ? 'ring-4 ring-orange-500 md:scale-105' : 'border-4 border-orange-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-bl-2xl font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              {plan.discount > 0 && (
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Save {plan.discount}%
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-orange-50 to-amber-50' : 'bg-gradient-to-br from-yellow-50 to-orange-50'}`}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🏺</div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {plan.duration}
                  </h3>
                  <p className="text-amber-700">{plan.days} days supply</p>
                </div>

                <div className="text-center mb-6">
                  {plan.discount > 0 && (
                    <div className="text-gray-500 line-through text-lg mb-1">
                      ₹{plan.originalPrice.toLocaleString('en-IN')}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-orange-900 mb-2">
                    ₹{plan.discountedPrice.toLocaleString('en-IN')}
                  </div>
                  <div className="text-amber-700 font-semibold">
                    ₹{plan.perDay}/day
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>1 Liter daily delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Fresh matka curd</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Organic milk</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Traditional taste</span>
                  </div>
                  {plan.discount > 0 && (
                    <div className="flex items-center gap-2 text-green-700 font-semibold">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>Save ₹{(plan.originalPrice - plan.discountedPrice).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                <a
                  href="tel:9390905453"
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-amber-800 mb-4">Need a custom plan? Call us!</p>
          <a
            href="tel:9390905453"
            className="inline-flex items-center gap-2 bg-orange-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-800 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            9390905453
          </a>
        </div>
      </div>
    </section>
  );
}
