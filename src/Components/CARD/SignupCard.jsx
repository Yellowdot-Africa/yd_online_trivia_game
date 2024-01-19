import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Card1 from "../../assets/Images/card1-icon.png";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../Components/LoginModal";
import axios from "axios";
import * as Yup from "yup";
import "../../Styles/Card.css";

const SignupCard = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [msisdn, setMsisdn] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationError, setRegistrationError] = useState({});
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [userExistsError, setUserExistsError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);



  const token = sessionStorage.getItem("token");
  // console.log("token", token);
  console.log("Token:", token);


  const handleShowModal = () => {
    setShowModal(true);
    setShowLoginModal(true);
    document.body.classList.add("blur");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove("blur");
    setStep(1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleMsisdnChange = (e) => {
    setMsisdn(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneNumberFocus = () => {
    setPhoneNumberFocus(true);
  };

  const handlePhoneNumberBlur = () => {
    setPhoneNumberFocus(false);
  };

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handleEmailBlur = () => {
    setEmailFocus(false);
  };

  const handleUsernameFocus = () => {
    setUsernameFocus(true);
  };

  const handleUsernameBlur = () => {
    setUsernameFocus(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocus(false);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordFocus(true);
  };

  const handleConfirmPasswordBlur = () => {
    setConfirmPasswordFocus(false);
    if (password === confirmPassword) {
      setPasswordConfirmed(true);
    } else {
      setPasswordConfirmed(false);
    }
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    msisdn: Yup.string().required("Please input a valid phone number"),
    username: Yup.string().required("Pick a username"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(
        { msisdn, username, password, confirmPassword },
        { abortEarly: false }
      );

      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/CreateUser",

        {
          msisdn,
          username,
          email,
          password,
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("User registered successfully:", response.data);
      setSuccess("User registration successful:", response.data);
      setShowSuccessMessage(true);
      setShowLoginModal(true);

      // navigate("/login-modal",{ state: { showLoginModal: true } });

      handleCloseModal();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setRegistrationError(validationErrors);
      } else if (error.response && error.response.status === 401) {
        setRegistrationError(
          "Authentication failed. Please check your credentials."
        );
      } else if (error.response && error.response.status === 400) {
       if (error.response.data && error.response.data.error === "UserExists") {
        setUserExistsError("User already exists with the same email or MSISDN." + error.response.data.message);
        console.log("Error response data:", error.response.data);
      } else {
        setRegistrationError("Bad request. Please check your input.");}
      } else {
        setRegistrationError(
          "Error registering user: " + "internal server error"
        );
        console.error("Error registering user:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="first-card">
        <img src={Card1} alt="card-one" />
        <h3>Sign up for a new account</h3>
        <button onClick={handleShowModal}>Here</button>
      </div>
      <div className="custom-modal-card">
        <Modal
          className="custom-modal"
          show={showModal}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Header className="modal-header" closeButton>
            <div className="header-content">
              <img src={Card1} alt="Header" className="header-image" />
              <h2>Sign Up</h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            {step === 1 && (
              <Form onSubmit={handleSignUp} className="custom-form">
                <Form.Group controlId="formPhoneNumber">
                  <Form.Control
                    className={`form-control ${
                      phoneNumberFocus ? "focused" : ""
                    } ${registrationError.msisdn ? "is-invalid" : ""}`}
                    type="tel"
                    placeholder="+234"
                    value={msisdn}
                    onChange={handleMsisdnChange}
                    onFocus={handlePhoneNumberFocus}
                    onBlur={handlePhoneNumberBlur}
                  />
                  {phoneNumberFocus && (
                    <p className="inputt-textt">
                      Please input a valid phone number
                    </p>
                  )}
                </Form.Group>{" "}
                <br />
                <Form.Group controlId="formEmail">
                  <Form.Control
                    className={`form-control ${emailFocus ? "focused" : ""} ${
                      registrationError.email ? "is-invalid" : ""
                    }`}
                    type="tel"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                  />
                  {emailFocus && (
                    <p className="inputt-textt">Please input a valid email</p>
                  )}
                </Form.Group>{" "}
                <br />
                <Form.Group controlId="formUsername">
                  <Form.Control
                    className={`form-control ${usernameFocus ? "focused" : ""}${
                      registrationError.username ? "is-invalid" : ""
                    }`}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    onFocus={handleUsernameFocus}
                    onBlur={handleUsernameBlur}
                  />
                  {usernameFocus && (
                    <p className="inputt-textt">Pick a user name</p>
                  )}
                </Form.Group>{" "}
                <br />
                <Button
                  onClick={handleNextStep}
                  type="submit"
                  className="sign-up-button"
                >
                  Next
                </Button>
              </Form>
            )}

            {step === 2 && (
              <Form onSubmit={handleSignUp} className="custom-form">
                <Form.Control
                  className={`form-control ${passwordFocus ? "focused" : ""}${
                    registrationError.password ? "is-invalid" : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Choose Password"
                  onFocus={handlePasswordFocus}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  autoComplete="current-password"
                />
                {passwordFocus && (
                  <p className="inputt-textt">
                    Please choose a secure password
                  </p>
                )}
                <div
                  className="password-toggle-icon"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>

                <br />
                <Form.Control
                  className={`form-control ${
                    confirmPasswordFocus ? "focused" : ""
                  }${registrationError.confirmPassword ? "is-invalid" : ""}`}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  onFocus={handleConfirmPasswordFocus}
                  onBlur={handleConfirmPasswordBlur}
                />
                {confirmPasswordFocus && (
                  <p className="input-text">
                    Please confirm your password
                    {passwordConfirmed && " - Password Confirmed"}
                  </p>
                )}
                <div
                  className="password-toggle-icon"
                  onClick={handleToggleConfirmPasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                <br />
                <Button type="submit" className="sign-up-button">
                  Submit
                </Button>
                <div className="error-message">{userExistsError}</div>

              </Form>
            )}
            <p className="login-text">
              Already a user? <a href="#">Log in</a>
            </p>
          </Modal.Body>
        </Modal>
      </div>
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)} 
        />
      )}
    </>
  );
};

export default SignupCard;









