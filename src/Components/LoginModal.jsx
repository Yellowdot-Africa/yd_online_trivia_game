import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Card2 from "../assets/Images/card2-icon.png";
import axios from "axios";
import * as Yup from "yup";

const LoginModal = ({ show, handleClose, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const showLoginModal = location.state && location.state.showLoginModal;
  // console.log("showLoginModal from location:", showLoginModal);

  // const [showLoginModal, setShowLoginModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  //   const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState({});
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [infoText, setInfoText] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleShowModal = () => {
    setShowLoginModal(true);
    document.body.classList.add("blur");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneNumberFocus = () => {
    setPhoneNumberFocus(true);
  };

  const handlePhoneNumberBlur = () => {
    setPhoneNumberFocus(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocus(false);
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
    // console.log("Handling login...");

    try {
      // console.log("Before API request");

      await validationSchema.validate(
        { phoneNumber: phoneNumber, password },
        { abortEarly: false }
      );
      setIsLoading(true);

      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Authorization/Login",
        {
          username: phoneNumber,
          password: password,
        }
      );
      setIsLoading(false);
      // console.log(response);
      // console.log("API Response:", response);

      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.jwt);
        sessionStorage.setItem("userId", response.data.userID);
        sessionStorage.setItem("walletBalance", response.data.walletBalance);

        console.error(response.data);
        console.log("Before navigation");
        navigate("/loading");
        // console.log("After navigation");

        // navigate("/loading");
        // await

        const storedToken = sessionStorage.getItem("token");
        console.log("Stored Token:", storedToken);

        //   setIsFormSubmitted(true);
        setIsFormSubmitted(true);
        console.log("Form submitted:", isFormSubmitted);

        createOrRenewToken();
      } else {
        setInfoText("An error occurred. Please try again later.");
        setErrorText(null);
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
    // <Modal show={true} onHide={onClose} centered>
    <Modal
      className="custom-modal"
      show={show}
      onHide={handleCloseModal}
      centered
    >
      <Modal.Header className="modal-header" closeButton>
        <div className="header-content">
          <img src={Card2} alt="Header" className="header-image" />
          <h2>Log In</h2>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin} className="custom-form">
          <Form.Group controlId="formPhoneNumber">
            <Form.Control
              className={`form-control ${phoneNumberFocus ? "focused" : ""} ${
                loginError.phoneNumber ? "is-invalid" : ""
              }`}
              type="tel"
              placeholder="+234"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onFocus={handlePhoneNumberFocus}
              onBlur={handlePhoneNumberBlur}
            />
            {phoneNumberFocus && (
              <p className="inputt-textt">Please input your phone number</p>
            )}
          </Form.Group>{" "}
          <br />
          <Form.Control
            className={`form-control ${passwordFocus ? "focused" : ""}${
              loginError.password ? "is-invalid" : ""
            }`}
            type="password"
            value={password}
            placeholder="Choose Password"
            onFocus={handlePasswordFocus}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
          {passwordFocus && <p className="inputt-textt">Input password</p>}
          <br />
          <Button
            // onClick={handleNextStep}
            onClick={handleLogin}
            type="button"
            className="sign-up-button"
            disabled={isLoading}
          >
            {isFormSubmitted ? "Go to Trivia" : "Next"}
            {/* Next */}
          </Button>
        </Form>

        <p className="login-text">
          Need an account?<a href="#">Sign up</a>
        </p>
        <p className="recover-pswrd">Recover password</p>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
