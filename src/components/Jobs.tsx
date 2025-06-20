import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useState } from "react";

interface JobInterface {
  company: string;
  time?: string;
  shortDescription?: string;
}

const JOBS: JobInterface[] = [
  { company: "Bitcat" },
  { company: "Cooperative Computing" },
  { company: "AIA Partners" },
  { company: "UASLP" },
];

export const Jobs = () => {
  const [company, setCompany] = useState<number>(0);

  const handleSelectCompany = (selectedCompany: number = 0) => {
    return () => setCompany(selectedCompany);
  };

  return (
    <div className="md:flex  gap-4 p-2 ">
      <div className="w-[32rem] py-5">
        <Timeline>
          {JOBS.map((job, index) => (
            <TimelineItem key={job.company}>
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
                  {job.company}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal text-gray-600"
                >
                  Short description
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <Card className="w-full border border-solid border-black" shadow={false}>
        <CardBody>{JOBS[company].company}</CardBody>
      </Card>
    </div>
  );
};
