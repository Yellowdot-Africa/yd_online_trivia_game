import React, { useState, useEffect } from "react";
import Prev from "../assets/Icons/chevron-left.png";
import { useNavigate } from "react-router-dom";
import banksData from "../data/banks.json";

const Withdraw = () => {
  const [banks, setBanks] = useState([]);
  const [filteredBanks, setFilteredBanks] = useState([]);
  const [bankId, setBankId] = useState("");
  const [isInputEdited, setIsInputEdited] = useState(false);
  const [editedAmount, setEditedAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showBankList, setShowBankList] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (banksData && banksData.data) {
      setBanks(banksData.data);
      setFilteredBanks(banksData.data);
    } else {
      console.error("banksData is missing or not in the expected format");
    }
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = banks.filter((bank) =>
      bank.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredBanks(filtered);
    setShowBankList(value.length > 0 && filtered.length > 0);
  };

  const handleBankSelect = (bank) => {
    setBankId(bank.code);
    setSearchTerm(bank.name);
    setShowBankList(false);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setIsInputEdited(true);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/pin-page", {
      state: { editedAmount, bankId, accountNumber, fullName },
    });
  };

  return (
    <div className="withdraw-container">
      <div className="withdraw-text">
        <img src={Prev} alt="prev" onClick={handleGoBack} />
        <p>Withdraw</p>
      </div>

      <div className="withdraw-form">
        <form>
          <div className="form-group">
            <label htmlFor="bank">Bank</label>
            <input
              type="text"
              placeholder="Search banks..."
              value={searchTerm}
              onChange={handleSearch}
              className="input-field"
            />
            {/* filtered the  banks as a list */}
            {showBankList && (
              <ul className="bank-list">
                {filteredBanks.map((bank) => (
                  <li
                    key={bank.id}
                    onClick={() => handleBankSelect(bank)}
                    className="bank-list-item"
                  >
                    {bank.name}
                  </li>
                ))}
                {filteredBanks.length === 0 && <li>No banks found</li>}
              </ul>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              placeholder="Enter Account Number"
              className="input-field"
              value={accountNumber}
              onChange={handleInputChange(setAccountNumber)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={handleInputChange(setFullName)}
              className="input-field"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              className="input-field"
              placeholder="Enter Amount"
              value={editedAmount}
              onChange={handleInputChange(setEditedAmount)}
            />
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
  );
};

export default Withdraw;
