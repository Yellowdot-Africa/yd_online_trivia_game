import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqs from "./Pages/Faqs";
import LandingPage from "./Pages/LandingPage";
import Gameinfo from "./Pages/Gameinfo";
import LoadingGame from "./Pages/LoadingGame";
import CountDown1 from "./Pages/CountDown1";
import Countdown from "./Pages/Countdown";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/faqs",
    element: <Faqs />,
  },

  {
    path: "/game-info",
    element: <Gameinfo />,
  },
  {
    path: "/loading",
    element: <LoadingGame />,
  },
  {
    path: "/countdown",
    element: <Countdown />,
  },
  {
    path: "/countdown1",
    element: <CountDown1 />,
  },
]);

const Wrapper = () => {
  return <RouterProvider router={router} />;
};

export default Wrapper;
