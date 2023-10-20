import React, { useState, useEffect } from "react";
import "../../Styles/CountDownResult.css";
import WrongMask from "../../assets/icons/wrongmask.svg";
import CorrectMask from "../../assets/icons/correctmask.png";
import Gems from "../../assets/icons/gem.svg";
import CustomButton from "../Common/CustomButton";
import { useNavigate, useLocation } from "react-router-dom";

const CountDownResult = () => {
  const buttonText = "Replay";
  const buttonStyles = {
    borderRadius: "24px",
    backgroundColor: "#1D1DB9",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    width: "222px",
  };

  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;
  const { correctAnswers, wrongAnswers, gemsEarned, category } = state || {};
  console.log("gameInfo", category);

  return (
    <>
      <div className="result-container">
        <div className="game-result-div" data-aos="fade-up">
          <div className="game-result-complete-cont">
            <p>WELL DONE! GAME COMPLETED</p>
          </div>
        </div>
        <div className="result">
          <p>YOUR RESULTS</p>
        </div>

        <div className="card">
          <div className="correct">
            <img src={CorrectMask} alt="correct" />
            <p>{correctAnswers}</p>
            <p>Correct</p>
          </div>
          <div className="wrong">
            <img src={WrongMask} alt="wrong" />
            <p>{wrongAnswers}</p>
            <p>Wrong</p>
          </div>
        </div>

        <div className="gems-gotten">
          <p>YOU GOT GEMS!!!</p>
          <div className="gem-div">
            <img src={Gems} alt="gem" />
            <p className="nums-gems">+{gemsEarned || correctAnswers}</p>
          </div>
        </div>

        <div className="button">
          <CustomButton
            buttonText={buttonText}
            style={buttonStyles}
            onClick={() => {
              navigate("/game-info", {
                state: {
                  category,
                },
              });
            }}
          />
        </div>
        <p className="done" onClick={() => navigate("/home")}>
          Done
        </p>
      </div>
    </>
  );
};

export default CountDownResult;
