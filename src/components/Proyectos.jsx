import React from 'react';
import '../estilos/Proyectos.css';
import { FaGitlab   } from 'react-icons/fa';

function Proyectos() {
  const proyectos = [
    {
      nombre: "Tienda de mascotas",
      descripcion: "E-commerce para venta de productos para mascotas usando Vue, Node js, Express y MySQL. La página esta totalmente funcionando pero para poder hacer el deploy tenía que harcodear algunas cosas del backend.",
      enlace: "https://nuevoproyecto-x5ju.vercel.app/#/home"
    },
    {
      nombre: "Portfolio personal",
      descripcion: "Mi sitio web personal hecho con React para mostrar mis proyectos.",
      enlace: "#"
    },
    {
      nombre: "Sistema de reservas Peluquería",
      descripcion: "Aplicación web para gestionar reservas en una peluquería, hecha con React, Node.js, Express y MySql. Funciona totalmente, harcodee el backend para poder hacer el deploy.",
      enlace: "https://peluqueria-theta.vercel.app"
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

