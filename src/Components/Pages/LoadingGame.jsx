import {React, useState} from "react";
import "../../Styles/LoadingGame.css";
import Reflection from "../../assets/Images/refle.svg";
import football from "../../assets/Images/football.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
// import { useState } from "react";

function LoadingGame() {
    // const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="loading-game-container">
        <div className="position-relative">
          <div className="container loading-game">
            <h4>Football Trivia</h4>
            <p>is starting...</p>
            {/* {loading &&  */}
            <div className="football-img">
              <img className="load" src={football} alt="football" />
            <img className="refl-img"  src={Reflection} alt="ref" />
            </div>
{/* } */}
            <div className="progressbar">
              <ProgressBar now={55} />;
            </div>

          </div>
            
        </div>
            
      </div>
            
    </>
  );
}

export default LoadingGame;
