import React from "react";
import Arrow from "../assets/Icons/arrow-right.png";

const TodaysGames = () => {
  return (
    <div className="todays-games">
      <div className="carousel-container">
        <div className="todays-card-container">
          <div className="special-game-card">
            <h3>Theme</h3>
            <div className="game-title">
              <div className="game-title-cont">
                <p>Game Title</p>
                <img src={Arrow} alt="arrw" />
              </div>
            </div>
          </div>
          <div className="special-game-card">
            <h3>Theme</h3>
            <div className="game-title">
              <div className="game-title-cont">
                <p>Game Title</p>
                <img src={Arrow} alt="arrw" />
              </div>
            </div>
          </div>
          <div className="special-game-card">
            <h3>Theme</h3>
            <div className="game-title">
              <div className="game-title-cont">
                <p>Game Title</p>
                <img src={Arrow} alt="arrw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysGames;
