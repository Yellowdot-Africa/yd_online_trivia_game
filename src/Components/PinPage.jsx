import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useLocation, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Prev from "../assets/Icons/chevron-left.png";
import CloseIcon from "../assets/Icons/close-iccon.svg";
import "../Styles/PinPage.css";
import { ForgotPinRequestModal } from "../Components/ForgotPinRequestModal";
import { ResetPinModal } from "../Components/ResetPinModal";

const FourDigitInput = ({ value }) => {
  return (
    <div className="four-digit-input">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="digit-circle">
          <span>{value.length >= index ? "●" : ""}</span>
        </div>
      ))}
    </div>
  );
};

const PinPage = () => {
  const dispatch = useDispatch();
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [isConfirmMode, setConfirmMode] = useState(false);
  const [isPinVerified, setIsPinVerified] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.jwt);
  const [isForgotPinModalOpen, setIsForgotPinModalOpen] = useState(false);
  const [isResetPinModalOpen, setIsResetPinModalOpen] = useState(false);
  const hasTransactionPIN = useSelector(
    (state) => state.auth.hasTransactionPIN
  );
  const username = useSelector((state) => state.auth.username);
  const msisdn = useSelector((state) => state.auth.msisdn);
  const location = useLocation();
  const { editedAmount,bankId, accountNumber, fullName } = location.state || {};

console.log("Amount",editedAmount);
console.log("bankId",bankId);


  useEffect(() => {
    console.log("hasTransactionPIN in component:", hasTransactionPIN);
  }, [hasTransactionPIN]);

  //   console.log("hasTransactionPin:", hasTransactionPIN);
  // console.log("isPinVerified:", isPinVerified);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNumberClick = (number) => {
    if (pin.length < 4) {
      setPin((prevPin) => prevPin + number);
    }
  };

  const handleBackspace = () => {
    setPin((prevPin) => prevPin.slice(0, -1));
  };

  const handleClear = () => {
    setPin("");
  };

  const handleOpenForgotPinModal = () => setIsForgotPinModalOpen(true);
  const handleCloseForgotPinModal = () => setIsForgotPinModalOpen(false);
  const handleOpenResetPinModal = () => setIsResetPinModalOpen(true);
  const handleCloseResetPinModal = () => setIsResetPinModalOpen(false);


  const handleWithdrawToBank = async () => {
console.log("klbjbk,bjhbjkbm")
    // const transactionID = `dtt-cash${new Date().toISOString().replace(/[^0-9]/g, '')}-${Math.floor(Math.random() * 10000)}`;
    try {
      const withdrawResponse = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/WithdrawToBank",
        {
          bankCode: bankId, 
          accountNumber: accountNumber,
          amount:  Number(editedAmount), 
          fullname: fullName ,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("withdrawResponse",withdrawResponse)
      console.log("klbjbk,hkhkuhjugjyghh")
  
      // if (withdrawResponse.status === 200) {
      //   navigate("/cashout-success");  
      // } else {
      //   setErrorMessage("Withdraw failed. Try again.");
      // }
    } catch (error) {
      setErrorMessage("Error processing withdrawal. Try again.");
    }
  };

  const handleContinue = async () => {
    if (!isConfirmMode && !hasTransactionPIN) {
      setConfirmPin(pin);
      setPin("");
      setConfirmMode(true);
      setErrorMessage("");
    } else if (isConfirmMode && !hasTransactionPIN) {
      if (pin === confirmPin) {
        try {
          const response = await axios.post(
            "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/TransactionPin/CreateTransactionPin",

            { Pin: pin },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status ===999) {
            dispatch({ type: "UPDATE_PIN_STATUS", payload: true });
            hasTransactionPIN(true);
            setErrorMessage("");
            setConfirmMode(false);
            setPin("");
          } else {
            setErrorMessage(
              response.data.message || "Failed to create PIN. Try again."
            );
            setPin("");
          }
        } catch (error) {
          if (error.response && error.response.data) {
            setErrorMessage(
              error.response.data.message ||
                "Failed to create PIN. Please try again."
            );
          } else {
            setErrorMessage("Failed to create PIN. Please try again.");
          }
          setPin("");
        }
      } else {
        setErrorMessage("PINs do not match. Try again.");
        setPin("");
      }
    } else if (hasTransactionPIN && !isPinVerified) {
      try {
        const response = await axios.post(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/TransactionPin/VerifyTransactionPin",
          { Pin: pin },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("response",response)
        if (response?.data?.statusCode === "999") {
          handleWithdrawToBank();
          setIsPinVerified(true);
          setErrorMessage("");
          setErrorMessage(response.data.message)
          setPin("")
          
          // navigate("/cashout");
        } else {
          setErrorMessage("Incorrect PIN. Try again.");
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessage(
            error.response.data.message || "Incorrect PIN. Try again."
          );
        } else {
          setErrorMessage("Incorrect PIN. Try again.");
        }
        setPin("");
      }
    }
  };

 
  

  


  const blurClass = isForgotPinModalOpen || isResetPinModalOpen ? "blur" : "";

  return (
    <>
      <div className={`pin-input-container ${blurClass}`}>
        <div className="pin-text">
          <img src={Prev} alt="prev" onClick={handleGoBack} />
          <div className="create-pin-text">
            <p className="create-pin">
              {hasTransactionPIN ? "Enter PIN to Cash Out" : "Create PIN"}
            </p>
          </div>
        </div>
        <div className="pin-info">
          <h2>
            {hasTransactionPIN
              ? "Enter PIN"
              : isConfirmMode
              ? "Confirm PIN"
              : "Create PIN"}
          </h2>
          <p>
            {hasTransactionPIN
              ? "Enter your PIN to continue cashout."
              : isConfirmMode
              ? "Confirm your four-digit PIN."
              : "Create a four-digit PIN for secure transactions."}
          </p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <FourDigitInput value={pin} />
        </div>
        <div className="keypad">
          <div className="key-row">
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
          </div>
          <div className="key-row">
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
          </div>
          <div className="key-row">
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
          </div>
          <div className="key-row">
            <button className="back-btn" onClick={handleBackspace}></button>
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button className="clear-icon-btn" onClick={handleClear}>
              <img src={CloseIcon} alt="clear" />
            </button>
          </div>
        </div>
        {!isPinVerified && (
          <button className="pin-continue-btn" onClick={handleContinue}>
            Continue
          </button>
        )}
        {/* {hasTransactionPIN && ( */}
          <p className="forgot-pin" onClick={handleOpenForgotPinModal}>
            Forgot pin?
          </p>
         {/* )} */}
        <ForgotPinRequestModal
          isOpen={isForgotPinModalOpen}
          onClose={handleCloseForgotPinModal}
          onRequestSuccess={handleOpenResetPinModal}
        />

        <ResetPinModal
          isOpen={isResetPinModalOpen}
          onClose={handleCloseResetPinModal}
        />
      </div>
    </>
  );
};

export default PinPage;




