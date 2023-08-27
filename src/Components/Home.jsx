import React from "react";
import "../Styles/Home.css";
import TopHeader from "./Pages/TopHeader";
import Hero from "./Pages/Hero";
import ContentSection from "./Pages/ContentSection";
import Countdown from "./Pages/Countdown";
import CountDown1 from "./Pages/CountDown1";
import CountDownScreen from "./Pages/CountDownScreen";

const Home = () => {
  return (
    <div className="Home-wrapper">
      <TopHeader />
      <div className="container">
        <Hero />
        <ContentSection />
        {/* <Countdown/> */}
        {/* <CountDown1/> */}
        {/* <CountDownScreen /> */}
      </div>
    </div>
  );
};

export default Home;
