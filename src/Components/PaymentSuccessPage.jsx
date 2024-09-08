import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const paymentReference = queryParams.get('tx_ref'); // Get payment reference from URL
  const amountPaid = queryParams.get('amount');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (paymentReference) {
      // Call AddUnits API to update the wallet
      updateWallet(paymentReference, amountPaid);
    }
  }, [paymentReference, amountPaid]);

  const updateWallet = async (reference, amount) => {
    try {
      const response = await axios.post('https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/AddUnits', {
        units: units, 
        amountPaid: amount,
        paymentSource: 'Web',
        paymentReferenceNumber: reference,
        comments: 'Added using Flutterwave online payment',
      });

      if (response.data.success) {
        setStatus('successful');
        navigate('/account'); 
      } else {
        setStatus('failed');
      }
    } catch (error) {
      console.error('Error updating wallet:', error);
      setStatus('failed');
    }
  };

  return (
    <div>
      <h2>Payment Status</h2>
      <p>Status: {status}</p>
    </div>
  );
};

export default PaymentSuccessPage;





