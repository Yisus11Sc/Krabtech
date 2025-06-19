import React, { createContext, useContext, useState, useEffect } from "react";
import es from "../es.json";
import en from "../en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  //  Recuperamos el idioma guardado, si no hay, usamos español por defecto
  const storedLang = localStorage.getItem("lang") || "es";

  const [language, setLanguage] = useState(storedLang);
  const [texts, setTexts] = useState(storedLang === "es" ? es : en);

  useEffect(() => {
    localStorage.setItem("lang", language); //  Guardamos en localStorage
    setTexts(language === "es" ? es : en);  //  Cambiamos los textos
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);