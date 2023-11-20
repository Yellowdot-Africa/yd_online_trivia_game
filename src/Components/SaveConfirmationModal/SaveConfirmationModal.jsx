import React from "react";
import Saved from "../../Assets/Images/saved-img.svg";
import "../../Components/SaveConfirmationModal/SaveConfirmationModal.css";

const SaveConfirmationModal = ({ isVisible, onClose }) => {
  return (
    <>
      {isVisible && (
        <>
          <div className="backdrop" />
          <div className="save-confirmation-modal visible">
            <div className="overlay" onClick={onClose}></div>
            <div className="save-confirmation-modal-content">
              <h3>Saved</h3>
              <img src={Saved} alt="save-icon" />
              <p>Add some questions to this category</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SaveConfirmationModal;
