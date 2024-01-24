import React from "react";
import { useNavigate } from "react-router-dom";
import category from "../assets/Icons/category.png";
import homee from "../assets/Icons/home-me.svg";
import leaderboard from "../assets/Icons/leaderboard.svg";
import rules from "../assets/Icons/rules.svg";
import userstats from "../assets/Icons/userstats.svg";
import "../Styles/HomeFootIcon.css";


const HomeFootIcon = () => {
  const navigate = useNavigate();

  const handleIconClick = (route) => {
    navigate(route);
  };
  return (
    <>
      <div className="icon-content-section">
        <img src={homee} alt="" onClick={() => handleIconClick("/home")} />
        <img
          src={userstats}
          alt=""
          onClick={() => handleIconClick("/user-stats")}
        />
        <img
          src={category}
          alt=""
          onClick={() => handleIconClick("/loading2")}
        />
        <img
          src={leaderboard}
          alt=""
          onClick={() => handleIconClick("/leaderboard")}
        />
        <img
          src={rules}
          alt=""
          onClick={() => handleIconClick("/rules-faqs")}
        />
      </div>
    </>
  );
};

export default HomeFootIcon;



