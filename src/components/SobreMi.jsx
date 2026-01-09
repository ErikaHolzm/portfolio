import "../estilos/SobreMi.css";


function SobreMi() {
    return (
      <section id="sobre-mi" className="sobre-mi">
        <h2>Sobre mí</h2>
         
      <p>
      ¡Hola! Soy Erika Holzmann, Full Stack Developer especializada en el desarrollo de aplicaciones web utilizando tecnologías como Node.js, Express, React, JavaScript, Vue.js, MySQL, Python y CSS. Me caracterizo por un compromiso constante y una fuerte ética de trabajo, manteniendo siempre la calidad y eficiencia en cada proyecto. Poseo habilidad para trabajar de manera colaborativa en equipo, así como de forma autónoma, adaptándome con facilidad a diferentes entornos y desafíos.
      </p>


      <a href="/Erika-H-Cv.pdf.pdf" download  >
       <button className="boton-descarga">
          📄 Descargar Curriculum (Español)
      </button>
      </a>

      <a href="/CV_English.pdf .pdf" download  >
       <button className="boton-descarga">
          🌍 Download Resume (English)
      </button>
      </a>

      </section>
    );
  }
  

  export default SobreMi;
  
