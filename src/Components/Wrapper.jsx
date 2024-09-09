import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginFormCategory from "./LoginFormCategory";
import UserProfile from "../Pages/UserProfilePage/UserProfile";
import Leaderboard from "../Pages/LeaderBoard/Leaderboard";
import Settings from "../Pages/Settings/Settings";
import Account from "../Pages/ACCOUNT/Account";
import WithdrawalModal from "../Components/WithdrawalModal";
import Withdraw from "../Components/Withdraw";
import PinPage from "../Components/PinPage";
import Deposit from "../Components/Deposit";
import CashOutSuccessPage from "../Components/CashOutSuccessPage";
import GettingStarted from "../Pages/GettingStarted/GettingStarted";
import QuestionPack from "../Pages/Questions/QuestionPack";
import QuestionScreen from "../Pages/Questions/QuestionScreen";
import CountdownPage from "../Pages/Questions/CountDownPage";
import QuestionInfo from "../Pages/Questions/QuestionInfo";
import Ad from "../Components/Ad";
import PopularCategories from "./PopularCategories";
import TriviaCategories from "./TriviaCategories";
import ResultPage from "../Pages/ResultPage/ResultPage";
import VerifyEmail from "../Components/VerifyEmail";
import EmailConfirmationPage from "../Components/EmailConfirmationPage";
import ResendVerificationPage from "../Components/ResendVerificationPage";
import ErrorPage from "../Components/ErrorPage";
import PaymentSuccessPage from "../Components/PaymentSuccessPage";
import ForgotPassword from "./ForgotPassword";




const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail/>,
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
    path: "/login-category",
    element: <LoginFormCategory />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/popularcategories",
    element: <PopularCategories />,
  },
  {
    path: "/trivia-categories",
    element: <TriviaCategories />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/withdrawmodal",
    element: <WithdrawalModal />,
  },
  {
    path: "/withdraw",
    element: <Withdraw/>,
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
    path: "/payment-success",
    element: <PaymentSuccessPage />,
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
    element: <QuestionInfo  />,
  },
  {
    path: "/question-screen",
    element: <QuestionScreen />,
  },
  
  {
    path: "/ad",
    element: <Ad />,
  },
  {
    path: "/result-page",
    element: <ResultPage />,
  },
  {
    path: "/email-confirmation",
    element: <EmailConfirmationPage />,
  },
  {
    path: "/resend-verification",
    element: <ResendVerificationPage />,
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

const Wrapper = () => {
  return (
    <>
      {/* <ToastContainer /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default Wrapper;





