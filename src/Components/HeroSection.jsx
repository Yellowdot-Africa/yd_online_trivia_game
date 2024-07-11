import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Arrow from "../assets/Icons/Arrow 2.png";
import image1 from "../assets/Images/blank.png";
import image2 from "../assets/Images/trophybg.png";
import image3 from "../assets/Images/glowtrophybg.png";
import LogoCup from "../assets/Icons/logoicon.svg";
import CloseIcon from "../assets/Icons/close-iccon.svg";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import SignUp from "../assets/Icons/sign-in.svg";
import Login from "../assets/Icons/login.svg";
import TC from "../assets/Icons/Pen.png";
import FAQ from "../assets/Icons/Chat.png";
import "../Styles/HeroSection.css";



const HeroSection = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [animationStage, setAnimationStage] = useState(1);

  useEffect(() => {
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 4000);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 10000);

    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    const stageTimer1 = setTimeout(() => {
      setAnimationStage(2);
    }, 800);

    const stageTimer2 = setTimeout(() => {
      setAnimationStage(3);
    }, 2000);

    return () => {
      clearTimeout(stageTimer1);
      clearTimeout(stageTimer2);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setShowLogin(true); 
    setShowSignup(false); 
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowLogin(false);
    setShowSignup(false);
  };

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const toggleSignupForm = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  const navigateToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleScrollToCategories = () => {
    const categoriesSection = document.getElementById("popularcategories");
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isMenuOpen && <div className="backdrop" onClick={closeMenu} />}
      <div className="background-images">
        <img
          src={image1}
          alt="Image 1"
          className={`background-image ${
            animationStage >= 1 ? "visible" : "hidden"
          }`}
        />
        <img
          src={image2}
          alt="Image 2"
          className={`background-image ${
            animationStage >= 2 ? "visible" : "hidden"
          }`}
        />
        <img
          src={image3}
          alt="Image 3"
          className={`background-image ${
            animationStage >= 3 ? "visible" : "hidden"
          }`}
        />
      </div>
      <div className={`menu-page ${isMenuOpen ? "menu-open" : ""}`}>
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="hero-container">
          <h4>YellowDot Trivia</h4>

          <div className="text-and-button">
            <button type="submit" className="trivia-btn" onClick={handleScrollToCategories}>
              Let's Trivia
             
                <img src={Arrow} alt="" />
           
            </button>
            {showText && (
              <div className="trivia-text fade-in-text">
                <p>Discover a whole world of Trivia,</p>
                <p>Play, have fun and win amazing </p>
                <span className="prizes">Prizes!</span>
              </div>
            )}
          </div>

          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <div className="close-header">
              <img src={LogoCup} alt="" />
              <img
                src={CloseIcon}
                alt="Close"
                className="close-icon"
                onClick={closeMenu}
              />
            </div>

            <ul className="menu-list">
              <li className="menu-item" onClick={toggleLoginForm}>
                <div className="form-container">
                  <img src={Login} alt="login" />
                  Login
                </div>
              </li>
              {showLogin && (
                <div className="login-div">
                  <LoginForm isLoginOpen={true} />
                </div>
              )}

              <li className="menu-item" onClick={toggleSignupForm}>
                <div className="form-container">
                  <img src={SignUp} alt="signup" />
                  Signup
                </div>
              </li>
              {showSignup && (
                <div className="signup-div">
                  <SignUpForm
                    isSignUpOpen={true}
                    navigateToLogin={navigateToLogin}
                  />
                </div>
              )}
            </ul>

            <div className="additional-content">
              <p>
                <a href="/terms" className="content-links">
                  <img src={TC} alt="tc" />
                  T's&C's
                </a>
                <a href="/faq" className="content-links">
                  <img src={FAQ} alt="" /> FAQs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;


