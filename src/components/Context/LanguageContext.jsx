import {createContext, useContext, useState} from 'react'
import lang from "../Language/lang.json"

const LanguageContext = createContext();

export function LanguageProvider({children}){
    const [language, setLanguage] = useState("es");

    const texts = lang[language];
  return (
    <LanguageContext.Provider value={{language,setLanguage, texts}}>
        {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(){
  return useContext(LanguageContext);
}