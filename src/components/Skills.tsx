import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const TabsContent = () => {
  const data = [
    {
      label: "Lenguajes de Programación",
      value: "programming_languages",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Frameworks y librerías",
      value: "frameworks",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Bases de datos",
      value: "databases",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Herramientas",
      value: "tools",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <>
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </>
  );
};

export function Skills() {
  return (
    <>
      <div className="hidden md:inline-flex">
        <Tabs value="programming_languages">
          <TabsContent />
        </Tabs>
      </div>
      <div className="md:hidden">
        <Tabs value="programming_languages" orientation="vertical">
          <TabsContent />
        </Tabs>
      </div>
    </>
  );
}
