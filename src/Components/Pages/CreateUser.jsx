import React, { useState } from "react";
import "../../Styles/CreateUser.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import logoDesktop from "../../assets/Images/YellowDotTrivia.png";
import logo from "../../assets/Images/ydlogo.png";
import CustomButton from "../Common/CustomButton";
import DesktopImg1 from "../../assets/Images/Ellipse1.png";
import DesktopImg2 from "../../assets/Images/Ellipse2.png";
import DesktopImg3 from "../../assets/Images/Ellipse3.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const CreateUser = () => {
  const navigate = useNavigate();
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
    width: "222px",
    margin: "20px",
  };
  const token = sessionStorage.getItem("token");

  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    msisdn: "",
    password: "",
  });

  const [registrationError, setRegistrationError] = useState({});
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    msisdn: Yup.string()
      .required("MSISDN is required")
      .matches(/^\d+$/, "MSISDN must be a valid number"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const handleUserRegistration = async () => {
    try {
      await validationSchema.validate(registrationData, { abortEarly: false });

      setLoading(true);
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/CreateUser",
        registrationData,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("User registration successful:", response.data);
      setShowSuccessMessage(true);
      // console.log("User registration successful:", response.data);

      setTimeout(() => {
        navigate("/");
      }, 5000);

      // console.log("registrationData:", registrationData);
      // console.log("registrationError:", registrationError);
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
      } else {
        setRegistrationError(
          "Error registering user: " + "internal server error"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="desktop-images">
          <img className="img1" src={DesktopImg1} alt="Desktop-Image-1" />
          <img className="img2" src={DesktopImg2} alt="Desktop-Image-2" />
          <img className="img3" src={DesktopImg3} alt="Desktop-Image-3" />
        </div>
        <div className="create-user-container">
          <div className="create-user-header">
            <img className="mobile-logo" src={logo} alt="logo" />
            <img
              className="desktop-logo"
              src={logoDesktop}
              alt="logo-desktop"
            />
          </div>
          <div className="reg-form">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="First Name"
                aria-label="First Name"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    firstName: e.target.value,
                  });
                }}
                value={registrationData.firstName}
                isInvalid={!!registrationError.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {registrationError.firstName}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Last Name"
                aria-label="Last Name"
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    lastName: e.target.value,
                  })
                }
                value={registrationData.lastName}
                isInvalid={!!registrationError.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {registrationError.lastName}
              </Form.Control.Feedback>
            </InputGroup>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    email: e.target.value,
                  })
                }
                value={registrationData.email}
                isInvalid={!!registrationError.email}
              />
              <Form.Control.Feedback type="invalid">
                {registrationError.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* <Form.Label htmlFor="msisdn"></Form.Label> */}
            <Form.Control
              type="number"
              placeholder="MSISDN"
              id="msisdn"
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  msisdn: e.target.value,
                })
              }
              value={registrationData.msisdn}
              isInvalid={!!registrationError.msisdn}
            />
            <Form.Control.Feedback type="invalid">
              {registrationError.msisdn}
            </Form.Control.Feedback>

            <Form.Label htmlFor="inputPassword"></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="inputPassword"
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  password: e.target.value,
                })
              }
              value={registrationData.password}
              isInvalid={!!registrationError.password}
            />
            <Form.Control.Feedback type="invalid">
              {registrationError.password}
            </Form.Control.Feedback>
          </div>
          <div className="button-wrapper">
            <CustomButton
              onClick={handleUserRegistration}
              style={buttonStyles}
              buttonText={"Sign Up"}
              disabled={
                !registrationData.email ||
                !registrationData.password ||
                !registrationData.firstName ||
                !registrationData.lastName ||
                !registrationData.msisdn
              }
              loading={loading}
            />
          </div>
          {registrationError && registrationError.message && (
            <p className="error">{registrationError.message}</p>
          )}
          {showSuccessMessage ? (
            <p className="success">
              Registration Successful! Redirecting to Sign In...
            </p>
          ) : (
            <div></div>
          )}
          <div className="account">
            <p>Already have an account?</p>
            <Link to="/" className="sign">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
