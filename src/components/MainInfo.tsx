import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col gap-2 mt-4 items-center">

        <Typography variant="h1">{t("mainInfo.career")}</Typography>
        <Typography variant="h2">Adán Alejandro Sánchez</Typography>
      </div>
      <Card className="w-full flex-row">
        <CardBody>
          <h1 className="text-lg">Adán Alejandro Sánchez De Santiago</h1>
          <p className="text-md">
            {t("mainInfo.university")}
          </p>
        </CardBody>
      </Card>
    </>
  );
};
