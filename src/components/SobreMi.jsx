import "../estilos/SobreMi.css";


function SobreMi() {
    return (
      <section id="sobre-mi" className="sobre-mi">
        <h2>Sobre mí</h2>
         
      <p>
      ¡Hola! Soy Erika Holzmann, Tester Manual y Desarrolladora Full Stack, con enfoque en la calidad del software y la experiencia del usuario. Realizo pruebas funcionales, testing exploratorio y diseño de casos de prueba, detectando y documentando errores para asegurar aplicaciones estables y confiables. Cuento con conocimientos en desarrollo web utilizando tecnologías como Node.js, Express, React, Vue.js, MySQL, Mongo, Docker, Python, Flask, CSS, Javascript, lo que me permite comprender en profundidad los sistemas que pruebo y colaborar de forma efectiva con equipos de desarrollo. Me caracterizo por el compromiso, la atención al detalle y la adaptabilidad a distintos entornos y desafíos.
      </p>


      <a href="/Erika-H-Cv.pdf.pdf" download  >
       <button className="boton-descarga">
          📄 Descargar Curriculum (Español)
      </button>
      </a>

      <a href="/CVINGLES.pdf.pdf" download  >
       <button className="boton-descarga">
          🌍 Download Resume (English)
      </button>
      </a>

      </section>
    );
  }
  

  export default SobreMi;
  
