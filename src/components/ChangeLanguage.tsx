import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
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
        <Button variant="outlined">Idioma</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={handleChangeLanguage("en")}>
          {t("languages.en")}
        </MenuItem>
        <MenuItem onClick={handleChangeLanguage("es")}>
          {t("languages.es")}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
