import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
//import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "./ChangeLanguage";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const links = [
  {
    url: "https://www.linkedin.com/in/ad%C3%A1n-alejandro-s%C3%A1nchez/",
    text: "LinkedIn",
  },
  {
    url: "https://github.com/DEadMan10sds",
    text: "Github",
  },
];

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const { i18n } = useTranslation();
  console.log(i18n.language);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link) => (
        <Typography key={link.url} as="li" className="p-1 font-normal">
          <a
            href={link.url}
            className="flex items-center text-md font-semibold"
          >
            {link.text}
          </a>
        </Typography>
      ))}
      <Typography as="li" className="p-1 font-normal">
        <a
          href={`CV_${i18n.language.toUpperCase()}_-_AdanAlejandroSanchez.pdf`}
          className="flex items-center text-md font-semibold"
        >
          CV
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className={clsx(
        "sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4",
        "bg-[rgba(33,33,33,0.65)] backdrop-blur-md",
        "border-b border-[rgba(20,255,236,0.12)]",
      )}
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-semibold tracking-tight"
        >
          Adán Sánchez
        </Typography>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="hidden lg:block">
          <div className="rounded-lg border border-[rgba(13,115,119,0.65)] bg-[rgba(50,50,50,0.35)] hover:border-[#14FFEC] transition">
            <ChangeLanguage />
          </div>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <ChangeLanguage />
        </div>
      </Collapse>
    </Navbar>
  );
}
