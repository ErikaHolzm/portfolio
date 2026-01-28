import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../estilos/Proyectos.css";
import { FaGitlab } from "react-icons/fa";

function Proyectos() {
  const [modalImg, setModalImg] = useState(null);

  
  useEffect(() => {
    if (modalImg) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [modalImg]);

  
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const proyectos = [
    {
      nombre: "Tienda de mascotas",
      descripcion:
        "E-commerce responsive para venta de productos para mascotas usando Vue.js, Node.js, Express y MySQL. El backend está funcional, pero para la demostración en el portfolio se muestran imágenes del proyecto ya que el deploy no permite interactuar con la base de datos en vivo.",
      enlace: "https://nuevoproyecto-x5ju.vercel.app/#/home",
      imagenes: [
        "/proyectos/MASCOTAS/mascotas.png",
        "/proyectos/MASCOTAS/mascotas1.png",
        "/proyectos/MASCOTAS/mascotas3.png",
      ],
    },
    {
      nombre: "Portfolio personal",
      descripcion:
        "Portfolio personal responsive hecho con React para mostrar mis proyectos y habilidades. No tiene imágenes porque ya es el propio portfolio.",
      enlace: "#",
    },
    {
      nombre: "Sistema de reservas Peluquería",
      descripcion:
        "Aplicación web responsive para gestionar reservas en una peluquería, hecha con React, Node.js, Express y MySQL. Backend totalmente funcional; en el portfolio se muestran imágenes para la demostración porque el deploy público no permite la interacción completa.",
      enlace: "https://peluqueria-theta.vercel.app",
      imagenes: [
        "/proyectos/PELUQUERIA/peluqueria.png",
        "/proyectos/PELUQUERIA/peluqueria2.png",
        "/proyectos/PELUQUERIA/peluqueria3.png",
      ],
    },
    {
      nombre: "Alquiler de autos",
      descripcion:
        "Aplicación web responsive de alquiler de autos hecho con React, Python (Flask) y MySQL. El backend está funcional, pero para la demostración en el portfolio se muestran imágenes del proyecto ya que el deploy no muestra la funcionalidad en vivo.",
      enlace:
        "https://front-end-autos-abc123.vercel.app",
      imagenes: [
        "/proyectos/AUTOS/autos.png",
        "/proyectos/AUTOS/autos2.png",
        "/proyectos/AUTOS/autos3.png",
        "/proyectos/AUTOS/autos4.png",
        "/proyectos/AUTOS/autos5.png",
        "/proyectos/AUTOS/autos6.png",
        "/proyectos/AUTOS/autos7.png",
      ],
    },
    {
      nombre: "Sistema de ventas",
      descripcion:
        "Sistema de ventas para restaurante, desarrollado con Vue en el frontend. Incluye gestión de productos, categorías, carrito y pedidos. El backend está desarrollado con Node.js, Express, utilizando MySQL. En el portfolio se muestran imágenes del proyecto debido a limitaciones del deploy en la demo en vivo",
      enlace: "https://ventas-frontend-nu.vercel.app/login",
      imagenes: [
        "/proyectos/VENTAS/ventas1.png",
        "/proyectos/VENTAS/ventas5.png",
        "/proyectos/VENTAS/ventas4.png",
        "/proyectos/VENTAS/ventas6.png",
        "/proyectos/VENTAS/ventas.png",
        "/proyectos/VENTAS/ventas2.png",
        "/proyectos/VENTAS/ventas10.png",
        "/proyectos/VENTAS/ventas7.png",
        "/proyectos/VENTAS/ventas3.png",
        "/proyectos/VENTAS/ventas8.png",
      ],
    },
    {
      nombre: "Veterinaria Guau Guau",
      descripcion:
            "Proyecto de testing manual realizado en equipo para un sistema de gestión veterinaria. Incluyó el diseño y ejecución de casos de prueba, reporte y seguimiento de incidencias, pruebas de regresión y testing exploratorio. Se trabajó de forma colaborativa utilizando Trello para la planificación y control del proceso, y se generó documentación formal con resultados y conclusiones del proyecto.",
      enlace: "https://trello.com/b/xV40CCXv/etapa-3",
      imagenes: [
        "/proyectos/VETERINARIAGUAU/sandiferikson.png",
        "/proyectos/VETERINARIAGUAU/sandiferikson1.png",
        "/proyectos/VETERINARIAGUAU/sandiferikson2.png",
        "/proyectos/VETERINARIAGUAU/trello.png",
        "/proyectos/VETERINARIAGUAU/trello1.png",
        "/proyectos/VETERINARIAGUAU/trello2.png",
        
      ],
    },
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
                    loading="lazy"
                    decoding="async"
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

      
      {modalImg &&
        createPortal(
          <div className="modal" onClick={() => setModalImg(null)}>
            <button
              className="cerrar"
              onClick={() => setModalImg(null)}
              aria-label="Cerrar"
            >
              &times;
            </button>

            <img
              className="modal-contenido"
              src={modalImg}
              alt="Ampliada"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </section>
  );
}

export default Proyectos;

