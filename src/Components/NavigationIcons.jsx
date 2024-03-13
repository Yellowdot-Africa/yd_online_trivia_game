import React from "react";
import { useNavigate } from "react-router-dom";
import homee from "../assets/Icons/home.png";
import leaderboard from "../assets/Icons/grid.png";
import category from "../assets/Icons/bar-chart-2.png";
import settings from "../assets/Icons/settings.png";

const NavigationIcons = () => {
  const navigate = useNavigate();

  const handleIconClick = (route) => {
    navigate(route);
  };
  return (
    <div className="navigation-iconss">
      <div className="icon-content-section">
        <img src={homee} alt="" onClick={() => handleIconClick("/home")} />
  
          <img
          src={category}
          className="menu-tab"
          alt=""
          onClick={() => handleIconClick("/leaderboard")}
        />

        <img
          src={settings}
          alt=""
          onClick={() => handleIconClick("/settings")}
        />
      </div>
    </div>
  );
};

export default NavigationIcons;
