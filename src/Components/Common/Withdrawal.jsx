import React, { useState } from "react";
import "../../Styles/Withdrawal.css";
import CustomButton from "./CustomButton";

const Withdrawal = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState("");

  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "Inter,sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    padding: "0",
    width: "222px",
    backgroundColor: inputValue ? " #1D1DB9" : "#939393",
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="withdrawal-modal">
        <div className="withdrawal-modal-container">
          <h3>Withdrawal</h3>
          <hr />
          <p>
            Dear user, Kindly note that all transactions are conducted with our
            payment partners using a valid debit card
          </p>
          <input
            type="text"
            placeholder="Input amount"
            value={inputValue}
            onChange={handleInputChange}
          />

          <CustomButton
            buttonText={"Continue"}
            style={buttonStyle}
            onClick={closeModal}
          />
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
