import React from "react";
import NavBar from "../../Components/NavBar";
import HeroSection from "../../Components/HeroSection";
import "../LandingPage/LandingPage.css";
import CategoriesSection from "../../Components/CategoriesSection";
import ContactSection from "../../Components/ContactSection";
import FooterSection from "../../Components/FooterSection";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <NavBar />
        <HeroSection />
        <CategoriesSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
};

export default LandingPage;
