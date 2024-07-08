import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Prev from "../../assets/Icons/chevron-left.png";
import EyeIcon from "../../assets/Icons/eye.png";
import EyeOff from "../../assets/Icons/eye-off.png";
import ArrowUp from "../../assets/Icons/arrw-up-circlee.png";
import ArrowDown from "../../assets/Icons/arrow-dwn-circle.png";
import "../../Pages/ACCOUNT/Account.css";
import WithdrawalModal from "../../Components/WithdrawalModal";

const Account = () => {
  const navigate = useNavigate();
  const walletBalance = useSelector((state) => state.wallet.walletBalance);
  const experiencePoints = useSelector((state) => state.wallet.experiencePoints);

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleDeposit = () => {
    navigate("/deposit");
  };
  const [isAmountVisible, setAmountVisibility] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("hello there")
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const toggleAmountVisibility = () => {
    setAmountVisibility(!isAmountVisible);
  };

  return (
    <>
      <div className={`account-container ${isModalOpen ? 'modal-open' : ''}`}>
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
              <h2>Recent Transaction</h2>
              <p>See All</p>
            </div>
            <div className="history-item">
              <div className="game-win">
                <div className="green-dot"></div>
                <p>Game Win</p>
              </div>
              <div className="amount-date">
                <p>20,000.00</p>
                <p>7:00AM</p>
              </div>
            </div>{" "}
            <hr className="line" />
            <div className="history-item">
              <div className="game-win">
                <div className="green-dot"></div>
                <p>Game Win</p>
              </div>
              <div className="amount-date">
                <p>20,000.00</p>
                <p>7:00AM</p>
              </div>
            </div>{" "}
            <hr className="line" />
            <div className="history-item">
              <div className="game-win">
                <div className="green-dot"></div>
                <p>Game Win</p>
              </div>
              <div className="amount-date">
                <p>20,000.00</p>
                <p>7:00AM</p>
              </div>
            </div>{" "}
            <hr className="line" />
            <div className="history-item">
              <div className="withdrawal">
                <div className="red-dot"></div>
                <p>Withdrawal</p>
              </div>
              <div className="amount-date">
                <p>20,000.00</p>
                <p>7:00AM</p>
              </div>
            </div>
            <hr className="line" />
            <div className="history-item">
              <div className="game-win">
                <div className="green-dot"></div>
                <p>Game Win</p>
              </div>
              <div className="amount-date">
                <p>20,000.00</p>
                <p>7:00AM</p>
              </div>
            </div>
            <hr className="line" />
            <div className="history-item">
              <div className="withdrawal">
                <div className="red-dot"></div>
                <p>Withdrawal</p>
              </div>
              <div className="amount-date">
                <p>20,000.00</p>
                <p>7:00AM</p>
              </div>
            </div>{" "}
            <hr className="line" />
            <div className="history-item">
              <div className="game-win">
                <div className="green-dot"></div>
                <p>Game Win</p>
              </div>
              <div className="amount-date">
                <p>20,000.00</p>
                <p>7:00AM</p>
              </div>
            </div>{" "}
            <hr className="line" />
          </div>
        </div>
      </div>
      <WithdrawalModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Account;



