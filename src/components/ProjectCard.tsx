import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export type TagName = "Guide" | "Project";

export type TagTypes = {
  [K in TagName]: {
    color: string;
    text: string;
  };
};

const tagsDictionary: TagTypes = {
  Guide: {
    color: "green",
    text: "projects.tags.guide",
  },
  Project: {
    color: "pink",
    text: "projects.tags.projects",
  },
};

export type ProjectArguments = {
  title: string;
  description: string;
  tags: string[];
};

function ProjectCard({ project }: { project: ProjectArguments }) {
  const { t } = useTranslation();
  return (
    <>
      <Card className="rounded-2xl bg-[rgba(33,33,33,0.38)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <CardBody className="flex h-full flex-col gap-4">
          <div className="mt-auto">
            <Typography variant="h5" className="text-white leading-tight">
              {project.title}
            </Typography>
            <div className="mt-2 flex items-center gap-2 text-white/65">
              <Typography variant="small" className="text-white/60">
                {project.description}
              </Typography>
            </div>
          </div>
        </CardBody>
        {/* //TODO: Optimize to avoid '0' when used just '&&' */}
        {project.tags.length ? (
          <CardFooter>
            {project.tags.map((tag: string) => {
              //TODO: Fix types of tags structure
              const tagSelected = tagsDictionary[tag];
              return (
                <Chip
                  className="w-fit rounded-full"
                  color={tagSelected.color}
                  value={t(tagSelected.text)}
                />
              );
            })}
          </CardFooter>
        ) : (
          <></>
        )}
      </Card>
    </>
  );
}

export default ProjectCard;
