import React, { useState, useEffect } from "react";
import "../../Styles/LoadingGame.css";
import ProgressBar from "../../Components/Common/ProgressBar";
import { useNavigate, useLocation } from "react-router-dom";

const LoadingGame = () => {
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(0);
  const [slider, setSlider] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [startCountdown, setStartCountdown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location?.state;
  console.log("category:", category);

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
            navigate("/countdown", {
              state: {
                category,
              },
            });
          }
        }
      }, 2000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdown, navigate, startCountdown]);

  const numElements = [3, 2, 1];

  return (
    <div className="loading-game-container">
      <div className="">
        <div className="container loading-game">
          {category ? (
            <>
              <h4>{category.name}</h4>

              <p>{startCountdown ? "Starting..." : "Is starting..."}</p>
              {loading && (
                <div className="football-img">
                  <img
                    src={`data:image/png;base64, ${category.logo}`}
                    alt=""
                    srcset=""
                  />
                </div>
              )}
              {startCountdown && (
                <div className="football-img">
                  <img
                    src={`data:image/png;base64, ${category.logo}`}
                    alt=""
                    srcset=""
                  />
                </div>
              )}
            </>
          ) : (
            <p> No category data available</p>
          )}
          <div className="progressbar">
            {slider ? (
              <ProgressBar bgcolor={"#3834AB"} completed={completed} />
            ) : (
              <div className="countdown-cont">
                {numElements.map((numElement, index) => (
                  <div className="count" key={index}>
                    <p className="num">
                      {countdown === numElement ? numElement : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingGame;
