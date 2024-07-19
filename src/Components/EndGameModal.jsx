import React from 'react';
import '../Styles/EndModal.css';

const EndGameModal = ({ isOpen, onClose, onEnd }) => {
  if (!isOpen) return null;

  return (
    <>
    <div className='overlay-modal-cont'>
    <div className="end-modal-overlay">
      <div className="end-modal-content">
        <div className='end-game-content'>
        <h3>End game</h3>
        <button className="end-close-button" onClick={onClose}>X</button>
        </div>
        <p>Are you sure you want to end? We record your acquired tokens.</p>
        <button className="end-button" onClick={onEnd}>End</button>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default EndGameModal;














  
