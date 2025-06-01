import React from 'react';
import { FaNodeJs, FaReact, FaJsSquare, FaVuejs, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';  // Íconos de tecnologías no en Fa

import '../estilos/Habilidades.css';



function Habilidades() {
    return (
      <section id="habilidades" className="habilidades">
        <h2 className="habilidades-titulo"> Habilidades</h2>
        <div className="etiquetas-habilidades">
          <span className="etiqueta"><FaNodeJs /> Node.js</span>
          <span className="etiqueta"><SiExpress /> Express</span>
          <span className="etiqueta"><FaReact /> React</span>
          <span className="etiqueta"><FaJsSquare /> JavaScript</span>
          <span className="etiqueta"><FaVuejs /> Vue.js</span>
          <span className="etiqueta"><SiMysql /> MySQL</span>
          <span className="etiqueta"><FaPython /> Python</span>
          <span className="etiqueta"><FaCss3Alt /> CSS</span>
        </div>
      </section>
    );
  }
 
  
  export default Habilidades;
