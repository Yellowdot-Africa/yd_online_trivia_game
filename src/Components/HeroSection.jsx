import React from "react";
import Card from "../Components/CARD/Card";
import "../Styles/HeroSection.css";

const HeroSection = () => {
  return (
    <>
        <div className="hero-section ">
          <div className="hero-text">
            <h3>YellowDot Trivia,</h3>
            <p>All the best categories!</p>
          </div>

          <div className="hero-btn-container">
            <button
              className="hero-btn"
              style={{
                backgroundColor: "rgba(255, 215, 0, 0.80)",
                borderRadius: "28.5px",
                border: "none",
                padding: "10px",
              }}
            >
              Today's Trivia
            </button>
          </div>
        </div>
      <Card />
    </>
  );
};

export default HeroSection;
