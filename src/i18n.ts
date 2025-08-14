import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslation from "./languages/es.ts";
import enTranslation from "./languages/en.ts";

i18n.use(initReactI18next).init({
  resources: {
    es: esTranslation,
    en: enTranslation,
  },

  lng: "es",
});
