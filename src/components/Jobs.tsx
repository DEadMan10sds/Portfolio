import {
  Timeline,
  Typography,
  TimelineItem,
  TimelineIcon,
  TimelineBody,
  TimelineHeader,
  TimelineConnector,
} from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import { useTranslation } from "react-i18next";

export const Jobs = () => {
  const { t } = useTranslation();
  const [company, setCompany] = useState<number>(0);
  const JOBS_KEYS = Object.keys(t("jobs", { returnObjects: true }));
  const handleSelectCompany = (selectedCompany: number = 0) => {
    return () => setCompany(selectedCompany);
  };

  const nextJob = useCallback(() => {
    setCompany((prev) => (prev < JOBS_KEYS.length - 1 ? prev + 1 : 0));
  }, [JOBS_KEYS]);

  useEffect(() => {
    const changeJobInterval = setInterval(nextJob, 5000);

    return () => clearInterval(changeJobInterval);
  }, [company, JOBS_KEYS, nextJob]);

  return (
    <div className="md:grid sm:flex sm:flex-col md:grid-cols-2 gap-4">
      <Timeline className="pl-5 pt-3">
        {JOBS_KEYS.map((job, index) => (
          <TimelineItem key={job}>
            {index !== JOBS_KEYS.length - 1 && <TimelineConnector />}
            <TimelineHeader
              className="h-3 cursor-pointer w-fit"
              onClick={handleSelectCompany(index)}
            >
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className={`leading-none ${index === company && "underline"}`}
              >
                {job}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                {t(`jobs.${job}.start`)}
                <span> - </span>
                {t(`jobs.${job}.end`)}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>

      <JobCard job={JOBS_KEYS[company]} />
    </div>
  );
};
