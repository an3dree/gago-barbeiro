import { Scissors } from 'lucide-react';
import servicosData from '../data/servicos.json';
import type { ServicosData } from '../types';

const ServicosMenu = () => {
    const data: ServicosData = servicosData;

    return (
        <section id="servicos" className="section-padding bg-zinc-900">
            <div className="container-custom">
                {/* Header da Seção */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <Scissors className="mx-auto mb-4 text-barber-red" size={48} />
                    <h2 className="text-barber-cream mb-4">Nossos Serviços</h2>
                    <div className="divider-barber" />
                    <p className="text-barber-gold font-serif text-xl max-w-2xl mx-auto">
                        Escolha a experiência perfeita para você. Qualidade e tradição em cada atendimento.
                    </p>
                </div>

                {/* Menu de Categorias */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {data.categorias.map((categoria, index) => (
                        <div
                            key={index}
                            className="card-barber animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 className="text-barber-gold font-serif text-center mb-6 pb-4 border-b border-barber-gold/30">
                                {categoria.nome}
                            </h3>
                            <div className="space-y-6">
                                {categoria.itens.map((item, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-barber-cream font-bold text-lg group-hover:text-barber-gold transition-colors">
                                                {item.nome}
                                            </h4>
                                            <span className="text-barber-red font-bold text-lg whitespace-nowrap ml-4">
                                                {item.preco}
                                            </span>
                                        </div>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                        {idx < categoria.itens.length - 1 && (
                                            <div className="mt-4 border-b border-zinc-700/50" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seção de Combos Destaque */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-barber-red/10 to-barber-gold/10 rounded-2xl blur-3xl" />
                    <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 md:p-12 border-2 border-barber-gold/30">
                        <div className="text-center mb-12">
                            <h2 className="text-barber-gold mb-4">Nossos Combos</h2>
                            <div className="divider-barber" />
                            <p className="text-barber-cream font-serif text-lg">
                                Economize mais com nossos pacotes exclusivos
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {data.combos.map((combo, index) => (
                                <div
                                    key={index}
                                    className="bg-barber-black/50 rounded-xl p-6 border border-barber-gold/20 hover:border-barber-gold hover:scale-105 transition-all duration-300 group"
                                >
                                    <div className="text-center mb-4">
                                        <div className="inline-block bg-barber-red text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-3">
                                            Economia
                                        </div>
                                        <h3 className="text-barber-gold font-serif mb-2 group-hover:text-barber-cream transition-colors">
                                            {combo.nome}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-400 text-sm text-center mb-4 leading-relaxed">
                                        {combo.desc}
                                    </p>
                                    <div className="text-center pt-4 border-t border-barber-gold/20">
                                        <span className="text-barber-red font-bold text-2xl">
                                            {combo.preco}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicosMenu;
