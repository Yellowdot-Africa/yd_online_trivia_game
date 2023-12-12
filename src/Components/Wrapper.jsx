import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LoginCard from "../Components/CARD/LoginCard";
import SignupCard from "../Components/CARD/SignupCard";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import HomePage from "../Pages/HomePage/HomePage";
import UserStats from "../Pages/UserStats/UserStats";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },

  {
    path: "/signup",
    element: <SignupCard />,
  },

  {
    path: "/login",
    element: <LoginCard />,
  },
 {
    path: "/loading",
    element: <LoadingPage/>
 },
 {
  path: "/home",
  element: <HomePage/>
},
{
  path: "/user-stats",
  element: <UserStats/>
},
{
  path: "/leaderboard",
  element: <LeaderBoard/>
},
  
]);

const Wrapper = () => {
  return <RouterProvider router={router} />;
};

export default Wrapper;



// import React from "react";
// import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
// import LandingPage from "../Pages/LandingPage/LandingPage";
// import LoginCard from "../Components/CARD/LoginCard";
// import SignupCard from "../Components/CARD/SignupCard";
// import LoadingPage from "../Pages/LoadingPage/LoadingPage";
// import HomePage from "../Pages/HomePage/HomePage";
// import UserStats from "../Pages/UserStats/UserStats";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Outlet />, // Use Outlet for nested routes
//     children: [
//       { path: "/", element: <LandingPage /> },
//       { path: "/signup", element: <SignupCard /> },
//       { path: "/login", element: <LoginCard /> },
//       { path: "/loading", element: <LoadingPage /> },
//       { path: "/home", element: <HomePage /> },
//       { path: "/user-stats", element: <UserStats /> },
//     ],
//   },
// ]);

// const Wrapper = () => {
//   return <RouterProvider router={router} />;
// };

// export default Wrapper;
