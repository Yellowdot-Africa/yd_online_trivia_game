import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import eye from "../assets/Icons/eye.png";
import eyeHidden from "../assets/Icons/eye-off.png";
import { useNavigate } from "react-router-dom";
import { signup } from "../features/auth/authSlice";
import { Circles } from "react-loader-spinner";
import "../Styles/SignUp.css";

const SignUpForm = ({ isSignUpOpen, navigateToLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupState = useSelector((state) => state.auth);
  const { status, signUpError } = signupState || {
    status: "idle",
    signUpError: null,
  };
  const [emailFocus, setEmailFocus] = useState(false);
  const [msisdnFocus, setMsisdnFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    email: "",
    msisdn: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .test("is-valid-email", "Please use a valid email provider", (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      })
      .required("Please input your email"),
    msisdn: Yup.string()
      .test("valid-phone", "Invalid phone number", (value) => {
        const phoneNumber = parsePhoneNumberFromString(value, "NG");
        return phoneNumber && phoneNumber.isValid();
      })
      .required("Please input your phone number"),
    username: Yup.string().required("Please input your username"),
    password: Yup.string().required("Please input your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await dispatch(signup(values)).unwrap();

      if (result.message === "User Created Successfully") {
        setErrorMessage(
          "Signup successful! Please check your email to verify your account."
        );
        navigate("/email-confirmation");
        // navigateToLogin();
      } else {
        setErrorMessage("Signup successful, but no user data was returned");
      }
    } catch (err) {
      console.error("Signup error:", err);

      if (err.message === "User exist with same email or MSISDN!") {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Signup failed. Please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-form-cont">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={`signup-form ${isSignUpOpen ? "open" : ""}`}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <ErrorMessage name="email" component="p" className="error-text" />
            {emailFocus && (
              <p className="inputt-textt">Please input your email</p>
            )}

            <Field
              type="tel"
              name="msisdn"
              placeholder="+234"
              autoComplete="tel"
              onFocus={() => setMsisdnFocus(true)}
              onBlur={() => setMsisdnFocus(false)}
            />
            <ErrorMessage name="msisdn" component="p" className="error-text" />
            {msisdnFocus && (
              <p className="inputt-textt">Please input your Phone Number</p>
            )}

            <Field
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <ErrorMessage
              name="username"
              component="p"
              className="error-text"
            />
            {usernameFocus && (
              <p className="inputt-textt">Please input your username</p>
            )}
            <div className="password-input-container">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
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
              className="error-text"
            />
            {passwordFocus && (
              <p className="inputt-textt">Please input your password</p>
            )}
            <div className="password-input-container">
              <Field
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="new-password"
                onFocus={() => setConfirmPasswordFocus(true)}
                onBlur={() => setConfirmPasswordFocus(false)}
              />
              <img
                src={showPassword ? eye : eyeHidden}
                alt={showPassword ? "Hide password" : "Show password"}
                className="toggle-password-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
            <ErrorMessage
              name="confirmPassword"
              component="p"
              className="error-text"
            />
            {confirmPasswordFocus && (
              <p className="inputt-textt">Please confirm your password</p>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Circles color="#D9D9D9" height={20} width={20} />
              ) : (
                "Sign Up"
              )}
            </button>
            <br />
            {signUpError && <p className="error-text">{signUpError}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
