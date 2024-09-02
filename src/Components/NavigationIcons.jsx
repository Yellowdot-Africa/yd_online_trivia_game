import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";  
import homee from "../assets/Icons/homeash.png";
import leaderBoard from "../assets/Icons/bar-chartash.png";
import settings from "../assets/Icons/settingsash.png";
import "../Styles/NavigationIcons.css";

const NavigationIcons = ({bgColor, opacity}) => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const gameId = useSelector((state) => state.game.gameId);

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("leaderboard/:gameId")) {
      setActive("leaderboard");
    } else if (path.includes("settings")) {
      setActive("settings");
    } else {
      setActive("home");
    }
  }, [location.pathname]);

 

  // const handleIconClick = (route, name) => {
  //   setActive(name);
  //   navigate(route);
  // };

  const handleIconClick = (route, name) => {
    setActive(name);

    if (name === "leaderboard" && gameId) {
      navigate(`${route}/${gameId}`);
    } else {
      navigate(route);
    }
  };

 
  

  return (
    <div className="navigation-iconss">
      <div style={{backgroundColor: bgColor, opacity:opacity}} className="icon-content-section">
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
          <p>Leaderboard</p>
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



