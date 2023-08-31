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
  const [startCountdown, setStartCountdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (completed < 100) {
        setCompleted(completed + 2);
      } else {
        clearInterval(progressInterval);
        setLoading(false);
        setSlider(false);
        setStartCountdown(true);
      }
    }, 200);

    return () => {
      clearInterval(progressInterval);
    };
  }, [completed]);

  useEffect(() => {
    if (startCountdown) {
      const countdownInterval = setInterval(() => {
        if (countdown > 1) {
          setCountdown(countdown - 1);
        } else {
          clearInterval(countdownInterval);
          if (countdown === 1) {
            setCountdown(3);
            setStartCountdown(false);
            navigate("/countdown");
          }
        }
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdown, navigate, startCountdown]);

  return (
    <div className="loading-game-container">
      <div className="position-relative">
        <div className="container loading-game">
          <h4>Football Trivia</h4>
          <p>{startCountdown ? "Starting..." : "Is starting..."}</p>
          {loading && (
            <div className="football-img">
              <img className="load" src={football} alt="football" />
              <img className="refl-img" src={Reflection} alt="ref" />
            </div>
          )}
          {startCountdown && (
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
                {startCountdown && (
                  <div className="count">
                    <p className="num">{countdown}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingGame;
