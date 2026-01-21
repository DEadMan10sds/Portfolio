import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const Separator = ({ title }: { title: string }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center w-full text-nowrap gap-3">
      <Typography className="w-fit" color="white" variant="h4">
        {t(title)}
      </Typography>
      <hr className="border-blue-gray-100 w-full" />
    </div>
  );
};
