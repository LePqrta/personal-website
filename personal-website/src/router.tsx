import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Experiences from "./pages/Experiences/Experiences";
import Projects from "./pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the "Layout" that contains Navbar & Footer
    children: [
      {
        index: true, // Matches path: "/"
        element: <Home />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);