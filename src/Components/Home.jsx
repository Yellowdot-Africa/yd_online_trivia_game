import React from "react";
import "../Styles/Home.css";
import TopHeader from "./Pages/TopHeader";
import Hero from "./Pages/Hero";
import ContentSection from "./Pages/ContentSection";

const Home = () => {
  return (
    <>
    <div className="home-wrapper">
      <TopHeader />
      <div className="container">
        <Hero />
        <ContentSection />
        
      </div>
    </div>
    </>
  );
};

export default Home;
