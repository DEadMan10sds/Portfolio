import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslation from "./languages/es.json";
import enTranslation from "./languages/en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: esTranslation,
    en: enTranslation,
  },

  lng: "en",
});
