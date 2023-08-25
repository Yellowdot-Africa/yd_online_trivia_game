import React from "react";
import CustomButton from "./CustomButton";
import "../../Styles/Faqs.css";

const Faqs = () => {
  const buttonText = "Start Trivia";
  const buttonStyle = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.24) 0%, rgba(29, 29, 185, 0.40) 100%)",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
  };
  return (
    <>
      <div className="faq">
        <h4 className>FAQ'S</h4>
        {/* </div> */}
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
