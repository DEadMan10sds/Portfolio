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
    i18n: { changeLanguage },
  } = useTranslation();

  const handleChangeLanguage = (newLanguage: string) => {
    return () => {
      changeLanguage(newLanguage);
    };
  };

  return (
    <Menu>
      <MenuHandler>
        <Button variant="outlined">{t("languages.title")}</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem
          onClick={handleChangeLanguage("en")}
          className="flex gap-2 items-center"
        >
          <ReactCountryFlag countryCode="US" />
          {t("languages.en")}
        </MenuItem>
        <MenuItem
          onClick={handleChangeLanguage("es")}
          className="flex gap-2 items-center"
        >
          <ReactCountryFlag countryCode="ES" />
          {t("languages.es")}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
