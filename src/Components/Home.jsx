import React from "react";
import "../Styles/Home.css";
import TopHeader from "./Common/TopHeader";
import Hero from "./Common/Hero";
import ContentSection from "./Common/ContentSection";

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
