import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homee from "../assets/Icons/home.png";
import leaderBoard from "../assets/Icons/bar-chart-2.png";
import settings from "../assets/Icons/settings.png";
import "../Styles/NavigationIcons.css";

const NavigationIcons = () => {
  const [active, setActive] = useState("home");

  const navigate = useNavigate();

  const handleIconClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="navigation-iconss">
        <div className="icon-content-section">

          <div className="home-nav-icons">
          {/* <div 
        className={`home-nav-icons ${active === 'home' ? 'active' : ''}`} 
        onClick={() => handleIconClick('home')}
      > */}
        {/* <img src={homee} alt="" /> */}
            <img src={homee} alt="" onClick={() => handleIconClick("/home")} />
            <p>Home</p>
          </div>


          <div className="home-nav-icons">
            <img
              src={leaderBoard}
              className="menu-tab"
              alt=""
              onClick={() => handleIconClick("/leaderboard")}
            />
            <p>Leaders board</p>
          </div>

          <div className="home-nav-icons">
            <img
              src={settings}
              alt=""
              onClick={() => handleIconClick("/settings")}
            />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationIcons;
