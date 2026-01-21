import { StickyNavbar, MainInfo, Jobs } from "./components";
import { StarfieldBackground } from "./components/Meteors";
import { Separator } from "./components/Separator";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#000]">
      <StarfieldBackground stars={100} meteors={8} />
      <StickyNavbar />
      <div className="py-5 flex flex-col gap-5 max-w-[80%] m-auto">
        <MainInfo />
        <Separator title="job_history" />
        <Jobs />
        <Separator title="skills" />
        <Skills />
      </div>
    </div>
  );
}

export default App;
