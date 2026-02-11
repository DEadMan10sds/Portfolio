import { Card, CardBody, Typography } from "@material-tailwind/react";

function ProjectCard() {
  return (
    <>
      <Card className="rounded-2xl bg-[rgba(33,33,33,0.38)] backdrop-blur-xl border border-[rgba(13,115,119,0.22)] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <CardBody className="flex h-full flex-col gap-4">
          <div className="mt-auto">
            <Typography variant="h5" className="text-white leading-tight">
              Project title
            </Typography>

            <div className="mt-2 flex items-center gap-2 text-white/65">
              <Typography variant="small" className="text-white/60">
                SOme info?
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ProjectCard;
