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
import TermsAndConditions from "../Components/TermsAndConditions";
import FaqPage from "../Components/FaqPage";
import ProtectedRoute from "../Components/ProtectedRoute";



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
  // {
  //   path: "/home",
  //   element: <HomePage />,
  // },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ), 
  },
  {
    path: "/login-category",
    element: <LoginFormCategory />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  // {
  //   path: "/user-profile",
  //   element: <UserProfile />,
  // },
  {
    path: "/user-profile",
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/popularcategories",
  //   element: <PopularCategories />,
  // },
  {
    path: "/popularcategories",
    element: (
      <ProtectedRoute>
        <PopularCategories />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/trivia-categories",
  //   element: <TriviaCategories />,
  // },
  {
    path: "/trivia-categories",
    element: (
      <ProtectedRoute>
        <TriviaCategories />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/leaderboard",
  //   element: <Leaderboard />,
  // },
  {
    path: "/leaderboard",
    element: (
      <ProtectedRoute>
        <Leaderboard />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/settings",
  //   element: <Settings />,
  // },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/account",
  //   element: <Account />,
  // },
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ), 
  },
  {
    path: "/withdrawmodal",
    element: <WithdrawalModal />,
  },
  // {
  //   path: "/withdraw",
  //   element: <Withdraw/>,
  // },
  {
    path: "/withdraw",
    element: (
      <ProtectedRoute>
        <Withdraw />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/pin-page",
  //   element: <PinPage />,
  // },
  {
    path: "/pin-page",
    element: (
      <ProtectedRoute>
        <PinPage />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/deposit",
  //   element: <Deposit />,
  // },
  {
    path: "/deposit",
    element: (
      <ProtectedRoute>
        <Deposit />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/payment-success",
  //   element: <PaymentSuccessPage />,
  // },
  {
    path: "/payment-success",
    element: (
      <ProtectedRoute>
        <PaymentSuccessPage />
      </ProtectedRoute>
    ), 
  },

  // {
  //   path: "/cashout",
  //   element: <CashOutSuccessPage />,
  // },
  {
    path: "/cashout",
    element: (
      <ProtectedRoute>
        <CashOutSuccessPage />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/getting-started",
  //   element: <GettingStarted />,
  // },
  {
    path: "/question-pack",
    element: (
      <ProtectedRoute>
        <QuestionPack />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/question-pack",
  //   element: <QuestionPack />,
  // },
  {
    path: "/getting-started",
    element: (
      <ProtectedRoute>
        <GettingStarted />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/question-loading",
  //   element: <CountdownPage />,
  // },
  {
    path: "/question-loading",
    element: (
      <ProtectedRoute>
        <CountdownPage />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/questions",
  //   element: <QuestionInfo  />,
  // },
  {
    path: "/questions",
    element: (
      <ProtectedRoute>
        <QuestionInfo />
      </ProtectedRoute>
    ), 
  },
  // {
  //   path: "/question-screen",
  //   element: <QuestionScreen />,
  // },
  {
    path: "/question-screen",
    element: (
      <ProtectedRoute>
        <QuestionScreen />
      </ProtectedRoute>
    ), 
  },
  
  {
    path: "/ad",
    element: <Ad />,
  },
  // {
  //   path: "/result-page",
  //   element: <ResultPage />,
  // },
  {
    path: "/result-page",
    element: (
      <ProtectedRoute>
        <ResultPage />
      </ProtectedRoute>
    ), 
  },
  {
    path: "/faqs",
    element: <FaqPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
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





