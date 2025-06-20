import { StickyNavbar, MainInfo, Jobs } from "./components";

function App() {
  return (
    <>
      <StickyNavbar />
      <div className="py-5 max-w-[80%] m-auto">
        <MainInfo />
        <Jobs />
        <h1>Demo</h1>
      </div>
    </>
  );
}

export default App;
