import React from "react";

const UserInfoCard = () => {
  return (
    <>
    <h3 className="user-headeer">User Info</h3>

      <div className="user-info-card">
        <div className="phone-info">
          <p>Phone</p>
          <p>0</p>
        </div>
        <div className="username-info">
          <p>User Name</p>
          <p>0</p>
        </div>
        <div className="registered-info">
          <p>Registered</p>
          <p>0</p>
        </div>

        <div className="edit-buttunn">
          <button className="eddit">Edit</button>
        </div>
      </div>
    </>
  );
};

export default UserInfoCard;
