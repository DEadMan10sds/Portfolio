import { useEffect } from "react";
import useCanvasCursor from "../hooks/useCanvasCursor.tsx";

const CanvasCursor = () => {
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;
  }, []);
  useCanvasCursor();

  return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
};
export default CanvasCursor;
