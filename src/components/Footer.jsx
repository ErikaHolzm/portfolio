import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';
import '../estilos/Footer.css'; // Asegurate que esta ruta esté bien

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-titulo">Contacto:</p>
      <ul className="footer-lista">
        <li>
          <FaEnvelope className="footer-icono" />
          <a href="mailto:erikaholzmann3@gmail.com" className="footer-link">
            erikaholzmann3@gmail.com
          </a>
        </li>
            <li>
            <FaPhone className="footer-icono" />
                    <a
                     href="https://wa.me/59898897662"
                    target="_blank"
                     rel="noopener noreferrer"
                    className="footer-link"
                    >
                    +598 98 897 662
                    </a>
            </li>
        <li>
          <FaLinkedin className="footer-icono" />
          <a
            href="https://www.linkedin.com/in/erika-holzmann-abreu-a57352297/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            https://www.linkedin.com/in/erika-holzmann-abreu-a57352297/
          </a>
        </li>
      </ul>
      <p className="footer-copy">© 2025 Erika Holzmann</p>
    </footer>
  );
}

export default Footer;




 
