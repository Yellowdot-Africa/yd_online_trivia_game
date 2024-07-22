import React from "react";
import Modal from "react-modal";


const ErrorModal = ({ message, onClose }) => {
  return (
    <Modal
      isOpen={!!message}
      onRequestClose={onClose}
      contentLabel="Error Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        },
      }}
    >
      <div className="error-modal">
        <div className="error-modal-content">
          <h2>Error</h2>
          <p>{message}</p>
          <button
            className=""
            onClick={onClose}
            style={{ backgroundColor: "#973CF2" }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;






