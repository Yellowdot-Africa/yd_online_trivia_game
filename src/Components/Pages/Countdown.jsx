import React from "react";
import "../../Styles/Countdown.css";
import Football from "../../assets/Images/football.svg"

const Countdown = () => {
  return (
    <>
      <div className="container p-2">
        <div className="qquestion-cont">
            <p>Question 1/20</p>
        </div>
        <div className="ball">
            <img src={Football} alt="ball" />
        </div>
      </div>
    </>
  );
};

export default Countdown;
