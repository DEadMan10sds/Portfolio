import { MainInfo, Jobs } from "./components";
import { Separator } from "./components/Separator";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <MainInfo />
      <Separator title="job_history" />
      <Jobs />
      <Separator title="skills" />
      <Skills />
    </>
  );
}

export default App;
