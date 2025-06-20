import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { StickyNavbar } from "./components/StickyNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StickyNavbar />
      <div className="p-5">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
