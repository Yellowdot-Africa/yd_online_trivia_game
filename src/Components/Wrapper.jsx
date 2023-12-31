import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqs from "./Pages/Faqs";
import LandingPage from "./Pages/LandingPage";
import Gameinfo from "./Pages/Gameinfo";
import LoadingGame from "./Pages/LoadingGame";
import CountDown1 from "./Pages/CountDown1";
import Countdown from "./Pages/Countdown";
import GameComplete from "./Pages/GameComplete";
import CountDownResult from "./Pages/CountDownResult";
import LandingScreen2 from "./Pages/LandingScreen2";
import SignIn from "./Pages/SignIn";
import CreateUser from "./Pages/CreateUser";
import Wallet from "./Common/Wallet";



const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },

  {
    path: "/createuser",
    element: <CreateUser />,
  },

  {
    path: "/landingpage",
    element: <LandingPage />,
  },
  {
    path: "/landingscreen2",
    element: <LandingScreen2 />,
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
    path: "/gamecomplete",
    element: <GameComplete />,
  },
  {
    path: "/countdownresult",
    element: <CountDownResult />,
  },
  {
    path: "/wallet",
    element: <Wallet/>,
  },


  
]);

const Wrapper = () => {
  return <RouterProvider router={router} />;
};

export default Wrapper;
