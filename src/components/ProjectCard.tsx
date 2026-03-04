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
    <Card className="rounded-2xl mt-12 bg-[rgba(33,33,33,0.38)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] shadow-[0_18px_50px_rgba(0,0,0,0.45)] flex flex-col">
      <CardHeader
        className={`mx-auto w-full h-40 ${project.img ? "" : "hidden md:flex bg-gray-700 items-center justify-center"}`}
      >
        <img
          src={project.img ?? "logo.png"}
          alt={`${project.title}-image`}
          className={`object-cover ${project.img ? "h-full" : "h-28"} `}
        />
      </CardHeader>

      <CardBody className="flex flex-col gap-3 flex-grow">
        <Typography
          variant="h5"
          className={`text-white leading-tight ${project.url ? "transition hover:text-cyan-600" : ""}`}
        >
          {project.url ? (
            <Link to={project.url} className="flex gap-1 items-baseline">
              {project.title}
              <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0" />
            </Link>
          ) : (
            project.title
          )}
        </Typography>

        <div className="flex items-center gap-2 text-white/65">
          <Typography variant="small" className="text-white/60">
            {project.description}
          </Typography>
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
