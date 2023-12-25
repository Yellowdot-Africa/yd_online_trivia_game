import React from "react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2> Support and Enquiries</h2>
        <p>Please, Leave us your email address and we will be in touch.</p>
       <div className="email-form">
        <input type="email" placeholder="Enter email address" />
        <button className="custom-button" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default ContactSection;
