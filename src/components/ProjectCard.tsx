import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export type TagName = "Guide" | "Project" | "SSL";

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
  SSL: {
    color: "cyan",
    text: "projects.tags.ssl",
  },
};

export type ProjectArguments = {
  title: string;
  description: string;
  tags: string[];
  img?: string;
  url?: string;
};

function ProjectCard({ project }: { project: ProjectArguments }) {
  const { t } = useTranslation();
  return (
    <Card className="rounded-2xl mt-12 bg-[rgba(33,33,33,0.38)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
      {project.img && (
        <CardHeader className="w-fit mx-auto">
          <img src={project.img} alt="imgdeprueba" />
        </CardHeader>
      )}
      <CardBody className="flex h-full flex-col gap-4">
        <div className="mt-auto">
          {project.url ? (
            <Typography
              variant="h5"
              className="text-white leading-tight transition hover:text-cyan-600"
            >
              <Link to={project.url} className="flex gap-1 items-baseline">
                {project.title}
                <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0" />
              </Link>
            </Typography>
          ) : (
            <Typography variant="h5" className="text-white leading-tight">
              {project.title}
            </Typography>
          )}
          <div className="mt-2 flex items-center gap-2 text-white/65">
            <Typography variant="small" className="text-white/60">
              {project.description}
            </Typography>
          </div>
        </div>
      </CardBody>
      {/* //TODO: Optimize to avoid '0' when used just '&&' */}
      {project.tags.length ? (
        <CardFooter className="w-fit flex gap-2">
          {project.tags.map((tag: string, index: number) => {
            //TODO: Fix types of tags structure
            const tagSelected = tagsDictionary[tag];
            return (
              <Chip
                key={`${project.title}-tag-${index}`}
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
  );
}

export default ProjectCard;
