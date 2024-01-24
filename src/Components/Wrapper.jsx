import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import LoginCard from "../Components/CARD/LoginCard";
import SignupCard from "../Components/CARD/SignupCard";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import HomePage from "../Pages/HomePage/HomePage";
import UserStats from "../Pages/UserStats/UserStats";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";
import Rules from "../Pages/Rules/Rules";
import Settings from "../Pages/Settings/Settings";
import HistoryModal from "../Pages/History/HistoryModal";
import UserInfoCard from "../Components/UserInfoCard";
import UserStatCard from "../Components/UserStatCard";
// import QuestionScreen from "../Pages/Questions/QuestionPack";
import LoginModal from "../Components/LoginModal";
import LoadingPage2 from "../Pages/LoadingPage2/LoadingPage2";
import QuestionPack from "../Pages/Questions/QuestionPack";
import { CountdownPage,Question, QuestionScreen } from "../Pages/Questions/CountdownPageAndQuestionScreen";
import ResultPage from "../Pages/ResultPage/ResultPage";


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
    path: "/login-modal",
    element: <LoginModal />,
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
{
  path: "/rules-faqs",
  element: <Rules/>
},
{
  path: "/rules-faqs",
  element: <Rules/>
},
{
  path: "/account",
  element: <HistoryModal/>
},
{
  path: "/settings",
  element: <Settings/>
},
{
  path: "/user-info",
  element: <UserInfoCard/>
},
{
  path: "/userstat",
  element: <UserStatCard/>
},
{
  path: "/loading2",
  element: <LoadingPage2/>
},
{
  path: "/question-pack",
  element: <QuestionPack/>
},
{
  path: "/question-loading",
  element: <CountdownPage/>
},
{
  path: "/questions",
  element: <Question/>
},
{
  path: "/question-screen",
  element: <QuestionScreen/>
},
{
  path: "/result-page",
  element: <ResultPage/>
},
  
]);

const Wrapper = () => {
  return <RouterProvider router={router} />;
};

export default Wrapper;


