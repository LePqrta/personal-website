import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Loading from "./components/Loading/Loading"; 

const Experiences = lazy(() => import("./pages/Experiences/Experiences"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "experiences",
        element: (
          <Suspense fallback={<Loading />}>
            <Experiences />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
    ],
  },
]);