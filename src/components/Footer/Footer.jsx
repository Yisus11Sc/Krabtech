import styles from "./Footer.module.css";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

import React from "react";
import { useLanguage } from "../Language/Context/LanguageContext";

export default function Footer() {

  const {texts} = useLanguage();
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Krabtech</h2>
          <p>{texts.footer.desc}</p>
        </div>

        <div className={styles.links}>
          <a href="#inicio">{texts.navbar.home}</a>
          <a href="#servicios">{texts.navbar.servicios}</a>
          <a href="#paquetes">{texts.navbar.paquetes}</a>
          <a href="#nosotros">{texts.navbar.nosotros}</a>
          <a href="#contacto">{texts.navbar.contacto}</a>
        </div>

        <div className={styles.social}>
          <a
            href="https://www.facebook.com/profile.php?id=61574548271319"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          {/* <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a> */}
          <a
            href="http://wa.me/5219983785158"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>{texts.footer.reserv}</p>
      </div>
    </footer>
  );
}
