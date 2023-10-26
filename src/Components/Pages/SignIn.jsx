import React, { useState } from "react";
import "../../Styles/SignIn.css";
import Form from "react-bootstrap/Form";
import logoDesktop from "../../assets/Images/YellowDotTrivia.png";
import logo from "../../assets/Images/ydlogo.png";
import HandPointUp from "../../assets/icons/handup.svg";
import HandPointDown from "../../assets/icons/handdown.svg";
import DesktopImg1 from "../../assets/Images/Ellipse1.png";
import DesktopImg2 from "../../assets/Images/Ellipse2.png";
import DesktopImg3 from "../../assets/Images/Ellipse3.svg";
import CustomButton from "../Common/CustomButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import eye from "../../assets/icons/eye.svg";
import eyeHidden from "../../assets/icons/eye-slash.svg";
import axios from "axios";
import * as Yup from "yup";


const SignIn = () => {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState("Choose plan");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [eyeImageSrc, setEyeImageSrc] = useState(eyeHidden);
  const [errorText, setErrorText] = useState(null);
  const [infoText, setInfoText] = useState("fill in appropriate info");
  const [handImage, setHandImage] = useState(HandPointUp);
  const [userRank, setUserRank] = useState("");
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState(null);

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
      // console.log(response);
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.jwt);
        sessionStorage.setItem("userId", response.data.userID);
        console.error(response.data);

        navigate("/landingpage");
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


  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    handleInfoText(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    handleInfoText(phoneNumber, event.target.value);
  };
  const handleInfoText = (msisdn, userPassword) => {
    if (msisdn.trim() !== "" && userPassword.trim() !== "") {
      setInfoText("nice!");
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
    } else {
      setInfoText("fill in appropriate info");
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
        <div className="sign-in-container">
          <div className="sign-in-header">
            <img className="mobile-logo" src={logo} alt="logo" />
            <img
              className="desktop-logo"
              src={logoDesktop}
              alt="logo-desktop"
            />
          </div>
          <div className="form">
            <Form.Label htmlFor="inputNumber"></Form.Label>
            <Form.Control
              type="number"
              placeholder="msisdn"
              id="inputNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              isInvalid={!!errorText}
            />
            <div className="rel">
              <Form.Label htmlFor="inputPassword"></Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="inputPassword"
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!!errorText}
                className="password-input"
              />
              {errorText && !isLoading ? null : (
                <img
                  src={eyeImageSrc}
                  alt="Toggle Password"
                  className="eye-icon"
                  onClick={() => {
                    setShowPassword(!showPassword);
                    setEyeImageSrc(showPassword ? eyeHidden : eye);
                  }}
                />
              )}
            </div>
          </div>
          {infoText && <p className="fill-info">{infoText}</p>}
          {errorText && <p className="fill-info">{errorText}</p>}
          <img className="hand-img" src={handImage} alt="handpoint" />

          <CustomButton
            buttonText={"Start Trivia"}
            style={buttonStyle}
            onClick={handleSignIn}
            disabled={isLoading}
            loading={isLoading}
          />

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



