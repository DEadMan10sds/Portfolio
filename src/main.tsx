import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import "./i18n.ts";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { Theme } from "./themes/Theme.ts";
import Layout from "./Layouts/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "/projects",
        Component: () => {
          return <h1>This is the projects page</h1>;
        },
      },
    ],
  },
  {
    path: "*",
    Component: () => <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider value={Theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
