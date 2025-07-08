import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
//import type JobInterface from "../interfaces/Job";
import { JobCard } from "./JobCard";
import { useTranslation } from "react-i18next";
import JOBS from "../constants/Jobs";

// const JOBS: JobInterface[] = [
//   { company: "Bitcat" },
//   { company: "Cooperative Computing" },
//   { company: "AIA Partners" },
//   { company: "UASLP" },
// ];

export const Jobs = () => {
  const { t } = useTranslation();
  const [company, setCompany] = useState<number>(0);

  const handleSelectCompany = (selectedCompany: number = 0) => {
    return () => setCompany(selectedCompany);
  };

  return (
    <div className="md:flex  gap-4 p-2 ">
      <div className="w-[32rem] py-5">
        <Timeline>
          {JOBS.map((job, index) => (
            <TimelineItem key={job}>
              {index !== JOBS.length - 1 && <TimelineConnector />}
              <TimelineHeader
                className="h-3 cursor-pointer"
                onClick={handleSelectCompany(index)}
              >
                <TimelineIcon />
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="leading-none"
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
                  {t(`jobs.${job}.description`, {
                    defaultValue: "Not found",
                  })}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <JobCard job={JOBS[company]} />
    </div>
  );
};
