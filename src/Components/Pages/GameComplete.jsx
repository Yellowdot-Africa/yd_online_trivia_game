import React, { useEffect } from "react";
import "../../Styles/GameComplete.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const GameComplete = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const navigationTimeout = setTimeout(() => {
      navigate("/countdownresult");
    }, 2000);

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, []);

  const navigate = useNavigate();

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
