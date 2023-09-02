import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqs from "./Pages/Faqs";
import LandingPage from "./Pages/LandingPage";
import Gameinfo from "./Pages/Gameinfo";
import LoadingGame from "./Pages/LoadingGame";
import CountDown1 from "./Pages/CountDown1";
import Countdown from "./Pages/Countdown";
import CountDownScreen from "./Pages/CountDownScreen";
import CountDownScreen1 from "./Pages/CountDownScreen1";
import GameComplete from "./Pages/GameComplete";
import CountDownResult from "./Pages/CountDownResult";

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
  {
    path: "/countdownscreen",
    element: <CountDownScreen />,
  },
  {
    path: "/countdownscreen1",
    element: <CountDownScreen1 />,
  },
  {
    path: "/gamecomplete",
    element: <GameComplete />,
  },
  {
    path: "/countdownresult",
    element: <CountDownResult />,
  },
]);

const Wrapper = () => {
  return <RouterProvider router={router} />;
};

export default Wrapper;
