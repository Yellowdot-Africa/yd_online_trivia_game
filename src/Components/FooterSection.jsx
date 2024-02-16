import React from "react";
import LogoCup from "../assets/Icons/logoicon.svg";
import "../Styles/FooterSection.css";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-columns">
          <img src={LogoCup} alt="logo"/>
          <p>Login</p>
          <p>Sign Up</p>
          
        </div>
       
     
    </div>
  );
};

export default FooterSection;
