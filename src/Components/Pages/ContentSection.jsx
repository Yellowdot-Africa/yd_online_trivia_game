import React, { useState } from "react";
import "../../Styles/ContentSection.css";
import SettingsIcon from "../../assets/icons/galaSettings0.png";
import userStats from "../../assets/icons/gridiconsstats.png";
import categories from "../../assets/icons/Group 44.svg";
import leaderboard from "../../assets/icons/Star 1.svg";
import leaderBoardImg from "../../assets/icons/leadr.png";
import rules from "../../assets/icons/Vector (1).svg";
import Settings from "./Settings";
import UserStats from "./UserStats";
import Categories from "./Categories";
import Leaderboard from "./Leaderboard";
import Rules from "./Rules";

const ContentSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="icons-cont ">
        <a
          className="settings"
          onClick={() => setIndex(0)}
          style={{
            backgroundColor: index === 0 ? "rgba(48, 48, 100, 1)" : "",

          }}
        >
          <img src={SettingsIcon} alt="settings" />
        </a> 
        <a
          className="stats"
          onClick={() => setIndex(1)}
          style={{
            backgroundColor: index === 1 ? "rgba(48, 48, 100, 1)" : "",
          
          }}
        >
          <img src={userStats} alt="stats" />
        </a> 
        <a
          className="category"
          onClick={() => setIndex(2)}
          style={{
            backgroundColor: index === 2 ? "rgba(48, 48, 100, 1)" : "",

          }}
        >
          <img src={categories} alt="category" />
        </a>
        <a
          className="board"
          onClick={() => setIndex(3)}
          style={{
            backgroundColor: index === 3 ? "rgba(48, 48, 100, 1)" : "",

          }}
        >
          <div className="leaderboardIcon">
            <img src={leaderboard} alt="leaderboard" />
            <img src={leaderBoardImg} alt="ldrboard" />
          </div>
        </a>
        <a
          className="rule"
          onClick={() => setIndex(4)}
          style={{
            backgroundColor: index === 4 ? "rgba(48, 48, 100, 1)" : "",

          }}
        >
          <img src={rules} alt="rule" />
        </a>
      </div>
      <div>
        {index === 0 && <Settings />}
        {index === 1 && <UserStats />}
        {index === 2 && <Categories />}
        {index === 3 && <Leaderboard />}
        {index === 4 && <Rules />}
      </div>
    </>
  );
};

export default ContentSection;
