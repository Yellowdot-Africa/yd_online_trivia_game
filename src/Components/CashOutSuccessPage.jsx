import React , { useEffect }from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux"; 
import Check from "../assets/Icons/check.png";
import { setWalletBalance } from "../features/wallet/walletSlice"; 
import "../Styles/CashOutSuccess.css";

const CashOutSuccessPage = () => {
    const navigate = useNavigate();
    const location = useLocation();  
    const userName = useSelector((state) => state.auth.userName); 
    const dispatch = useDispatch();
    const walletBalance = useSelector((state) => state.wallet.walletBalance);

    const recipientName = location.state?.recipientName || userName;  
    const updatedBalance = location.state?.updatedBalance;

    const isSendingToSelf = recipientName === userName;


    const handleGoHome = async ()=>{
     
        navigate("/home");
    }

   
    
  return (
    <>
    <div className="cash-out-success-container">
      <div className="success-message">
        <div className="check-icon">
        <img src={Check} alt="check-icon" />

        </div>
        <h2>Cash out to {isSendingToSelf ? "your account" : recipientName}  is on the way</h2>
        <p>Your cashout to {isSendingToSelf ? "your account" : recipientName}  is currently on the way.</p>
      </div>
      <div className="action-buttons">
        <button className="go-home-button" onClick={handleGoHome}>Go Home</button>
        <p>
          Didn't receive the Money? <span className="ask-for-help">Ask for help</span>
        </p>
      </div>
    </div>
    </>
  );
};

export default CashOutSuccessPage;
