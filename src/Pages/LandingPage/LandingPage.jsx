import React from "react";
import HeroSection from "../../Components/HeroSection";
import "../../Pages/LandingPage/LandingPage.css";
import CategoriesSection from "../../Components/CategoriesSection";
import ContactSection from "../../Components/ContactSection";
import FooterSection from "../../Components/FooterSection";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <HeroSection />
        <CategoriesSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
};

export default LandingPage;






