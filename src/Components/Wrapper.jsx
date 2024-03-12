import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import HomePage from "../Pages/HomePage/HomePage";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Leaderboard from "../Pages/LeaderBoard/Leaderboard";
import Account from "../Pages/ACCOUNT/Account";
import Withdraw from "../Components/Withdraw";
import PinPage from "../Components/PinPage";
import Deposit from "../Components/Deposit";
import CashOutSuccessPage from "../Components/CashOutSuccessPage";
import GettingStarted from "../Pages/GettingStarted/GettingStarted";
import QuestionPack from "../Pages/Questions/QuestionPack";
import {
  CountdownPage,
  Question,
  QuestionScreen,
} from "../Pages/Questions/CountdownPageAndQuestionScreen";
import CategoriesSection from "./CategoriesSection";
import ResultPage from "../Pages/ResultPage/ResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/pin-page",
    element: <PinPage />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
  {
    path: "/cashout",
    element: <CashOutSuccessPage />,
  },
  {
    path: "/getting-started",
    element: <GettingStarted />,
  },
  {
    path: "/question-pack",
    element: <QuestionPack />,
  },
  {
    path: "/question-loading",
    element: <CountdownPage />,
  },
  {
    path: "/questions",
    element: <Question />,
  },
  {
    path: "/question-screen",
    element: <QuestionScreen />,
  },
  {
    path: "/popular-categories",
    element: <CategoriesSection />,
  },
  {
    path: "/result-page",
    element: <ResultPage />,
  },
]);

const Wrapper = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default Wrapper;




