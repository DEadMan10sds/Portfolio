import { Card, CardBody, Typography } from "@material-tailwind/react";
import type Skill from "../interfaces/Skill";
import { ClockIcon } from "@heroicons/react/24/outline";

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card>
      <CardBody>
        <img
          src={skill.img}
          alt={`${skill.title}-logo`}
          className="m-auto w-24"
        />
        <Typography variant="h5" color="blue-gray">
          {skill.title}
        </Typography>
        <div className="flex gap-2 items-center">
          <ClockIcon className="size-4" />
          <Typography variant="h6" color="blue-gray">
            {skill.time}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};
