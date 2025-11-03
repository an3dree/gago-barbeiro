import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Galeria de trabalhos da Gago Barber Shop
    const images = [
        {
            src: 'https://raw.githubusercontent.com/an3dree/gago-barbeiro/refs/heads/main/public/trabalho1.png',
            alt: 'Trabalho profissional - Corte e estilo',
        },
        {
            src: 'https://raw.githubusercontent.com/an3dree/gago-barbeiro/refs/heads/main/public/trabalho2.png',
            alt: 'Trabalho profissional - Design artístico',
        },
        {
            src: 'https://raw.githubusercontent.com/an3dree/gago-barbeiro/refs/heads/main/public/profile.jpg',
            alt: 'Barbeiro em ação - Trabalho profissional',
        },
        {
            src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070',
            alt: 'Corte fade profissional',
        },
        {
            src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070',
            alt: 'Barba estilizada',
        },
        {
            src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070',
            alt: 'Corte social clássico',
        },
    ];

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const previousImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        }
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
        }
    };

    return (
        <section id="galeria" className="section-padding bg-barber-black">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-barber-cream mb-4">Galeria</h2>
                    <div className="divider-barber" />
                    <p className="text-barber-gold font-serif text-xl max-w-2xl mx-auto">
                        Confira alguns dos nossos trabalhos e veja a qualidade que oferecemos
                    </p>
                </div>

                {/* Grid de Imagens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-barber-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold text-lg bg-barber-red px-6 py-3 rounded-full">
                                    Ver Imagem
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Botão Fechar */}
                    <button
                        className="absolute top-4 right-4 text-white hover:text-barber-red transition-colors z-10"
                        onClick={closeLightbox}
                    >
                        <X size={40} />
                    </button>

                    {/* Botão Anterior */}
                    <button
                        className="absolute left-4 text-white hover:text-barber-gold transition-colors z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            previousImage();
                        }}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Imagem */}
                    <div
                        className="max-w-5xl max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                        <p className="text-center text-barber-gold mt-4 font-serif">
                            {images[selectedImage].alt}
                        </p>
                    </div>

                    {/* Botão Próximo */}
                    <button
                        className="absolute right-4 text-white hover:text-barber-gold transition-colors z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Contador */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Galeria;
