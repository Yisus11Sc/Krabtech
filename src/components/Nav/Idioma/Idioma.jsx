import React, { useState } from "react";
import styles from "./Idioma.module.css";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "../../Language/Context/LanguageContext";

export default function Idioma() {
  const [isOpen, setIsOpen] = useState(false);
  const {language, setLanguage} = useLanguage();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const langLabel = language === "es" ? "MX" : "US";

  return (
    <div className={styles.languageSelector}>
      <button
        className={styles.icon}
        onClick={toggleDropdown}
        aria-label="Seleccionar idioma"
      >
        <MdLanguage/>
        <span className={styles.langLabel}>{langLabel}</span>

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