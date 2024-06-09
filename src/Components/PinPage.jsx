import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Prev from "../assets/Icons/chevron-left.png";
import CloseIcon from "../assets/Icons/close-iccon.svg";
import "../Styles/PinPage.css";

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

const PinInput = () => {
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isConfirmMode, setConfirmMode] = useState(false);
  const [isPinCorrect, setIsPinCorrect] = useState(false);
  const navigate = useNavigate();

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

  const handleContinue = () => {
    if (!isConfirmMode) {
      setConfirmMode(true);
      setPin("");
      setErrorMessage("");
    } else {
      if (pin === originalPin) {
        setErrorMessage("");
        setIsPinCorrect(true);
        setConfirmMode(false);
        setPin("");
        navigate("/cashout");
      } else {
        setErrorMessage("Incorrect pin. Try again.");
      }
    }
  };

  const originalPin = "1234";

  return (
    <div className="pin-input-container">
      <div className="pin-text">
        <img src={Prev} alt="prev" onClick={handleGoBack} />
        <p className="create-pin">{isPinCorrect ? "Cash Out" : "Create Pin"}</p>
      </div>
      <div className="pin-info">
        <h2>Enter Pin</h2>
        <p>
          {isConfirmMode
            ? isPinCorrect
              ? "Enter PIN to continue cashout"
              : "Confirm your four-digit pin"
            : "Create a four-digit pin to complete cashouts"}
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
          <button
            className="back-btn"
            onClick={() => handleBackspace()}
          ></button>
          <button onClick={() => handleNumberClick("0")}>0</button>
          <button className="clear-icon-btn" onClick={() => handleClear()}>
            <img src={CloseIcon} alt="clear" />
          </button>
        </div>
      </div>
      {!isPinCorrect && (
        <button className="pin-continue-btn" onClick={handleContinue}>
          Continue
        </button>
      )}
    </div>
  );
};

export default PinInput;
