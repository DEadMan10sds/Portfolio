import { Outlet } from "react-router";
import { StickyNavbar } from "../components";
import { StarfieldBackground } from "../components/Meteors";
import CanvasCursor from "../components/CanvasCursor";

function Layout() {
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

  return (
    <div className="relative min-h-screen bg-black">
      <StarfieldBackground stars={250} meteors={8} />

      <div className="relative ">
        <StickyNavbar />

        <main className="relative max-w-6xl px-7 mx-auto py-8 flex flex-col gap-8">
          <Outlet />
        </main>
      </div>
      {!isTouchDevice && <CanvasCursor />}
    </div>
  );
}

export default Layout;
