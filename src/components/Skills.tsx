import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import type Skill from "../interfaces/Skill";
import { SkillCard } from "./SkillCard";

export const TabsContent = () => {
  const { t } = useTranslation();
  const skillSet = t("skillsSet", {
    returnObjects: true,
  }) as Record<string, Skill[]>;
  const skillsSetKeys = Object.keys(skillSet);

  return (
    <>
      <TabsHeader className="flex md:px-2">
        {skillsSetKeys.map((label) => (
          <Tab key={label} value={label}>
            {label}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody>
        {skillsSetKeys.map((skill: string) => {
          console.log({ skill });

          return (
            <TabPanel key={skill} value={skill}>
              {skillSet[skill].map((currentSkill: Skill) => (
                <SkillCard
                  key={`${currentSkill.title}-${currentSkill.time}`}
                  skill={currentSkill}
                />
              ))}
            </TabPanel>
          );
        })}
      </TabsBody>
    </>
  );
};

export function Skills() {
  return (
    <>
      <Tabs
        className="hidden md:block whitespace-nowrap "
        value="Lenguajes de programación"
      >
        <TabsContent />
      </Tabs>

      <Tabs
        className="md:hidden"
        value="Lenguajes de programación"
        orientation="vertical"
      >
        <TabsContent />
      </Tabs>
    </>
  );
}
