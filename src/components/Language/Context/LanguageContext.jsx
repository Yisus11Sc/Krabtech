import {createContext, useContext, useState} from 'react'
import es from "../es.json"
import en from "../en.json"

const LanguageContext = createContext();

export function LanguageProvider({children}){
    const [language, setLanguage] = useState("es");

    const texts = language === "es" ? es : en;
  return (
    <LanguageContext.Provider value={{language, setLanguage, texts}}>
        {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(){
  return useContext(LanguageContext);
}