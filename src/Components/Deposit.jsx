import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setWalletBalance,
  updateBalance,
  setDepositResponse,
} from "../features/wallet/walletSlice";
import Prev from "../assets/Icons/chevron-left.png";
import CustomButton from "./CustomButton";
import ErrorModal from "./ErrorModal";

import "../Styles/Deposit.css";

const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const [msisdn, setMsisdn] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.auth.jwt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "Inter,sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    padding: "15px",
    width: "222px",
    backgroundColor: amount ? "#973CF2" : "#973CF266",
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      if (!msisdn.startsWith("234")) {
        setErrorMessage(
          "MSISDN must start with '234'. Please correct your MSISDN."
        );
        setShowErrorModal(true);
        setIsLoading(false);
        return;
      }

      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/MakePayment",
        {
          msisdn,
          amount,
          fullname,
          email,
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.statusMessage === "RequestOk" && response.data.data) {
        const paymentReference = response.data.paymentReference;

        const paymentUrl = response.data.data;
        localStorage.setItem("paymentReference", paymentReference);
        localStorage.setItem("amountPaid", amount);

        window.location.href = paymentUrl;
      } else {
        console.error("Error initiating payment");
        setErrorMessage("Error processing the payment. Please try again.");
      }
    } catch (error) {
      console.error("Error in payment initiation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="deposit-container">
      <div className="deposit-text">
        <img src={Prev} alt="prev" onClick={handleGoBack} />
        <p>Fund Account</p>
      </div>

      <div className="deposit-modal">
        <div className="deposit-modal-container">
          <p>
            Dear user, Please note that all transactions are conducted with our
            payment partners using a valid debit card
          </p>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter MSISDN"
            value={msisdn}
            onChange={(e) => setMsisdn(e.target.value)}
          />
          <CustomButton
            onClick={handlePayment}
            disabled={isLoading || !amount}
            style={buttonStyle}
            buttonText={isLoading ? "Processing..." : "Proceed to Payment"}
          />
        </div>
        {showErrorModal && (
          <ErrorModal message={errorMessage} onClose={closeErrorModal} />
        )}
      </div>
    </div>
  );
};

export default Deposit;



