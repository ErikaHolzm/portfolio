import React, { useState } from 'react';
import '../estilos/Proyectos.css';
import { FaGitlab } from 'react-icons/fa';

function Proyectos() {
  const [modalImg, setModalImg] = useState(null);

  const proyectos = [
    {
      nombre: "Tienda de mascotas",
      descripcion: "E-commerce responsive para venta de productos para mascotas usando Vue.js, Node.js, Express y MySQL. El backend está funcional, pero para la demostración en el portfolio se muestran imágenes del proyecto ya que el deploy no permite interactuar con la base de datos en vivo.",
      enlace: "https://nuevoproyecto-x5ju.vercel.app/#/home",
      imagenes: [
        "/proyectos/mascotas.png",
        "/proyectos/mascotas1.png",
        "/proyectos/mascotas3.png"
      ]
    },
    {
      nombre: "Portfolio personal",
      descripcion: "Portfolio personal responsive hecho con React para mostrar mis proyectos y habilidades. No tiene imágenes porque ya es el propio portfolio.",
      enlace: "#"
    },
    {
      nombre: "Sistema de reservas Peluquería",
      descripcion: "Aplicación web responsive para gestionar reservas en una peluquería, hecha con React, Node.js, Express y MySQL. Backend totalmente funcional; en el portfolio se muestran imágenes para la demostración porque el deploy público no permite la interacción completa.",
      enlace: "https://peluqueria-theta.vercel.app",
      imagenes: [
        "/proyectos/peluqueria.png",
        "/proyectos/peluqueria2.png",
        "/proyectos/peluqueria3.png"
      ]
    },
    {
      nombre: "Alquiler de autos",
      descripcion: "Aplicación web responsive de alquiler de autos hecho con React, Python (Flask) y MySQL. El backend está funcional, pero para la demostración en el portfolio se muestran imágenes del proyecto ya que el deploy no muestra la funcionalidad en vivo.",
      enlace: "https://front-end-autos-nh8uy2j9v-erikas-projects-8b772ea8.vercel.app",
      imagenes: [
        "/proyectos/autos.png",
        "/proyectos/autos2.png",
        "/proyectos/autos3.png"
      ]
    }
  ];

  return (
    <section id="proyectos" className="proyectos">
      <h2>Proyectos</h2>
      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index} className="proyecto-item">

            {proyecto.imagenes && proyecto.imagenes.length > 0 && (
              <div className="proyecto-carrusel">
                {proyecto.imagenes.map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt={`${proyecto.nombre} ${i + 1}`}
                    onClick={() => setModalImg(img)}
                  />
                ))}
              </div>
            )}

            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
              <FaGitlab /> Ver proyecto
            </a>
          </li>
        ))}
      </ul>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <span className="cerrar">&times;</span>
          <img className="modal-contenido" src={modalImg} alt="Ampliada" />
        </div>
      )}
    </section>
  );
}

export default Proyectos;


