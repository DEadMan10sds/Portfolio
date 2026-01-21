import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Trans, useTranslation } from "react-i18next";

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col gap-2 mt-10 items-center text-center">
        <Typography
          variant="h1"
          className="text-[#F1F5F9] drop-shadow-[0_2px_18px_rgba(20,255,236,0.10)]"
        >
          {t("mainInfo.career")}
        </Typography>

        <Typography variant="h2" className="text-white/85 font-semibold">
          Adán Alejandro Sánchez
        </Typography>
      </div>
      <Card className="w-full flex-row bg-[rgba(50,50,50,0.55)] backdrop-blur-xl border border-[rgba(20,255,236,0.14)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <CardBody>
          <Typography
            variant="paragraph"
            color="white"
            className="whitespace-pre-line"
          >
            <Trans>{t("mainInfo.description")}</Trans>
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};
