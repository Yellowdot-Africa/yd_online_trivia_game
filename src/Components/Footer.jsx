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
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Youtube} alt="youtube" />
        </div>
        <div className="footer-links">
          <div className="explore">
            <p onClick={toggleExplore}>Explore <span>&#9662;</span></p>
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
                  <Link>FAQs</Link>
                </li>
              </ul>
            )}
          </div>

          <div className="legal">
            <p onClick={toggleLegal}>Legal <span>&#9662;</span></p>
            {legalOpen && (
              <ul className="legal-links">
                <li>
                  <Link>Terms of Service</Link>
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
            <p onClick={toggleAbout}>About <span>&#9662;</span></p>
            {aboutOpen && (
              <ul className="about-links">
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Partners</Link>
                </li>
                <li>
                  <Link>Press</Link>
                </li>
                <li>
                  <Link>Developers</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
