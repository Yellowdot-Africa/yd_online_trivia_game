import React from "react";
import HeroSection from "../../Components/HeroSection";
import PopularCategories from "../../Components/PopularCategories";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import "../LandingPage/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="hero">
        <HeroSection />
      </div>
      <div>
        <PopularCategories />
        <Contact/>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
