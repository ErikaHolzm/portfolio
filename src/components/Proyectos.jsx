import React from 'react';
import '../estilos/Proyectos.css';
import { FaGitlab   } from 'react-icons/fa';

function Proyectos() {
  const proyectos = [
    {
      nombre: "Tienda de mascotas",
      descripcion: "E-commerce para venta de productos para mascotas usando Vue y Node.js.",
      enlace: "https://nuevoproyecto-x5ju.vercel.app/#/home"
    },
    {
      nombre: "Portfolio personal",
      descripcion: "Mi sitio web personal hecho con React para mostrar mis proyectos.",
      enlace: "#"
    }
  ];

  return (
    <section id="proyectos" className="proyectos">
      <h2>Proyectos</h2>
      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index} className="proyecto-item">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer"><FaGitlab /> Ver proyecto</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Proyectos;

