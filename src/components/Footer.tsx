import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-barber-black border-t border-barber-gold/20">
            <div className="container-custom section-padding">
                {/* Grid Principal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Coluna 1: Logo e Descrição */}
                    <div className="text-center md:text-left">
                        <img
                            src="https://raw.githubusercontent.com/an3dree/gago-barbeiro/refs/heads/main/public/logo.jpg"
                            alt="Gago Barber Shop"
                            className="h-24 w-auto mx-auto md:mx-0 mb-4"
                        />
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Tradição e estilo em cada corte desde 2019.
                            <br />
                            A melhor experiência em barbearia para o homem moderno.
                        </p>
                        {/* Redes Sociais */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a
                                href="https://www.instagram.com/allysonbarbershop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-800 hover:bg-barber-red text-barber-cream p-3 rounded-full transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div className="text-center">
                        <h3 className="text-barber-gold font-serif text-xl mb-6">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#servicos"
                                    className="text-zinc-400 hover:text-barber-gold transition-colors"
                                >
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#galeria"
                                    className="text-zinc-400 hover:text-barber-gold transition-colors"
                                >
                                    Galeria
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#funcionamento"
                                    className="text-zinc-400 hover:text-barber-gold transition-colors"
                                >
                                    Horário
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#localizacao"
                                    className="text-zinc-400 hover:text-barber-gold transition-colors"
                                >
                                    Localização
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div className="text-center md:text-left">
                        <h3 className="text-barber-gold font-serif text-xl mb-6">Contato</h3>
                        <div className="space-y-4">
                            {/* Endereço */}
                            <div className="flex items-start gap-3 justify-center md:justify-start">
                                <MapPin className="text-barber-red flex-shrink-0 mt-1" size={18} />
                                <p className="text-zinc-400 text-sm">
                                    Avenida Santo Expedito, 18c
                                    <br />
                                    Alameda Paulista - Pernambuco
                                </p>
                            </div>

                            {/* Telefone */}
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Phone className="text-barber-red flex-shrink-0" size={18} />
                                <a
                                    href="tel:+558185427560"
                                    className="text-zinc-400 text-sm hover:text-barber-gold transition-colors"
                                >
                                    (81) 8542-7560
                                </a>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <Mail className="text-barber-red flex-shrink-0" size={18} />
                                <a
                                    href="mailto:contato@gagobarbershop.com"
                                    className="text-zinc-400 text-sm hover:text-barber-gold transition-colors"
                                >
                                    contato@gagobarbershop.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-800 pt-8">
                    {/* Copyright */}
                    <div className="text-center text-zinc-500 text-sm">
                        <p>
                            © {currentYear} <span className="text-barber-gold font-bold">Gago Barber Shop</span>.
                            Todos os direitos reservados.
                        </p>
                        <p className="mt-2">
                            Desenvolvido com ❤️ para homens que valorizam estilo e tradição.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
