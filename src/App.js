import './App.css';
import About from './components/About/About';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Nav/Navbar';
import Paquetes from './components/Paquetes/Paquetes';
import Services from './components/Servicios/Services';

function App() {
  return (
    <div>
      <Navbar/>
      <section id='#inicio'>
        <Hero/>
      </section>
      <section id='#servicios'>
        <Services/>
      </section>
      <section id='#paquetes'>
        <Paquetes/>
      </section>
      <section id='#nosotros'>
        <About/>
      </section>
      <section id='#contacto'>
        <Contacto/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
