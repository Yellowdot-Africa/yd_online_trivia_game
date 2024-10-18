// import React, { useState, useEffect } from "react";
// import Prev from "../assets/Icons/chevron-left.png";
// import MoneyIcon from "../assets/Icons/mingcute_cash-line.png";
// import { useNavigate , useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import "../Styles/Withdraw.css";
// import {
//   setWalletBalance,
//   updateBalance,
//   setDepositResponse,
// } from "../features/wallet/walletSlice";
// const Withdraw = () => {
//   const [banks, setBanks] = useState([]);
//   const [bankId, setBankId] = useState("");
//   const [isInputEdited, setIsInputEdited] = useState(false);
//   const [editedAmount, setEditedAmount] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [fullName, setFullName] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();
//   const token = useSelector((state) => state.auth.jwt);
//   const dispatch = useDispatch();




//   const handleBankChange = (event) => {

  

//   const selectedValue =event.target.value;
//   setBankId(selectedValue)
//   //alert("selectedValue", bankId)
//   }

// console.log(bankId)



//   const handleInputChange = (setter) => (e) => {
//     setter(e.target.value);
//     setIsInputEdited(true);
//   };

//   useEffect(() => {
//     const fetchBanks = async () => {
//       try {
//         const response = await axios.get(
//           "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/banks",
         
//           {
//             headers: {
//               Accept: "*/*",
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("API response:", response.data.data);

//         if (response.data && Array.isArray(response.data.data)) {
//           setBanks(response.data.data);
//           console.log("API response:", );

//         } else {
//           console.warn("Unexpected API response structure:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching banks:", error);
//       }
//     };

//     fetchBanks();
//   }, [token]);

//   const handleGoBack = () => {
//     navigate(-1);
//   };
// let state;
//   const handleContinue = (e) => {
// e.preventDefault();
//     navigate("/pin-page", {
//       state: { editedAmount, bankId, accountNumber, fullName },

//     });

//   };
// console.log("state pin", state)
//   return (
//     <>
//       <div className="withdraw-container">
//         <div className="withdraw-text">
//           <img src={Prev} alt="prev" onClick={handleGoBack} />
//           <p>Withdraw</p>
//         </div>

//         <div className="withdraw-form">
//           <form action="">
//             <div className="form-group">
//               <label htmlFor="bank">Bank</label>
//               <select
//                 id="bank"
//                 value={bankId}
//                 onChange={handleBankChange}
//                 required
//               >
//                 <option className="disabled" disabled value="">
//                   Select Bank
//                 </option>
//                 {banks?.map((bank) => (
//                   <option key={bank.shortname} value={bank.code}>
//                     {bank.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="accountNumber">Account Number</label>
//               <input
//                 type="text"
//                 id="accountNumber"
//                 placeholder="Enter Account Number"
//                 className="input-field"
//                 value={accountNumber}
//                 onChange={handleInputChange(setAccountNumber)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="fullname">Full Name</label>
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={handleInputChange(setFullName)}
//                 className="input-field"
//                 placeholder="Enter your full name"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="amount">Amount</label>
//               <input
//                 type="text"
//                 id="amount"
//                 className="input-field"
//                 placeholder="Enter Amount"
//                 value={editedAmount}
//                 onChange={handleInputChange(setEditedAmount)}
//               />
//             </div>
//           </form>
//         </div>

//         <button
//           className={`continue-button ${isInputEdited ? "active" : ""}`}
//           onClick={handleContinue}
//         >
//           Continue
//         </button>
//       </div>
//     </>
//   );
// };

// export default Withdraw;





// import React, { useState, useEffect } from "react";
// import Prev from "../assets/Icons/chevron-left.png";
// import { useNavigate } from "react-router-dom";
// import banksData from "../data/banks.json";  

// const Withdraw = () => {
//   const [banks, setBanks] = useState([]);
//   const [bankId, setBankId] = useState("");
//   const [isInputEdited, setIsInputEdited] = useState(false);
//   const [editedAmount, setEditedAmount] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [fullName, setFullName] = useState("");
  
//   const navigate = useNavigate();

//   const handleBankChange = (event) => {
//     const selectedValue = event.target.value;
//     setBankId(selectedValue);
//   };

//   const handleInputChange = (setter) => (e) => {
//     setter(e.target.value);
//     setIsInputEdited(true);
//   };

//   useEffect(() => {
//     // Instead of fetching, you directly set the banks from the imported JSON
//     setBanks(banksData.data);
//   }, []);

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   const handleContinue = (e) => {
//     e.preventDefault();
//     navigate("/pin-page", {
//       state: { editedAmount, bankId, accountNumber, fullName },
//     });
//   };

//   return (
//     <div className="withdraw-container">
//       <div className="withdraw-text">
//         <img src={Prev} alt="prev" onClick={handleGoBack} />
//         <p>Withdraw</p>
//       </div>

//       <div className="withdraw-form">
//         <form>
//           <div className="form-group">
//             <label htmlFor="bank">Bank</label>
//             <select id="bank" value={bankId} onChange={handleBankChange} required>
//               <option disabled value="">
//                 Select Bank
//               </option>
//               {banks?.map((bank) => (
//                 <option key={bank.id} value={bank.code}>
//                   {bank.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="accountNumber">Account Number</label>
//             <input
//               type="text"
//               id="accountNumber"
//               placeholder="Enter Account Number"
//               className="input-field"
//               value={accountNumber}
//               onChange={handleInputChange(setAccountNumber)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="fullname">Full Name</label>
//             <input
//               type="text"
//               value={fullName}
//               onChange={handleInputChange(setFullName)}
//               className="input-field"
//               placeholder="Enter your full name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="amount">Amount</label>
//             <input
//               type="text"
//               id="amount"
//               className="input-field"
//               placeholder="Enter Amount"
//               value={editedAmount}
//               onChange={handleInputChange(setEditedAmount)}
//             />
//           </div>
//         </form>
//       </div>

//       <button
//         className={`continue-button ${isInputEdited ? "active" : ""}`}
//         onClick={handleContinue}
//       >
//         Continue
//       </button>
//     </div>
//   );
// };

// export default Withdraw;




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
    
    
    const filtered = banks.filter(bank => 
      bank.name.toLowerCase().includes(value.toLowerCase())
    );


    setFilteredBanks(filtered);
  };

  const handleBankChange = (event) => {
    const selectedValue = event.target.value;
    setBankId(selectedValue);
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
            {/* Search bar for filtering banks */}
            <input
              type="text"
              placeholder="Search banks..."
              value={searchTerm}
              onChange={handleSearch}
              className="input-field" 
            />
            <select id="bank" value={bankId} onChange={handleBankChange} required>
              <option disabled value="">
                Select Bank
              </option>
              {filteredBanks.length > 0 ? (
                filteredBanks.map((bank) => (
                  <option key={bank.id} value={bank.code}>
                    {bank.name}
                  </option>
                ))
              ) : (
                <option disabled>No banks found</option>
              )}
            </select>
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
