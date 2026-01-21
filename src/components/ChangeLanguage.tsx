import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

export const ChangeLanguage = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleChangeLanguage = (newLanguage: string) => () => {
    changeLanguage(newLanguage);
  };

  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Button
          variant="outlined"
          className={[
            "rounded-lg px-4 py-2 text-sm font-semibold",
            "bg-[rgba(33,33,33,0.55)] backdrop-blur-md",
            "border border-[rgba(13,115,119,0.65)]",
            "text-white/85",
            "hover:border-[#14FFEC] hover:bg-[rgba(13,115,119,0.35)]",
            "transition",
          ].join(" ")}
        >
          {t("languages.title")}
        </Button>
      </MenuHandler>

      <MenuList
        className={[
          "p-2 min-w-[180px]",
          "bg-[rgba(33,33,33,0.85)] backdrop-blur-xl",
          "border border-[rgba(20,255,236,0.14)]",
          "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
          "rounded-xl",
          "text-white/85",
        ].join(" ")}
      >
        <MenuItem
          onClick={handleChangeLanguage("en")}
          className={[
            "flex items-center gap-2 rounded-lg",
            "text-white/80",
            "hover:bg-[rgba(20,255,236,0.10)] hover:text-[#14FFEC]",
            "focus:bg-[rgba(20,255,236,0.10)] focus:text-[#14FFEC]",
            language === "en" ? "bg-[rgba(20,255,236,0.10)] text-[#14FFEC]" : "",
          ].join(" ")}
        >
          <ReactCountryFlag countryCode="US" />
          {t("languages.en")}
        </MenuItem>

        <MenuItem
          onClick={handleChangeLanguage("es")}
          className={[
            "flex items-center gap-2 rounded-lg",
            "text-white/80",
            "hover:bg-[rgba(20,255,236,0.10)] hover:text-[#14FFEC]",
            "focus:bg-[rgba(20,255,236,0.10)] focus:text-[#14FFEC]",
            language === "es" ? "bg-[rgba(20,255,236,0.10)] text-[#14FFEC]" : "",
          ].join(" ")}
        >
          <ReactCountryFlag countryCode="ES" />
          {t("languages.es")}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
