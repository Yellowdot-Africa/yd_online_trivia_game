import React, { useState } from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import Avatar from "../../Components/Avatar";
import Settings from "../../assets/Icons/settings.svg";
import HomeIcon from "../../assets/Icons/home-icon.png";
import "../UserStats/UserStats.css";
import HomeFootIcon from "../../Components/HomeFootIcon";
import UserInfoCard from "../../Components/UserInfoCard";
import UserStatCard from "../../Components/UserStatCard";

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
          <div className="profile-nav">
            <div className="links-icon">
              <a href="/settings">
                <img src={Settings} alt="setting" />
              </a>
              <a href="/loading2">
                <img src={HomeIcon} alt="home" />
              </a>
            </div>
          </div>
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
