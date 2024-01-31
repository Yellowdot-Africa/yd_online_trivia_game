import React, { useState } from "react";
import Avatar from "../assets/Images/avatar.svg";
import "../Styles/Avatar.css";

const AvatarCard = ({ activeTab, toggleTab }) => {
  return (
    <>
      <div className="avatar-container">
        <div className="avatar-card">
          <img src={Avatar} alt="User Avatar" />
          <p>User Name</p>
          <div className="tab-buttons">
            <button
              onClick={() => toggleTab("userStats")}
              className={
                activeTab === "userStats"
                  ? "active user-stats-btn"
                  : "user-stats-btn"
              }
            >
              User Stats
            </button>
            <button
              onClick={() => toggleTab("userInfo")}
              className={
                activeTab === "userInfo"
                  ? "active user-info-btn"
                  : "user-info-btn"
              }
            >
              User Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarCard;
