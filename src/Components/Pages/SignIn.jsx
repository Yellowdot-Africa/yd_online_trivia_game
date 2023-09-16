import React, { useState } from "react";
import "../../Styles/SignIn.css";
import Form from "react-bootstrap/Form";
import logo from "../../assets/Images/ydlogo.png";
import HandPointUp from "../../assets/icons/handup.svg";
import HandPointDown from "../../assets/icons/handdown.svg";
import CustomButton from "../Common/CustomButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const buttonText = "Start Trivia";
  const [selectedPlan, setSelectedPlan] = useState("Choose plan");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState(""); 
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

  const handlePlanSelect = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Authorization/Login",
        {
          username: phoneNumber,
          password: password,
        },
      );
      console.log(response);
      if (response.status === 200) {
        sessionStorage.setItem("token",response.data.jwt);
        console.error(response.data)
        navigate("/landingpage");
      }else{
        setInfoText("An error occurred. Please try again later.");
      }
    } catch (error) {
      if(error.response.data.statusCode=="300"){
        setInfoText(error.response.data.message);
      }else{
        setInfoText("Oops!!! Something Went Wrong");
      }
     
      // if (error.response && error.response.statusCode === "300") {
      //   setInfoText(error.response.message);
      //   console.error(response.data)
      // } else {
      //   setInfoText(error.response.message);
      //   // console.error(response.data)

      // }
    } 
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setInfoText("nice !");
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
            <Form.Select
              aria-label="Default select example"
              value={selectedPlan}
              onChange={handlePlanSelect}
            >
              <option>Choose plan</option>
              <option value="50 Naira plan">50 Naira plan</option>
            </Form.Select>
            <Form.Label htmlFor="inputNumber"></Form.Label>
            <Form.Control
              type="number"
              // placeholder="+234"
              id="inputNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <Form.Label htmlFor="inputPassword"></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="inputPassword"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <p className="fill-info">{infoText}</p>
          <img src={handImage} alt="handpoint" />
          <CustomButton
            buttonText={buttonText}
            style={buttonStyle}
            onClick={handleSignIn}
            disabled={isLoading}
          />
          <div className="account">
      <p>Don't have an account?</p>
      <Link to="/" className="create">
         Sign up
        </Link>
        </div>
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
    </>
  );
};

export default SignIn;
