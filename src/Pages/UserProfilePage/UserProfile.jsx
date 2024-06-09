import React, { useState, useEffect } from "react";
import "../../Pages/UserProfilePage/UserProfile.css";
import Prev from "../../assets/Icons/chevron-left.png";
import Edit from "../../assets/Icons/editpic.png";
import Phone from "../../assets/Icons/star.png";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUsername, setEditedUsername] = useState("Jamesjohn");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("+2348178544567");
  const [editedEmail,setEditedEmail] = useState("jamesjohn4u@gmail.com")
  const [userStats, setUserStats] = useState(null);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  console.log(token, "token");

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleGoBack = () => {
    setIsEditMode(false);
    isEditMode ? navigate("/user-profile") : navigate(-1);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await axios.get(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUserStats?userID=1",
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserStats(response.data);
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };

    fetchUserStats();
  }, []);

  return (
    <div className="user-profile">
      <div className="user-content">
        <div className="header-text">
          <img src={Prev} alt="prev" onClick={() => handleGoBack()} />
          {isEditMode ? (
            <>
              <h2 className="edit-user-profile">Edit User Profile</h2>
            </>
          ) : (
            <>
              <h2 className="user-prof-heading">User Profile</h2>
              <p onClick={handleEditClick}>Edit Profile</p>
            </>
          )}
        </div>
      </div>

      {isEditMode ? (
        <div className="edit-mode">
          <form action="">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              className="input-field"
              placeholder="User Name"
              value={editedUsername}
              onChange={(e) => setEditedUsername(e.target.value)}
            />
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="text"
              id="phonenumber"
              placeholder="Phone Number"
              className="input-field"
              value={editedPhoneNumber}
              onChange={(e) => setEditedPhoneNumber(e.target.value)}
            />
             <label htmlFor="phonenumber">Email</label>
            <input
              type="email"
              className="input-field"
              id="email"
              placeholder="Email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </form>
          <button className="save-button" onClick={() => handleSaveClick()}>
            Save
          </button>
        </div>
      ) : (
        <div className="user-details">
          <div className="avatar">
            <p>J</p>
            <img src={Edit} alt="" />
          </div>
          <div className="user-info">
            <p className="phone-number">
              <img src={Phone} alt="phone" /> {editedPhoneNumber}
            </p>
            <p className="phone-number">{editedEmail}</p>
            <p className="user-name">{editedUsername}</p>
            
          </div>
        </div>
      )}

      {!isEditMode && (
        <div className="user-stats">
          <div className="user-info-heading">
            <h3>User Info</h3>
          </div>
        </div>
      )}
      {!isEditMode && userStats && (
        <div className="user-info-deets">
          <div className="user-deetails-info">
            <div className="gem">
              <p className="gemm">Games Played Count</p>
              <p className="gem-no">{userStats?.gamesPlayedCount}</p>
            </div>
            <div className="prize">
              <p className="prz">Total Score</p>
              <p className="prz-no">{userStats?.totalScore}</p>
            </div>
            <div className="prize">
              <p className="prz">Correct Answer Percentage</p>
              <p className="prz-no">{userStats?.correctAnswerPercentage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;


