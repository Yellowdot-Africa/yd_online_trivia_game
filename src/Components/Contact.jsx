import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setMobile,
  setEmail,
  setMessage,
  setSubject,
  submitContactForm,
  resetForm,
} from "../features/ContactUs/contactusSlice";
import CustomButton from "../Components/CustomButton";
import { Circles } from "react-loader-spinner";
import "../Styles/Contact.css";

const Contact = () => {
  const dispatch = useDispatch();
  const { name, mobile, email, message, subject, isLoading, error, success } =
    useSelector((state) => state.contactUs);
  const token = useSelector((state) => state.auth.jwt);
  const loading = useSelector((state) => state.leaderboard.loading);

  const [buttonText, setButtonText] = useState("Submit");
  const [buttonColor, setButtonColor] = useState("#54349F66");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      name,
      mobile,
      email,
      message,
      subject,
    });
    dispatch(submitContactForm({ name, mobile, email, message, subject }));
  };

  useEffect(() => {
    if (success) {
      console.log("Form submitted successfully");
      setButtonText("Sent");
      setButtonColor("#3D9F34");
      dispatch(resetForm());
    }
  }, [success, dispatch, token]);

  useEffect(() => {
    if (isLoading) {
      setButtonText("Processing...");
    } else if (!success) {
      setButtonText("Submit");
      setButtonColor("#54349F");
    }
  }, [isLoading, success, token]);

  return (
    <>
      <div className="contact-container">
        <div className="contact-section">
          <h4>Feedback Section</h4>
          <p>
            Please input your details and comments to get in touch with our
            support team.
          </p>
          {success && <p className="success">Message sent successfully!</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              type="number"
              placeholder="Number"
              value={mobile}
              onChange={(e) => dispatch(setMobile(e.target.value))}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => dispatch(setSubject(e.target.value))}
              required
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Comment"
              value={message}
              onChange={(e) => dispatch(setMessage(e.target.value))}
            />

            <button
              type="submit"
              className="contact-button"
              disabled={
                isLoading || !(name && mobile && email && message && subject)
              }
            >
              {isLoading ? (
                <Circles color="#FFFFFF" height={20} width={20} />
              ) : (
                "submit"
              )}
            </button>
          </form>
          {error && <p className="error">Error: {error}</p>}
        </div>
      </div>
    </>
  );
};

export default Contact;
