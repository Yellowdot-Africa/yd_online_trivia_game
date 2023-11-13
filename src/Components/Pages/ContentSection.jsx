import { useState } from "react";
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
import Tooltip from "../Common/Tooltip";

const ContentSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="icons-cont">
        <Tooltip text="Settings">
          <a
            className={`settings ${index === 0 ? "selected" : ""}`}
            onClick={() => setIndex(0)}
          >
            <img src={SettingsIcon} alt="settings" />
          </a>
        </Tooltip>
        <Tooltip text="Userstats">
          <a
            className={`stats ${index === 1 ? "selected" : ""}`}
            onClick={() => setIndex(1)}
          >
            <img src={userStats} alt="stats" />
          </a>
        </Tooltip>
        <Tooltip text="Categories">
          <a
            className={`category ${index === 2 ? "selected" : ""}`}
            onClick={() => setIndex(2)}
          >
            <img src={categories} alt="category" />
          </a>
        </Tooltip>
        <Tooltip text="Leaderboard">
          <a
            className={`board ${index === 3 ? "selected" : ""}`}
            onClick={() => setIndex(3)}
          >
            <div className="leaderboardIcon">
              <img src={leaderboard} alt="leaderboard" />
              <img src={leaderBoardImg} alt="ldrboard" />
            </div>
          </a>
        </Tooltip>

        <Tooltip text="Rules">
          <a
            className={`rule ${index === 4 ? "selected" : ""}`}
            onClick={() => setIndex(4)}
          >
            <img src={rules} alt="rule" />
          </a>
        </Tooltip>
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
