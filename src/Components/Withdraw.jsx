import React from "react";
import Prev from "../assets/Icons/chevron-left.png";
import { useNavigate } from "react-router-dom";
import "../Styles/Withdraw.css";

const Withdraw = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleContinue = () => {
    navigate("/pin-page");
  };
  return (
    <>
      <div className="withdraw-container">
        <div className="withdraw-text">
          <img src={Prev} alt="prev" onClick={handleGoBack} />
          <p>Cash Out</p>
        </div>

        <div className="withdraw-form">
          <form action="">
            <div className="form-group">
              <label htmlFor="bank">Bank</label>
              <select id="bank" required>
                <option className="disabled" value="" disabled selected hidden>
                  Select Bank
                </option>

                <option value="uba">UBA Bank</option>
                <option value="access">Access Bank</option>
                <option value="polaris">Polaris Bank</option>
                <option value="zenith">Zenith Bank</option>
                <option value="providus">Providus</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input type="text" id="accountNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="text" id="amount" />
            </div>
          </form>
        </div>
        <button className="continue-button" onClick={handleContinue}>Continue</button>
      </div>
    </>
  );
};

export default Withdraw;
