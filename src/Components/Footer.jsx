import React, { useState } from "react";
import LogoCup from "../assets/Icons/logoicon.svg";
import Facebook from "../assets/Icons/facebook.png";
import Twitter from "../assets/Icons/mdi_twitter.png";
import Youtube from "../assets/Icons/mdi_youtube.png";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleExplore = () => setExploreOpen(!exploreOpen);
  const toggleLegal = () => setLegalOpen(!legalOpen);
  const toggleAbout = () => setAboutOpen(!aboutOpen);

  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <img src={LogoCup} alt="logo" />
          <div className="socials">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Youtube} alt="youtube" />
          </div>
          
        </div>
        <div className="footer-links">
          <div onClick={toggleExplore} className="explore">
            <div className="explore-toggle-icon">
            <p onClick={toggleExplore}>Explore </p>
            <span>&#9662;</span>
            </div>
           
            {exploreOpen && (
              <ul className="explore-links">
                <li>
                  <Link to="./home">Home</Link>
                </li>
                <li>
                  <Link to="./leaderboard">leaderboard</Link>
                </li>
                <li>
                  <Link to="./popularCategories">Categories</Link>
                </li>
                <li>
                  <Link to="./faqs">FAQs</Link>
                </li>
              </ul>
            )}
          </div>

          <div className="legal">
          <div onClick={toggleLegal} className="explore-toggle-icon">

            <p onClick={toggleLegal}>Legal </p>
            <span>&#9662;</span>
            </div>
            {legalOpen && (
              <ul className="legal-links">
                <li>
                  <Link to="./terms-and-conditions">Terms of Service</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Cookie Policy</Link>
                </li>
                <li>
                  <Link>Copyright Policy</Link>
                </li>
              </ul>
            )}
          </div>

          <div className="about">
          <div onClick={toggleAbout} className="explore-toggle-icon">

            <p onClick={toggleAbout}>About </p>
            <span>&#9662;</span>
            </div>
            {aboutOpen && (
              <ul className="about-links">
                <li>
                  <Link>About Us</Link>
                </li>
                {/* <li>
                  <Link>Partners</Link>
                </li>
                <li>
                  <Link>Press</Link>
                </li>
                <li>
                  <Link>Developers</Link>
                </li> */}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;







