import React from "react";
import Logo from "../assets/Images/footer-logo.svg";
import "../Styles/FooterSection.css";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-columns">
        <div className="column">
          <h4>Yellow Dot</h4>
          <a href="#">About Us</a> <br />
          <a href="#">Contact Us</a>
          
        </div>
        <div className="column">
          <h4>Trivia Game</h4>
          <a href="#">How To Play</a> <br />
          <a href="#">Redeem Winnings</a>
          
        </div>
        
      </div>
      <div className="footer-logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default FooterSection;
