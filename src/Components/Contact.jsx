import React, {useState} from "react";
import CustomButton from "../Components/CustomButton";
import "../Styles/Contact.css";


const Contact = () => {
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const buttonStyle = {
        borderRadius: "23px",
        color: "#FFFFFF",
        fontFamily: "Inter,sans-serif",
        fontSize: "16px",
        fontWeight: "500",
        padding: "0",
        width: "125px",
        // backgroundColor: inputValue ? "#54349F" : "#54349F66",
        backgroundColor: loading ? "#54349F66" : (submitted ? "#3D9F34" : (inputValue ? "#54349F" : "#54349F66")),
        marginLeft: "-170px",
        
    };

  return (
    <>
      <div className="contact-container">
        <div className="contact-section">
          <h4>We would love your feedback</h4>
          <p>Please input your details and comments to get in touch with our support team.</p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Number" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Comment" />
          
          
          <CustomButton
           buttonText={loading ? "Processing..." : (submitted ? "Sent" : "Submit")}
           style={buttonStyle}
           disabled={loading || !inputValue}
          />



        </div>
      </div>
    </>
  );
};

export default Contact;







