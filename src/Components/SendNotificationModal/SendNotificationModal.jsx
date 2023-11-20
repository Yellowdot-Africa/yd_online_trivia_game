import React, { useState } from "react";
import "../../Components/SendNotificationModal/SendNotificationModal.css";

const SendNotificationModal = ({ isVisible, onClose }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    console.log("Adding category:", categoryName);
    onClose();
  };
  return (
    <>
      {isVisible && <div className="backdrop" />}

      <div className={`send-notification-modal ${isVisible ? "visible" : ""}`}>
        <div className="send-notification-modal-content">
          <div className="header-container">
            <h3 className="notification-heading">Send notification</h3>

            <div className="name-input-data">
              <label htmlFor="Notification">Notification</label>
              <input
                type="text"
                placeholder="Type in the notification"
                value={categoryName}
                onChange={handleCategoryNameChange}
              />

              <label htmlFor="Answer options">Select users</label>
              <input
                type="text"
                placeholder="Choose users to receive this notification"
              />
              <p className="user-select">Users selected: 1</p>

              <label htmlFor="Category">Schedule</label>
              <div className="datee">
                <input className="date-input" type="date" placeholder="Date" />
                <input type="time" placeholder="Time" />
              </div>
            </div>
            <div className="butttons-container">
              <p className="butttn" onClick={onClose}>
                Cancel
              </p>
              <p className="butttn-btn" onClick={handleAddCategory}>
                Save
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendNotificationModal;
