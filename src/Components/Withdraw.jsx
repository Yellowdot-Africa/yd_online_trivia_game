import React, { useState, useEffect } from "react";
import Prev from "../assets/Icons/chevron-left.png";
import MoneyIcon from "../assets/Icons/mingcute_cash-line.png";
import { useNavigate , useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../Styles/Withdraw.css";
import {
  setWalletBalance,
  updateBalance,
  setDepositResponse,
} from "../features/wallet/walletSlice";
const Withdraw = () => {
  const [banks, setBanks] = useState([]);
  const [bankId, setBankId] = useState("");
  const [isInputEdited, setIsInputEdited] = useState(false);
  const [editedAmount, setEditedAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.jwt);
  const dispatch = useDispatch();




  const handleBankChange = (event) => {

  

  const selectedValue =event.target.value;
  setBankId(selectedValue)
  //alert("selectedValue", bankId)
  }

console.log(bankId)



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

        console.log("API response:", response.data.data);

        if (response.data && Array.isArray(response.data.data)) {
          setBanks(response.data.data);
          console.log("API response:", );

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
let state;
  const handleContinue = (e) => {
e.preventDefault();
    navigate("/pin-page", {
      state: { editedAmount, bankId, accountNumber, fullName },

    });

  };
console.log("state pin", state)
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
                  <option key={bank.shortname} value={bank.code}>
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
    </>
  );
};

export default Withdraw;




// const validationSchema = Yup.object().shape({
//   loginMethod: Yup.string().required("Login method is required"),
  
//   // For phone login:
//   phoneNumber: Yup.string()
//     .matches(/^\d{10,14}$/, "Please input a valid phone number") // Allow 10-14 digits
//     .nullable()
//     .required("Phone number is required when using phone login"),
    
//   // For email login:
//   email: Yup.string()
//     .email("Please input a valid email address")
//     .nullable()
//     .required("Email is required when using email login"),
  
//   // Password validation:
//   password: Yup.string()
//     .min(8, "Password should be at least 8 characters")
//     .required("Please input your password"),
// });



// const formatPhoneNumber = (phoneNumber) => {
//   if (phoneNumber.startsWith("234")) { // Nigerian country code
//     return "0" + phoneNumber.slice(3); // Convert to local format
//   }

//   if (phoneNumber.startsWith("0")) { 
//     return phoneNumber; // If it's already local format
//   }

//   return null; // Invalid format
// };


// const validationSchema = Yup.object().shape({
//   // For phone numbers, validate the length and pattern
//   phoneNumber: Yup.string()
//     .matches(/^\d{10}$/, "Phone number must be 10 digits (for local numbers)")
//     .required("Phone number is required when using phone login"),
// });

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Please input a valid email address")
//     .required("Email is required when using email login"),
// });

// const validationSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(/\d/, "Password must contain at least one number")
//     .matches(/[\W_]/, "Password must contain at least one special character")
//     .required("Password is required"),
// });
