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
import { useEffect, useMemo, useState } from "react";

type SkillSet = Record<string, Skill[]>;

export const TabsContent = ({
  ids,
  skillSet,
}: {
  ids: string[];
  skillSet: SkillSet;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <TabsHeader className="rounded-2xl bg-[rgba(33,33,33,0.42)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] p-2 [&_.absolute]:!bg-[rgba(13,115,119,0.22)] [&_.absolute]:!border [&_.absolute]:!border-[rgba(20,255,236,0.22)] [&_.absolute]:!rounded-xl [&_.absolute]:!shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
        {ids.map((id) => (
          <Tab
            key={id}
            value={id}
            className="rounded-xl px-4 py-2 transition-all duration-200 text-white/70 hover:text-white hover:bg-white/5 aria-selected:text-white aria-selected:font-semibold"
          >
            {/* label traducido, value estable */}
            {t(`skillsTabs.${id}`)}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody className="mt-4">
        {ids.map((id) => (
          <TabPanel
            key={id}
            value={id}
            className="p-0 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {(skillSet[id] ?? []).map((currentSkill: Skill) => (
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
  const { t, i18n } = useTranslation();

  const skillSet = useMemo(() => {
    const obj = t("skillsSet", { returnObjects: true }) as SkillSet;
    return obj && typeof obj === "object" ? obj : {};
  }, [i18n.language, t]);

  const ids = useMemo(() => Object.keys(skillSet), [skillSet]);

  const [selectedTab, setSelectedTab] = useState<string>("");

  useEffect(() => {
    if (!ids.length) return;
    setSelectedTab((prev) => (prev && ids.includes(prev) ? prev : ids[0]));
  }, [ids]);

  if (!ids.length || !selectedTab) return null;

  return (
    <>
      <Tabs
        className="hidden md:block"
        value={selectedTab}
        onChange={(val: any) => typeof val === "string" && setSelectedTab(val)}
      >
        <TabsContent ids={ids} skillSet={skillSet} />
      </Tabs>

      <SkillsMobile
        skillsSetKeys={ids}
        skillSet={skillSet}
        className="md:hidden"
      />
    </>
  );
}
