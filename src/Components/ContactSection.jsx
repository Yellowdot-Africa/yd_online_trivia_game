import React from "react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2> Would you like to stay updated?</h2>
        <p>Would you like to receive news on updates and new features, kindly leave your email and we would be in touch</p>
       <div className="email-form">
        <input type="email" id="email"/>
        <button className="custom-button" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ContactSection;
