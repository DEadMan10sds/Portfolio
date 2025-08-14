import { StickyNavbar, MainInfo, Jobs } from "./components";
import { Separator } from "./components/Separator";

function App() {
  return (
    <>
      <StickyNavbar />
      <div className="py-5 flex flex-col gap-5 max-w-[80%] m-auto">
        <MainInfo />
        <Separator title="job_history" />
        <Jobs />
        <Separator title="skills" />
      </div>
    </>
  );
}

export default App;
