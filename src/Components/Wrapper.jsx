import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faqs from "./Common/Faqs";
import LandingPage from "./Common/LandingPage";

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
]);

const Wrapper = () => {
  return <RouterProvider router={router} />;
};

export default Wrapper;
