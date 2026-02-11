import ProjectCard from "../components/ProjectCard";

export const Projects = () => {
  return (
    <>
      {[1].map((project) => (
        <ProjectCard />
      ))}
    </>
  );
};
