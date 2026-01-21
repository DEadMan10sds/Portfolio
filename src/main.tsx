import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./i18n.ts";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import mainTheme from "./themes/Theme.json";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "*",
    Component: () => <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider value={mainTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
