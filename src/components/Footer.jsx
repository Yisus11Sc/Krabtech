import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Krabtech</h2>
          <p>Soluciones Tecnologicas en Cancun</p>
        </div>

        <div className={styles.links}>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#paquetes">Paquetes</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className={styles.social}>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="http://wa.me/5219991234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© 2025 Krabtech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
