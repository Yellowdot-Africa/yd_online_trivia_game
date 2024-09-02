import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CloseIcon from "../assets/Icons/close-iccon.svg";
import "../Styles/ForgotPinRequest.css";


export const ForgotPinRequestModal = ({
  isOpen,
  onClose,
  onRequestSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const token = useSelector((state) => state.auth.jwt);

  const handleRequestCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/TransactionPin/ResetTransactionPinRequest",
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setSuccess(response.data.message || "Reset code sent. Please check your email."); 
        onRequestSuccess();

      } else {
        setMessage(response.data.message || "Failed to request code.");
      }

    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to change PIN. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
    {/* // <div className="forgot-pin-modal"> */}
  

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
        <h3 className="forgot">Forgot PIN?</h3>

        <form onSubmit={handleRequestCode}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" disabled={loading} className="modal-close-btn">
            {loading ? "Sending..." : "Send Reset Code"}
          </button>
          {message && <p style={{ color: "red" }}>{message}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>} 

        </form>
      </div>
    </div>
    </>
  );
};






