/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(
    i18n.language.toUpperCase()
  );

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang.toUpperCase());
  };

  return (
    <LanguageContext.Provider value={{ activeLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
