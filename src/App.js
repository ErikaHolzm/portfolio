import React from 'react';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
 import Footer from './components/Footer';
import LluviaEstrellas from './components/LluviaEstrellas';
import  './estilos/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,  useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';




function App() {
  const [tema, setTema] = useState('oscuro');
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de las animaciones en milisegundos
      once: true,     // animar solo la primera vez que hace scroll
    });
  }, []);

  const cambiarTema = () => {
    setTema(tema === 'oscuro' ? 'claro' : 'oscuro');
  };


  return (
    <div className={`App ${tema}`}>
    <button onClick={cambiarTema} className="boton-tema">
    {tema === 'oscuro' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>


      <LluviaEstrellas />
      <div className="container">
        <div data-aos="fade-up">

          <SobreMi />

        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Proyectos />
          
        </div>

        <div data-aos="fade-up" data-aos-delay="50">
        <Habilidades />

        </div>
        
      </div>
  
      <Footer />  {/* Footer afuera del container y sin data-aos */}
    </div>
  );
  
}
export default App;

