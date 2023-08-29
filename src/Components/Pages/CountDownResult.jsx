import React from "react";
import CustomButton from "../Common/CustomButton";

const CountDownResult = () => {
  const buttonText = "Done";
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
  };
  return (
    <>
      <div className="container">
        <div className="result">
          <p>YOUR RESULTS</p>
        </div>

        <div className="card">
          <div className="correct">
            <img src="" alt="" />
            <p>12</p>
            <p>Correct</p>
          </div>
          <div className="wrong">
            <img src="" alt="" />
            <p>8</p>
            <p>Wrong</p>
          </div>
        </div>

        <div className="gems-gotten">
          <p>YOU GOT GEMS!!!</p>
          <div>
            <img src="" alt="" />
            <p>+8</p>
          </div>
        </div>

        <div className="button">
          <CustomButton buttonText={buttonText} style={buttonStyles} />
        </div>
        <p>Replay</p>
      </div>
    </>
  );
};

export default CountDownResult;
