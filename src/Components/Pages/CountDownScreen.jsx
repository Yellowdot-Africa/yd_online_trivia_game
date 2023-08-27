import React from "react";
import sadMask from "../../assets/icons/mask-sad-fill.svg";
import "../../Styles/CountDownScreen.css";

function CountDownScreen() {
  return (
    <>
      <div className="container">
        <div className="countdownscreen">
          <div className="sad">
            <img src={sadMask} alt="sad" />
          </div>
        </div>
        <div className='text-contn'>
                <p>What is the name of the oldest footballer alive?</p>
            </div>
            <div className='names-cont'>
                <p className="wrong">Wrong !</p>
                <p className="tilewa">Tilewa</p>
                <p className="me">Me</p>
                <p>Usman</p>
                <p>Gift</p>
            </div>
        </div>
    </>
  );
}

export default CountDownScreen;
