import React, { useState, useEffect } from "react";
import Logo from "../../assets/Images/trophy.png";
import TriviaLogo from "../../assets/Images/ydTrivia.png";
import ProgressBar from "../../Components/ProgressBar";
import "../../Pages/LoadingPage2/LoadingPage2.css";
import { useNavigate } from "react-router-dom";

const LoadingPage2 = () => {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(0);
  const [slider, setSlider] = useState(true);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (completed < 100) {
        setCompleted((prevCompleted) => prevCompleted + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
        setSlider(false);
        setLoadingCompleted(true);

        const continueButtonTimer = setTimeout(() => {
          setShowContinueButton(true);
        }, 2000);

        return () => {
          clearTimeout(continueButtonTimer);
        };
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [completed]);

  const handleButtonContinue = () => {
    setShowContinueButton(false); 
    setTimeout(() => {

    navigate("/question-pack");
}, 1000);
  };

  return (
    <>
      <div className="loading-container">
      {/* <div className={`loading-container ${blurBackground ? "blur-background" : ""}`}> */}

        <div className="logo-cont">
          <img src={Logo} alt="logo" />
          <span>YD</span>TRIVIA
        </div>
        <div className="trivia-main-container">
          <div className="trivia-progress">
            <img className="trivia-logo" src={TriviaLogo} alt="trivia" />

            {loadingCompleted ? (
            // {loadingCompleted && showContinueButton && (

              <div className="info-content">
                <h1 className="info">
                    Information About The Game

                </h1>
                {showContinueButton && (
                  <button className="info-btn" onClick={handleButtonContinue}>
                    Begin
                  </button>
                )}
              </div>
            ) : (
            // )}
              <div className="progressbar">
                {slider && (
                  <ProgressBar bgcolor={"#9334AB"} completed={completed} />
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default LoadingPage2;
