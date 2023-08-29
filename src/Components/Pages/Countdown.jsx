import React from "react";
import "../../Styles/Countdown.css";
import { useNavigate } from "react-router-dom";
import Football from "../../assets/Images/ball.png";

const Countdown = () => {
  const navigate = useNavigate();

  const nextScreen = () => {
    navigate("/countDown1");
  };
  return (
    <>
      <div className="container position-relative">
        <div className="div">
          <div className="qquestion-cont">
            <p>Question 1/20</p>
          </div>
          <div className="ball">
            <img src={Football} alt="ball" onClick={nextScreen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
