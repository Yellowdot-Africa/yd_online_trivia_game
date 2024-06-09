import React from "react";
import LogoCup from "../assets/Icons/logoicon.svg";
import Facebook from "../assets/Icons/facebook.png";
import Twitter from "../assets/Icons/mdi_twitter.png";
import Youtube from "../assets/Icons/mdi_youtube.png";

import "../Styles/Footer.css";

const Footer = () => {
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
            <p>Explore</p>
            <ul className="explore-links">
              <li>Home</li>
              <li>Leaderboards</li>
              <li>Categories</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="legal">
            <p>Legal</p>
            <ul className="legal-links">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Copyright Policy </li>
            </ul>
          </div>

          <div className="about">
            <p>About</p>
            <ul className="about-links">
              <li>About Us</li>
              <li>Partners</li>
              <li>Press</li>
              <li>Developers</li>
            </ul>
          </div>
            {/* <a className="links" href="#">
              Login
            </a>
            <a className="links" href="#">
              Sign Up
            </a>
            <a className="links" href="#">
              FAQs
            </a>
            <a className="links" href="#">
              T's & C's
            </a> */}


          </div>
      </div>
    </>
  );
};

export default Footer;
