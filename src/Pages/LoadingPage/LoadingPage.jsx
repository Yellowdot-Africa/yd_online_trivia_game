import React, { useState, useEffect } from "react";
import TriviaLogo from "../../assets/Icons/big-cup.svg";
import Logo from "../../assets/Images/ydTrivia.png";
import ProgressBar from "../../Components/ProgressBar";
import "../../Pages/LoadingPage/LoadingPage.css";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
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
    navigate("/home");
  };

  return (
    <>
      <div className="loading-pagee-containerr">
        <div className="glassmorphism">        
        <div className="trivia-main-container">
          <div className="trivia-progress">
            <img className="trivia-logo" src={TriviaLogo} alt="trivia" />
            <p> YellowDot Trivia</p>
            {loadingCompleted ? (
              <div className="welcome-content">
                <h1 className="welcome">Welcome, Are you ready?</h1>
                {showContinueButton && (
                  <button className="welcom-btn" onClick={handleButtonContinue}>
                    Continue
                  </button>
                )}
              </div>
            ) : (
              <div className="progressbar">
                {slider && (
                  <ProgressBar bgcolor={"#9334AB"} completed={completed} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default LoadingPage;










