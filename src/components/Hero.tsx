import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image com Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/hero.jpeg')`,
                    }}
                />
                {/* Overlay escuro para melhorar legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-b from-barber-black/70 via-barber-black/50 to-barber-black/80" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 text-center px-4 animate-fadeInUp">
                <div className="mb-6">
                    <img
                        src="/logo.png"
                        alt="Gago Barber Shop"
                        className="h-32 md:h-48 w-auto mx-auto mb-8 drop-shadow-2xl"
                    />
                </div>

                <h1 className="text-barber-cream text-shadow mb-6 leading-tight">
                    Tradição e Estilo
                    <br />
                    <span className="text-barber-red">Em Cada Corte</span>
                </h1>

                <p className="text-xl md:text-2xl text-barber-gold font-serif mb-8 max-w-2xl mx-auto">
                    Desde 2019, transformando homens com excelência e autenticidade
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => scrollToSection('servicos')}
                        className="btn-primary text-lg"
                    >
                        Nossos Serviços
                    </button>
                    <button
                        onClick={() => scrollToSection('localizacao')}
                        className="btn-secondary text-lg"
                    >
                        Agendar Horário
                    </button>
                </div>

                {/* Indicador de Scroll */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown
                        size={40}
                        className="text-barber-gold cursor-pointer"
                        onClick={() => scrollToSection('servicos')}
                    />
                </div>
            </div>

            {/* Efeito de particles/textura (opcional) */}
            <div className="absolute inset-0 z-5 opacity-10 bg-wood-texture pointer-events-none" />
        </section>
    );
};

export default Hero;
