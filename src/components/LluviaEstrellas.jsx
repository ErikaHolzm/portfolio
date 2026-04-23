// src/components/LluviaEstrellas.jsx
import React, { useEffect, useState } from 'react';
import '../estilos/LluviaEstrellas.css';
import foto from "../assets/foto.png";
import { FaLaptopCode } from 'react-icons/fa';

const LluviaEstrellas = ( ) => {
  const [estrellas, setEstrellas,] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false); // agregado correctamente aquí

  useEffect(() => {
    const cantidad = 200;
    const nuevasEstrellas = Array.from({ length: cantidad }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      size: Math.random() * 4 + 1,
    }));
    setEstrellas(nuevasEstrellas);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const scrollToId = (id) => {
    const element = document.getElementById(id); // busca el elemento con ese ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // hace scroll suave
    }
  };


  return (
    <div className="lluvia-estrellas">
      {estrellas.map((estrella) => (
        <span
          key={estrella.id}
          className="estrella"
          style={{
            left: `${estrella.left}%`,
            animationDelay: `${estrella.delay}s`,
            animationDuration: `${estrella.duration}s`,
            width: `${estrella.size}px`,
            height: `${estrella.size}px`,
          }}
        ></span>
      ))}
            
      <div className="contenido-superior">
        <img src={foto} alt="Erika Holzmann" className="mi-foto" />
        <div className='Titulos'>
        <h1 className="saludo">Hola mundo! Yo soy </h1>
        <h2 className='saludo3'>Erika Holzmann</h2>
        <p className="saludo2">Full Stack Developer</p>
        </div>
        
      </div>
                {/* Menú inferior (abajo a la derecha) - oculto cuando headerVisible */}
                <nav className={`seccion-botones ${headerVisible ? 'oculto' : ''}`}>
                        <div className="contenedor-botones">
                        <div className="logo-nombre">
                        <FaLaptopCode className="icono-laptop" />
                       <span className="nombre">Erika Holzmann</span>
                        </div>
                            <button onClick={() => scrollToId('sobre-mi')}>Sobre mí</button>
                            <button onClick={() => scrollToId('proyectos')}>Proyectos</button>
                            <button onClick={() => scrollToId('habilidades')}>Habilidades</button>
                            <button onClick={() => scrollToId('testimonios')}>Testimonios</button>
                         </div>
                </nav>

                    {/* Menú fijo arriba - animar cuando headerVisible */}
            <nav className={`seccion-botones fixed-top ${headerVisible ? 'animar' : ''}`}>
                <div className="contenedor-botones">
                     <button onClick={() => scrollToId('sobre-mi')}>Sobre mí</button>
                     <button onClick={() => scrollToId('proyectos')}>Proyectos</button>
                     <button onClick={() => scrollToId('habilidades')}>Habilidades</button>
                     <button onClick={() => scrollToId('testimonios')}>Testimonios</button>
                </div>
            </nav>

         
    </div>  
  );
};

export default LluviaEstrellas;


