import React, {useState} from "react";
// import Logo from "../../assets/Icons/big-cup.svg";
import Logo from "../../assets/Icons/Frame-cup.png";
import Congrat from "../../assets/Icons/congrat.png";
import Right from "../../assets/Icons/icon-cancel.png";
import Cancel from "../../assets/Icons/icon-right.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EndGameModal from "../../Components/EndGameModal";
import Trophy from "../../assets/Images/gold-trophy.png";
import "../../Pages/ResultPage/ResultPage.css";

const ResultPage = () => {
  const [screenBgColor, setScreenBgColor] = useState("#580DA4"); // Default color
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();
  const walletBalance = useSelector((state) => state.wallet.walletBalance);
  const experiencePoints = useSelector((state) => state.wallet.experiencePoints);

  const { correctAnswers, wrongAnswers, balance } = location.state || {};

  const handleQuit = () => {
    setScreenBgColor("#1F82F2"); 
    setShowModal(true);
  };

  return (
    <>
      <div className="result-container">
        <div className="result-header">
          <div className="your-result">
            <p>Your Results</p>

          </div>
          <div className="quitt">
            <p onClick={handleQuit}>Quit</p>

          </div>
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
          <img src={Trophy} alt="trophy" />
          <p className="prize-amount">Welldone</p>
          <p className="current-balance">Current balance: {walletBalance} Naira</p>
        </div>
        <div className="result-text">
          <img src={Congrat} alt="" />
          <p className="qualification-text">
            You automatically qualify for a draw after every game that you
            exceed 70% correct.
          </p>
        </div>
        <button
          className="replay-button"
          onClick={() => {
            navigate("/questions");
          }}
        >
          Replay
        </button>
        <a className="back-to-home"  onClick={() => {
            navigate("/home");
          }}>Home</a>
       
      </div>
      <EndGameModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        // onEnd={handleEndGame}
      />
    </>
  );
};

export default ResultPage;
