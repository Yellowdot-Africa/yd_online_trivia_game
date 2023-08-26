import React from "react";
import "../Styles/Home.css";
import TopHeader from "./Pages/TopHeader";
import Hero from "./Pages/Hero";
import ContentSection from "./ContentSection";

const Home = () => {
  return (
    <div className="Home-wrapper">
      <TopHeader />
      <div className="container">
        <Hero />
        <ContentSection />
      </div>
    </div>
  );
};

export default Home;
