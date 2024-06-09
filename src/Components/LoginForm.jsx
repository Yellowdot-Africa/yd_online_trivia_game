// import React,{ useState }  from 'react';

// const LoginForm = ({ isLoginOpen }) => {
// const [loginMethod, setLoginMethod] = useState("phone");

//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [password, setPassword] = useState("");
// const [email, setEmail] = useState("");
// const [emailFocus, setEmailFocus] = useState(false);

//     const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
//     const [passwordFocus, setPasswordFocus] = useState(false);
//     const [errorText, setErrorText] = useState(null);
//     const [infoText, setInfoText] = useState(null);
//     const [loginError, setLoginError] = useState({});
//     const [isLoading, setIsLoading] = useState(false);

//     const handlePhoneNumberChange = (e) => {
//         setPhoneNumber(e.target.value);
//       };

// const handleEmailChange = (e) => {
//     setEmail(e.target.value);
// };

//       const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//       };
//       const handlePhoneNumberFocus = () => {
//         setPhoneNumberFocus(true);
//       };
// const handleEmailFocus = () => {
//     setEmailFocus(true);
// };

//       const handlePasswordFocus = () => {
//         setPasswordFocus(true);
//       };

// const handleLoginMethodChange = (method) => {
//     setLoginMethod(method);
//     setPhoneNumber("");
//     setEmail("");
//     setPassword("");
//     setPhoneNumberFocus(false);
//     setEmailFocus(false);
//     setPasswordFocus(false);
//     setLoginError({});
// };

//   return (
//     <>
//          <div className="login-form-cont">
//         <form className={`login-form ${isLoginOpen ? "open" : ""}`}>
//           <input
//             type="tel"
//             autoComplete="current-phonenumber"
//             placeholder="+234"
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//             onFocus={handlePhoneNumberFocus}
//           />
//           {phoneNumberFocus && (
//             <p className="inputt-textt">Please input your phone number</p>
//           )}
//           {loginError.username && (
//             <p className="error-text">{loginError.username}</p>
//           )}
//           <input
//             type="password"
//             autoComplete="current-password"
//             placeholder="Choose Password"
//             value={password}
//             onChange={handlePasswordChange}
//             onFocus={handlePasswordFocus}
//           />
//           {passwordFocus && <p className="inputt-textt">Input password</p>}

//           {loginError.password && (
//             <p className="error-text">{loginError.password}</p>
//           )}
//           <button  disabled={isLoading}>
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//           {loginError.general && (
//             <p className="error-text">{loginError.general}</p>
//           )}
//         </form>
//       </div>
//     </>
//   )
// }

// export default LoginForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const LoginForm = ({ isLoginOpen }) => {
  const [loginMethod, setLoginMethod] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [infoText, setInfoText] = useState(null);
  const [loginError, setLoginError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneNumberFocus = () => {
    setPhoneNumberFocus(true);
  };
  const handleEmailFocus = () => {
    setEmailFocus(true);
  };
  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };
  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setPhoneNumberFocus(false);
    setEmailFocus(false);
    setPasswordFocus(false);
    setLoginError({});
  };

  const navigateToLoadingPage = () => {
    console.log("Navigating to trivia...");

    navigate("/loading");
  };

  return (
    <>
      <div className="login-form-cont">
        <form className={`login-form ${isLoginOpen ? "open" : ""}`}>
          {loginMethod === "phone" && (
            <input
              type="tel"
              autoComplete="current-phonenumber"
              placeholder="+234"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onFocus={handlePhoneNumberFocus}
            />
          )}
          {phoneNumberFocus && (
            <p className="inputt-textt">Please input your phone number</p>
          )}
          {loginError.username && (
            <p className="error-text">{loginError.username}</p>
          )}
          {loginMethod === "email" && (
            <input
              type="email"
              autoComplete="current-email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
            />
          )}
          {emailFocus && (
            <p className="inputt-textt">Please input your email</p>
          )}
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Choose Password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
          />
          {passwordFocus && <p className="inputt-textt">Input password</p>}
          {loginError.password && (
            <p className="error-text">{loginError.password}</p>
          )}
          <button onClick={navigateToLoadingPage} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {loginError.general && (
            <p className="error-text">{loginError.general}</p>
          )}

          <div className="login-method-selector">
            {loginMethod === "phone" ? (
              <a
                href="#email"
                className="active"
                onClick={() => handleLoginMethodChange("email")}
              >
                Use Email
              </a>
            ) : (
              <a
                href="#phonenumber"
                className="active"
                onClick={() => handleLoginMethodChange("phone")}
              >
                Use Phone Number
              </a>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;


