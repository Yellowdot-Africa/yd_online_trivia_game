import React, { useState } from "react";
import "../../Styles/Rules.css";
import CustomButton from "../Common/CustomButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Rules = () => {
  const navigate = useNavigate();

  const buttonText = "Start Trivia";
  const buttonStyle = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.24) 0%, rgba(29, 29, 185, 0.40) 100%)",
    boxShadow: "0px 0px 2px 0px #6B6BD1",
    width:"70vw",
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

        <Link to="/faqs" className="learn-more">
          FAQ'S
        </Link>
      </div>
      <div className="button-cont">
        <CustomButton buttonText={buttonText} 
        style={buttonStyle}
        onClick={() => navigate("/game-info")}

        />
      </div>
      <div></div>
    </>
  );
};

export default Rules;
