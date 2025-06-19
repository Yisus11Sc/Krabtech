import React, { useState } from "react";
import styles from "./Idioma.module.css";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "../../Context/LanguageContext";

export default function Idioma() {
  const [isOpen, setIsOpen] = useState(false);
  const {language, setLanguage} = useLanguage();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (lang) => {
    setLanguage(lang);
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
          <button onClick={() => handleSelect("es")} className={language === "es" ? styles.active : ""}>Español (MX)</button>
          <button onClick={() => handleSelect("en")} className={language === "en" ? styles.active : ""}>Ingles (US)</button>
        </div>
      )}
    </div>
  );
}