import React, { useState } from "react";

const UserInfoCard = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedPhone, setEditedPhone] = useState("");
  const [editedUsername, setEditedUsername] = useState("");

  const initialPhone = "0";
  const initialUsername = "0";
  const initialRegistered = "0";

  const [phone, setPhone] = useState(initialPhone);
  const [username, setUsername] = useState(initialUsername);
  const [registered, setRegistered] = useState(initialRegistered);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedPhone(phone);
    setEditedUsername(username);
  };

  const handleSaveClick = () => {
    setPhone(editedPhone);
    setUsername(editedUsername);
    setIsEditing(false);
  };

  return (
    <>
      <h3 className="user-headeer">User Info</h3>

      <div id="user-info">
        {/* <div className="user-info-card"> */}
        <div className={`user-info-card ${isEditing ? "editing" : ""}`}>
          <div className="phone-info">
            <p>Phone</p>
            {isEditing ? (
              <input
                type="text"
                value={editedPhone}
                onChange={(e) => setEditedPhone(e.target.value)}
              />
            ) : (
              <p>{phone}</p>
            )}
          </div>
          <div className="username-info">
            <p>User Name</p>
            {isEditing ? (
              <input
                type="text"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
            ) : (
              <p>{username}</p>
            )}
          </div>
          <div className="registered-info">
            <p>Registered</p>
            <p>{registered}</p>
          </div>

          <div className="edit-buttunn">
            {isEditing ? (
              <>
                <button className="save" onClick={handleSaveClick}>
                  Save
                </button>
              </>
            ) : (
              <button className="eddit" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoCard;
