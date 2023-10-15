import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import './index.css'
import HomePage from './routes/HomePage';
import ContentPage from './routes/ContentPage';
import UserPage from "./routes/UserPage";

const router = createBrowserRouter([
 
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
        element: <ContentPage/>
      },
      {
        path: "user/:userId",
        element: <UserPage/>
      }
    ],
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
