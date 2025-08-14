import { Typography } from "@material-tailwind/react";
import { StickyNavbar, MainInfo, Jobs } from "./components";

function App() {
  return (
    <>
      <StickyNavbar />
      <div className="py-5 flex flex-col gap-5 max-w-[80%] m-auto">
        <MainInfo />
        <div className="flex items-center w-full text-nowrap gap-3">
          <Typography className="w-fit" variant="h4">
            Historial laboral
          </Typography>
          <hr className="border-blue-gray-100 w-full" />
        </div>
        <Jobs />
      </div>
    </>
  );
}

export default App;
