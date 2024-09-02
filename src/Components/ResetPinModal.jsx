import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CloseIcon from "../assets/Icons/close-iccon.svg";



export const ResetPinModal = ({ isOpen, onClose }) => {
  const [resetCode, setResetCode] = useState("");
  const [newPin, setNewPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");


  const token = useSelector((state) => state.auth.jwt);

  const handleResetPin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.put("https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/TransactionPin/ResetTransactionPin", {
        newPin,
        resetCode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
      if (response.status === 200) {
        setSuccess(response.data.message || "PIN successfully reset"); 

      }else {
        setMessage(response.data.message || "Failed to reset PIN.");
      }
    } catch (error) {
        setMessage(error.response?.data?.message || "Failed to reset PIN. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modall-overlay">
    {/* // <div className="reset-pin-modal"> */}

      <div className="modall-content">
      <div className="close-text-icon">
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={onClose}
            className="close-iconx"
          />
        </div>       
         <h3>Reset PIN</h3>
        <form onSubmit={handleResetPin}>
          <input
            type="text"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
            placeholder="Enter the reset code"
            required
          />
          <input
            type="password"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
            placeholder="Enter your new PIN"
            required
          />
          <button type="submit" disabled={loading} className="modal-close-btn">
            {loading ? "Resetting..." : "Reset PIN"}
          </button>
          {message && <p style={{ color: "red" }}>{message}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>} 

        </form>
      </div>
    </div>
  );
};




