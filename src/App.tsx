import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicosMenu from './components/ServicosMenu'
import Galeria from './components/Galeria'
import Funcionamento from './components/Funcionamento'
import Localizacao from './components/Localizacao'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Hero />
                <ServicosMenu />
                <Galeria />
                <Funcionamento />
                <Localizacao />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default App
