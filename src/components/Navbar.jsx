import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";

export default function Navbar() {
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
    <header className={styles.header}>
      <h1 className={styles.titulo}>Krabtech</h1>
      <div
        className={`${styles.hamburguer} ${isOpen ? styles.rotate : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? "✖" : "☰"}
      </div>
      <nav className={`${styles.navbar} ${isOpen ? styles.show : ""}`}>
        <a href="#inicio" onClick={() => setIsOpen(false)}>
          Inicio
        </a>
        <a href="#servicios" onClick={() => setIsOpen(false)}>
          Servicios
        </a>
        <a href="#paquetes" onClick={() => setIsOpen(false)}>
          Paquetes
        </a>
        <a href="#nosotros" onClick={() => setIsOpen(false)}>
          Nosotros
        </a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>
          Contacto
        </a>
      </nav>
    </header>
  );
}
