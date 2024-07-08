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
import "../Styles/Contact.css";

const Contact = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { name, mobile, email, message, subject, isLoading, error, success } =
    useSelector((state) => state.contactUs);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm({ name, mobile, email, message, subject }));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetForm());
    }
  }, [success, dispatch]);

  // const buttonStyle = {
  //   borderRadius: "23px",
  //   color: "#FFFFFF",
  //   fontFamily: "Inter,sans-serif",
  //   fontSize: "16px",
  //   fontWeight: "500",
  //   padding: "0",
  //   width: "125px",
  //   // backgroundColor: inputValue ? "#54349F" : "#54349F66",
  //   backgroundColor: loading
  //     ? "#54349F66"
  //     : submitted
  //     ? "#3D9F34"
  //     : inputValue
  //     ? "#54349F"
  //     : "#54349F66",
  //   marginLeft: "-170px",
  // };

  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    padding: "0",
    width: "125px",
    backgroundColor: isLoading
      ? "#54349F66"
      : success
      ? "#3D9F34"
      : name && mobile && email && message && subject
      ? "#54349F"
      : "#54349F66",
    marginLeft: "-170px",
  };


  return (
    <>
      <div className="contact-container">
        <div className="contact-section">
          <h4>We would love your feedback</h4>
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
              placeholder="subject"
              value={subject}
              onChange={(e) => dispatch(setSubject(e.target.value))}
              required
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Comment"
              value={message}
              onChange={(e) => dispatch(setMessage(e.target.value))}
            />
       
       </form>
          <CustomButton
            buttonText={isLoading ? "Processing..." : success ? "Sent" : "Submit"}

            style={buttonStyle}
            disabled={isLoading || !(name && mobile && email && message && subject)}
/>
          {isLoading && <p>Loading...</p>}
          {error && <p className="error">Error: {error}</p>}
          {/* {success && <p className="success">Message sent successfully!</p>} */}
         
        </div>
      </div>
    </>
  );
};

export default Contact;







