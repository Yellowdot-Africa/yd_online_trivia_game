import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { login } from "../features/auth/authSlice";
import { Circles } from "react-loader-spinner";
import eye from "../assets/Icons/eye.png";
import eyeHidden from "../assets/Icons/eye-off.png";
import "../Styles/Login.css";
import { setWalletBalance } from "../features/wallet/walletSlice";

const LoginForm = ({ isLoginOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, loginError } = useSelector((state) => state.auth);
  const [errorText, setErrorText] = useState(null);
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [msisdnFocus, setMsisdnFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  // const initialValues = {
  //   loginMethod: "" ? "email" : "phone",
  //   username: "",
  //   password: "",
  // };

  const initialValues = {
    loginMethod: "phone",
    phoneNumber: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    loginMethod: Yup.string().required("Login method is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{7,14}$/, "Please input a valid phone number")
      // .matches(/^(0|)\d{9,13}$/, "Please input a valid phone number")

      .nullable(),
    email: Yup.string().email("Please input a valid email address").nullable(),
    password: Yup.string().required("Please input your password"),
  });

  // const formatPhoneNumber = (phoneNumber) => {
  //   if (phoneNumber.startsWith("234")) {
  //     return "0" + phoneNumber.slice(3);
  //   }

  //   if (phoneNumber.startsWith("0")) {
  //     return phoneNumber;
  //   }

  //   // return phoneNumber;
  //   return "0" + phoneNumber;
  // };

  const handleSubmit = (values) => {
    setIsButtonClicked(true);
    const { loginMethod, phoneNumber, email, password } = values;
    const username = loginMethod === "phone" ? phoneNumber : email;
    // loginMethod === "phone" ? formatPhoneNumber(phoneNumber) : email;
    // setSubmitting(true);
    dispatch(login({ username, password }))
      .then((action) => {
        if (login.fulfilled.match(action)) {
          const token = action.payload.jwt;
          localStorage.setItem("jwt", token);
          dispatch(setWalletBalance(action.payload.walletBalance));
          navigate("/loading");
        } else {
          setErrorText("Login failed. Please try again.");
        }
      })
      //     .catch((error) => {
      //       if (error.response) {
      //         setErrorText(error.response.data.message || "Login failed");
      //       } else {
      //         setErrorText(error.message || "An error occurred. Please try again.");
      //       }
      //     });
      // };

      .catch((error) => {
        if (error.response) {
          setErrorText(error.message);
          dispatch(loginFailed(error.message));
          setErrorText(error.response.data.message || "Login failed");
          dispatch(loginFailed(error.response.data.message));
          console.error("Login failed:", error);
        } else {
          setErrorText(error.message || "An error occurred. Please try again.");
          setErrorText(error);
        }
      });
  };

  const handlePasswordChange = (e, handleChange) => {
    setIsPasswordTyped(e.target.value.length > 0);
    handleChange(e);
  };

  return (
    <div className="login-form-cont">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, handleChange }) => (
          <Form className={`login-form ${isLoginOpen ? "open" : ""}`}>
            {values.loginMethod === "phone" && (
              <>
                {/* <PhoneInput
                  country={"ng"}
                  className="phoen-input"
                  value={values.phoneNumber}
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  autoComplete="username"
                  onChange={(value) => setFieldValue("phoneNumber", value)}
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                    autoFocus: true,
                  }}
                /> */}
                <Field
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  autoComplete="username"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />

                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="error-input-textt"
                />
                {msisdnFocus && (
                  <p className="inputt-textt">Please input your Phone Number</p>
                )}
              </>
            )}
            {values.loginMethod === "email" && (
              <>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="error-input-textt"
                />
                {/* {emailFocus && (
                  <p className="inputt-textt">Please input your email</p>
                )} */}
              </>
            )}
            <div className="password-input-container">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={values.password}
                onChange={(e) => handlePasswordChange(e, handleChange)}
              />
              <img
                src={showPassword ? eye : eyeHidden}
                alt={showPassword ? "Hide password" : "Show password"}
                className="toggle-password-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="error-input-textt"
            />
            {passwordFocus && (
              <p className="inputt-textt">Please input your password</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                backgroundColor: isPasswordTyped ? "#54349f" : "defaultColor",
              }}
            >
              {status === "loading" ? (
                <Circles color="#D9D9D9" height={20} width={20} />
              ) : (
                "Login"
              )}
            </button>
            <br />
            {isButtonClicked && loginError && (
              <p className="error-input-text">{loginError}</p>
            )}
            <div className="login-method-selector">
              {values.loginMethod === "phone" ? (
                <a
                  href="#email"
                  className="active"
                  onClick={() => setFieldValue("loginMethod", "email")}
                >
                  Use Email
                </a>
              ) : (
                <a
                  href="#phonenumber"
                  className="active"
                  onClick={() => setFieldValue("loginMethod", "phone")}
                >
                  Use Phone Number
                </a>
              )}
            </div>

            <div className="forgot-password">
              <a onClick={() => navigate("/forgot-password")}>
                Forgot Password?
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;



