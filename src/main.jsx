import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root/root";
import ErrorPage from "./error-page";
import "./index.css";
import HomePage from "./routes/HomePage/HomePage";
import ContentPage from "./routes/ContentPage/ContentPage";
import UserPage from "./routes/UserPage/UserPage";
import AdminCard from "./Components/ADMINCARD/AdminCard";
import LogOutCard from "./Components/LogOut/LogoutCard";

// import LoginPage from './routes/LoginPage';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginPage/>,
  //   errorElement: <ErrorPage />,

  // },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "home/:homeId",
        element: <HomePage />,
      },
      {
        path: "content/:contentId",
        element: <ContentPage />,
      },
      {
        path: "user/:userId",
        element: <UserPage />,
      },
      {
        path: "admin-card",
        element: <AdminCard />,
      },
      {
        path: "logout",
        element: <LogOutCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
