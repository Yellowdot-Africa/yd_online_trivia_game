import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateBalance,
  setDepositResponse,
} from "../features/wallet/walletSlice";
import axios from "axios";

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");
  const txRef = queryParams.get("tx_ref");
  const transactionId = queryParams.get("transaction_id");
  const amountPaid = queryParams.get("amount");
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
      amountPaid: amountPaid,
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
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        setMessage("Wallet updated successfully with the payment!");
        dispatch(updateBalance(units));
        dispatch(
          setDepositResponse("Wallet updated successfully with the payment!")
        );

        setTimeout(() => {
          console.log("Redirecting to account page...");
          navigate("/home");
        }, 1000);
      } else {
        setMessage("Failed to update wallet.");
        dispatch(setDepositResponse("Failed to update wallet."));
      }
    } catch (error) {
      console.error("Error updating wallet:", error);
      setMessage("An error occurred while updating the wallet.");
      dispatch(
        setDepositResponse("An error occurred while updating the wallet.")
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="payment-container">
      <h2 className="payment-status-heading">
        {status === "successful" ? "Payment Successful" : "Payment Failed"}
      </h2>
      <p
        className={`payment-status-text ${
          status === "successful" ? "success-texttt" : "failed-texttt"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default PaymentSuccessPage;
