import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const TabsContent = () => {
  const { t } = useTranslation();
  const skillSet = t("skillsSet", { returnObjects: true });
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
        {skillsSetKeys.map((skill) => (
          <TabPanel key={skill} value={skill}>
            {skillSet[skill].map(({ img, title, time }) => (
              <Typography key={`${title}-${img}`}>
                {title} - {time}
              </Typography>
            ))}
          </TabPanel>
        ))}
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
