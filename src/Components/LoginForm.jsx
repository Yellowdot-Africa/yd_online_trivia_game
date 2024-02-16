import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

const LoginForm = ({ isMenuOpen }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [infoText, setInfoText] = useState(null);
  const [loginError, setLoginError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneNumberFocus = () => {
    setPhoneNumberFocus(true);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("MSISDN is required")
      .matches(/^\d+$/, "MSISDN must be a valid number"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(
        { phoneNumber: phoneNumber, password },
        { abortEarly: false }
      );

      setIsLoading(true);

      const response = await axios.post("https://your-api-endpoint.com/login", {
        username: phoneNumber,
        password: password,
      });

      setIsLoading(false);

      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.jwt);
        sessionStorage.setItem("userId", response.data.userID);
        sessionStorage.setItem("walletBalance", response.data.walletBalance);

        console.error(response.data);
        console.log("Login successful");
        navigate("/loading");

        const storedToken = sessionStorage.getItem("token");
        console.log("Stored Token:", storedToken);

        setIsFormSubmitted(true);
        console.log("Form submitted:", isFormSubmitted);

        createOrRenewToken();
      } else {
        setInfoText("An error occurred. Please try again later.");
        setErrorText(null);
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);

      setIsLoading(false);

      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrorText(validationErrors.msisdn || validationErrors.password);
        setInfoText(null);
        setLoginError(validationErrors);
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.statusCode === "300"
      ) {
        setErrorText(error.response.data.message);
        setInfoText(null);
      } else {
        setErrorText("An error occurred. Please try again later.");
        setInfoText(null);
        setLoginError({
          general: "An error occurred. Please try again later.",
        });
      }
    }
  };

  const navigateToTrivia = () => {
    console.log("Navigating to trivia...");

    navigate("/loading");
  };

  const createOrRenewToken = async () => {
    try {
      const storedToken = sessionStorage.getItem("token");
      const parsedStoredToken = storedToken ? JSON.parse(storedToken) : null;

      const currentTime = new Date();
      if (
        !parsedStoredToken ||
        currentTime >= new Date(parsedStoredToken.expiry)
      ) {
        // if (!storedToken || currentTime >= new Date(storedToken.expiry)) {
        const loginResponse = await axios.post(
          "https://api.ydplatform.com/api/Login",
          {
            ServiceID: 1012,
            Password: "24edf6485d9f4c2d8d57548c44075389",
          }
        );

        const newToken = loginResponse.data;
        const newExpiry = new Date();
        newExpiry.setHours(newExpiry.getHours() + 24);

        sessionStorage.setItem(
          "token",
          JSON.stringify({
            token: newToken,
            expiry: newExpiry,
          })
        );
      }
    } catch (error) {
      // console.error("Token creation/renewal error:", error);
    }
  };
  const handleCloseModal = () => {
    // setShowLoginModal(false);
    // console.log("Button clicked");
    handleClose();
    document.body.classList.remove("blur");
  };

  return (
    <>
    <div className="login-form-cont">
      <form className={`login-form ${isMenuOpen ? "open" : ""}`}>
        <input
          type="tel"
          placeholder="+234"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onFocus={handlePhoneNumberFocus}
        />
        {phoneNumberFocus && (
          <p className="inputt-textt">Please input your phone number</p>
        )}
        {loginError.username && (
          <p className="error-text">{loginError.username}</p>
        )}
        <input
          type="password"
          placeholder="Choose Password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
        />
        {passwordFocus && <p className="inputt-textt">Input password</p>}

        {loginError.password && (
          <p className="error-text">{loginError.password}</p>
        )}
        <button onClick={handleLogin} disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {loginError.general && (
          <p className="error-text">{loginError.general}</p>
        )}
      </form>
      </div>
    </>
  );
};

export default LoginForm;
