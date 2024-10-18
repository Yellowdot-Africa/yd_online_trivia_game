import React from "react";
import "../Styles/Modal.css";

const PopUpModal = ({ message, onClose, onConfirm }) => {
  return (
    <div className="pop-modal-overlay">
      <div className="pop-modal-content">
      <button className="end-pop-button" onClick={onClose}>X</button>

        <p className="pop-msg">{message}</p>

        <div className="modal-actions">
          <button onClick={onConfirm}>Go to Account</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;



