import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import type { ComponentType, PropsWithChildren } from "react";

import {
  ArrowTopRightOnSquareIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export type TagName =
  | "Guide"
  | "Project"
  | "SSL"
  | "Backend"
  | "Frontend"
  | "Support";

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
  Backend: {
    color: "red",
    text: "projects.tags.backend",
  },
  Frontend: {
    color: "blue",
    text: "projects.tags.frontend",
  },
  Support: {
    color: "yellow",
    text: "projects.tags.support",
  },
};

const BadgesLinks = {
  react:
    "https://img.shields.io/badge/-ReactJs-4090a6?logo=react&logoColor=white&style=for-the-badge",

  javascript:
    "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge",

  express:
    "https://img.shields.io/badge/-Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge",

  mongodb:
    "https://img.shields.io/badge/-MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white&style=for-the-badge",

  postgres:
    "https://img.shields.io/badge/-Postgres-%23316192.svg?logo=postgresql&logoColor=white&style=for-the-badge",

  docker:
    "https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge",

  nestjs:
    "https://img.shields.io/badge/-Nest.js-%23E0234E.svg?logo=nestjs&logoColor=white&style=for-the-badge",

  redux:
    "https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=fff&style=for-the-badge",

  typescript:
    "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge",

  python:
    "https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=fff&style=for-the-badge",
} as const;

const ProjectCardContainer = Card as unknown as ComponentType<
  PropsWithChildren<{ className?: string }>
>;

const ProjectCardHeader = CardHeader as unknown as ComponentType<
  PropsWithChildren<{ className?: string }>
>;

const ProjectTypography = Typography as unknown as ComponentType<
  PropsWithChildren<{
    variant?: string;
    className?: string;
  }>
>;

export type ProjectArguments = {
  title: string;
  description: string;
  tags: TagName[];
  img?: string;
  url?: string;
  list?: string[];
  badges: Array<keyof typeof BadgesLinks>;
};

function ProjectCard({ project }: { project: ProjectArguments }) {
  const { t } = useTranslation();

  return (
    <ProjectCardContainer
      className="
        w-full
        h-fit
        rounded-2xl
        bg-[rgba(33,33,33,0.38)]
        backdrop-blur-xl
        border border-[rgba(13,115,119,0.22)]
        shadow-[0_18px_50px_rgba(0,0,0,0.45)]
        flex
        flex-col
      "
    >
      {/* Image */}
      <ProjectCardHeader
        className={`
          mx-auto
          w-full
          h-40
          overflow-hidden
          ${
            project.img
              ? ""
              : "hidden md:flex bg-[#161515] items-center justify-center"
          }
        `}
      >
        <img
          src={project.img ?? "logo.png"}
          alt={`${project.title}-image`}
          className={
            project.img
              ? "w-full h-full object-cover"
              : "w-auto h-28 object-contain"
          }
        />
      </ProjectCardHeader>

      {/* Content */}
      <CardBody className="flex flex-col gap-3 py-4">
        {/* Title */}
        <ProjectTypography
          variant="h5"
          className={`
            text-white
            leading-tight
            ${project.url ? "transition-colors hover:text-cyan-600" : ""}
          `}
        >
          {project.url ? (
            <Link to={project.url} className="flex gap-1 items-baseline">
              {project.title}

              <ArrowTopRightOnSquareIcon className="h-5 w-5 flex-shrink-0" />
            </Link>
          ) : (
            project.title
          )}
        </ProjectTypography>

        {/* Description */}
        <ProjectTypography variant="small" className="text-white/60">
          {project.description}
        </ProjectTypography>

        {/* List */}
        {project.list && project.list.length > 0 && (
          <List className="gap-0">
            {project.list.map((item) => (
              <ListItem
                key={`${item}-${project.title}`}
                className="pointer-events-none p-1"
              >
                <ListItemPrefix className="mr-2">
                  <CpuChipIcon className="w-5 h-5 flex-shrink-0" />
                </ListItemPrefix>

                {item}
              </ListItem>
            ))}
          </List>
        )}

        {/* Badges */}
        {project.badges && project.badges.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.badges.map((badge) => (
              <div
                key={`${badge}-${project.title}`}
                className="h-8 max-w-[120px] flex items-center"
              >
                <img
                  src={BadgesLinks[badge]}
                  alt={badge}
                  className="
                    max-h-full
                    max-w-full
                    w-auto
                    h-auto
                    object-contain
                  "
                />
              </div>
            ))}
          </div>
        )}
      </CardBody>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <CardFooter className="w-full pt-0 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => {
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
      )}
    </ProjectCardContainer>
  );
}

export default ProjectCard;
