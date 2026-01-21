// JobCard.tsx (igual que tu estilo, consistente con paleta)
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const JobCard = ({ job }: { job: string }) => {
  const { t } = useTranslation();
  const JOB_ACTIVITIES = t(`jobs.${String(job)}.activities`, { returnObjects: true });

  return (
    <Card className="w-full rounded-2xl bg-[rgba(33,33,33,0.55)] backdrop-blur-xl border border-[rgba(13,115,119,0.35)] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <CardBody className="p-6 md:p-8">
        <div className="space-y-2">
          <Typography variant="h3" className="text-white/95 font-bold tracking-tight">
            {t(job)}
          </Typography>

          <Typography variant="lead" className="font-semibold text-[#14FFEC]/80">
            {t(`jobs.${job}.title`)}
          </Typography>

          <Typography variant="paragraph" className="text-white/75 leading-relaxed">
            {t(`jobs.${job}.description`)}
          </Typography>
        </div>

        {Array.isArray(JOB_ACTIVITIES) && (
          <div className="mt-6">
            <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(13,115,119,0.55),transparent)]" />

            <ul className="mt-4 space-y-2">
              {JOB_ACTIVITIES.map((activity, index: number) => (
                <li key={`${job}_activity_${index}`} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgba(20,255,236,0.70)]" />
                  <Typography variant="small" className="text-white/70 leading-relaxed">
                    {activity}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
