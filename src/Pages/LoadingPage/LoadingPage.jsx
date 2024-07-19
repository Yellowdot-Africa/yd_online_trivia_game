import React, { useState, useEffect } from "react";
import "../LoadingPage/LoadingPage.css";
import TrophyCup from "../../assets/Icons/TrophyCup.png";
import ProgressBar from "../../Components/ProgressBar";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const [completed, setCompleted] = useState(0);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (completed < 100) {
        setCompleted((prevCompleted) => prevCompleted + 1);
      } else {
        clearInterval(interval);
        setLoadingCompleted(true);

        const continueButtonTimer = setTimeout(() => {
          setShowContinueButton(true);
        }, 2000);

        return () => {
          clearTimeout(continueButtonTimer);
        };
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [completed]);

  const handleButtonContinue = () => {
    navigate("/home");
  };

  return (
    
    <div className="loading-page">
      <div className="loading-glassmorphism">
        <div className="glassmorphism">
          <div className="trivia-main-container">
            <div className="trivia-progress">
              <div className="trophy-img">
                <img src={TrophyCup} alt="trophy" />
              </div>
              <h4>YellowDot Trivia</h4>
              <p>
                {loadingCompleted
                  ? "All Set, Let's Trivia"
                  : "You will be logged in shortly"}
              </p>
              <div className="progressbar">
                <ProgressBar
                  bgcolor={"#FFFFFF"}
                  completed={completed}
                  isCompleted={loadingCompleted}
                />
              </div>
              {showContinueButton && (
                <button className="welcom-btn" onClick={handleButtonContinue}>
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
