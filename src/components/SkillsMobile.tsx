import { Card, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";
import type Skill from "../interfaces/Skill";
import { SkillCard } from "./SkillCard";

export const SkillsMobile = ({
  skillsSetKeys,
  skillSet,
  className,
}: {
  skillsSetKeys: string[];
  skillSet: Record<string, Skill[]>;
  className: string;
}) => {
  const [skillSetSelected, setSkillSetSelected] = useState<string>(
    skillsSetKeys[0]
  );

  return (
    <div className={`${className} flex flex-col gap-4`}>
      <Card>
        <List className="bg-[#eceff199]">
          {skillsSetKeys.map((skillName) => (
            <ListItem
              key={skillName}
              onClick={() => setSkillSetSelected(skillName)}
              className={`${skillName === skillSetSelected && "bg-white"} `}
            >
              {skillName}
            </ListItem>
          ))}
        </List>
      </Card>
      <div className="grid grid-cols-3 gap-4">
        {skillSet[skillSetSelected].map((currentSkill: Skill) => (
          <SkillCard
            key={`${currentSkill.title}-${currentSkill.time}`}
            skill={currentSkill}
          />
        ))}
      </div>
    </div>
  );
};
