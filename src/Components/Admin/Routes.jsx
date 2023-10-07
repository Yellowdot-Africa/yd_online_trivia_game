import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "../../Components/Admin/SideBar";
import HomePage from "../../Components/Admin/HomePage";
import ContentPage from "../../Components/Admin/ContentPage";
import UserPage from "../../Components/Admin/UserPage";
import ErrorPage from "../../Components/Admin/ErrorPage";
import MainPage from "./MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/content",
    element: <ContentPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
