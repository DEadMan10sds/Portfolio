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
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type SkillSet = Record<string, Skill[]>;

export const TabsContent = ({
  ids,
  skillSet,
}: {
  ids: string[];
  skillSet: SkillSet;
}) => {
  const { t } = useTranslation();
  const panelsRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useLayoutEffect(() => {
    const calculateHeight = () => {
      if (!panelsRef.current) return;

      const panels = Array.from(
        panelsRef.current.querySelectorAll<HTMLElement>(".skill-panel"),
      );

      const height = Math.max(0, ...panels.map((panel) => panel.scrollHeight));

      setMaxHeight(height);
    };

    calculateHeight();

    const observer = new ResizeObserver(calculateHeight);

    if (panelsRef.current) {
      observer.observe(panelsRef.current);

      panelsRef.current
        .querySelectorAll(".skill-panel")
        .forEach((panel) => observer.observe(panel));
    }

    return () => observer.disconnect();
  }, [ids, skillSet]);

  return (
    <div ref={panelsRef}>
      <TabsHeader className="rounded-2xl bg-[rgba(33,33,33,0.42)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] p-2 [&_.absolute]:!bg-[rgba(13,115,119,0.22)] [&_.absolute]:!border [&_.absolute]:!border-[rgba(20,255,236,0.22)] [&_.absolute]:!rounded-xl [&_.absolute]:!shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
        {ids.map((id) => (
          <Tab
            key={id}
            value={id}
            className="rounded-xl px-4 py-2 transition-all duration-200 text-white/70 hover:text-white hover:bg-white/5 aria-selected:text-white aria-selected:font-semibold"
          >
            {t(`skillsTabs.${id}`)}
          </Tab>
        ))}
      </TabsHeader>

      <div
        style={{
          height: maxHeight || "auto",
        }}
        className="mt-4"
      >
        <TabsBody className="h-full">
          {ids.map((id) => (
            <TabPanel
              key={id}
              value={id}
              className="skill-panel p-0 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-start"
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
      </div>
    </div>
  );
};

export function Skills() {
  const { t } = useTranslation();

  const skillSet = useMemo(() => {
    const obj = t("skillsSet", { returnObjects: true }) as SkillSet;
    return obj && typeof obj === "object" ? obj : {};
  }, [t]);

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
