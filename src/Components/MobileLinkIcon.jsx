import React from "react";
import { Link } from "react-router-dom";
import Settings from "../assets/Icons/settings.svg";
import HomeIcon from "../assets/Icons/home-icon.png";
import "../Styles/MobileLinkIcon.css";

const MobileLinkIcon = () => {
  return (
    <>
      <div className="links-icon">
        <Link to="/settings">
          <img src={Settings} alt="setting" />
        </Link>
        <Link to="/loading2">
          <img src={HomeIcon} alt="home" />
        </Link>
      </div>
    </>
  );
};

export default MobileLinkIcon;





