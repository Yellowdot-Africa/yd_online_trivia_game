import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";

import "../Styles/ForgotPassword.css";


const ForgotPassword = () => {
  const [resetRequested, setResetRequested] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); 
  const token = useSelector((state) => state.auth.jwt);



  const handleResetRequest = async (values) => {
    try {
      await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Authorization/ResetPasswordRequest",
        { emailOrPhone: values.emailOrPhone },
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );
      setSuccessMessage("Reset code sent successfully!");
      setErrorMessage("");
      setResetRequested(true);
    } catch (error) {
        setErrorMessage("Error requesting reset code.", error);
        setSuccessMessage(""); 
    }
  };

  const handleResetPassword = async (values) => {
    try {
      await axios.put(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Authorization/ResetPassword",
        {
          newPassord: values.newPassword,
          resetCode: values.resetCode,
        },
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );
      setSuccessMessage("Password reset successful! Redirecting to login...");
      setErrorMessage("");
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
        } catch (error) {
            setErrorMessage("Error resetting password.", error);
            setSuccessMessage(""); 
    }
  };




  const resetRequestSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required("Email or phone number is required"),
  });

  const resetPasswordSchema = Yup.object().shape({
    resetCode: Yup.string().required("Reset code is required"),
    newPassword: Yup.string().min(6, "Password must be at least 6 characters").required("New password is required"),
  });


 


 


  return (
    <div className="forgot-password-form">
         {errorMessage && <div className="errorr-message">{errorMessage}</div>}
      {successMessage && <div className="successs-message">{successMessage}</div>}

      {!resetRequested ? (
        <Formik
        key="request-reset"
          initialValues={{ emailOrPhone: "" }}
          validationSchema={resetRequestSchema}
          onSubmit={handleResetRequest}
        >
          <Form>
          <h2>Forgot Password</h2>

            <Field
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone"
            />
            <ErrorMessage name="emailOrPhone" component="p" className="error-input-text"/>
            <button type="submit">Request Reset Code</button>
          </Form>
        </Formik>
      ) : (
        <Formik
        key="reset-password"
          initialValues={{ resetCode: "", newPassword: "" }}
          validationSchema={resetPasswordSchema}
          onSubmit={handleResetPassword}
        >
          <Form>
            <h2>Reset Password</h2>
            <Field
              type="text"
              name="resetCode"
              placeholder="Reset Code"
            />
            <ErrorMessage
              name="resetCode"
              component="p"
              className="error-input-text"
            />
            <Field
              type="password"
              name="newPassword"
              placeholder="New Password"
            />
            <ErrorMessage
              name="newPassword"
              component="p"
              className="error-input-text"
            />
            <button className="forgot-button" type="submit">Reset Password</button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default ForgotPassword;




