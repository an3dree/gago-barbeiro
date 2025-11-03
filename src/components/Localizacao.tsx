import { MapPin, Phone, Mail } from 'lucide-react';

const Localizacao = () => {
    return (
        <section id="localizacao" className="section-padding bg-zinc-900">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <MapPin className="mx-auto mb-4 text-barber-red" size={48} />
                    <h2 className="text-barber-cream mb-4">Localização</h2>
                    <div className="divider-barber" />
                    <p className="text-barber-gold font-serif text-xl max-w-2xl mx-auto">
                        Venha nos visitar e viva a experiência Gago Barber Shop
                    </p>
                </div>

                {/* Conteúdo */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Informações de Contato */}
                    <div className="card-barber space-y-6">
                        <h3 className="text-barber-gold font-serif text-2xl mb-6 text-center md:text-left">
                            Entre em Contato
                        </h3>

                        {/* Endereço */}
                        <div className="flex items-start gap-4">
                            <MapPin className="text-barber-red flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-barber-cream font-bold mb-1">Endereço</h4>
                                <p className="text-zinc-400">
                                    Avenida Santo Expedito, 18c
                                    <br />
                                    Alameda Paulista - Pernambuco
                                </p>
                            </div>
                        </div>

                        {/* Telefone */}
                        <div className="flex items-start gap-4">
                            <Phone className="text-barber-red flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-barber-cream font-bold mb-1">Telefone</h4>
                                <a
                                    href="tel:+558185427560"
                                    className="text-zinc-400 hover:text-barber-gold transition-colors"
                                >
                                    (81) 8542-7560
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <Mail className="text-barber-red flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-barber-cream font-bold mb-1">E-mail</h4>
                                <a
                                    href="mailto:contato@gagobarbershop.com"
                                    className="text-zinc-400 hover:text-barber-gold transition-colors"
                                >
                                    contato@gagobarbershop.com
                                </a>
                            </div>
                        </div>

                        {/* Botão de Agendamento */}
                        <div className="pt-6 border-t border-zinc-700">
                            <a
                                href="https://wa.me/558185427560?text=Olá!%20Gostaria%20de%20agendar%20um%20horário."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full text-center block"
                            >
                                Agendar pelo WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="card-barber p-0 overflow-hidden h-[400px] md:h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4!2d-35.0!3d-8.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDAnMDAuMCJTIDM1wrAwMCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Gago Barber Shop - Alameda Paulista, Pernambuco"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localizacao;
