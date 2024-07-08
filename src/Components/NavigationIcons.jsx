import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import homee from "../assets/Icons/homeash.png";
import leaderBoard from "../assets/Icons/bar-chartash.png";
import settings from "../assets/Icons/settingsash.png";
import "../Styles/NavigationIcons.css";

const NavigationIcons = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("leaderboard")) {
      setActive("leaderboard");
    } else if (path.includes("settings")) {
      setActive("settings");
    } else {
      setActive("home");
    }
  }, [location.pathname]);

  const handleIconClick = (route, name) => {
    setActive(name);
    navigate(route);
  };

  return (
    <div className="navigation-iconss">
      <div className="icon-content-section">
        <div
          className={`home-nav-icons ${active === "home" ? "active" : ""}`}
          onClick={() => handleIconClick("/home", "home")}
        >
          <img src={homee} alt="home" />
          <p>Home</p>
        </div>

        <div
          className={`home-nav-icons ${active === "leaderboard" ? "active" : ""}`}
          onClick={() => handleIconClick("/leaderboard", "leaderboard")}
        >
          <img src={leaderBoard} alt="leaderboard" />
          <p>Leaders board</p>
        </div>

        <div
          className={`home-nav-icons ${active === "settings" ? "active" : ""}`}
          onClick={() => handleIconClick("/settings", "settings")}
        >
          <img src={settings} alt="settings" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationIcons;



