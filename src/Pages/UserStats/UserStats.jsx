import React, { useState } from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import Avatar from "../../Components/Avatar";
import { useNavigate } from "react-router-dom";
import "../UserStats/UserStats.css";
import HomeFootIcon from "../../Components/HomeFootIcon";
import UserInfoCard from "../../Components/UserInfoCard";
import UserStatCard from "../../Components/UserStatCard";
import MobileLinkIcon from "../../Components/MobileLinkIcon";

const UserStats = () => {
  const [activeTab, setActiveTab] = useState("userStats");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="user-profile-container">
        <HomeNavBar />
        <div className="profile-container">
          <div className="profile-header">
            <h1>Profile</h1>
            <h2>User Name</h2>
          </div>
          <div className="profile-content">
            <div className="desktop-view">
              <Avatar activeTab={activeTab} toggleTab={toggleTab} />
              <div className="user-stats">
                <h4>User Stats</h4>
                <UserStatCard />
                <UserInfoCard />
              </div>
            </div>
            <div className="mobile-view">
              <div className="profile-nav">
                <MobileLinkIcon />
              </div>
              <Avatar activeTab={activeTab} toggleTab={toggleTab} />
              {activeTab === "userStats" ? <UserStatCard /> : <UserInfoCard />}
            </div>
          </div>
        </div>
        <HomeFootIcon />
      </div>
    </>
  );
};

export default UserStats;
