import React, { useState, useEffect } from "react";
import "../../Styles/HistoryModal.css";
import withdraw from "../../assets/icons/money-withdrawal.svg";
import deposit from "../../assets/icons/baseline-payment.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import ToggleSwitch from "../Common/ToggleSwitch";
import axios from "axios";

const HistoryModal = ({ closeModal }) => {
  const [showBalance, setShowBalance] = useState(false);
  const [addUnitsStatus, setAddUnitsStatus] = useState(null);
  const [addUnitsError, setAddUnitsError] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [historyClicked, setHistoryClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const token = sessionStorage.getItem("token");

  const handleToggle = () => {
    setShowBalance(!showBalance);
  };
  const addUnitsToWallet = async () => {
    setAddUnitsStatus("loading");
    setAddUnitsError("");
    try {
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/AddUnits",
        // {
        //   "units": 5,
        //   "amountPaid": 1200,
        //   "paymentSource": "Web",
        //   "paymentReferenceNumber": "7PVGX8MEk85tgeEpVDtD",
        //   "comments": "Added using Paystack online payment"
        // },
        {
          units: "",
          amountPaid: "",
          paymentSource: "",
          paymentReferenceNumber: "",
          comments: "",
        },

        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAddUnitsStatus("success");
      console.log("Added units to wallet:", response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setAddUnitsStatus("error");
        setAddUnitsError("Unauthorized: Please log in.");
      } else {
        setAddUnitsStatus("error");
        setAddUnitsError(error.message);
      }
      console.error("Error adding units to wallet:", error);
    }
  };
  const addTransactionHistory = async () => {
    setIsLoading(true);
    setTransactionHistory([]);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/TransactionHistory?id=1 ",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTransactionHistory(response.data.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setTransactionHistory(response.data.data);
        setIsLoading(false);

        setErrorMessage("Unauthorized: Please log in.");
      } else {
        setIsLoading(false);
        setErrorMessage(error.message);
      }
      console.error("Error fetching transaction history:", error);
    }
  };

  useEffect(() => {
    addTransactionHistory();
    // addUnitsToWallet();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-text">
          <p className="">Current balance</p>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
        </div>

        <div className="modal-details">
          <p className="modal-amount">
            {showBalance ? (
              <span className="dark-blue">N 8,000.00</span>
            ) : (
              <span className="grey">N X,XXX.XX</span>
            )}
          </p>
          <div className="toggle">
            <ToggleSwitch showBalance={showBalance} onToggle={handleToggle} />
            <p className="show">Show balance</p>
          </div>
          <hr />
          <div className="withdraw-cont">
            <p className="withdraw">Withdraw</p>
            <img src={withdraw} alt="withdraw" />
          </div>{" "}
          <hr />
          <div className="deposit-cont">
            <p className="deposit">Deposit</p>{" "}
            <img src={deposit} alt="deposit" />
          </div>{" "}
          <hr />
          <p
            onClick={() => {
              addTransactionHistory();
              setHistoryClicked(true);
            }}
          >
            History <img src={CaretDown} alt="caretdwn" />
          </p>
          {isLoading && !historyClicked && (
            <div>Loading transaction history...</div>
          )}
          {historyClicked && errorMessage && <div>{errorMessage}</div>}
          {addUnitsStatus === "success" && <div>Units added successfully!</div>}
          {addUnitsStatus === "error" && (
            <div>Error adding units: {addUnitsError}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
