import { Card, List, ListItem, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import type Skill from "../interfaces/Skill";
import { SkillCard } from "./SkillCard";
import { useTranslation } from "react-i18next";

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
    skillsSetKeys[0],
  );
  const { t } = useTranslation();

  useEffect(() => {
    if (!skillsSetKeys.includes(skillSetSelected)) {
      setSkillSetSelected(skillsSetKeys[0]);
    }
  }, [skillsSetKeys, skillSetSelected]);

  return (
    <div className={`${className} flex flex-col gap-4`}>
      <Card className="rounded-2xl bg-[rgba(33,33,33,0.42)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <List className="bg-transparent">
          {skillsSetKeys.map((skillName) => {
            const selected = skillName === skillSetSelected;

            return (
              <ListItem
                key={skillName}
                onClick={() => setSkillSetSelected(skillName)}
                className={[
                  "rounded-xl px-4 py-3 transition",
                  selected ? "bg-[rgba(13,115,119,0.12)]" : "hover:bg-white/5",
                ].join(" ")}
              >
                <span
                  className={[
                    "mr-3 inline-block h-2 w-2 rounded-full",
                    selected ? "bg-[#14FFEC]" : "bg-white/30",
                  ].join(" ")}
                />
                <Typography
                  className={selected ? "text-white" : "text-white/80"}
                >
                  {t(`skillsTabs.${skillName}`)}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        {skillSet[skillSetSelected]?.map((currentSkill: Skill) => (
          <SkillCard
            key={`${currentSkill.title}-${currentSkill.time}`}
            skill={currentSkill}
          />
        ))}
      </div>
    </div>
  );
};
