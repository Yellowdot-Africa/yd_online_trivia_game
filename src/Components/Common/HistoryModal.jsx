import React from "react";
import "../../Styles/HistoryModal.css";
import withdraw from "../../assets/icons/money-withdrawal.svg";
import deposit from "../../assets/icons/baseline-payment.svg";
import CaretDown from "../../assets/icons/uiwdown.svg";
import ToggleSwitch from "./ToggleSwitch";

const HistoryModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-text">
            <p className="">Current balance</p>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>

          <div className="modal-details">
            <p className="modal-amount">N 8,000.00</p>
            <div className="toggle">
              <ToggleSwitch />
              <p className="show">Show balance</p>
            </div>
            <hr />
            <div className="withdraw-cont">
              <p className="withdraw">Withdraw</p>
              <img src={withdraw} alt="withdraw" />
            </div>{" "}
            <hr />
            <div className="deposit-cont">
              <p>Deposit</p> <img src={deposit} alt="deposit" />
            </div>{" "}
            <hr />
            <p>
              History <img src={CaretDown} alt="caretdwn" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryModal;
