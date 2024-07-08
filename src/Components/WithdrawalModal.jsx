import React, { useState } from 'react';
import "../Styles/Withdraw.css";

const WithdrawalModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <button className="close-button" onClick={onClose}>
            &times;
          </button>
        <div className="modal-content">
          
          <h2>Withdrawal</h2>
          <p>Please specify the amount you want to withdraw</p>
          <input
            type="number"
           
            placeholder="Amount"
            value={amount}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocused || amount ? 'input-focused' : ''}
          />
          <button
            className={`next-button ${amount ? 'active' : ''}`}
            disabled={!amount}
          >
            Next
          </button>
        </div>
      </div>
    )
  );
};

export default WithdrawalModal;