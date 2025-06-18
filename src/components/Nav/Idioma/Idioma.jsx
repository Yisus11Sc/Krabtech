import React, { useState } from "react";
import styles from "./Idioma.module.css";
import { MdLanguage } from "react-icons/md";

export default function Idioma({ currentLang, onChangeLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (lang) => {
    onChangeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelector}>
      <button
        className={styles.icon}
        onClick={toggleDropdown}
        aria-label="Seleccionar idioma"
      >
        <MdLanguage/>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <button onClick={() => handleSelect("es")}>Español (MX)</button>
          <button onClick={() => handleSelect("en")}>Ingles (US)</button>
        </div>
      )}
    </div>
  );
}