import { Card, CardBody, Typography } from "@material-tailwind/react";
import type Skill from "../interfaces/Skill";
import { ClockIcon } from "@heroicons/react/24/outline";

export const SkillCard = ({ skill }: { skill: Skill }) => {
  const normalizedTitle = skill.title.toLowerCase();

  const shouldInvert = ["express", "expressjs", "github"].includes(
    normalizedTitle,
  );

  const isExpress = ["express", "expressjs"].includes(normalizedTitle);

  return (
    <Card className="rounded-2xl bg-[rgba(33,33,33,0.38)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] shadow-[0_18px_50px_rgba(0,0,0,0.45)] overflow-hidden">
      <CardBody className="flex h-full flex-col gap-4">
        <div className="relative flex h-40 items-center justify-center">
          <div className="absolute h-40 w-40 rounded-full bg-[rgba(13,115,119,0.18)] blur-2xl" />

          <img
            src={skill.img}
            alt={`${skill.title}-logo`}
            loading="lazy"
            className={[
              "relative z-10 max-h-28 max-w-[75%] object-contain opacity-90",
              "drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]",
              shouldInvert ? "invert brightness-150 contrast-125" : "",
              isExpress ? "w-[75%]" : "w-[56%]",
            ].join(" ")}
          />
        </div>

        <div className="mt-auto">
          <Typography variant="h5" className="text-white leading-tight">
            {skill.title}
          </Typography>

          <div className="mt-2 flex items-center gap-2 text-white/65">
            <ClockIcon className="h-4 w-4 text-[#14FFEC]/80" />

            <Typography variant="small" className="text-white/60">
              {skill.time}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
