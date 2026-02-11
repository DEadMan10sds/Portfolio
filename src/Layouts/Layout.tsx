import { Outlet } from "react-router";
import { StickyNavbar } from "../components";
import { StarfieldBackground } from "../components/Meteors";

function Layout() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#000]">
      <StarfieldBackground stars={100} meteors={8} />
      <StickyNavbar />
      <div className="py-5 flex flex-col gap-5 max-w-[80%] m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
