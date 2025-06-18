import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import Idioma from "./Idioma/Idioma";

export default function Navbar() {

  /* Sombra de nav al scrollear */
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  /* Desabilitar el scroll cuando el menu este abierto */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.shadow : ""}`}>
      <h1 className={styles.titulo}>Krabtech</h1>
      
      <div className={styles.rightSection}>
        <nav className={`${styles.navbar} ${isOpen ? styles.show : ""}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#paquetes" onClick={() => setIsOpen(false)}>Paquetes</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>

        <Idioma />

        <div
          className={`${styles.hamburguer} ${isOpen ? styles.rotate : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

    </header>
  );
}
