import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const JobCard = ({ job }: { job: string }) => {
  const { t } = useTranslation();
  const JOB_ACTIVITIES = t(`jobs.${String(job)}.activities`, {
    returnObjects: true,
  });
  return (
    <Card className="w-full h-fit">
      <CardBody>
        <Typography variant="h3" className="font-bold text-gray-800">
          {t(job)}
        </Typography>
        <Typography variant="lead" className="font-bold">
          {t(`jobs.${job}.title`)}
        </Typography>
        <Typography variant="paragraph">
          {t(`jobs.${job}.description`)}
        </Typography>

        {Array.isArray(JOB_ACTIVITIES) && (
          <ul className="ml-6">
            {JOB_ACTIVITIES.map((activity, index: number) => (
              <li key={`${job}_activity_${index}`} className="list-disc">
                <Typography variant="small">{activity}</Typography>
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
};
