import { Card, CardBody } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <Card className="w-full flex-row">
      <CardBody>
        <h1 className="text-lg">Adán Alejandro Sánchez De Santiago</h1>
        <p className="text-md">
          {t("mainInfo.career")} - {t("mainInfo.university")}
        </p>
      </CardBody>
    </Card>
  );
};
