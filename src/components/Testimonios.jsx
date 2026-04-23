import "../estilos/Testimonios.css";

function Testimonios() {
  return (
    <section className="testimonios-section" id="testimonios">
      <h2 className="testimonios-titulo">Testimonios</h2>

      <div className="testimonio-card">
        <div className="estrellas">★★★★★</div>

        <p>
          “Erika tuvo muy buena disposición y comunicación durante todo el proyecto.
           Aportó excelentes diseños e ideas. Gracias!”
        </p>

        <h4>Cliente de Les Délices</h4>

        <a 
          href="https://les-delices-front.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="testimonio-proyecto"
        >
          Proyecto web informativo para confitería
        </a>

      </div>
    </section>
  );
}

export default Testimonios;