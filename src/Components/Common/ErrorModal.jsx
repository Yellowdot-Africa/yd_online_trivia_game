import React from "react";

const ErrorModal = ({ message, onClose }) => {
  return (
    <>
      <div className="error-modal">
        <div className="error-modal-content">
          <p>{message}</p>
          <button onClick={onClose} style={{backgroundColor:"#1D1DB9"}}>Close</button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
