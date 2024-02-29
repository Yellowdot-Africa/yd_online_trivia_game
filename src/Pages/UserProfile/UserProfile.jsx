import React, { useState } from "react";
import "../../Pages/UserProfile/UserProfile.css";
import Prev from "../../assets/Icons/chevron-left.png";
import Edit from "../../assets/Icons/edit-3.png";
import Phone from "../../assets/Icons/star.png";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUsername, setEditedUsername] = useState("Jamesjohn");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("+2348178544567");
  const navigate = useNavigate();

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
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
          />
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="text"
            id="phonenumber"
            value={editedPhoneNumber}
            onChange={(e) => setEditedPhoneNumber(e.target.value)}
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

      {!isEditMode && (
        <div className="user-info-deets">
          <div className="user-deetails-info">
            <div className="gem">
              <p className="gemm">Total Gems gotten</p>
              <p className="gem-no">10</p>
            </div>
            <div className="prize">
              <p className="prz">Prizes won</p>
              <p className="prz-no">12</p>
            </div>
            <div className="prize">
              <p className="prz">Prizes won</p>
              <p className="prz-no">12</p>
            </div>
            <div className="current">
              <p className="question">Current answer</p>
              <p className="question-ans">234</p>
            </div>
            <div className="right">
              <p className="ans">Right Answers</p>
              <p className="ans-percent">75%</p>
            </div>
            <div className="total">
              <p className="total-answers">Total Answers</p>
              <p className="answerws">25%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
