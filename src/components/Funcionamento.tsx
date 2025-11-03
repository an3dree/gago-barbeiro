import { Clock } from 'lucide-react';

const Funcionamento = () => {
    const horarios = [
        { dia: 'Segunda-feira', horario: '09:00 - 20:00' },
        { dia: 'Terça-feira', horario: '09:00 - 20:00' },
        { dia: 'Quarta-feira', horario: '09:00 - 20:00' },
        { dia: 'Quinta-feira', horario: '09:00 - 20:00' },
        { dia: 'Sexta-feira', horario: '09:00 - 20:00' },
        { dia: 'Sábado', horario: '09:00 - 18:00', destaque: true },
        { dia: 'Domingo', horario: 'Fechado', fechado: true },
    ];

    return (
        <section className="section-padding bg-barber-black">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <Clock className="mx-auto mb-4 text-barber-red" size={48} />
                    <h2 className="text-barber-cream mb-4">Horário de Funcionamento</h2>
                    <div className="divider-barber" />
                    <p className="text-barber-gold font-serif text-xl max-w-2xl mx-auto">
                        Estamos prontos para atender você nos melhores horários
                    </p>
                </div>

                {/* Tabela de Horários */}
                <div className="max-w-2xl mx-auto">
                    <div className="card-barber">
                        <div className="space-y-4">
                            {horarios.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex justify-between items-center py-4 px-6 rounded-lg transition-all duration-300 ${item.fechado
                                            ? 'bg-zinc-800/50 opacity-60'
                                            : item.destaque
                                                ? 'bg-barber-red/10 border-l-4 border-barber-red'
                                                : 'hover:bg-zinc-800/30'
                                        }`}
                                >
                                    <span
                                        className={`font-bold text-lg ${item.fechado
                                                ? 'text-zinc-500'
                                                : item.destaque
                                                    ? 'text-barber-gold'
                                                    : 'text-barber-cream'
                                            }`}
                                    >
                                        {item.dia}
                                    </span>
                                    <span
                                        className={`font-serif text-lg ${item.fechado
                                                ? 'text-zinc-600'
                                                : item.destaque
                                                    ? 'text-barber-red font-bold'
                                                    : 'text-barber-gold'
                                            }`}
                                    >
                                        {item.horario}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nota Adicional */}
                    <div className="mt-8 text-center">
                        <p className="text-zinc-400 text-sm">
                            <span className="text-barber-red font-bold">Importante:</span> Recomendamos
                            agendamento prévio para garantir seu horário.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Funcionamento;
