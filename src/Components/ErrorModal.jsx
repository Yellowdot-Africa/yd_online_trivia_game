import React from "react";

const ErrorModal = ({ message, onClose }) => {
  return (
    <>
      <div className="error-modal">
        <div className="error-modal-content">
          <p>{message}</p>
          <button onClick={onClose} style={{backgroundColor:"#9C33DD"}}>Close</button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
