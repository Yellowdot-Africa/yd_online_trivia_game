import React from "react";
import Purple from "../../assets/Images/purpl.png";
import Red from "../../assets/Images/red.svg";
import moment from "moment";

import "../../Styles/Hero.css";

const Hero = () => {
  const dateStyle = {
    color: "#7c7c8b",
    textAlign: "center",
    fontFamily: "Inter sans-serif",
    fontSize: "16px",
    fontWeight: "700",
  };

  return (
    <>
      <div className="hero-card-container">
        <div className="hero-container align-items-center">
          <img className="image1" src={Purple} alt="img" />
          <div>
            <p>Music Trivia</p>
            <p className="text">Bigger and back!</p>
          </div>

          <img className="image2" src={Red} alt="img" />
        </div>
        <div className="hero-card">
          <div className="para m-1">
            <p className="book p-1">Book</p>
          </div>
          <div className="para-text-div">{moment().format("dddd LT")}</div>
          <div className="money-div p-2">
            <p className="money">N10M</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
