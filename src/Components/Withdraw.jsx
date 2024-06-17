import React, { useState, useEffect } from "react";
import Prev from "../assets/Icons/chevron-left.png";
import MoneyIcon from "../assets/Icons/mingcute_cash-line.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Withdraw.css";

const Withdraw = () => {
  const [banks, setBanks] = useState([]);
  const [bankId, setBankId] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
console.log
  const handleBankChange = (event) => {
    setBankId(event.target.value);
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
  }, []);

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
              <input type="text" id="accountNumber" placeholder="Enter Account Number"/>
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="text" id="amount" placeholder="Enter Amount"/>
            </div>
          </form>
        </div>
        <div className="withdrawal-info">
          <img src={MoneyIcon} alt="" />
          <p>Minimum Convertible Is 50 Tokens @200 Naira/Token </p>
        </div>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </>
  );
};

export default Withdraw;




// import React from "react";
// import Prev from "../assets/Icons/chevron-left.png";
// import { useNavigate } from "react-router-dom";
// import "../Styles/Withdraw.css";

// const Withdraw = () => {
//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate(-1);
//   };
//   const handleContinue = () => {
//     navigate("/pin-page");
//   };
//   return (
//     <>
//       <div className="withdraw-container">
//         <div className="withdraw-text">
//           <img src={Prev} alt="prev" onClick={handleGoBack} />
//           <p>Cash Out</p>
//         </div>

//         <div className="withdraw-form">
//           <form action="">
//             <div className="form-group">
//               <label htmlFor="bank">Bank</label>
//               <select id="bank" required>
//                 <option className="disabled" value="" disabled selected hidden>
//                   Select Bank
//                 </option>

//                 <option value="uba">UBA Bank</option>
//                 <option value="access">Access Bank</option>
//                 <option value="polaris">Polaris Bank</option>
//                 <option value="zenith">Zenith Bank</option>
//                 <option value="providus">Providus</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="accountNumber">Account Number</label>
//               <input type="text" id="accountNumber" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="amount">Amount</label>
//               <input type="text" id="amount" />
//             </div>
//           </form>
//         </div>
//         <button className="continue-button" onClick={handleContinue}>Continue</button>
//       </div>
//     </>
//   );
// };

// export default Withdraw;


// import React, { useState } from 'react';
// import './WithdrawalModal.css'; 

// const WithdrawalModal = ({ isOpen, onClose }) => {
//   const [amount, setAmount] = useState('');
//   const [inputFocused, setInputFocused] = useState(false);

//   const handleChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleFocus = () => {
//     setInputFocused(true);
//   };

//   const handleBlur = () => {
//     setInputFocused(false);
//   };

//   return (
//     isOpen && (
//       <div className="modal-overlay">
//         <div className="modal-content">
//           <button className="close-button" onClick={onClose}>
//             &times;
//           </button>
//           <h2>Withdrawal</h2>
//           <p>Please specify the amount you want to withdraw</p>
//           <input
//             type="number"
//             placeholder="Enter amount"
//             value={amount}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             className={inputFocused || amount ? 'input-focused' : ''}
//           />
//           <button
//             className={`next-button ${amount ? 'active' : ''}`}
//             disabled={!amount}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     )
//   );
// };

// export default WithdrawalModal;
