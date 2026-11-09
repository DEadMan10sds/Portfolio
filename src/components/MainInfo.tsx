import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Code2, Server, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";

const specialties = [
  {
    icon: Code2,
    title: "mainInfo.specialties.backend.title",
    description: "mainInfo.specialties.backend.description",
    technologies: ["Node.js", "NestJS", "Laravel", "PHP"],
  },
  {
    icon: Server,
    title: "mainInfo.specialties.infrastructure.title",
    description: "mainInfo.specialties.infrastructure.description",
    technologies: ["Proxmox", "Talos Linux", "Kubernetes", "Docker"],
  },
  {
    icon: Workflow,
    title: "mainInfo.specialties.architecture.title",
    description: "mainInfo.specialties.architecture.description",
    technologies: ["PostgreSQL", "MySQL", "CI/CD", "Terraform"],
  },
];

function MainInfo() {
  const { t } = useTranslation();

  return (
    <main className="relative flex flex-col gap-20 pb-14 pt-16 lg:pt-24">
      {/* HERO */}
      <section className="flex min-h-[420px] flex-col items-center justify-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(13,115,119,0.35)] bg-[rgba(13,115,119,0.12)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14ffec]">
          <span className="h-2 w-2 rounded-full bg-[#14ffec] shadow-[0_0_10px_rgba(20,255,236,0.6)]" />
          {t("mainInfo.career")}
        </span>

        <Typography
          as="h1"
          className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Adán Alejandro
          <span className="mt-1 block bg-gradient-to-r from-[#0d7377] via-[#14ffec] to-[#0d7377] bg-clip-text text-transparent">
            Sánchez
          </span>
        </Typography>

        <Typography className="mt-7 max-w-3xl text-base font-medium leading-relaxed text-white/60 sm:text-lg">
          {t("mainInfo.tagline")}
        </Typography>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Software Engineering", "DevOps", "System Architecture"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-[rgba(13,115,119,0.25)] bg-[#323232]/40 px-4 py-2 text-xs font-medium tracking-wide text-white/80 transition-colors hover:border-[#0d7377] hover:bg-[rgba(13,115,119,0.15)] hover:text-[#14ffec]"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-[#0d7377] shadow-[0_0_15px_rgba(20,255,236,0.25)]" />
          <div>
            <Typography
              as="h2"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              {t("mainInfo.aboutTitle")}
            </Typography>
            <Typography className="mt-1 text-sm text-white/45">
              {t("mainInfo.aboutSubtitle")}
            </Typography>
          </div>
        </div>

        <Card className="overflow-hidden rounded-2xl border border-[rgba(13,115,119,0.22)] bg-[rgba(33,33,33,0.75)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <CardBody className="p-6 sm:p-8 lg:p-10">
            <Typography className="max-w-4xl text-base leading-8 text-white/75 sm:text-lg">
              {t("mainInfo.description")}
            </Typography>

            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-[#14ffec]">Backend</p>
                <p className="mt-1 text-sm text-white/45">
                  {t("mainInfo.highlights.backend")}
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#14ffec]">DevOps</p>
                <p className="mt-1 text-sm text-white/45">
                  {t("mainInfo.highlights.devops")}
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#14ffec]">
                  Infrastructure
                </p>
                <p className="mt-1 text-sm text-white/45">
                  {t("mainInfo.highlights.infrastructure")}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* SPECIALTIES */}
      <section id="specialties" className="scroll-mt-24">
        <div className="mb-8">
          <Typography
            as="h2"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            {t("mainInfo.specialtiesTitle")}
          </Typography>
          <Typography className="mt-2 text-sm text-white/45 sm:text-base">
            {t("mainInfo.specialtiesSubtitle")}
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;

            return (
              <Card
                key={specialty.title}
                className="group h-full rounded-2xl border border-[rgba(13,115,119,0.20)] bg-[rgba(33,33,33,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(20,255,236,0.35)] hover:bg-[#323232]/60 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
              >
                <CardBody className="flex h-full flex-col p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(13,115,119,0.30)] bg-[rgba(13,115,119,0.12)] text-[#14ffec] transition-all duration-300 group-hover:border-[rgba(20,255,236,0.45)] group-hover:bg-[rgba(13,115,119,0.25)]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <Typography as="h3" className="text-lg font-bold text-white">
                    {t(specialty.title)}
                  </Typography>

                  <Typography className="mt-3 flex-1 text-sm leading-7 text-white/60">
                    {t(specialty.description)}
                  </Typography>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {specialty.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-[#323232]/50 px-2.5 py-1 text-xs text-white/65 transition-colors hover:border-[rgba(20,255,236,0.3)] hover:text-[#14ffec]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default MainInfo;
