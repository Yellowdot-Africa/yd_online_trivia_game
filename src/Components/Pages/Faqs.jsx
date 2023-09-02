import React from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/close.png";
import CustomButton from "../Common/CustomButton";
import "../../Styles/Faqs.css";

const Faqs = () => {
  const navigate = useNavigate();

  const buttonText = "Start Trivia";
  const buttonStyle = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.24) 0%, rgba(29, 29, 185, 0.40) 100%)",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    width:"222px",
  };
  return (
    <>

      <div className="faq">
        <div className="faq-close-cont">
        <h4 className>FAQ'S</h4>
        <div className="faq-close-img-cont">
            <img
              className="close-img"
              src={closeIcon}
              alt="close"
              onClick={() => navigate("/home")}
            />
          </div>
          </div>
        <div className="faq-container">
          <div className="faq-text">
            <div className="faq-header-cont">
              <h4 className="faq-header">FAQ'S</h4>
            </div>
            <ul>
              <li>Answer two questions to enter for the daily draw </li>
              <li>
                Pick from options in each question to move to the next level
              </li>
              <li>All terms and conditions must be observed.</li>
            </ul>
          </div>
          <div className="reward-text">
            <div className="reward-cont">
              <h4>Reward claims</h4>
            </div>
            <ul>
              <li>Answer two questions to enter for the daily draw </li>
              <li>
                Pick from options in each question to move to the next level
              </li>
              <li>All terms and conditions must be observed.</li>
            </ul>
          </div>
          <div className="reward-support-text">
            <div className="rwd-support-cont">
              <h4>Reward/ Support</h4>
            </div>
            <ul>
              <li>Answer two questions to enter for the daily draw </li>
              <li>
                Pick from options in each question to move to the next level
              </li>
              <li>All terms and conditions must be observed.</li>
            </ul>
          </div>
          <div>
            <a className="learn-more" href="#">
              Terms and conditions
            </a>
          </div>
        </div>

        <div className="button-cont">
          <CustomButton buttonText={buttonText} style={buttonStyle} />
        </div>
      </div>

    </>
  );
};

export default Faqs;
