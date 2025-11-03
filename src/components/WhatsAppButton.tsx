import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappNumber = '5511999999999';
    const message = 'Olá! Gostaria de agendar um horário.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Agendar pelo WhatsApp"
        >
            {/* Botão Principal */}
            <div className="relative">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />

                {/* Botão */}
                <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95">
                    <MessageCircle size={28} />
                </div>

                {/* Badge de notificação (opcional) */}
                <div className="absolute -top-1 -right-1 bg-barber-red text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                    1
                </div>
            </div>

            {/* Tooltip */}
            <div
                className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-barber-black text-barber-cream px-4 py-2 rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                    }`}
            >
                <span className="font-bold">Agende seu horário!</span>
                {/* Arrow */}
                <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-barber-black" />
            </div>
        </a>
    );
};

export default WhatsAppButton;
