import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Card2 from "../../assets/Images/card2-icon.png";
import { useNavigate } from "react-router-dom";
import "../../Styles/Card.css";
import LoginModal from "../LoginModal";

const LoginCard = () => {
  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);

  // const handleShowModal = () => {
  //   setShowLoginModal(true);
  //   document.body.classList.add("blur");
  // };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);

    document.body.classList.add("blur");
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);  

    document.body.classList.remove("blur");
  };
  
  
  return (
    <>
      <div className="second-card">
        <img src={Card2} alt="card-two" />
        <h3>Log in to your account</h3>
        <button onClick={handleShowLoginModal}>Here</button>
        {/* {showLoginModal && <LoginModal show={show} handleClose={handleCloseModal} />} */}
        <LoginModal show={showLoginModal} handleClose={handleCloseModal} />

      </div>

      <div className="second-card-mobile">
      <h3>Log in to your account</h3>
        <div className="mobile-btn-img">
        <button onClick={handleShowLoginModal}>Here</button>
        <img src={Card2} alt="card-two" />
        <LoginModal show={showLoginModal} handleClose={handleCloseModal} />

        </div>
      </div>
    </>
  );
};

export default LoginCard;





