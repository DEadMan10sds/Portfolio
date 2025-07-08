import { Card, CardBody } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const JobCard = ({ job }: { job: string }) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full">
      <CardBody>{t(`jobs.${job}.title`)}</CardBody>
    </Card>
  );
};
