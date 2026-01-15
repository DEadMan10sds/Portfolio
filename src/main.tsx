import "./i18n.ts";
import "./index.css";
import darkTheme from "./themes/Main.ts";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider value={darkTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
