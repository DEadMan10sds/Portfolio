import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "./ChangeLanguage";

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
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((link) => (
        <Typography
          key={link.url}
          as="li"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href={link.url}
            className="flex items-center text-md font-semibold"
          >
            {link.text}
            {/* {t("home")} */}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Adán Sánchez
        </Typography>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="hidden lg:block">
          <ChangeLanguage />
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
