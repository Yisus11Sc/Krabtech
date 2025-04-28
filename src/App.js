import './App.css';
import About from './components/About';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Paquetes from './components/Paquetes';
import Services from './components/Services';

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
