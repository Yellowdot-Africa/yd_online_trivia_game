import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Prev from "../../assets/Icons/chevron-left.png";
import EyeIcon from "../../assets/Icons/eye.png";
import EyeOff from "../../assets/Icons/eye-off.png";
import ArrowUp from "../../assets/Icons/arrw-up-circlee.png";
import ArrowDown from "../../assets/Icons/arrow-dwn-circle.png";
import "../../Pages/ACCOUNT/Account.css";
import WithdrawalModal from "../../Components/WithdrawalModal";

const Account = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.jwt);
  const customerId = useSelector((state) => state.auth.customerId); // Assuming customerId is stored in auth slice
  const walletBalance = useSelector((state) => state.wallet.walletBalance);
  const experiencePoints = useSelector(
    (state) => state.wallet.experiencePoints
  );
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isAmountVisible, setAmountVisibility] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDeposit = () => {
    navigate("/deposit");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleAmountVisibility = () => {
    setAmountVisibility(!isAmountVisible);
  };

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const response = await axios.get(
          `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/TransactionHistory?customerId=${customerId}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTransactionHistory(response.data.data);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      }
    };

    fetchTransactionHistory();
  }, [token, customerId]);

  return (
    <>
      <div className={`account-container ${isModalOpen ? "modal-open" : ""}`}>
        <div className="account-header">
          <div className="account-text">
            <img src={Prev} alt="prev" onClick={handleGoBack} />
            <p>Transaction History</p>
          </div>

          <div className="current-balance-cont">
            <div className="current-balance-info">
              <h4 className="experience-pt">{experiencePoints} Xp</h4>
              <div className="bal-date">
                <p className="current-bal">Experience Points</p>
                <p className="date">Today 4th January</p>
              </div>
            </div>
            <div className="transaction-options">
              <div className="withdraw-option" onClick={openModal}>
                <img src={ArrowUp} alt="" />
                <p>Withdraw</p>
              </div>
              <div className="deposit-option" onClick={handleDeposit}>
                <img src={ArrowDown} alt="" />
                <p>Fund Wallet</p>
              </div>
            </div>
          </div>

          <div className="balances">
            <p>Available Balance</p>
            <p>Wallet Balance</p>
          </div>

          <div className="amount-balance">
            {isAmountVisible ? (
              <div className="token-bal">
                <p className="tokens">N{walletBalance}</p>
                <p className="token-xperience">N{walletBalance}</p>
              </div>
            ) : (
              <p className="hidden-amount">XXXX</p>
            )}

            <img
              src={isAmountVisible ? EyeIcon : EyeOff}
              alt=""
              onClick={toggleAmountVisibility}
              className="eye-icon"
            />
          </div>

          <div className="history-section">
            <div className="history-text">
              <h2>Recent Transactions</h2>
              <p>See All</p>
            </div>
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
                      <hr />
                    </li>
                  ))}
                </ul>
              ) : (
                <div>No transaction history available.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <WithdrawalModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Account;
