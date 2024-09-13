import React, { useState, useEffect } from "react";
import Prev from "../assets/Icons/chevron-left.png";
import MoneyIcon from "../assets/Icons/mingcute_cash-line.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../Styles/Withdraw.css";

const Withdraw = () => {
  const [banks, setBanks] = useState([]);
  const [bankId, setBankId] = useState("");
  const [isInputEdited, setIsInputEdited] = useState(false); 
  const [editedAmount, setEditedAmount] = useState('');

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.jwt);
  const dispatch = useDispatch();

  const handleBankChange = (event) => {
    setBankId(event.target.value);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setIsInputEdited(true);
  };

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/banks",
          {
            headers: {
              Accept: "*/*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API response:", response.data);

        if (response.data && Array.isArray(response.data.data)) {
          setBanks(response.data.data);
        } else {
          console.warn("Unexpected API response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching banks:", error);
      }
    };

    fetchBanks();
  }, [token]);

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
          <p>Withdraw</p>
        </div>

        <div className="withdraw-form">
          <form action="">
            <div className="form-group">
              <label htmlFor="bank">Bank</label>
              <select
                id="bank"
                value={bankId}
                onChange={handleBankChange}
                required
              >
                <option className="disabled" disabled value="">
                  Select Bank
                </option>
                {banks?.map((bank) => (
                  <option key={bank.shortname} value={bank.shortname}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                placeholder="Enter Account Number"
                onChange={handleInputChange(setEditedAmount)}

              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="text" id="amount" placeholder="Enter Amount" />
            </div>
          </form>
        </div>
       

        <button
          className={`continue-button ${isInputEdited ? "active" : ""}`}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Withdraw;
