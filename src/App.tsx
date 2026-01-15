import { StickyNavbar, MainInfo, Jobs } from "./components";
import { Projects } from "./components/Projects";
import { Separator } from "./components/Separator";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <StickyNavbar />
      <div className="py-5 flex flex-col gap-5 max-w-[80%] m-auto">
        <MainInfo />
        <Separator title="job_history" />
        <Jobs />
        <Separator title="skills" />
        <Skills />
        <Separator title="Projects" />
        <Projects />
      </div>
    </>
  );
}

export default App;
