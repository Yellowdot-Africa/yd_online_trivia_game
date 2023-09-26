import React, { useState } from "react";
import "../../Styles/SignIn.css";
import Form from "react-bootstrap/Form";
import logo from "../../assets/Images/ydlogo.png";
import HandPointUp from "../../assets/icons/handup.svg";
import HandPointDown from "../../assets/icons/handdown.svg";
import CustomButton from "../Common/CustomButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import * as Yup from "yup";

const SignIn = () => {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState("Choose plan");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState(null);
  const [infoText, setInfoText] = useState("fill in appropriate info");
  const [handImage, setHandImage] = useState(HandPointUp);
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "rgba(86, 86, 92, 0.40)",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "800",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    borderRadius: "24px",
    width: "222px",
  });
  const [isLoading, setIsLoading] = useState(false);
 
 

  const validationSchema = Yup.object().shape({
    msisdn: Yup.string()
      .required("MSISDN is required")
      .matches(/^\d+$/, "MSISDN must be a valid number"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const handlePlanSelect = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleSignIn = async () => {
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
      console.log(response);
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.jwt);
        sessionStorage.setItem("userId", response.data.userID);
        console.error(response.data);
        navigate("/landingpage");
      } else {
        setInfoText("An error occurred. Please try again later.");
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrorText(validationErrors.msisdn || validationErrors.password);
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.statusCode === "300"
      ) {
        setErrorText(error.response.data.message);
      } else {
        setErrorText("An error occurred. Please try again later.");
      }
    }
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setInfoText("nice !");
    setErrorText(null);
    setHandImage(HandPointDown);
    setButtonStyle({
      backgroundColor: "#1D1DB9",
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: "800",
      boxShadow: "0px 0px 2px 0px #6B6BD1",
      borderRadius: "24px",
      width: "222px",
    });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="sign-in-container">
          <div className="sign-in-header">
            <img src={logo} alt="logo" />
          </div>
          <div className="form">
            <div className="select-box">
              <Form.Select
                aria-label="Default"
                value={selectedPlan}
                onChange={handlePlanSelect}
              >
                <option> Choose plan</option>
                <option value="50 Naira plan">50 Naira plan</option>
              </Form.Select>
            </div>

            <Form.Label htmlFor="inputNumber"></Form.Label>
            <Form.Control
              type="number"
              placeholder="msisdn"
              id="inputNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              isInvalid={!!errorText}
            />
            <Form.Label htmlFor="inputPassword"></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="inputPassword"
              value={password}
              onChange={handlePasswordChange}
              isInvalid={!!errorText}
            />
          </div>
          {infoText && <p className="fill-info">{infoText}</p>}
          {errorText && <p className="fill-info">{errorText}</p>}
          <img src={handImage} alt="handpoint" />
          
          <CustomButton
            buttonText={"Start Trivia"}
            style={buttonStyle}
            onClick={handleSignIn}
            disabled={isLoading}
            loading={isLoading} 

          />
           {/* {isLoading && (
    <div className="loading">
    
   <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
     
    </div>
 )} */}
      
          <div className="account">
            <p>Don't have an account?</p>
            <Link to="/createuser" className="create">
              Sign up
            </Link>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default SignIn;
