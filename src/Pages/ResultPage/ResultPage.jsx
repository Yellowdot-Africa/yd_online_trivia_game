import React from "react";
import Logo from "../../assets/Icons/big-cup.svg";
import Congrat from "../../assets/Icons/congrat.png";
import Right from "../../assets/Icons/icon-cancel.png";
import Cancel from "../../assets/Icons/icon-right.png";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Pages/ResultPage/ResultPage.css";

const ResultPage = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { correctAnswers, wrongAnswers, balance } = location.state || {};

  return (
    <>
      <div className="result-container">
        <div className="result-header">
          <div className="your-result">
            <p>Your Results</p>
          </div>
          <p className="quitt">Quit</p>
        </div>

        <div className="result-details">
          <div className="result-info">
            <img className="right" src={Right} alt="green" />

            <p className="info-value">{correctAnswers}</p>

            <p className="info-heading">Correct </p>
          </div>
          <div className="result-info">
            <img className="wrong" src={Cancel} alt="red" />
            <p className="info-value">{wrongAnswers}</p>

            <p className="info-heading">Wrong</p>
          </div>
        </div>

        <div className="prize-details">
          <p className="prize-heading">You won!</p>
          <p className="prize-amount">N{balance}</p>
          <p className="current-balance">Current balance: N{balance}</p>
        </div>
        <div className="result-text">
          <img src={Congrat} alt="" />
          <p className="qualification-text">
            You automatically qualify for a draw after every game that you
            exceed 70% correct.
          </p>
        </div>
        <img className="img-styl" src={Logo} alt="" />
        <button
          className="replay-button"
          onClick={() => {
            navigate("/questions");
          }}
        >
          Replay
        </button>
      </div>
    </>
  );
};

export default ResultPage;
