import {
  Timeline,
  Typography,
  TimelineItem,
  TimelineIcon,
  TimelineBody,
  TimelineHeader,
} from "@material-tailwind/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { JobCard } from "./JobCard";
import { useTranslation } from "react-i18next";

export const Jobs = () => {
  const { t } = useTranslation();
  const [company, setCompany] = useState(0);

  const JOBS_KEYS = useMemo(
    () =>
      Object.keys(t("jobs", { returnObjects: true }) as Record<string, any>),
    [t],
  );

  const nextJob = useCallback(() => {
    setCompany((prev) => (prev < JOBS_KEYS.length - 1 ? prev + 1 : 0));
  }, [JOBS_KEYS.length]);

  useEffect(() => {
    if (!JOBS_KEYS.length) return;
    const id = window.setInterval(nextJob, 15000);
    return () => window.clearInterval(id);
  }, [JOBS_KEYS.length, nextJob]);

  if (!JOBS_KEYS.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <div className="md:col-span-4 rounded-2xl bg-[rgba(33,33,33,0.42)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] p-5">
        <Timeline className="pl-0">
          {JOBS_KEYS.map((job, index) => {
            const selected = index === company;
            const last = index === JOBS_KEYS.length - 1;

            return (
              <TimelineItem key={job} className="relative ">
                <TimelineHeader
                  className="cursor-pointer w-full items-center"
                  onClick={() => setCompany(index)}
                >
                  <div className="relative w-6 flex justify-center">
                    <TimelineIcon
                      className={[
                        "!p-0 !h-3 !w-3 rounded-full",
                        selected
                          ? "!bg-[#14FFEC] !shadow-[0_0_16px_rgba(20,255,236,0.25)]"
                          : "!bg-[rgba(148,163,184,0.9)]",
                      ].join(" ")}
                    />

                    {/* Connector: desde el centro del dot hacia abajo */}
                    {!last && (
                      <div className="absolute left-1/2 top-1/2 bottom-[-50px] w-px -translate-x-1/2 bg-[rgba(13,115,119,0.45)]" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={[
                      "ml-2 flex-1 rounded-xl px-3 py-2 transition",
                      selected
                        ? "bg-[rgba(13,115,119,0.12)]"
                        : "hover:bg-white/5",
                    ].join(" ")}
                  >
                    <Typography
                      variant="h6"
                      className="text-white leading-tight"
                    >
                      {job}
                    </Typography>

                    <Typography variant="small" className="text-white/60">
                      {t(`jobs.${job}.start`)}{" "}
                      <span className="text-white/35">—</span>{" "}
                      {t(`jobs.${job}.end`)}
                    </Typography>
                  </div>
                </TimelineHeader>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>

      {/* RIGHT */}
      <div className="md:col-span-8 md:sticky md:top-24">
        <div className="min-h-[360px]">
          <JobCard job={JOBS_KEYS[company]} />
        </div>
      </div>
    </div>
  );
};
