import React, { useState } from "react";
import Avatar from "../assets/Images/avatar.svg";
import "../Styles/Avatar.css";
import { useNavigate } from "react-router-dom";


const AvatarCard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("userStats");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  // const handleUserInfoClick =()=>{
  //   navigate("/user-info");

  // }

  // const handleUserStatClick =()=>{
  //   navigate("/userstat");

  // }
 
  return (
    <div className="avatar-card">
      <img src={Avatar} alt="User Avatar" />

      <p>User Name</p>
      <div className="avatar-details">
      <button className="user-info-btn" >User Info</button>
        <button className="user-stats-btn" >User Stats</button>
        
        {/* <button className="user-info-btn" onClick={handleUserInfoClick}>User Info</button>
        <button className="user-stats-btn" onClick={handleUserStatClick}>User Stats</button> */}
      </div>
    </div>
  );
};

export default AvatarCard;
