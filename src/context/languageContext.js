import { createContext, useContext, useState } from "react";
import globalEn from "../translations/en/global.json"
import globalEs from "../translations/es/global.json"

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const initialLanguage = "En";
    const translations = {globalEn, globalEs}
    const [language, setLanguage] = useState(globalEn);

    const handleLanguage = (myRef) => {
        if(myRef.current.textContent === 'En'){
            setLanguage(globalEn)
        }else{
            setLanguage(globalEs)
        }
    }
    
    
  return (
    <LanguageContext.Provider value={{language, handleLanguage}}>
        {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = () => {
    const context = useContext(LanguageContext)
    return context 
}