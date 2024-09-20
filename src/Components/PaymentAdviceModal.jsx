import React from "react";
import "../Styles/PaymentAdviceModal.css"; 

const PaymentAdviceModal = ({ onClose, onProceed }) => {
  return (
    <div className="advice-modal-overlay">
      <div className="advice-modal-container">
        <h2>Important Payment Notice</h2>
        <p>
          Dear user, We recommend using USSD or Card payments, as other methods may not be available at this time
        </p>
        <div className="modal-buttons">
        
          <button className="proceed-button" onClick={onClose}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentAdviceModal;
