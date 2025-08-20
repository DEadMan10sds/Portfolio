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
import { SkillsMobile } from "./SkillsMobile";

export const TabsContent = ({
  skillsSetKeys,
  skillSet,
}: {
  skillsSetKeys: string[];
  skillSet: Record<string, Skill[]>;
}) => {
  return (
    <>
      <TabsHeader className="flex md:px-2">
        {skillsSetKeys.map((label) => (
          <Tab key={label} value={label}>
            {label}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody className="flex justify-center">
        {skillsSetKeys.map((skill: string) => (
          <TabPanel
            key={skill}
            value={skill}
            className="grid gap-4 sm:grid-cols-1 md:grid-cols-4"
          >
            {skillSet[skill].map((currentSkill: Skill) => (
              <SkillCard
                key={`${currentSkill.title}-${currentSkill.time}`}
                skill={currentSkill}
              />
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </>
  );
};

export function Skills() {
  const { t } = useTranslation();
  const skillSet = t("skillsSet", {
    returnObjects: true,
  }) as Record<string, Skill[]>;
  const skillsSetKeys = Object.keys(skillSet);

  return (
    <>
      <Tabs
        className="hidden md:block whitespace-nowrap "
        value="Lenguajes de programación"
      >
        <TabsContent skillsSetKeys={skillsSetKeys} skillSet={skillSet} />
      </Tabs>

      <SkillsMobile
        skillsSetKeys={skillsSetKeys}
        skillSet={skillSet}
        className="md:hidden"
      />

      {/* <Tabs
        className="md:hidden"
        value="Lenguajes de programación"
        orientation="vertical"
      >
        <TabsContent />
      </Tabs> */}
    </>
  );
}
