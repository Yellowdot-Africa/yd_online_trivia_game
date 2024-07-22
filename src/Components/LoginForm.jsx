import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../features/auth/authSlice";
import { Circles } from 'react-loader-spinner';

import "../Styles/Login.css";

const LoginForm = ({ isLoginOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, loginError } = useSelector((state) => state.auth);
  const [errorText, setErrorText] = useState(null);
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);

  const initialValues = {
    loginMethod: "" ? "email" : "phone",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    loginMethod: Yup.string().required("Login method is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{7,14}$/, "Please input a valid phone number")
      .nullable(),
    email: Yup.string().email("Please input a valid email address").nullable(),
    password: Yup.string().required("Please input your password"),
  });

  const handleSubmit = (values) => {
    const { loginMethod, phoneNumber, email, password } = values;
    const username = loginMethod === "phone" ? phoneNumber : email;

    dispatch(login({ username, password }))
      .then((action) => {
        if (login.fulfilled.match(action)) {
          navigate("/loading");
        }
      })
      .catch((error) => {
        if (error.response) {
          setErrorText(error.message);
          dispatch(loginFailed(error.message));
          setErrorText(error.response.data.message || "Login failed");
          dispatch(loginFailed(error.response.data.message));
          console.error("Login failed:", error);
        } else {
          setErrorText("An error occurred. Please try again.");
          setErrorText(error);
        }
      });
  };

  const handlePasswordChange = (e, handleChange) => {
    setIsPasswordTyped(e.target.value.length > 0);
    handleChange(e);
  };

  return (
    <>
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
                  <Field
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    autoComplete="tel"
                    value={values.phoneNumber}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="error-input-text"
                  />
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
                    className="error-input-text"
                  />
                </>
              )}
              <Field
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={values.password}
                onChange={(e) => handlePasswordChange(e, handleChange)}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="error-input-text"
              />
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

              {loginError && <p className="error-input-text">{loginError}</p>}
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
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;





