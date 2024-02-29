import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import Prev from "../../assets/Icons/chevron-left.png";
import EyeIcon from "../../assets/Icons/eye.png";
import EyeOff from "../../assets/Icons/eye-off.png";
import ArrowUp from "../../assets/Icons/arrow-up-circle.png";
import ArrowDown from "../../assets/Icons/arrow-down-circle.png";
import "../../Pages/ACCOUNT/Account.css";


const Account = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleWithdraw = () => {
    navigate("/withdraw");
  };
  const handleDeposit = () => {
    navigate("/deposit");
  };
  const [isAmountVisible, setAmountVisibility] = useState(true);

  const toggleAmountVisibility = () => {
    setAmountVisibility(!isAmountVisible);
  };



  return (
    <>
      <div className="account-container">
        <div className="account-header">
          <div className="account-text">
            <img src={Prev} alt="prev" onClick={handleGoBack} />
            <p>Account</p>
          </div>

          <div className="current-balance-cont">
            <div className="current-balance-info">
              <p className="current-bal">Current balance</p>
              <div className="amount-balance">
              {isAmountVisible ? (
                <p>NGN20,000</p>
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
              <p className="date">Today 4th January</p>
            </div>
            <div className="transaction-options">
              <div className="withdraw-option" onClick={handleWithdraw}>
                <img src={ArrowUp} alt="" />
                <p>Withdraw</p>
              </div>
              <div className="deposit-option" onClick={handleDeposit}>
                <img src={ArrowDown} alt="" />
                <p>Deposit</p>
              </div>
            </div>
          </div>
          <div className="history-section">
            <div className="history-text">
              <h2> History</h2>
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
    </>
  );
};

export default Account;





