import React, { useState } from "react";
import "../Questions/QuestionsScreen.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Icons/logoicon.svg";
import CustomButton from "../../Components/CustomButton";
import Prev from '../../assets/Icons/chevron-left.png';


const QuestionPack = () => {
  const [selectedPack, setSelectedPack] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  const handlePackSelect = (pack) => {
    setSelectedPack(pack);
  };

  const handleGoBack = () => {
 navigate(-1);
  };

  const btnText = "Begin";
  const buttonStyle = {
    borderRadius: "23px",
    color: "#FFFFFF",
    fontFamily: "AlpinoMedium",
    fontSize: "16px",
    fontWeight: "500",
    padding: "0",
    width: "100%",
    marginTop: "245px",
    backgroundColor: inputValue ? "#cac9cc" : "#973CF2",
  };

  const isBalanceSufficient = (pack) => {
    if (pack === "ten") {
      return balance >= 1;
    } else if (pack === "fifteen") {
      return balance >= 2;
    } else if (pack === "twenty") {
      return balance >= 4;
    } else if (pack === "twenty-five") {
      return balance >= 10;
    }
    return false;
  };

  return (
    <>
      <div className="loading-pack-container">
     
        <div className="question-details-cont">
        <div className="back-logo-cont">
        <img className="back" src={Prev} alt="prev" onClick={handleGoBack} />
        <img className="pack-logo" src={Logo} alt="logo" />

          </div>

          <p className="question-text">
            Select your <span className="span"> Football </span> Trivia question
            pack (N50 per token)
          </p>
        </div>
        <div className="question-pack">
          <div
            className={`ten-que ${
              selectedPack === "ten"
                ? "selected"
                : isBalanceSufficient("ten")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("ten")}
          >
            <p className="qque">5 Questions</p>
            <p className="naira">1 token </p>
          </div>
          <div
            className={`fifteen-que ${
              selectedPack === "fifteen"
                ? "selected"
                : isBalanceSufficient("fifteen")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("fifteen")}
          >
            <p className="qque">10 Questions</p>
            <p className="naira">2 tokens </p>
          </div>
          <div
            className={`twenty-que ${
              selectedPack === "twenty"
                ? "selected"
                : isBalanceSufficient("twenty")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("twenty")}
          >
            <p className="qque">15 Questions</p>
            <p className="naira">4 tokens </p>
          </div>
          <div
            className={`twenty-five-que ${
              selectedPack === "twenty-five"
                ? "selected"
                : isBalanceSufficient("twenty-five")
                ? ""
                : "insufficient-balance"
            }`}
            onClick={() => handlePackSelect("twenty-five")}
          >
            <p className="qque">20 Questions</p>
            <p className="naira">10 tokens </p>
          </div>
        </div>
      </div>
      {/* {selectedPack && ( */}
      <CustomButton
        buttonText={btnText}
        style={buttonStyle}
        onClick={() => navigate("/question-loading")}
        disabled={loading || !inputValue}
      />
      {/* // )} */}
    </>
  );
};

export default QuestionPack;
