import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type LngContextType = {
  lng: string;
  toggleLanguage: () => void;
};

export const LngContext = createContext<LngContextType | null>(null);

export const LngProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  const [lng, setLng] = useState(i18n.language || "vi");

  const toggleLanguage = () => {
    const newLang = lng === "vi" ? "en" : "vi";

    i18n.changeLanguage(newLang);
    setLng(newLang);
    localStorage.setItem("lng", newLang);
  };

  return (
    <LngContext.Provider value={{ lng, toggleLanguage }}>
      {children}
    </LngContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LngContext);

  if (!context) {
    throw new Error("useLang must be used within LngProvider");
  }

  return context;
};