import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setWalletBalance,
  updateBalance,
  setDepositResponse,
  setExperiencePoints,
} from "../features/wallet/walletSlice";
import Prev from "../assets/Icons/chevron-left.png";
import "../Styles/Deposit.css";
import CustomButton from "./CustomButton";
import ErrorModal from "./ErrorModal";
import Modal from "react-modal";

const Deposit = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [msisdn, setMsisdn] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state) => state.auth.jwt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [url, setUrl] = useState("");

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
        setLoading(false);
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

      if (!response.data.error) {
        const paymentUrl = response.data.data;
        console.log("Deposit successful. Redirecting to payment:", paymentUrl);

        const conversionRate = 10;
        const units = parseFloat(inputValue) * conversionRate;

        const addUnitsPayload = {
          units: units,
          amountPaid: inputValue,
          paymentSource: "Web",
          paymentReferenceNumber: response.data.paymentReferenceNumber || "N/A",
          comments: "Added using Flutterwave online payment",
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
       
        const newBalance = addUnitsResponse.data.newBalance; 

        dispatch(setWalletBalance(parseFloat(inputValue)));
        // dispatch(setWalletBalance(newBalance));

        dispatch(setExperiencePoints(units));

        setUrl(paymentUrl);
        setModalIsOpen(true);
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

  const closeModal = () => {
    setModalIsOpen(false);

    setInputValue("");
    setMsisdn("");
    setFullName("");
    setEmail("");
  };

  return (
    <>
      <div className={`deposit-container ${modalIsOpen ? "modal-open" : ""}`}>
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
          </div>
          {showErrorModal && (
            <ErrorModal message={errorMessage} onClose={closeErrorModal} />
          )}
        </div>
      </div>
      {(modalIsOpen || showErrorModal) && <div className="deposit-overlay" />}
      {modalIsOpen && (
        <div className="deposit-overlay" onClick={closeModal}></div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Modal"
        style={{
          content: {
            width: "80%",
            height: "80%",
            margin: "auto",
          },
        }}
      >
        <iframe
          src={url}
          title="Payment"
          style={{ width: "100%", height: "100%" }}
        />
        <button className="close-payment" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default Deposit;







