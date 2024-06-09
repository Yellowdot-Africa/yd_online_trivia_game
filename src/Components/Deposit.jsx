import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Prev from "../assets/Icons/chevron-left.png";
import "../Styles/Deposit.css";
import axios from "axios";
import CustomButton from "./CustomButton";
import ErrorModal from "./ErrorModal";
import { useBalance } from "./BalanceContext";

const Deposit = () => {
  const { walletBalance, updateBalance } = useBalance();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [depositResponse, setDepositResponse] = useState(null);
  const [amount, setAmount] = useState("");
  const [msisdn, setMsisdn] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "Inter,sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    padding: "0",
    width: "222px",
    backgroundColor: inputValue ? "#973CF2" : "#973CF266",
  };
  const token = sessionStorage.getItem("token");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    setErrorMessage("");

    setInputValue(e.target.value);
  };

  const handleDeposit = async () => {
    try {
      setLoading(true);

      if (!msisdn.startsWith("234")) {
        setErrorMessage(
          "MSISDN must start with '234'. Please correct your MSISDN."
        );
        setShowErrorModal(true);
        return;
      }

      const apiUrl =
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/MakePayment";

      const requestData = {
        amount: inputValue,
        fullName: fullName,
        email: email,
        msisdn: msisdn,
      };

      const response = await axios.post(apiUrl, requestData, {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setDepositResponse(response.data);

      if (!response.data.error) {
        updateBalance(parseFloat(inputValue));

        // setWalletBalance((prevBalance) => prevBalance + parseFloat(inputValue));

        const paymentUrl = response.data.data;
        console.log("Deposit successful. Redirecting to payment:", paymentUrl);

        const addUnitsPayload = {
          units: 1,
          amountPaid: inputValue,
          paymentSource: "Web",
          paymentReferenceNumber: "7PVGX8MEk85tgeEpVDtD",
          comments: "Added using Paystack online payment",
        };

        const addUnitsResponse = await axios.post(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/AddUnits",
          addUnitsPayload,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("AddUnits Response:", addUnitsResponse.data);

        window.location.href = paymentUrl;
      } else {
        console.error("Error making deposit:", response.data.error);

        if (response.data.error === "InvalidMSISDN") {
          setErrorMessage(
            "Invalid MSISDN. Please enter a valid MSISDN starting with '234'."
          );
        } else if (response.data.error === "Wrong msisdn") {
          setErrorMessage("Wrong Msisdn. Please enter a correct msidn.");
        } else {
          setErrorMessage(
            "There was an error while processing the payment request. Please check your details again."
          );
        }
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("An error occurred while processing the deposit:", error);

      console.error("Error making deposit:", error);
      setErrorMessage(
        "An error occurred while processing your deposit. Please try again later."
      );
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <div className="deposit-container">
        <div className="deposit-text">
          <img src={Prev} alt="prev" onClick={handleGoBack} />
          <p>Fund Account</p>
        </div>
        <div className="deposit-modal">
          <div className="deposit-modal-container">
            <p>
              Dear user, Please note that all transactions are conducted with
              our payment partners using a valid debit card
            </p>
            <input
              type="text"
              placeholder="Input amount"
              value={inputValue}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email address"
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
              buttonText={loading ? "Processing..." : "Deposit"}
              style={buttonStyle}
              onClick={handleDeposit}
              disabled={loading || !inputValue}
            />
            {depositResponse && (
              <div className="deposit-response">
                {depositResponse.error ? (
                  <p className="error-message">{depositResponse.error}</p>
                ) : (
                  <p className="success-message">Redirecting...</p>
                )}
              </div>
            )}
          </div>
          {showErrorModal && (
            <ErrorModal message={errorMessage} onClose={closeErrorModal} />
          )}
        </div>
      </div>
    </>
  );
};

export default Deposit;
