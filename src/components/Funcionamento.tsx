import { Clock, Calendar } from 'lucide-react';

const Funcionamento = () => {
    // Gerar blocos de horário de 50 minutos
    const gerarBlocosHorario = (inicio: string, fim: string, pausa?: { inicio: string; fim: string }) => {
        const blocos: string[] = [];
        const [horaInicio, minInicio] = inicio.split(':').map(Number);
        const [horaFim, minFim] = fim.split(':').map(Number);

        let horaAtual = horaInicio;
        let minAtual = minInicio;

        while (horaAtual < horaFim || (horaAtual === horaFim && minAtual < minFim)) {
            const horarioFormatado = `${String(horaAtual).padStart(2, '0')}:${String(minAtual).padStart(2, '0')}`;

            // Verificar se está no horário de pausa
            if (pausa) {
                const [horaPausaInicio, minPausaInicio] = pausa.inicio.split(':').map(Number);
                const [horaPausaFim, minPausaFim] = pausa.fim.split(':').map(Number);

                const emPausa = (horaAtual > horaPausaInicio || (horaAtual === horaPausaInicio && minAtual >= minPausaInicio)) &&
                    (horaAtual < horaPausaFim || (horaAtual === horaPausaFim && minAtual < minPausaFim));

                if (!emPausa) {
                    blocos.push(horarioFormatado);
                }
            } else {
                blocos.push(horarioFormatado);
            }

            // Adicionar 50 minutos
            minAtual += 50;
            if (minAtual >= 60) {
                horaAtual += Math.floor(minAtual / 60);
                minAtual = minAtual % 60;
            }
        }

        return blocos;
    };

    const horariosSemana = gerarBlocosHorario('08:30', '20:00', { inicio: '12:00', fim: '14:00' });
    const horariosSabado = gerarBlocosHorario('08:30', '18:00', { inicio: '12:00', fim: '14:00' });

    const horarios = [
        { dia: 'Segunda a Sexta', horario: '08:30 - 20:00', pausa: '12:00 - 14:00', blocos: horariosSemana },
        { dia: 'Sábado', horario: '08:30 - 18:00', pausa: '12:00 - 14:00', blocos: horariosSabado, destaque: true },
        { dia: 'Domingo', horario: 'Fechado', fechado: true },
    ];

    return (
        <section className="section-padding bg-barber-black">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <Clock className="mx-auto mb-4 text-barber-red" size={48} />
                    <h2 className="text-barber-cream mb-4">Horário de Atendimento</h2>
                    <div className="divider-barber" />
                    <p className="text-barber-gold font-serif text-xl max-w-2xl mx-auto">
                        Agendamentos em blocos de 50 minutos para seu conforto
                    </p>
                </div>

                {/* Grid de Horários */}
                <div className="max-w-6xl mx-auto">
                    {/* Resumo dos Dias */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {horarios.map((item, index) => (
                            <div
                                key={index}
                                className={`card-barber text-center ${item.fechado
                                    ? 'opacity-60 bg-zinc-900/50'
                                    : item.destaque
                                        ? 'border-2 border-barber-red'
                                        : ''
                                    }`}
                            >
                                <Calendar className={`mx-auto mb-3 ${item.fechado ? 'text-zinc-600' : 'text-barber-red'}`} size={32} />
                                <h3
                                    className={`font-bold text-xl mb-2 ${item.fechado
                                        ? 'text-zinc-500'
                                        : item.destaque
                                            ? 'text-barber-gold'
                                            : 'text-barber-cream'
                                        }`}
                                >
                                    {item.dia}
                                </h3>
                                <p
                                    className={`font-serif text-lg mb-1 ${item.fechado ? 'text-zinc-600' : 'text-barber-gold'
                                        }`}
                                >
                                    {item.horario}
                                </p>
                                {item.pausa && (
                                    <p className="text-zinc-400 text-sm mt-2">
                                        Pausa: {item.pausa}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Blocos de Horário Disponíveis */}
                    <div className="space-y-8">
                        {horarios.filter(h => !h.fechado).map((item, index) => (
                            <div key={index} className="card-barber">
                                <h3 className="text-barber-gold font-serif text-2xl mb-6 text-center">
                                    Horários Disponíveis - {item.dia}
                                </h3>
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                                    {item.blocos?.map((horario, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-zinc-800 hover:bg-barber-red/20 border border-zinc-700 hover:border-barber-red rounded-lg p-3 text-center transition-all duration-300 cursor-pointer hover:scale-105"
                                        >
                                            <Clock size={16} className="mx-auto mb-1 text-barber-gold" />
                                            <span className="text-barber-cream font-bold text-sm">
                                                {horario}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nota Adicional */}
                    <div className="mt-12 card-barber bg-barber-red/10 border-l-4 border-barber-red">
                        <div className="flex items-start gap-4">
                            <Clock className="text-barber-red flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-barber-gold font-bold text-lg mb-2">
                                    Sistema de Agendamento
                                </h4>
                                <ul className="text-zinc-300 text-sm space-y-2">
                                    <li>• Cada atendimento tem duração de <strong className="text-barber-cream">50 minutos</strong></li>
                                    <li>• Pausa para almoço das <strong className="text-barber-cream">12:00 às 14:00</strong></li>
                                    <li>• Recomendamos agendamento prévio pelo WhatsApp</li>
                                    <li>• Domingo fechado para descanso</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Funcionamento;
