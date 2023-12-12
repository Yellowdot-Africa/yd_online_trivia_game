import React from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import Bage from "../../assets/Images/Bage.png";
import BageOne from "../../assets/Images/Bage1.png";
import BageTwo from "../../assets/Images/Bage2.png";

import "../LeaderBoard/LeaderBoard.css";

const LeaderBoard = () => {
  return (
    <>
      <HomeNavBar />
      <div className="leaderboard-section">
        <h2>Leaderboard</h2>
        <p className="subheading">Top Players of YD Trivia</p>

        <div className="leaderboard-cards">
          <div className="leaderboard-card">
            <img src={Bage} alt="bage" />
            <img src={BageOne} alt="bage" />
            <img src={BageTwo} alt="bage" />
          </div>

          <div className="leaderboards-card">
            <div className="leaderboard-header">
              <h3>Name</h3>
              <p>Score</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
