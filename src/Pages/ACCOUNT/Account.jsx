import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setWalletBalance } from "../../features/wallet/walletSlice";
import Prev from "../../assets/Icons/chevron-left.png";
import EyeIcon from "../../assets/Icons/eye.png";
import EyeOff from "../../assets/Icons/eye-off.png";
import ArrowUp from "../../assets/Icons/arrw-up-circlee.png";
import ArrowDown from "../../assets/Icons/arrow-dwn-circle.png";
import "../../Pages/ACCOUNT/Account.css";
import WithdrawalModal from "../../Components/WithdrawalModal";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.jwt);
  const userID = useSelector((state) => state.auth.userID); 
  const walletBalance = useSelector((state) => state.wallet.walletBalance);
  const experiencePoints = useSelector(
    (state) => state.wallet.experiencePoints
  );
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isAmountVisible, setAmountVisibility] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  const initialDisplayCount = 5;

  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    return `${month} ${day}, ${year}`;
  };

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

  const toggleShowAllTransactions = () => {
    setShowAllTransactions(!showAllTransactions);
  };

  const calculateBalanceFromHistory = (transactions) => {
    let balance = 0;
    transactions.forEach(transaction => {
      if (transaction.type === 'credit') {
        balance += transaction.amount;
      } else if (transaction.type === 'debit') {
        balance -= transaction.amount;
      }
    });
    return balance;
  };

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const response = await axios.get(
          `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/TransactionHistory?customerId=${encodeURIComponent(userID)}`,
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const transactions = response.data.data;
        setTransactionHistory(transactions);

        const balance = calculateBalanceFromHistory(transactions);
        dispatch(setWalletBalance(balance));
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      }
    };

    fetchTransactionHistory();
  }, [token, userID, dispatch]);

  const transactionsToDisplay = showAllTransactions
    ? transactionHistory
    : transactionHistory.slice(0, initialDisplayCount);

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
              <div className="bal-date">
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
                <p className="date">{getCurrentDate()}</p>
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
              <p onClick={toggleShowAllTransactions} style={{ cursor: 'pointer' }}>
                {showAllTransactions ? "Show Less" : "See All"}
              </p>
            </div>
            <div>
              {transactionsToDisplay.length > 0 ? (
                <ul className="transaction-list">
                  {transactionsToDisplay.map((transaction, index) => (
                    <li key={index} className="transaction-item">
                      <div className="transaction-left">
                        <div className="history-details description">
                          {transaction.description}
                        </div>
                      </div> 
                      <div className="transaction-right">
                      
                        <div className="history-details amount">
                          Amount: {transaction.amount}
                        </div>
                        <div className="history-details datee">
                          Date: {transaction.transactionDate}
                        </div>
                       
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-trans">No transaction history available.</div>
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

