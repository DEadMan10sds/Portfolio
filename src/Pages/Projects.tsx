import { useTranslation } from "react-i18next";
import ProjectCard, { type ProjectArguments } from "../components/ProjectCard";
import { useMemo } from "react";

export const Projects = () => {
  const { t } = useTranslation();
  const projectsList = useMemo(
    () => t("projects.list", { returnObjects: true }) as ProjectArguments[],
    [t],
  );

  return (
    <>
      {projectsList.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} project={project} />
      ))}
    </>
  );
};
