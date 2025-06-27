import { StickyNavbar, MainInfo, Jobs } from "./components";

function App() {
  return (
    <>
      <StickyNavbar />
      <div className="py-5 max-w-[80%] m-auto">
        <MainInfo />
        <Jobs />
      </div>
    </>
  );
}

export default App;
