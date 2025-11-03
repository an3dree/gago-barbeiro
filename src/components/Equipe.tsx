import { Instagram } from 'lucide-react';

const Equipe = () => {
    const equipe = [
        {
            nome: "João 'Navalha' Silva",
            especialidade: 'Especialista em Fades e Degradês Clássicos',
            foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500',
            instagram: '@joao.navalha',
        },
        {
            nome: "Carlos 'Barbudo' Santos",
            especialidade: 'Master em Barba Terapia e Tratamentos',
            foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500',
            instagram: '@carlos.barbudo',
        },
        {
            nome: "Rafael 'Tesoura' Oliveira",
            especialidade: 'Expert em Cortes Modernos e Platinados',
            foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500',
            instagram: '@rafael.tesoura',
        },
    ];

    return (
        <section id="equipe" className="section-padding bg-zinc-900">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-barber-cream mb-4">Nossa Equipe</h2>
                    <div className="divider-barber" />
                    <p className="text-barber-gold font-serif text-xl max-w-2xl mx-auto">
                        Profissionais experientes e apaixonados pela arte da barbearia
                    </p>
                </div>

                {/* Cards dos Barbeiros */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    {equipe.map((barbeiro, index) => (
                        <div
                            key={index}
                            className="card-barber flex flex-col md:flex-row items-center gap-6 animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Foto */}
                            <div className="flex-shrink-0">
                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-barber-gold/50 group-hover:border-barber-gold transition-colors">
                                    <img
                                        src={barbeiro.foto}
                                        alt={barbeiro.nome}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Informações */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-barber-gold font-serif mb-2">
                                    {barbeiro.nome}
                                </h3>
                                <p className="text-barber-cream text-lg mb-3">
                                    {barbeiro.especialidade}
                                </p>

                                {/* Instagram */}
                                {barbeiro.instagram && (
                                    <a
                                        href={`https://instagram.com/${barbeiro.instagram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-barber-gold hover:text-barber-red transition-colors"
                                    >
                                        <Instagram size={20} />
                                        <span className="font-medium">{barbeiro.instagram}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-zinc-400 text-lg mb-4">
                        Quer fazer parte do nosso time?
                    </p>
                    <a
                        href="mailto:contato@gagobarbershop.com"
                        className="btn-secondary inline-block"
                    >
                        Trabalhe Conosco
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Equipe;
