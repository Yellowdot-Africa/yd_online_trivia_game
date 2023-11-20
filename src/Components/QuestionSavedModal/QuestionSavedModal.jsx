import React from 'react';
import "../../Components/QuestionSavedModal/QuestionSavedModal.css";

const QuestionSavedModal=({isVisible, onClose})=> {
  return (
    <>
              {isVisible && (
        <>
          <div className="backdrop" />
          <div className="question-saved-modal visible">
            <div className="overlay" onClick={onClose}></div>
            <div className="question-saved-modal-content">
              <h3>Question Saved</h3>
              <p>Do you want to add another</p>
            <span className='que-savd-btn'>No, Save</span>
              <span className='que-savd-bttn'>Yes, Add new</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default QuestionSavedModal;