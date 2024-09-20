import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDepositResponse, setWalletBalance } from "../features/wallet/walletSlice";
import axios from "axios";
import "../Styles/PaymentSuccesPage.css";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");
  const txRef = queryParams.get("tx_ref");
  const amountPaid = parseFloat(queryParams.get("Amount"));
  const token = useSelector((state) => state.auth.jwt);

  useEffect(() => {
    if (status) {
      if (status === "successful") {
        addUnitsToWallet();
      } else {
        setMessage("Payment was not successful.");
        setLoading(false);
      }
    }
  }, [status]);

  const addUnitsToWallet = async () => {
    const payload = {
      units: amountPaid,
      amountPaid,
      paymentSource: "Web",
      paymentReferenceNumber: txRef,
      comments: "Added using Flutterwave online payment",
    };

    try {
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/AddUnits",
        payload,
        {
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const newBalance = response.data.data; 
        setMessage(`Payment of N${amountPaid} was successful! Wallet balance updated.`);

        dispatch(setWalletBalance(newBalance));
        dispatch(setDepositResponse("Wallet updated successfully with the payment!"));


        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        setMessage("Failed to update wallet.");
        dispatch(setDepositResponse("Failed to update wallet."));
      }
    } catch (error) {
      console.error("Error updating wallet:", error);
      setMessage("An error occurred while updating the wallet.");
      dispatch(setDepositResponse("An error occurred while updating the wallet."));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="payment-container">
         {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <h2 className="payment-status-heading">
              {status === "successful" ? (
                <span className="payment-icon">✔</span>
              ) : (
                <span className="failed-icon">✖</span>
              )}
            </h2>
            <p
              className={`payment-status-text ${
                status === "successful" ? "success-texttt" : "failed-texttt"
              }`}
            >
              {message}
            </p>
          </>
        )}
      </div>
  );
};

export default PaymentSuccessPage;
