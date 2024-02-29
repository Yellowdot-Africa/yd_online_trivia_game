import React from "react";
import { useNavigate } from "react-router-dom";
import Check from "../assets/Icons/check.png";
import "../Styles/CashOutSuccess.css";

const CashOutSuccessPage = () => {
    const navigate = useNavigate();
    const handleGoHome = ()=>{
        navigate("/home");
    }

    
  return (
    <>
    <div className="cash-out-success-container">
      <div className="success-message">
        <div className="check-icon">
        <img src={Check} alt="check-icon" />

        </div>
        <h2>Cash out to James John is on the way</h2>
        <p>Your cashout to James John is currently on the way.</p>
      </div>
      <div className="action-buttons">
        <button className="go-home-button" onClick={handleGoHome}>Go Home</button>
        <p>
          Didn't receive the cashout? <span className="ask-for-help">Ask for help</span>
        </p>
      </div>
    </div>
    </>
  );
};

export default CashOutSuccessPage;
