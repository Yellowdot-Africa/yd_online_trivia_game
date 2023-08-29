import React, { useState, useEffect } from "react";
import "../../Styles/LoadingGame.css";
import Reflection from "../../assets/Images/refle.svg";
import football from "../../assets/Images/football.svg";
import ProgressBar from "../../Components/Common/ProgressBar";
import { useNavigate } from "react-router-dom";

const LoadingGame = () => {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(0);
  const [slider, setSlider] = useState(true);
  const [countdown, setCountdown] = useState(3);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
        setLoading(false);
        setSlider(false);
        navigate("/countdown");
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown, navigate]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (completed < 100) {
        setCompleted(completed + 2);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, [completed]);

  return (
    <div className="loading-game-container">
      <div className="position-relative">
        <div className="container loading-game">
          <h4>Football Trivia</h4>
          <p>is starting...</p>
          {loading && (
            <div className="football-img">
              <img className="load" src={football} alt="football" />
              <img className="refl-img" src={Reflection} alt="ref" />
            </div>
          )}
          <div className="progressbar">
            {slider ? (
              <ProgressBar bgcolor={"#3834AB"} completed={completed} />
            ) : (
              <div className="countdown-cont">
                <div className="count">
                  <p className="num">{countdown}</p>
                </div>
                <div className="count"></div>
                <div className="count"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingGame;
