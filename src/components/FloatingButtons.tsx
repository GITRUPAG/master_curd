import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/919390905453?text=Hello%20Master%20Curd!%20I%20want%20to%20order%20fresh%20village%20curd."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />
      </a>

      <a
        href="tel:9390905453"
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-110 group"
        aria-label="Call"
      >
        <Phone className="w-7 h-7 group-hover:animate-bounce" />
      </a>
    </div>
  );
}
