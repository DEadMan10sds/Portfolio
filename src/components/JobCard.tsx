import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const JobCard = ({ job }: { job: string }) => {
  const { t } = useTranslation();
  const JOB_ACTIVITIES = t(`jobs.${String(job)}.activities`, {
    returnObjects: true,
  });
  return (
    <Card className="w-full">
      <CardBody>
        <Typography variant="h4">{t(`jobs.${job}.title`)}</Typography>
        {Array.isArray(JOB_ACTIVITIES) && (
          <>
            <ul className="ml-6">
              {JOB_ACTIVITIES.map((activity, index: number) => (
                <li key={`${job}_activity_${index}`} className="list-disc">
                  {activity}
                </li>
              ))}
            </ul>
          </>
        )}
      </CardBody>
    </Card>
  );
};
