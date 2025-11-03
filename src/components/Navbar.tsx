import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Serviços', id: 'servicos' },
        { name: 'Galeria', id: 'galeria' },
        { name: 'Horário', id: 'funcionamento' },
        { name: 'Localização', id: 'localizacao' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-barber-black/95 backdrop-blur-custom shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Gago Barber Shop Logo"
                            className="h-16 md:h-20 w-auto cursor-pointer transition-transform hover:scale-105"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-barber-cream hover:text-barber-gold transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('localizacao')}
                            className="btn-primary"
                        >
                            Agendar Agora
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-barber-cream hover:text-barber-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-barber-black/95 backdrop-blur-custom py-6 px-4 space-y-4 border-t border-barber-gold/20">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left text-barber-cream hover:text-barber-gold transition-colors duration-300 font-medium uppercase tracking-wider py-2"
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('localizacao')}
                            className="btn-primary w-full"
                        >
                            Agendar Agora
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
