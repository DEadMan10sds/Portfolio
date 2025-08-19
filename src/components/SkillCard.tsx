import type Skill from "../interfaces/Skill";

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return <>{skill.title}</>;
};
