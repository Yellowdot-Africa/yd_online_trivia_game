import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqs from "./Pages/Faqs";
import LandingPage from "./Pages/LandingPage";
import Gameinfo from "./Pages/Gameinfo";
import LoadingGame from "./Pages/LoadingGame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
  {
    path: "/game-info",
    element: <Gameinfo/>,
  },
  {
    path: "/loading",
    element: <LoadingGame/>,
  }
]);

const Wrapper = () => {
  return <RouterProvider router={router} />;
};

export default Wrapper;
