import React, { useState } from "react";
import LogoCup from "../assets/Icons/logoicon.svg";
import CloseIcon from "../assets/Icons/close-iccon.svg";
import SignUp from "../assets/Icons/sign-in.svg";
import Login from "../assets/Icons/login.svg";
import TC from "../assets/Icons/Pen.png";
import FAQ from "../assets/Icons/Chat.png";
import "../Styles/HeroSection.css";
import Cardd from "../Components/CARDD/Cardd";
import NavBar from "../Components/NavBar";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "./SignUpForm";

const HeroSection = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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

  return (
    <>
      {isMenuOpen && <div className="backdrop" onClick={closeMenu} />}
      <div className={`landing-page-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="hero-section ">
          <div className="hero-text">
            <h3>YellowDot Trivia</h3>
            <p>
              Discover a whole world of games <br />
              Play for free without having to download
            </p>
          </div>

          <div className="hero-btn-container">
            <button
              className="hero-btn"
              style={{
                padding: "10px",
                borderRadius: "30px",
                border: "1px solid #38128D",
                background: "#FFF",
                boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              Today's Trivia
            </button>
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

            <ul>
              <li className="menu-item" onClick={toggleSignupForm}>
                <div className="form-container">
                  <img src={SignUp} alt="signup" />
                  Signup
                  {showSignup && <SignUpForm isMenuOpen={isMenuOpen} />}
                </div>
              </li>

              <li className="menu-item" onClick={toggleLoginForm}>
                <div className="form-container">
                  <img src={Login} alt="login" />
                  Login
                  {showLogin && <LoginForm isMenuOpen={isMenuOpen} />}
                </div>
              </li>
            </ul>

            <div className="additional-content">
              <p>
                <a href="/terms">
                  {" "}
                  <img src={TC} alt="tc" />
                  T's&C's
                </a>
                <a href="/faq">
                  <img src={FAQ} alt="" /> FAQs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cardd />
    </>
  );
};

export default HeroSection;
