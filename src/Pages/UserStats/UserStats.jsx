import React from "react";
import HomeNavBar from "../../Components/HomeNavBar";
import Avatar from "../../Components/Avatar";
import UserInfo from "../../Components/UserInfo";
import "../UserStats/UserStats.css";
import HomeFootIcon from "../../Components/HomeFootIcon";

const UserStats = () => {
  // const [activeTab, setActiveTab] = useState("userStats");


  // const toggleTab = (tab) => {
  //   setActiveTab(tab);
  // };

  return (
    <>
    <div className="user-profile-container">
      <HomeNavBar showNavMobile={true}/>
      <div className="profile-container">
        <div className="profile-header">
          <h1>Profile</h1>
          <h2>User Name</h2>
        </div>
        <div className="profile-content">
          <Avatar />
          <div className="user-stats">
            <h4>User Stats</h4>
            <UserInfo />
          </div>
        </div>
      </div>
      <HomeFootIcon />
      </div>
    </>
  );
};

export default UserStats;



