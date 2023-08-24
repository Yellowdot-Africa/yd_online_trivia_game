import React, { useState } from "react";
import "../../Styles/Rules.css";
import CustomButton from "./CustomButton";
// import { Link } from 'react-router-dom';
import Faqs from "./Faqs";


const Rules = () => {
  const buttonText = "Start Trivia";
  const buttonStyle = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.24) 0%, rgba(29, 29, 185, 0.40) 100%)",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
  };

  const [index, setIndex] = useState(0);


  return (
    <>
      <div>
        <h4>Rules</h4>
      </div>
      <div className="rules-container">
        <div className="rules-text">
          <ul>
            <li>Answer two questions to enter for the daily draw </li>
            <li>
              Pick from options in each question to move to the next level
            </li>
            <li>All terms and conditions must be observed.</li>
          </ul>
        </div>
        <a className="learn-more" onClick={() => setIndex(5)}>
          Learn more
        </a>
        {/* <Link to="/faqs" className="learn-more">
          Learn more
        </Link> */}
      </div>
      <div className="button-cont">
        <CustomButton buttonText={buttonText} style={buttonStyle} />
      </div>
      <div>
      {index === 5 && <Faqs />}
      </div>
    </>
  );
};

export default Rules;
