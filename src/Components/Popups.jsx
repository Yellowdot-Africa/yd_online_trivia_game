import React from "react";
import "../Styles/Popup.css";
import { useNavigate } from "react-router-dom";

const Popups = ({ message, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="popup">
      <div className="popup-content">
        <p className="message">{message}</p>
        <button onClick={() => navigate("/wallet")}>Fund Wallet</button>
      </div>
    </div>
  );
};

export default Popups;




