import React, { useEffect } from "react";
import "../../Styles/GameComplete.css";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const GameComplete = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const navigationTimeout = setTimeout(() => {
      navigate("/countdownresult", {
        state: {
          correctAnswers,
          wrongAnswers,
          gemsEarned,
          // category,
        },
      });
    }, 2000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const { correctAnswers, wrongAnswers, gemsEarned } = location.state || {};

  return (
    <>
      <div data-aos="fade-down" className="container position-relative">
        <div className="game-div">
          <div className="game-complete-cont">
            <p>WELL DONE! GAME COMPLETED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameComplete;
