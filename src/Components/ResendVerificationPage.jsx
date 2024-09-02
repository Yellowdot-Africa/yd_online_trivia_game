import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/ResendVerification.css'; 

const ResendVerificationPage = () => {
    const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleResend = async () => {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.get(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Authorization/ResendVerifyEmail?username=${username}`);
      

      if (response.status === 200) {
        setMessage('A new verification email has been sent. Please check your inbox.');
      } else {
        const apiErrorMessage = response.data?.message || 'Failed to send verification email. Please try again later.';
        setError(apiErrorMessage);
      }
    } catch (err) {
        const apiErrorMessage = err.response?.data?.message || 'An error occurred while trying to resend the email. Please try again.';
        setError(apiErrorMessage);
        } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resend-verification-page">
      <h1>Resend Verification Email</h1>
      <p>Please enter your email address to resend the verification email.</p>
      <input
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your email address"
      />
      <button onClick={handleResend} disabled={loading}>
        {loading ? 'Sending...' : 'Resend Verification Email'}
      </button>
      {message && <p className="success-messagee">{message}</p>}
      {error && <p className="error-messagee">{error}</p>}
      <button onClick={() => navigate('/')}>Back to Login</button>
    </div>
  );
};

export default ResendVerificationPage;
