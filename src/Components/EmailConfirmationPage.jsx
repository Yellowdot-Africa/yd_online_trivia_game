import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/EmailConfirmation.css'; 

const EmailConfirmationPage = () => {
  return (
    <>
    <div className="confirmation-page">
      <h1>Check Your Email</h1>
      <p>
        An email has been sent to you with a verification link. Please check your inbox and follow the instructions to verify your email address.
      </p>
      <p>
        If you don't see the email, check your spam folder or <Link to="/resend-verification">click here to resend the verification email</Link>.
      </p>
      <Link to="/" className='return-to-login'>Return to Login</Link>
    </div>
    </>
  );
};

export default EmailConfirmationPage;
