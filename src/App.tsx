import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@material-tailwind/react";
import { StickyNavbar } from "./components/StickyNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StickyNavbar />
      <div className="p-5">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
