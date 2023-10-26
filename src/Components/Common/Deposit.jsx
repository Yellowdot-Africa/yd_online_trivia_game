import React, { useState } from "react";
import axios from "axios";
import CustomButton from "./CustomButton";
import "../../Styles/Deposit.css";

const Deposit = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [depositResponse, setDepositResponse] = useState(null);
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("");
  const [msisdn, setMsisdn] = useState("");
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  // const [transactionID, setTransactionID] = useState("");

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

  const handleDeposit = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.ydplatform.com/api/BankCollectionInLine",

        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
        {
          ServiceID: 1012,
          TokenID: token,
          MSISDN: msisdn,
          Amount: amount,
          FullName: fullName,
          Email: email,
          TransactionID: "20231013032635",
          RedirectURL: "http://onlinetriviaweb.ydplatform.com:2123/",
          LogoURL:
            "http://yellowdotafrica.com/wp-content/uploads/2018/09/logo.png",
        }
      );

      if (response.status === 200) {
        setDepositResponse(response.data);

        console.log("Deposit successful!");
      } else {
        setDepositResponse({ error: "Deposit failed" });

        console.error("Deposit failed.");
      }
    } catch (error) {
      setDepositResponse({ error: "Deposit error" });

      console.error("Deposit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="deposit-modal">
        <div className="deposit-modal-container">
          <h3>Deposit</h3>
          <hr />
          <p>
            Dear user, Please note that all transactions are conducted with our
            payment partners using a valid debit card
          </p>
          <input
            type="text"
            placeholder="Input amount"
            value={inputValue}
            onChange={handleInputChange}
          />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email adress" />
          {/* <input
            type="text"
            placeholder="Enter MSISDN"
            value={msisdn}
            onChange={(e) => setMsisdn(e.target.value)}
          /> */}
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
                <p className="success-message">Deposit successful!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Deposit;
