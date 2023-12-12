import React, {useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Card2 from "../../assets/Images/card2-icon.png";
// import { navigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from "yup";
import "../../Styles/Card.css";


const LoginCard = () => {

const [showLoginModal, setShowLoginModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState({});
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);

  
  const handleShowModal = () => {
    setShowLoginModal(true);
    document.body.classList.add("blur");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleCloseModal = () => {
    setShowLoginModal(false);  
    document.body.classList.remove("blur");
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

    try {
      
        await validationSchema.validate(
            { msisdn: phoneNumber, password },
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
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.jwt);
        sessionStorage.setItem("userId", response.data.userID);
        sessionStorage.setItem("walletBalance", response.data.walletBalance); 

        console.error(response.data);

        // navigate("/landingpage" , { state: { walletBalance: response.data.walletBalance } });
        await createOrRenewToken();

      } else {
        setInfoText("An error occurred. Please try again later.");
        setErrorText(null);
      }
    } catch (error) {
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
    
    
    const createOrRenewToken = async () => {
      try {
        const storedToken = sessionStorage.getItem("token");
        const currentTime = new Date();
    
        if (!storedToken || currentTime >= new Date(storedToken.expiry)) {
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
    
          sessionStorage.setItem("token", {
            token: newToken,
            expiry: newExpiry,
          });
        }
      } catch (error) {
        console.error("Token creation/renewal error:", error);
      }
    };
    

        // console.error("Error logging in:", error.message);
      // setLoginError logic similar to setRegistrationError
   
//   };
  return (
    <>
      <div className="second-card">
        <img src={Card2} alt="card-two" />
        <h3>Log in to your account</h3>
        <button onClick={handleShowModal}>Here</button>
      </div>

      <Modal
        className="custom-modal"
        show={showLoginModal}
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
                  className={`form-control ${
                    phoneNumberFocus ? "focused" : ""
                  } ${loginError.phoneNumber ? "is-invalid" : ""}`}
                  type="tel"
                  placeholder="+234"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  onFocus={handlePhoneNumberFocus}
                  onBlur={handlePhoneNumberBlur}
                />
                {phoneNumberFocus && (
                  <p className="input-text">
                  Please input your phone number
                  </p>
                )}
              </Form.Group>{" "}
              <br />
              <Form.Control
                className={`form-control ${passwordFocus ? "focused" : ""}${loginError.password ? "is-invalid" : ""}`}
                type="password"
                value={password}
                placeholder="Choose Password"
                onFocus={handlePasswordFocus}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}



              />
              {passwordFocus && (
                <p className="input-text">Input password</p>
              )}
              <br />
             
              <Button
                // onClick={handleNextStep}
                type="submit"
                className="sign-up-button"
              >
                Next
              </Button>
            </Form>
   
          <p className="login-text">
          Need an account?<a href="#">Sign up</a>
          </p>
          <p className="recover-pswrd">Recover password</p>
 
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginCard;
