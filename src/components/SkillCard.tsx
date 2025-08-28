import { Card, CardBody, Typography } from "@material-tailwind/react";
import type Skill from "../interfaces/Skill";
import { ClockIcon } from "@heroicons/react/24/outline";

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card className="border-gray-300 border">
      <CardBody className="flex flex-col h-full justify-between">
        <img
          src={skill.img}
          alt={`${skill.title}-logo`}
          className="m-auto w-[60%]"
        />
        <Typography variant="h5" className="text-wrap" color="blue-gray">
          {skill.title}
        </Typography>
        <div className="flex gap-2 items-center max-h-[20%]">
          <ClockIcon className="h-fit w-fit max-h-[95%] md:max-h-[45%]" />
          <Typography
            variant="h6"
            className="h-fit text-nowrap"
            color="blue-gray"
          >
            {skill.time}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};
