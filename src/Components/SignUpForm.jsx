import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signup } from "../features/auth/authSlice";
import { Circles } from 'react-loader-spinner'; 
import '../Styles/SignUp.css';
import Modal from "react-modal";
import ErrorModal from "../Components/ErrorModal";


const SignUpForm = ({ isSignUpOpen, navigateToLogin }) => {
  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.signup);
  const { status, error } = signupState || { status: 'idle', error: null }; 
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const initialValues = {
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please input your email'),
    phoneNumber: Yup.string()
      .matches(/^\d{7,14}$/, 'Invalid phone number format')
      .required('Please input your phone number'),
    username: Yup.string().required('Please input your username'),
    password: Yup.string().required('Please input your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await dispatch(signup(values)).unwrap();
      navigateToLogin(); 
    } catch (err) {
      console.error('Signup failed:', err);
      if (err.message === "User exist with same email or MSISDN!") {
        // setErrorMessage(err.message);
        setErrorMessage("User exist with same email or MSISDN!");

        setShowErrorModal(true);
        console.log("Setting showErrorModal to true");

      } else {
        setErrorMessage("Signup failed. Please try again later.");
        setShowErrorModal(true);
        setModalIsOpen(true);
        // console.log("Error message is now set, modal should open up.");

      }
    } finally {
      setSubmitting(false);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };


  return (
    <div className="signup-form-cont">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={`signup-form ${isSignUpOpen ? 'open' : ''}`}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <ErrorMessage name="email" component="p" className="error-text" />
            {emailFocus && <p className="inputt-textt">Please input your email</p>}

            <Field
              type="tel"
              name="phoneNumber"
              placeholder="+234"
              autoComplete="tel"
              onFocus={() => setPhoneNumberFocus(true)}
              onBlur={() => setPhoneNumberFocus(false)}
            />
            <ErrorMessage name="phoneNumber" component="p" className="error-text" />
            {phoneNumberFocus && <p className="inputt-textt">Please input your phone number</p>}

            <Field
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <ErrorMessage name="username" component="p" className="error-text" />
            {usernameFocus && <p className="inputt-textt">Please input your username</p>}

            <Field
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <ErrorMessage name="password" component="p" className="error-text" />
            {passwordFocus && <p className="inputt-textt">Please input your password</p>}

            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="new-password"
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
            <ErrorMessage name="confirmPassword" component="p" className="error-text" />
            {confirmPasswordFocus && <p className="inputt-textt">Please confirm your password</p>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Circles color="#D9D9D9" height={20} width={20} />
              ) : (
                "Sign Up"
              )}
            </button>
          </Form>
         
        )}
        
      </Formik>
      {showErrorModal && (
            <ErrorModal message={errorMessage} onClose={closeErrorModal} />
          )}
     
    </div>
  );
};

export default SignUpForm;






