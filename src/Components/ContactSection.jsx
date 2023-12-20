import React from "react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>For support and enquiries, leave us your email address.</h2>
       <div className="email-form">
        <input type="email" placeholder="Enter email address" />
        <button className="custom-button" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ContactSection;
