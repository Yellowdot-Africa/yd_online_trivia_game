import { useState, useEffect } from "react";
import withdraw from "../../assets/Icons/money-withdrawal.svg";
import deposit from "../../assets/icons/baseline-payment.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import Deposit from "../../Components/Deposit";
import Withdrawal from "../../Components/Withdrawal";
import ToggleSwitch from "../../Components/ToggleSwitch";
import HomeNavBar from "../../Components/HomeNavBar";
import Back from "../../assets/Icons/back.svg";
import "../History/HistoryModal.css";
import { useNavigate } from "react-router-dom";
// import { useBalance } from "../../Components/Common/BalanceContext";

import axios from "axios";
import HomeFootIcon from "../../Components/HomeFootIcon";
import MobileLinkIcon from "../../Components/MobileLinkIcon";

const HistoryModal = ({ closeModal }) => {
  //   const { walletBalance, updateBalance } = useBalance();

  const [showBalance, setShowBalance] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [historyClicked, setHistoryClicked] = useState(false);
  const [isDepositOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawalOpen, setWithdrawalModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");
  // console.log("token", token);

  const navigate = useNavigate();

  const handleGoBackToQuestions = () => {
    navigate("/countdown");
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const toggleHistory = () => {
    setHistoryClicked((prevState) => !prevState);
    setDepositModalOpen(false);
    setWithdrawalModalOpen(false);
  };

  const openDepositModal = () => {
    setDepositModalOpen(!isDepositOpen);
    setWithdrawalModalOpen(false);
    if (isDepositOpen) {
      setHistoryClicked(false);
    }
  };

  const openWithdrawalModal = () => {
    setWithdrawalModalOpen(!isWithdrawalOpen);
    setDepositModalOpen(false);
    if (isWithdrawalOpen) {
      setHistoryClicked(false);
    }
  };

  const handleToggle = () => {
    setShowBalance(!showBalance);
  };

  const addTransactionHistory = async () => {
    setIsLoading(true);
    setTransactionHistory([]);
    setErrorMessage("");

    try {
      const response = await axios.post(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/TransactionHistory?id=${userId}`,
        {},
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
        setErrorMessage("Unauthorized");
      } else {
        setIsLoading(false);
        setErrorMessage(error.message);
      }
      console.error("Error fetching transaction history:", error);
    }
  };

  return (
    <>
      <HomeNavBar />
      <div className="mobile-history-nav">
        <img
          className="back-icon"
          src={Back}
          alt="back"
          onClick={handleGoBack}
          style={{ cursor: "pointer" }}
        />
        <h3>Account</h3>
      </div>
      <div>
      <div className="history-modal-cont">
        <div className="history-modal-content-cont">
          <div className="modal-text">
            <p className="">Current balance</p>

            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>

          <div className="modal-details">
            <p className="modal-amount">
              {showBalance ? (
                <span className="dark-blue" data-aos="zoom-out">
                  N{walletBalance.toFixed(2)}
                </span>
              ) : (
                <span className="grey" data-aos="zoom-in">
                  N X,XXX.XX
                </span>
              )}
            </p>
            <div className="toggle">
              <p className="show">Show balance</p>

              <ToggleSwitch showBalance={showBalance} onToggle={handleToggle} />
            </div>
            <hr className="line" />
            <div className="withdraw-cont">
              <p className="withdraw" onClick={openWithdrawalModal}>
                Withdraw
              </p>
              <img
                src={withdraw}
                alt="withdraw"
                onClick={openWithdrawalModal}
              />
            </div>
            <hr className="line" />

            <div className="deposit-cont">
              <p className="deposit" onClick={openDepositModal}>
                Deposit
              </p>
              <img src={deposit} alt="deposit" onClick={openDepositModal} />
            </div>
            <hr className="line" />

            <div className="history-cont">
              <p
                onClick={() => {
                  toggleHistory();
                  addTransactionHistory();
                }}
                className={`history-button ${historyClicked ? "open" : ""}`}
              >
                History
              </p>
              <img
                src={CaretDown}
                alt="caretdwn"
                onClick={() => {
                  toggleHistory();
                  addTransactionHistory();
                }}
              />
            </div>
            {!historyClicked && isDepositOpen && (
              <Deposit closeModal={openDepositModal} />
            )}
            {!historyClicked && isWithdrawalOpen && (
              <Withdrawal closeModal={openWithdrawalModal} />
            )}
            {historyClicked && (
              <div>
                {transactionHistory.length > 0 ? (
                  <ul className="transaction-list">
                    {transactionHistory.map((transaction, index) => (
                      <li key={index}>
                        <div className="history-details">
                          Date: {transaction.transactionDate}
                        </div>
                        <div className="history-details">
                          Amount: {transaction.amount}
                        </div>
                        <div className="history-details">
                          Units: {transaction.units}
                        </div>
                        <div className="history-details">
                          Description: {transaction.description}
                        </div>
                        <div className="history-details">
                          Source: {transaction.source}
                        </div>
                        <hr className="line" />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>No transaction history available.</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
      <HomeFootIcon />
    </>
  );
};

export default HistoryModal;
