import React from "react";
import "../Styles/Modal.css";
import CloseIcon from "../assets/Icons/close-iccon.svg";

const Modal = ({ showModal, onClose, title, children }) => {
  if (!showModal) return null;

  return (
    <div className="modall-overlay">
      <div className="modall-content">
        <div className="close-text-icon">
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={onClose}
            className="close-iconx"
          />
        </div>
        <h3>{title}</h3>

        <div className="modall-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

